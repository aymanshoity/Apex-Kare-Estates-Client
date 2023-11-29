import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/HomePage/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Appartments from "../Components/Apartment/Appartments";
import Dashboard from "../Components/Dashboard/Dashboard";
import UserDashborad from "../Components/Dashboard/User/UserDashborad";
import PrivateRoute from "./PrivateRoute";
import AgreementRequests from "../Components/Dashboard/AgreementRequests/AgreementRequests";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Announcements from "../Components/Dashboard/Announcements/Announcements";
import MemberProfile from "../Components/Dashboard/Member/memberProfile";
import MakeAnnouncement from "../Components/Dashboard/Announcements/MakeAnnouncement/MakeAnnouncement";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/apartments', element: <Appartments></Appartments> },
      { path: '/register', element: <Register></Register> },
      { path: '/login', element: <Login></Login> }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      { path: '/dashboard/allUsers', element: <AdminRoute><AllUsers></AllUsers></AdminRoute>},
      { path: '/dashboard/agreementRequests', element:<AdminRoute><AgreementRequests></AgreementRequests></AdminRoute>},
      { path: '/dashboard/makeAnnouncements', element:<AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>},
      { path: '/dashboard/announcements', element:<PrivateRoute><Announcements></Announcements></PrivateRoute>},
      { path: '/dashboard/memberProfile', element:<PrivateRoute> <MemberProfile></MemberProfile> </PrivateRoute>},
    ]
  },
]);

export default Routes;