import { createBrowserRouter } from "react-router-dom";
import Ohi from "../pages/Ohi";
import Home from "../pages/Home";
import Iman from "../pages/Iman";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "ohi",
        element: <Ohi />,
      },
      {
        path: "iman",
        element: <Iman />,
      },
    ],
  },
]);

export default routes;
