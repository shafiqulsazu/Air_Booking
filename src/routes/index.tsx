import { RouteObject } from "react-router"
import Home from "../Pages/Home";
import Layout from "../Layout";

const routes:RouteObject[] = [
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                children:[{ path: "", element: <Home/>}],
            },
        ],
    },
];

export default routes;