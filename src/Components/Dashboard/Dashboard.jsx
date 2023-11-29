import { Outlet } from "react-router-dom";
import DashNavber from "./DashNavber";



const Dashboard = () => {
    return (
        <div className="bg-[#9AD0C2]">
            <DashNavber></DashNavber>
            <Outlet></Outlet>
        </div>
    )
};

export default Dashboard;