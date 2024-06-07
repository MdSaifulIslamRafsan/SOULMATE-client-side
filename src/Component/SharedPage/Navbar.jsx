import { useState } from 'react';
import { FiAlignLeft, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user , handleLogout} = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <nav className="fixed z-50 w-full top-0 shadow py-3 bg-gray-800">
      <div className="max-w-[1440px]  lg:w-10/12 w-11/12 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            
              <Link className='flex items-center gap-2' to='/'><img src="https://i.ibb.co/pJGNNrV/Untitled.png" alt="" /> <h1 className='text-white text-lg md:text-xl lg:text-2xl font-bold uppercase'>soulmate</h1></Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {!isOpen ? (
                <FiAlignLeft />
                ) : (
                    <FiX />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-6">
              <NavLink to={'/'} className="px-3 py-2 mx-3  transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200  hover:bg-gray-700">Home</NavLink>
              <NavLink to={'/boiDatas'} className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200  hover:bg-gray-700">Biodatas</NavLink>
              <NavLink to={'/aboutUs'} className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200  hover:bg-gray-700"> About Us</NavLink>
              <NavLink to={'/contactUs'} className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200  hover:bg-gray-700"> Contact Us</NavLink>
              {
                user && <NavLink to={isAdmin  ? '/dashboard/AdminDashboard' : '/dashboard/EditBiodata'} className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200 hover:bg-gray-700">Dashboard</NavLink>
              }
              
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              {!user ?  <AwesomeButton href='/login' type="primary">Login</AwesomeButton> :  <div className='flex gap-3'>
              <AwesomeButton onPress={() => handleLogout()} type="primary">Logout</AwesomeButton>
              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
                </div>

                <h3 className="mx-2 text-gray-200 lg:hidden">{user?.displayName}</h3>
              </button></div>}
           
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
