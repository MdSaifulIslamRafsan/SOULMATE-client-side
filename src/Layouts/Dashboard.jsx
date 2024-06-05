import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Dashboard/Sidebar";


const Dashboard = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* sidebar */}
            <div>
                <Sidebar></Sidebar>
            </div>
            {/* outlet */}
           <div className="flex-1 md:ml-72">
                <div>
                    <Outlet></Outlet>
                </div>
           </div>
        </div>
    );
};

export default Dashboard;