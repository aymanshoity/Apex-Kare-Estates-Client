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
import PrivateRoute from "./PrivateRoute";
import AgreementRequests from "../Components/Dashboard/AgreementRequests/AgreementRequests";

import AdminRoute from "./AdminRoute";
import Announcements from "../Components/Dashboard/Announcements/Announcements";
import MemberProfile from "../Components/Dashboard/Member/memberProfile";
import MakeAnnouncement from "../Components/Dashboard/Announcements/MakeAnnouncement/MakeAnnouncement";
import UserProfile from "../Components/Dashboard/User/UserProfile";
import ManageMembers from "../Components/Dashboard/ManageMembers/ManageMembers";
import ManageCoupon from "../Components/Dashboard/ManageCoupon/ManageCoupon";
import AdminProfile from "../Components/Dashboard/AdminProfile/AdminProfile";
import MakePayment from "../Components/Payment/MakePayment";
import PaymentHistory from "../Components/Payment/PaymentHistory";
import Payment from "../Components/Payment/Payment";

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
      // { path: '/dashboard/allUsers', element: <AdminRoute><AllUsers></AllUsers></AdminRoute>},
      { path: '/dashboard', element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>},
      { path: '/dashboard/agreementRequests', element:<AdminRoute><AgreementRequests></AgreementRequests></AdminRoute>},
      { path: '/dashboard/makeAnnouncements', element:<AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>},
      { path: '/dashboard/manageMembers', element:<AdminRoute><ManageMembers></ManageMembers></AdminRoute>},
      { path: '/dashboard/manageCoupons', element:<AdminRoute><ManageCoupon></ManageCoupon></AdminRoute>},
      { path: '/dashboard/announcements', element:<PrivateRoute><Announcements></Announcements></PrivateRoute>},
      { path: '/dashboard', element:<PrivateRoute><MemberProfile></MemberProfile> </PrivateRoute>},
      { path: '/dashboard/makePayment/:id', element:<PrivateRoute><MakePayment></MakePayment> </PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/apartments/${params.id}`)},
      { path: '/dashboard/payment/:id', element:<PrivateRoute> <Payment></Payment> </PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/apartments/${params.id}`)},
      { path: '/dashboard/paymentHistory', element:<PrivateRoute><PaymentHistory></PaymentHistory> </PrivateRoute>},
      { path: '/dashboard', element:<PrivateRoute> <UserProfile></UserProfile></PrivateRoute>},
    ]
  },
]);

export default Routes;