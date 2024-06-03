import Lottie from "lottie-react";
import registerAnimation from "../assets/Register.json";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import useAuth from "./../Hooks/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { handleRegisterAccount } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit , reset} = useForm();
  const axiosPublic = useAxiosPublic()
  const onSubmit = (data) => {
    const imageFile = { image: data?.photo[0] };

    const { email, password, name} = data;
    if (!/^[a-zA-Z\s\-']+$/.test(name)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid name containing only letters, spaces, hyphens, and apostrophes",
      });
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email format. Please use the format: example@example.com",
      });
    }
  
    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text:  "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
      });
    }
     axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res)=>{
      const photoUrl = res?.data?.data?.display_url;
      if(res.data.success){
        handleRegisterAccount(email, password)
      .then(() => {
        navigate(from, { replace: true });
        updateProfile(auth.currentUser,{
          displayName:name , 
          photoURL: photoUrl
        })
        reset();
        Swal.fire({
          title: "Good job!",
          text: "Congratulations! Your account has been successfully created.",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
      });
      }
    })
    .catch(error=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message,
      });
    })
  
  };
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div className="bg-white relative lg:py-20">
      <div className="flex flex-col items-center min-h-screen justify-between mx-auto max-w-[1440px]  lg:w-10/12 w-11/12 lg:flex-row">
        <div className="flex flex-col items-center w-full lg:flex-row">
          <div className="bg-cover relative w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <Lottie animationData={registerAnimation} loop={true} />
            </div>
          </div>
          <div className="mt-20 mb-10 relative z-10 w-full lg:w-1/2 ">
            <div
              className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl
              relative z-10"
            >
              <p className="text-4xl font-medium text-center leading-snug font-serif">
                Sign up for an account
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mt-6 relative space-y-8"
              >
                <div className="relative">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute"
                  >
                    Username
                  </p>
                  <input
                    {...register("name", { required: true })}
                    placeholder="John"
                    name="name"
                    type="text"
                    className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p
                    className="font-medium text-gray-600"
                  >
                     Upload Photo
                  </p>
                  <input
                    type="file"
                    {...register("photo", { required: true })}
                    className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                  />
                </div>
                
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Email
                  </p>
                  <input
                    placeholder="123@ex.com"
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute"
                  >
                    Password
                  </p>
                  <input
                    {...register("password", { required: true })}
                    placeholder="Password"
                    type={isPassword ? "password" : "text"}
                    className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
                  />
                  <span
                    onClick={() => setIsPassword(!isPassword)}
                    className="absolute text-xl right-5 top-1/2 -translate-y-1/2"
                  >
                    {isPassword ? (
                      <FaEye></FaEye>
                    ) : (
                      <IoEyeOffSharp></IoEyeOffSharp>
                    )}
                  </span>
                </div>
                <div className="relative">
                  <AwesomeButton style={{ width: "100%" }} type="primary">
                    Register
                  </AwesomeButton>
                </div>
              </form>
              <p className="text-center mt-5">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>

            <svg
              viewBox="0 0 91 91"
              className="hidden md:flex md:absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
              fill-current"
            >
              <g stroke="none">
                <g>
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72" />
                      <circle cx="15.296" cy="3.445" r="2.719" />
                      <circle cx="27.333" cy="3.445" r="2.72" />
                      <circle cx="39.369" cy="3.445" r="2.72" />
                      <circle cx="51.405" cy="3.445" r="2.72" />
                      <circle cx="63.441" cy="3.445" r="2.72" />
                      <circle cx="75.479" cy="3.445" r="2.72" />
                      <circle cx="87.514" cy="3.445" r="2.719" />
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72" />
                      <circle cx="15.296" cy="3.525" r="2.719" />
                      <circle cx="27.333" cy="3.525" r="2.72" />
                      <circle cx="39.369" cy="3.525" r="2.72" />
                      <circle cx="51.405" cy="3.525" r="2.72" />
                      <circle cx="63.441" cy="3.525" r="2.72" />
                      <circle cx="75.479" cy="3.525" r="2.72" />
                      <circle cx="87.514" cy="3.525" r="2.719" />
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72" />
                      <circle cx="15.296" cy="3.605" r="2.719" />
                      <circle cx="27.333" cy="3.605" r="2.72" />
                      <circle cx="39.369" cy="3.605" r="2.72" />
                      <circle cx="51.405" cy="3.605" r="2.72" />
                      <circle cx="63.441" cy="3.605" r="2.72" />
                      <circle cx="75.479" cy="3.605" r="2.72" />
                      <circle cx="87.514" cy="3.605" r="2.719" />
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72" />
                      <circle cx="15.296" cy="3.686" r="2.719" />
                      <circle cx="27.333" cy="3.686" r="2.72" />
                      <circle cx="39.369" cy="3.686" r="2.72" />
                      <circle cx="51.405" cy="3.686" r="2.72" />
                      <circle cx="63.441" cy="3.686" r="2.72" />
                      <circle cx="75.479" cy="3.686" r="2.72" />
                      <circle cx="87.514" cy="3.686" r="2.719" />
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72" />
                      <circle cx="15.296" cy="2.767" r="2.719" />
                      <circle cx="27.333" cy="2.767" r="2.72" />
                      <circle cx="39.369" cy="2.767" r="2.72" />
                      <circle cx="51.405" cy="2.767" r="2.72" />
                      <circle cx="63.441" cy="2.767" r="2.72" />
                      <circle cx="75.479" cy="2.767" r="2.72" />
                      <circle cx="87.514" cy="2.767" r="2.719" />
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72" />
                      <circle cx="15.296" cy="2.846" r="2.719" />
                      <circle cx="27.333" cy="2.846" r="2.72" />
                      <circle cx="39.369" cy="2.846" r="2.72" />
                      <circle cx="51.405" cy="2.846" r="2.72" />
                      <circle cx="63.441" cy="2.846" r="2.72" />
                      <circle cx="75.479" cy="2.846" r="2.72" />
                      <circle cx="87.514" cy="2.846" r="2.719" />
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72" />
                      <circle cx="15.296" cy="2.926" r="2.719" />
                      <circle cx="27.333" cy="2.926" r="2.72" />
                      <circle cx="39.369" cy="2.926" r="2.72" />
                      <circle cx="51.405" cy="2.926" r="2.72" />
                      <circle cx="63.441" cy="2.926" r="2.72" />
                      <circle cx="75.479" cy="2.926" r="2.72" />
                      <circle cx="87.514" cy="2.926" r="2.719" />
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72" />
                      <circle cx="15.296" cy="3.006" r="2.719" />
                      <circle cx="27.333" cy="3.006" r="2.72" />
                      <circle cx="39.369" cy="3.006" r="2.72" />
                      <circle cx="51.405" cy="3.006" r="2.72" />
                      <circle cx="63.441" cy="3.006" r="2.72" />
                      <circle cx="75.479" cy="3.006" r="2.72" />
                      <circle cx="87.514" cy="3.006" r="2.719" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              viewBox="0 0 91 91"
              className="hidden md:flex md:absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
              fill-current"
            >
              <g stroke="none">
                <g>
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72" />
                      <circle cx="15.296" cy="3.445" r="2.719" />
                      <circle cx="27.333" cy="3.445" r="2.72" />
                      <circle cx="39.369" cy="3.445" r="2.72" />
                      <circle cx="51.405" cy="3.445" r="2.72" />
                      <circle cx="63.441" cy="3.445" r="2.72" />
                      <circle cx="75.479" cy="3.445" r="2.72" />
                      <circle cx="87.514" cy="3.445" r="2.719" />
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72" />
                      <circle cx="15.296" cy="3.525" r="2.719" />
                      <circle cx="27.333" cy="3.525" r="2.72" />
                      <circle cx="39.369" cy="3.525" r="2.72" />
                      <circle cx="51.405" cy="3.525" r="2.72" />
                      <circle cx="63.441" cy="3.525" r="2.72" />
                      <circle cx="75.479" cy="3.525" r="2.72" />
                      <circle cx="87.514" cy="3.525" r="2.719" />
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72" />
                      <circle cx="15.296" cy="3.605" r="2.719" />
                      <circle cx="27.333" cy="3.605" r="2.72" />
                      <circle cx="39.369" cy="3.605" r="2.72" />
                      <circle cx="51.405" cy="3.605" r="2.72" />
                      <circle cx="63.441" cy="3.605" r="2.72" />
                      <circle cx="75.479" cy="3.605" r="2.72" />
                      <circle cx="87.514" cy="3.605" r="2.719" />
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72" />
                      <circle cx="15.296" cy="3.686" r="2.719" />
                      <circle cx="27.333" cy="3.686" r="2.72" />
                      <circle cx="39.369" cy="3.686" r="2.72" />
                      <circle cx="51.405" cy="3.686" r="2.72" />
                      <circle cx="63.441" cy="3.686" r="2.72" />
                      <circle cx="75.479" cy="3.686" r="2.72" />
                      <circle cx="87.514" cy="3.686" r="2.719" />
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72" />
                      <circle cx="15.296" cy="2.767" r="2.719" />
                      <circle cx="27.333" cy="2.767" r="2.72" />
                      <circle cx="39.369" cy="2.767" r="2.72" />
                      <circle cx="51.405" cy="2.767" r="2.72" />
                      <circle cx="63.441" cy="2.767" r="2.72" />
                      <circle cx="75.479" cy="2.767" r="2.72" />
                      <circle cx="87.514" cy="2.767" r="2.719" />
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72" />
                      <circle cx="15.296" cy="2.846" r="2.719" />
                      <circle cx="27.333" cy="2.846" r="2.72" />
                      <circle cx="39.369" cy="2.846" r="2.72" />
                      <circle cx="51.405" cy="2.846" r="2.72" />
                      <circle cx="63.441" cy="2.846" r="2.72" />
                      <circle cx="75.479" cy="2.846" r="2.72" />
                      <circle cx="87.514" cy="2.846" r="2.719" />
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72" />
                      <circle cx="15.296" cy="2.926" r="2.719" />
                      <circle cx="27.333" cy="2.926" r="2.72" />
                      <circle cx="39.369" cy="2.926" r="2.72" />
                      <circle cx="51.405" cy="2.926" r="2.72" />
                      <circle cx="63.441" cy="2.926" r="2.72" />
                      <circle cx="75.479" cy="2.926" r="2.72" />
                      <circle cx="87.514" cy="2.926" r="2.719" />
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72" />
                      <circle cx="15.296" cy="3.006" r="2.719" />
                      <circle cx="27.333" cy="3.006" r="2.72" />
                      <circle cx="39.369" cy="3.006" r="2.72" />
                      <circle cx="51.405" cy="3.006" r="2.72" />
                      <circle cx="63.441" cy="3.006" r="2.72" />
                      <circle cx="75.479" cy="3.006" r="2.72" />
                      <circle cx="87.514" cy="3.006" r="2.719" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
