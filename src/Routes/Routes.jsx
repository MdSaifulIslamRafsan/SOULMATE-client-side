import BoiDatas from '../Pages/BoiDatas.jsx';
import ErrorPage from '../Pages/ErrorPage.jsx';
import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import Root from './../Layouts/Root';
import {
  createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute.jsx';
import Dashboard from '../Layouts/Dashboard.jsx';
import EditBoidata from '../Pages/Dashboard/Users/EditBoidata.jsx';
import AdminDashboard from '../Pages/Dashboard/Admin/AdminDashboard.jsx';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers.jsx';
import DetailsPage from '../Pages/DetailsPage.jsx';
import AdminRoute from './AdminRoute.jsx';
import FavouritesBiodata from '../Pages/Dashboard/Users/FavouritesBiodata.jsx';
import Checkout from '../Pages/payment/Checkout.jsx';
import MyContactRequest from '../Pages/Dashboard/Users/MyContactRequest.jsx';
import ApprovedContactRequest from '../Pages/Dashboard/Admin/ApprovedContactRequest.jsx';
import ContactUs from '../Pages/ContactUs.jsx';
import ViewBoidata from '../Pages/Dashboard/Users/ViewBoidata.jsx';
import ApprovedPremium from '../Pages/Dashboard/Admin/ApprovedPremium.jsx';
import AboutUs from '../Pages/AboutUs.jsx';
import GotMarried from '../Pages/Dashboard/Users/GotMarried.jsx';
import SuccessStory from '../Pages/Dashboard/Admin/SuccessStory.jsx';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/boiDatas",
          element: <BoiDatas></BoiDatas>
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/detailsPage/:id",
          element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
        },
        {
          path: "/checkout/:biodataId",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'EditBiodata',
          element: <EditBoidata></EditBoidata>,
        },
        {
          path: 'ViewBiodata',
          element: <ViewBoidata></ViewBoidata>,
        },
        {
          path: 'MyContactRequest',
          element: <MyContactRequest></MyContactRequest>,
        },
        {
          path: 'FavouritesBiodata',
          element: <FavouritesBiodata></FavouritesBiodata>,
        },
        {
          path: 'gotMarried',
          element: <GotMarried></GotMarried>,
        },
        // admin route
        {
          path: 'AdminDashboard',
          element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>,
        },
        {
          path: 'manage',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
        },
        {
          path: 'approvedPremium',
          element: <AdminRoute><ApprovedPremium></ApprovedPremium></AdminRoute>,
        },
        {
          path: 'approvedContactRequest',
          element: <AdminRoute><ApprovedContactRequest></ApprovedContactRequest></AdminRoute>,
        },
        {
          path: 'SuccessStory',
          element: <AdminRoute><SuccessStory></SuccessStory></AdminRoute>,
        },
      ]
    }
  ]);
export default router;