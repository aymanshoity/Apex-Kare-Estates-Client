import { Outlet } from "react-router-dom";
import DashNavber from "./DashNavber";



const Dashboard = () => {
    return (
        <div>
            <DashNavber></DashNavber>
            <Outlet></Outlet>
        </div>
    )
};

export default Dashboard;