import { Outlet } from "react-router-dom";
import Navbar from "../Component/SharedPage/Navbar";


function Root() {

  return (
    <>
    <Navbar></Navbar>
     <Outlet></Outlet>
    </>
  )
}

export default Root;
