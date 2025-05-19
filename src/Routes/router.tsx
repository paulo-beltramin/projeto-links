import { createBrowserRouter } from "react-router";

import { Home } from "../pages/Home";
import Admin from "../pages/Admin";
import { Login } from "../pages/Login";
import Networks from "../pages/Redes-Sociais";
import { Private } from "../Components/Private/Private";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/admin',
        element: <Private><Admin /></Private>
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: '/redes',
        element: <Networks />
    }
])