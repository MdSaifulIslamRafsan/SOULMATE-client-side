import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-[1440px] pt-8 lg:w-10/12 w-11/12 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="">
            <div className="py-5 flex items-start gap-2">
              <img src="https://i.ibb.co/pJGNNrV/Untitled.png" alt="" />{" "}
              <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold uppercase">
                soulmate
              </h1>
            </div>
            <p>
              Helping you find a trusted and meaningful life partner. A secure
              and modern matchmaking platform for everyone.
            </p>
          </div>
          <div className="py-5">
            <div className=" uppercase  font-bold">Useful Links</div>
            <Link to={"/"} className="my-3 block">
              Success Story
            </Link>
            <Link to={"/"} className="my-3 block">
              Blog
            </Link>
            <Link to={"/"} className="my-3 block">
              Testimonial
            </Link>
          </div>
          <div className="py-5">
            <div className=" uppercase  font-bold">Support</div>
            <Link className="my-3 block" to="/">
              Help Center <span className="text-teal-600 text-xs p-1" />
            </Link>
            <Link className="my-3 block" to="/">
              Privacy Policy <span className="text-teal-600 text-xs p-1" />
            </Link>
            <Link className="my-3 block" to="/">
              Conditions <span className="text-teal-600 text-xs p-1" />
            </Link>
          </div>
          <div className="py-5">
            <div className="uppercase  font-bold">Contact us</div>

            <p className="my-3  flex gap-2 items-center">
              <FaLocationDot />
              <span> 1234 Example Street, Floor 4 San Francisco, CA</span>
            </p>
            <p className="my-3  flex gap-2 items-center">
              <FaPhoneAlt /> <span>+1 (328) 187-3277</span>
            </p>
            <Link to={"/"} className="my-3  flex gap-2 items-center">
              <MdEmail /> <span>soulmate01@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-white  flex-col
max-w-[1440px] lg:w-10/12 w-11/12 items-center"
        >
          <div className="md:flex-auto  mt-2 flex-row flex">
            <Link to={"/"} className="mx-2">
              <FaFacebook className="text-2xl hover:text-blue-500"></FaFacebook>
            </Link>
            <Link to={"/"} className="w-6 mx-2">
              <FaYoutube className="text-2xl hover:text-red-500"></FaYoutube>
            </Link>
            <Link to={"/"} className="w-6 mx-2">
              <FaLinkedin className="text-2xl hover:text-blue-800"></FaLinkedin>
            </Link>
            <Link to={"/"} className="w-6 mx-2">
              <FaTwitter className="text-2xl hover:text-blue-500"></FaTwitter>
            </Link>
            <Link to={"/"} className="w-6 mx-2">
              <FaInstagram className="text-2xl hover:text-[#cd486b]"></FaInstagram>
            </Link>
          </div>
          <div className="my-5">
            © Copyright {new Date().getFullYear()} by soulmate. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
