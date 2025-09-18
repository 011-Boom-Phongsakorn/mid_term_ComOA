import { createBrowserRouter } from "react-router";
import Menu from "../pages/Menu";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default router;
