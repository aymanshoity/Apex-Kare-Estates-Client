import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/HomePage/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Appartments from "../Components/Apartment/Appartments";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {path:'/',element:<Home></Home>},
        {path:'/apartments',element:<Appartments></Appartments>},
        {path:'/register',element:<Register></Register>},
        {path:'/login',element:<Login></Login>}
      ]
    },
  ]);

export default Routes;