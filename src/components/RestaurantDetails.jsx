import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantDetails = (id) =>{
    const data = useRestaurantMenu(id);
    console.log("Data from res Details:", data)
    return(
        <>
            <div>
                <p className="font-black text-3xl">Restaurant1</p>
            </div>
        </>
    )
}

export default RestaurantDetails