import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";

const Menu = () => {
    const params = useParams();
    console.log("params", params);

    const url = useRestaurantMenu(params?.id)
    console.log("URL for menu data:", url)

    // CONTINIUE FROM 23:00 Lecture 17 - Starting with Menu Component

    return(
        <>
            This is menu component
        </>
    );
}

export default Menu;