import { createBrowserRouter } from "react-router";
import App from '../App'
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Cart from "../components/Cart";
import Body from "../components/Body";
import ErrorPage from "../components/ErrorPage";
import Menu from "../components/Menu";

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "",
                Component: Body
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "contact",
                Component: ContactUs
            },
            {
                path: "cart",
                Component: Cart
            },
            {
                path: '/menu/:name/:id',
                Component: Menu
            }
        ],
        errorElement: <ErrorPage />
    }
    
]);

export default appRouter;