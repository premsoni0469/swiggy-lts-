
import { generateMenuURL } from "../constants/config"

const useRestaurantMenu = (id) => {
    const MENU_URL = generateMenuURL(id);
    // console.log("MENU_URL:",MENU_URL);
    return MENU_URL;
}

export default useRestaurantMenu