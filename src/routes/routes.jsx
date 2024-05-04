import { createBrowserRouter } from "react-router-dom";
import Ohi from "../pages/Ohi";
import Home from "../pages/Home";
import Iman from "../pages/Iman";
import Ilm from "../pages/Ilm";
import Oju from "../pages/Oju";
import Gosol from "../pages/Gosol";
import Hayej from "../pages/Hayej";

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
      {
        path: "ilm",
        element: <Ilm />,
      },
      {
        path: "oju",
        element: <Oju />,
      },
      {
        path: "gosol",
        element: <Gosol />,
      },
      {
        path: "hayej",
        element: <Hayej />,
      },
    ],
  },
]);

export default routes;
