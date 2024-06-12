import Lottie from "lottie-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import login from "../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaGoogle } from "react-icons/fa";
import useAuth from "./../Hooks/useAuth";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { handleLoginAccount } = useAuth();
  const { handleGoogleLogin } = useAuth();
  const [isPassword, setIsPassword] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const { email, password } = data;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email format. Please use the format: example@example.com",
      });
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
      });
    }
    handleLoginAccount(email, password)
      .then(() => {
        reset();

        Swal.fire({
          title: "Good job!",
          text: "You've successfully logged in. Let's get started!",
          icon: "success",
        });
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
      });
  };
  return (
    <>
     <Helmet>
      <meta charSet="utf-8" />
      <title>SOULMATE || Login page</title>
    </Helmet>
    <div className="bg-white relative lg:py-20">
      <div className="flex flex-col items-center min-h-screen justify-between mx-auto max-w-[1440px]  lg:w-10/12 w-11/12 lg:flex-row">
        <div className="flex flex-col items-center w-full lg:flex-row">
          <div className="bg-cover relative w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <Lottie animationData={login} loop={true} />
            </div>
          </div>
          <div className="mt-20 mb-10 relative z-10 w-full lg:w-1/2 ">
            <div
              className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl
      relative z-10"
            >
              <p className="text-4xl font-medium text-center leading-snug font-serif">
                Login account
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mt-6 relative space-y-8"
              >
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Email
                  </p>
                  <input
                    {...register("email", { required: true })}
                    placeholder="123@ex.com"
                    type="email"
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
                    Login
                  </AwesomeButton>
                </div>
              </form>
              <p className="text-center mt-5">
                Don&rsquo;t have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-blue-500 hover:underline"
                >
                  Register
                </Link>
              </p>
              <div className="w-full  mt-4">
                <AwesomeButton
                  onPress={() => handleGoogleLogin(navigate , from)}
                  style={{ width: "100%" }}
                  type="primary"
                >
                  <FaGoogle style={{ marginRight: "8px" }}></FaGoogle>Sign Up
                  With Google
                </AwesomeButton>
              </div>
            </div>
            <svg
              viewBox="0 0 91 91"
              className=" hidden md:flex md:absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
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
              className="hidden md:flex  md:absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
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
    </>
  );
};

export default Login;
