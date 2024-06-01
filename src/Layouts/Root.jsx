import { Outlet } from "react-router-dom";
import Navbar from "../Component/SharedPage/Navbar";
import Footer from "../Component/SharedPage/Footer";


function Root() {

  return (
    <>
   <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="overflow-hidden h-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Root;
