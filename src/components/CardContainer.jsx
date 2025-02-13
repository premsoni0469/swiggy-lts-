import { useState } from 'react'
import { restaurantData } from '../constants/restaurant';
import RestaurantCard from "./RestaurantCard";

function CardContainer(){

    const [restaurantList, setRestaurantList] = useState(restaurantData);

    // let restaurantData = [
    //     {
    //         name:"Chinese Wok",
    //         rating:"4.2",
    //         deliveryTime:"25-30 mins",
    //         cuisines:"Chinese, Thai, Mexican",
    //         location:"Bandra Kurla Complex"
    //     }, 
        
    //     {
    //         name:"Pizza Hut",
    //         rating:"4.3",
    //         deliveryTime:"25-28 mins",
    //         cuisines:"Pizza, Fast Food",
    //         location:"Santacruz"
    //     }, 

    //     {
    //         name:"Naturals",
    //         rating:"4.6",
    //         deliveryTime:"15-20 mins",
    //         cuisines:"Dessert, Ice Cream",
    //         location:"Ghatkopar"
    //     }, 

    //     {
    //         name:"McDonalds",
    //         rating:"4.0",
    //         deliveryTime:"30-35 mins",
    //         cuisines:"Burger, Pizza, French",
    //         location:"Chembur"
    //     },
    //     {
    //         name:"Dominos Pizza",
    //         rating:"4.6",
    //         deliveryTime:"10-15 mins",
    //         cuisines:"Pizza, Pasta, Fast Food",
    //         location:"Mulund"
    //     },
    //     {
    //         name:"Achija",
    //         rating:"4.7",
    //         deliveryTime:"8-12 mins",
    //         cuisines:"Pizza, Pasta, Fast Food, Main Course, Indian",
    //         location:"Mulund"
    //     },
    //     {
    //         name:"Achija",
    //         rating:"4.7",
    //         deliveryTime:"8-12 mins",
    //         cuisines:"Pizza, Pasta, Fast Food, Main Course, Indian",
    //         location:"Mulund"
    //     },
    //     {
    //         name:"Achija",
    //         rating:"4.7",
    //         deliveryTime:"8-12 mins",
    //         cuisines:"Pizza, Pasta, Fast Food, Main Course, Indian",
    //         location:"Mulund"
    //     }
        
    // ] // It is an array of objects of restaurants

    // Shifted the data into folder named constants. This same approach we will use to store the base URL of an API. This method is useful in scanarios where we have called the API URL multiple times, and if there is cenrtain change in it, we will only need to change the base URL in constants folder, and it will get updated everywhere else it is called.


    let filterRatings = () => {
        const filteredData = restaurantList.filter((restaurant) => { // In this line, restaurant is an object which will iterate through the whole array of restaurants
            return restaurant.rating >= 4.5;
        })
        setRestaurantList(filteredData)
        console.log(filteredData);
        
    }


    return(
        <>
            <div className="flex justify-around py-5">
                <span className="font-semibold text-xl">Filters:</span>
                <div className="flex gap-4">
                    <button className="bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors" onClick={filterRatings}>Top rated</button>
                    <button className="bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors">Nearby</button>
                    <button className="bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors">Budget Friendly</button>


                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:px-2 lg:px-56 px-36 py-3">
               {
                restaurantList.map((restaurant) => {       // restaurant is an object here
                    return <RestaurantCard 
                    {...restaurant} // using spread operator

                    
                    // name={restaurant.name}  // Remember, the property name should be the same as the one present in the RestaurantCard Component
                    // rating={restaurant.rating}
                    // deliveryTime={restaurant.deliveryTime}
                    // cuisines={restaurant.cuisines}
                    // location={restaurant.location} // The same things can be written as location = {restaurant["location"]}. This thing will be more helpful in cases where the key in our data is not a proper string, i.e. it starts from a specil character, like @psp. We can't write restaurant.@psp, it will give an error, instead we can write as restaurant["@psp"].    

                    // You can also change the order of these 5 properties, but it won't affect the data, means where is should be displayed, it will, but the only differemce will be the order in which we write in the code.

                    />
                })
               }
               
               
               
               
                {/* <RestaurantCard 
                name="Chinese Wok" 
                rating="4.2" 
                deliveryTime="25-30 mins" 
                cuisines="Chinese, Thai, Mexican" 
                location="Bandra Kurla Complex"/>

                <RestaurantCard 
                name="Pizza Hut" 
                rating="4.3" 
                deliveryTime="25-28 mins" 
                cuisines="Pizza, Fast Food" 
                location="Santacruz"/>

                <RestaurantCard 
                name="Naturals" 
                rating="4.6" 
                deliveryTime="15-20 mins" 
                cuisines="Dessert, Ice Cream" 
                location="Ghatkopar"/>

                <RestaurantCard />
                <RestaurantCard /> */}
                
            </div>
        </>
    );
}

export default CardContainer;