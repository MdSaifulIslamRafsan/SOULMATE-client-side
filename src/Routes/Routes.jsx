
import Home from '../Pages/Home.jsx';
import Root from './../Layouts/Root';
import {
  createBrowserRouter,
} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      
      children:[
        {
          path: "/",
          element: <Home></Home>,
        }
      ]
    },
  ]);
export default router;