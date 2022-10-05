import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../Pages/404/ErrorPage";
import Turno from "../Pages/view/turn/Turno";
import Admin from "../Pages/private/admin/Admin";
import Login from "../Pages/private/log/login";
const Root = createBrowserRouter([
    {
        path: "",
        element: <Turno />,
        errorElement: <ErrorPage />,
    },
    {

        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },

]);

export default Root;