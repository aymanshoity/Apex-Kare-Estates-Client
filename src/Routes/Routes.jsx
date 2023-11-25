import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/HomePage/Home";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {path:'/',element:<Home></Home>}
      ]
    },
  ]);

export default Routes;