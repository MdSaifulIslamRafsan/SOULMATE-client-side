import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-[1440px] lg:w-10/12 w-11/12 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="py-5 flex items-start gap-2">
          <img src="https://i.ibb.co/pJGNNrV/Untitled.png" alt="" /> <h1 className='text-white text-lg md:text-xl lg:text-2xl font-bold uppercase'>soulmate</h1>
          </div>
          <div className="py-5">
            <div className="text-sm uppercase  font-bold">
            Useful Links
            </div>
            <Link to={'/'} className="my-3 block">
            Success Story
            </Link>
            <Link to={'/'} className="my-3 block">
            Blog
            </Link>
            <Link to={'/'} className="my-3 block">
            Testimonial
            </Link>
          </div>
          <div className="py-5">
            <div className="text-sm uppercase  font-bold">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1" />
            </a>
          </div>
          <div className="py-5">
            <div className="text-sm uppercase  font-bold">
              Contact us
            </div>
            <p>Soulmate Matrimony</p>
            <p className="my-3 block">
             1234 Example Street, Floor 4
             San Francisco, CA
            </p>
            <Link to={'/'} className="my-3 block">
                Email: soulmate01@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-white text-sm flex-col
max-w-screen-lg items-center"
        >
          <div className="md:flex-auto  mt-2 flex-row flex">
            <Link to={'/'} className="mx-2">
              <FaFacebook className='text-2xl hover:text-blue-500'></FaFacebook>
            </Link>
            <Link to={'/'} className="w-6 mx-2">
             <FaYoutube className='text-2xl hover:text-red-500'></FaYoutube>
            </Link>
            <Link to={'/'} className="w-6 mx-2">
             <FaLinkedin className='text-2xl hover:text-blue-800'></FaLinkedin>
            </Link>
            <Link to={'/'} className="w-6 mx-2">
             <FaTwitter className='text-2xl hover:text-blue-500'></FaTwitter>
            </Link>
            <Link to={'/'} className="w-6 mx-2">
             <FaInstagram className='text-2xl hover:text-[#cd486b]'></FaInstagram>
            </Link>
           
          </div>
          <div className="my-5">© Copyright {new Date().getFullYear()} by soulmate. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
