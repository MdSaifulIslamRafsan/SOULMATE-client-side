import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = (navigate , from) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(() => {
            navigate(from, { replace: true });
            Swal.fire({
                title: "Good job!",
                text: "You have successfully logged into Google",
                icon: "success"
              });
        })
        .catch((error)=>{
            Swal.fire({
                title: "Oops...",
                text: error.message,
                icon: "error"
              });
        })
    };
    const handleRegisterAccount = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const handleLoginAccount = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[]);

const handleLogout = () =>{
    signOut(auth)
    .then(()=>{
        Swal.fire({
            title: "Good job!",
            text: "You've been successfully logged out",
            icon: "success",
          });
    })
    .catch((error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
    })
}
    const userInfo = {user , loading , handleGoogleLogin , handleLogout , handleRegisterAccount , handleLoginAccount};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;