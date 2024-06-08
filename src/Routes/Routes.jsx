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
          element: <EditBoidata></EditBoidata>,
        },
        {
          path: 'MyContactRequest',
          element: <EditBoidata></EditBoidata>,
        },
        {
          path: 'FavouritesBiodata',
          element: <FavouritesBiodata></FavouritesBiodata>,
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
          element: <AdminRoute><EditBoidata></EditBoidata></AdminRoute>,
        },
        {
          path: 'approvedContactRequest',
          element: <AdminRoute><EditBoidata></EditBoidata></AdminRoute>,
        },
      ]
    }
  ]);
export default router;