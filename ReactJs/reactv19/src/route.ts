import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import { Updates } from "./Pages/Updates";

const routers = createBrowserRouter([
    {
        path: "/", Component: HomePage, children: [
            {
                path: "/updates/*", Component: Updates
            }
        ]
    }
])

export default routers