import { useEffect, useState } from "react";
import { generateMenuURL } from "../constants/config"

const useRestaurantMenu = (id) => {
    const [menu, setMenu] = useState([])
    const MENU_URL = generateMenuURL(id);
    // Getting error, ie no proper URL generated from here, and to watch lecture 18
    console.log("MENU_URL:",MENU_URL);
    const getMenuDatafromAPI = async () => {
        try{
            const response = await fetch(MENU_URL);
            const data = await response.json()
            // console.log("Response", response);
            // console.log("Data (JSON)", data);
            setMenu(data)
        }
        catch(error){
            console.log("Error:", error)
        }
        // console.log("Menu Data: ", data)
    }

    useEffect(()=>{getMenuDatafromAPI()}, [])
    // console.log("Menu:", menu)
    return menu;
}

export default useRestaurantMenu



/*
Menu 
    RestaurantDetail
    RestaurantMenu
        Normal Menu
        Nested Menu
*/