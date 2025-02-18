import { useEffect, useState } from 'react'
import { API_URL } from '../constants/config';
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from './ShimmerRestaurantCard';

function CardContainer(){

    const [restaurantList, setRestaurantList] = useState([]);
    // Here, restaurantList is a state-variable, and it is initially assigned the value, i.e. restaurantData (Array of objects) by passing it in useState(). It actually holds data of array of restaurants, which is later on used in rendering the restaurants.
    
    // setRestaurantList is a method, that is used to update the state-variable. State-variable can be only updated by this method only.
    
    // So, for using useState hook, we require:
    // 1. state-variable
    // 2. a method for updating the state-variable &
    // 3. initial value of the state-variable [passed in by using method useState()]
    


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


    useEffect(()=>{
        const getRestaurantDatafromAPI = async () =>{
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                
                // console.log("JSON: ", data);
                // console.log(data?.data?.cards[1]?.card?.card?.header?.title,":",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                // console.log(data?.data?.cards[0]?.card?.card?.header?.title,":",data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
                // console.log("")
                const restaurantData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                // console.log(restaurantData);
                
                setRestaurantList(restaurantData);
            }
            catch(error){
                console.log(error);
            }
        }
        getRestaurantDatafromAPI(); 
    }, [])


    let filterRatings = () => {
        const filteredData = restaurantList.filter((restaurant) => { // In this line, restaurant is an object which will iterate through the whole array of restaurants
            return restaurant?.info?.avgRating >= 4.5;
        })
        setRestaurantList(filteredData);
        console.log("Filtered Data:", filteredData);
        // console.log("Restaurant List:", restaurantList);
        
    }

    

    // getRestaurantDatafromAPI();


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
                
            <div className="flex flex-wrap justify-center gap-4 md:px-2 py-3">
                {
                    // This whole fragment of code, ie conditional rendering is enclosed inside {} since it is a piece of JavaScript, and we know that in JSX, if we need to write JS, we enclose it inside {}
                    // Now we will be doing conditional rendering, means we will display Shimmer UI until our data is being fetched, so as to avoid user seeing only blank white screen, which ruins UX.
                    (restaurantList.length === 0) ? (<ShimmerRestaurantCard />) : 
                                                   (restaurantList.map((restaurant) => {
                                                        return <RestaurantCard {...restaurant.info}/>
                                                   })) 
                }
               {/* {
                restaurantList.map((restaurant) => {       // restaurant is an object here
                    return <RestaurantCard 
                    {...restaurant.info} // using spread operator

                    
                    // name={restaurant.name}  // Remember, the property name should be the same as the one present in the RestaurantCard Component
                    // rating={restaurant.rating}
                    // deliveryTime={restaurant.deliveryTime}
                    // cuisines={restaurant.cuisines}
                    // location={restaurant.location} // The same things can be written as location = {restaurant["location"]}. This thing will be more helpful in cases where the key in our data is not a proper string, i.e. it starts from a specil character, like @psp. We can't write restaurant.@psp, it will give an error, instead we can write as restaurant["@psp"].    

                    // You can also change the order of these 5 properties, but it won't affect the data, means where is should be displayed, it will, but the only differemce will be the order in which we write in the code.

                    />
                })
               } */}
               
               {/* <ShimmerRestaurantCard /> */}
               
               
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