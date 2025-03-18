import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantDetails from "./RestaurantDetails";

const Menu = () => {
    const params = useParams();
    console.log("params", params);

    const data = useRestaurantMenu(params?.id)
    console.log("Data received from menu URL:", data)

    return(
        <>
            <RestaurantDetails />
        </>
    );
}

export default Menu;