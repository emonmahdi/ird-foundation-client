import { createBrowserRouter } from "react-router-dom";
import Ohi from "../pages/Ohi";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/ohi",
        element: <Ohi />,
      },
    ],
  },
]);

export default routes;
