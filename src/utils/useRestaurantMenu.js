import { useEffect, useState } from "react";
import { generateMenuURL } from "../constants/config"

const useRestaurantMenu = (id) => {
    const [menu, setMenu] = useState([])

    const [resInfo, setResInfo] = useState([])

    const [filteredNormalData, setFilteredNormalData] = useState([])
    const [filteredNestedData, setFilteredNestedData] = useState([])
    const MENU_URL = generateMenuURL(id);
    // console.log("MENU_URL:",MENU_URL);
    const getMenuDatafromAPI = async () => {
        try{
            const response = await fetch(MENU_URL);
            const data = await response.json()
            // console.log("Response", response);
            console.log("Data (JSON)", data);
            console.log("Restaurant Title: ", data?.data?.cards[0]?.card?.card?.text)
            console.log("Restaurant Info: ", data?.data?.cards[2]?.card?.card?.info)

            setResInfo(data?.data?.cards[2]?.card?.card?.info)

            const resData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


            setFilteredNormalData(resData.filter((item) => item?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ))

            setFilteredNestedData(resData.filter((item) => item?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory' ))

            console.log("Filtered Normal Data:", filteredNormalData)
            console.log("Filtered Nested Data:", filteredNestedData)
            console.log("Raw Data: ", resData)

            setMenu(data?.data?.cards)
        }
        catch(error){
            console.log("Error:", error)
        }
        // console.log("Menu Data: ", data)
    }

    useEffect(()=>{getMenuDatafromAPI()}, [])
    // console.log("Menu:", menu)

    const menuObject = {
        title: resInfo,
        normalMenu: filteredNormalData,
        nestedMenu: filteredNestedData,
    }
    return menuObject;
}

export default useRestaurantMenu



/*
Menu 
    RestaurantDetail
    RestaurantMenu
        Normal Menu
        Nested Menu
*/