import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { FcApproval, FcAssistant, FcBusinessContact, FcCollaboration, FcPieChart, FcPlus } from "react-icons/fc";
import { LuView } from "react-icons/lu";
import { GiLaurelsTrophy, GiLovers } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  // Todo :
  const [isAdmin] = useAdmin();
  const { handleLogout } = useAuth();
  const [isActive, setActive] = useState(false);


 
  

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="flex items-center">
          <Link className="flex px-2 items-center gap-2" to="/">
            <img src="https://i.ibb.co/pJGNNrV/Untitled.png" alt="" />{" "}
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold uppercase">
              soulmate
            </h1>
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg items-center ">
              <Link className="flex items-center gap-2" to="/">
                <img src="https://i.ibb.co/pJGNNrV/Untitled.png" alt="" />{" "}
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold uppercase">
                  soulmate
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 ">
            <nav>
              {
                isAdmin? <>
                   <NavLink
                to="/dashboard/AdminDashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcPieChart className="w-5 h-5" />

                <span className="mx-4 font-medium">Admin Dashboard</span>
              </NavLink>

              <NavLink
                to="/dashboard/manage"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaUsers className="w-5 h-5" />

                <span className="mx-4 font-medium">Manage Users</span>
              </NavLink>
              <NavLink
                to="/dashboard/approvedPremium"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcApproval className="w-5 h-5"/>

                <span className="mx-4 font-medium"> Approved Premium</span>
              </NavLink>
              <NavLink
                to="/dashboard/approvedContactRequest"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcBusinessContact className="w-5 h-5" />

                <span className="mx-4 font-medium">Approved Contact Request</span>
              </NavLink>
              <NavLink
                to="/dashboard/SuccessStory"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GiLaurelsTrophy className="w-5 h-5" />

                <span className="mx-4 font-medium">Success Story</span>
              </NavLink>
                
                </> : <>
                <NavLink
                to="/dashboard/EditBiodata"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcPlus className="w-5 h-5"  />

                <span className="mx-4 font-medium">Edit Biodata</span>
              </NavLink>

              <NavLink
                to="/dashboard/ViewBiodata"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <LuView className="w-5 h-5" />

                <span className="mx-4 font-medium">View Biodata</span>
              </NavLink>
              <NavLink
                to="/dashboard/MyContactRequest"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcAssistant className="w-5 h-5"  />

                <span className="mx-4 font-medium">My Contact Request</span>
              </NavLink>
              <NavLink
                to="/dashboard/FavouritesBiodata"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GiLovers className="w-5 h-5" />

                <span className="mx-4 font-medium">Favourites Biodata</span>
              </NavLink>
              <NavLink
                to="/dashboard/gotMarried"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcCollaboration className="w-5 h-5"  />

                <span className="mx-4 font-medium">Got Married</span>
              </NavLink>
                </>
              }
           
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
