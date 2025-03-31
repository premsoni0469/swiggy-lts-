import { useEffect, useState, useTransition } from "react";
import RestaurantCard from "./RestaurantCard";
import FoodItemsCarousel from "./FoodItemsCarousel";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { MdError } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

function CardContainer() {

  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(null); // State to manage active button

  let {restaurantList, restaurantListForSearch, errorMessage, setRestaurantList} = useRestaurant();

  // Shifted the data into folder named constants. This same approach we will use to store the base URL of an API. This method is useful in scanarios where we have called the API URL multiple times, and if there is cenrtain change in it, we will only need to change the base URL in constants folder, and it will get updated everywhere else it is called.

  let filterRatings = () => {
    const filteredData = restaurantList.filter((restaurant) => {
      // In this line, restaurant is an object which will iterate through the whole array of restaurants
      return restaurant?.info?.avgRating >= 4.5;
    });
    setRestaurantList(filteredData);
    console.log("Filtered Data:", filteredData);
    // console.log("Restaurant List:", restaurantList);
  };

  let filterNearby = () => {
    const filteredNearby = restaurantList.filter((restaurant) => {
      return ["Ghatkopar", "Chembur", "Vidyavihar"].includes(restaurant?.info?.areaName);
    });
    setRestaurantList(filteredNearby);
    console.log("Filtered Nearby: ", filteredNearby)
  }

  let filterPureVeg = () => {
    const filteredPureVeg = restaurantList.filter((restaurant) => {
      return restaurant?.info?.veg == true;
    })
    setRestaurantList(filteredPureVeg);
    console.log("Filtered Pure Veg: ", filteredPureVeg)
  }

  if (errorMessage) {
    // means if there is an errorMessage, then only this block will run.
    return (
      <div className="flex items-center justify-center h-96 m-6 rounded-xl text-2xl font-semibold text-red-200 bg-[#dc143c]">
        <MdError className="text-4xl" /> {errorMessage}
      </div>
    );
  }

  return (
    <>
     <div>
        <FoodItemsCarousel />
      </div>

      <SearchBar resListForSearch={restaurantListForSearch} setResList={setRestaurantList} text={searchText} updateText={setSearchText}/>

      <div className="flex justify-around py-5 px-14">
        <span className="font-semibold text-xl">Filters:</span>
        <div className="flex gap-4">
          <button
            className={`bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors ${activeButton === 'topRated' ? 'bg-gray-300 text-gray-700' : ''}`}
            onClick={() => {
              if (activeButton === 'topRated') {
                setActiveButton(null); // Deselect if already active
                setRestaurantList(restaurantListForSearch);
              } else {
                setActiveButton('topRated'); // Select if not active
                filterRatings();
              }
            }}
          >
            Top rated
          </button>
          <button
            className={`bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors ${activeButton === 'nearby' ? 'bg-gray-300 text-gray-700' : ''}`}
            onClick={() => {
              if (activeButton === 'nearby') {
                setActiveButton(null); // Deselect if already active
                setRestaurantList(restaurantListForSearch);
              } else {
                setActiveButton('nearby'); // Select if not active
                filterNearby();
              }
            }}
          >
            Nearby
          </button>
          <button
            className={`bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors ${activeButton === 'pure_veg' ? 'bg-gray-300 text-gray-700' : ''}`}
            onClick={() => {
              if (activeButton === 'pure_veg') {
                setActiveButton(null); // Deselect if already active
                setRestaurantList(restaurantListForSearch);
              } else {
                setActiveButton('pure_veg'); // Select if not active
                filterPureVeg();
              }
            }}
          >
            Pure Veg
          </button>
        </div>
      </div>
    
      <div className="font-bold text-xl mx-16 lg:mx-36 md:mx-24 pb-2 mt-3">
        <p>Top restaurant chains:</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:px-2 py-3">
        {
          // This whole fragment of code, ie conditional rendering is enclosed inside {} since it is a piece of JavaScript, and we know that in JSX, if we need to write JS, we enclose it inside {}
          // Now we will be doing conditional rendering, means we will display Shimmer UI until our data is being fetched, so as to avoid user seeing only blank white screen, which ruins UX.
          restaurantList.length === 0 ? (
            restaurantListForSearch.length === 0 ? (
              <ShimmerRestaurantCard />
            ) : (
              <h1>
                There are no restaurants matching your search
              </h1>
            )
          ) : 
          (
            restaurantList.map((restaurant) => {
              return <RestaurantCard {...restaurant.info}  key = {restaurant?.info?.id}/>;
            })
          )
        }
      </div>
    </>
  );
}

export default CardContainer;
