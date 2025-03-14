import { useEffect, useState, useTransition } from "react";
import RestaurantCard from "./RestaurantCard";
import FoodItemsCarousel from "./FoodItemsCarousel";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { MdError } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import useRestaurant from "../utils/useRestaurant";

function CardContainer() {

  const restaurantData = useRestaurant();
  console.log("restaurantdata from custom hook", restaurantData)

  // Shifted the data into folder named constants. This same approach we will use to store the base URL of an API. This method is useful in scanarios where we have called the API URL multiple times, and if there is cenrtain change in it, we will only need to change the base URL in constants folder, and it will get updated everywhere else it is called.

  const [searchText, setSearchtext] = useState("");

  let handleSearchText = (val) => {
    setSearchtext(val);
  };

  let filterRatings = () => {
    const filteredData = restaurantData?.restaurantList.filter((restaurant) => {
      // In this line, restaurant is an object which will iterate through the whole array of restaurants
      return restaurant?.info?.avgRating >= 4.5;
    });
    setRestaurantList(filteredData);
    console.log("Filtered Data:", filteredData);
    // console.log("Restaurant List:", restaurantList);
  };

  let handleSearch = () => {
    const searchRes = restaurantListForSearch?.restaurantListForSearch.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Here, we converted text to lower case, to make the searh functionality case insensitive. Here, we convert the searchText to lower case and also the restaurant name to lower case for comparison purpose, not converted in lower case in the UI.

    // Here, we are applying filter on restaurantListForSearch, and that data, which is stored in searchRes, we pass it to setRestaurantList method, to update restaurantList based on searchText. In this way, we have a copy of all the restautants stored in restaurantList, and the value of restaurantListForSearch only hanges, and that only is displayed in the UI, by setting that value for restaurantList. It doesn't empty our restaurantList, which happened in the initial phase.

    !searchRes // means if searchRes is null
      ? setRestaurantList(null)
      : setRestaurantList(searchRes); // Here, we are checking if searchRes length is zero, we set the restaurantList to null, else we set it according to the searchRes if searchRes is not empty, ie we have matching data

    console.log("searchRes: ", searchRes);
    // console.log("restaurantList: ", restaurantList)
      
  };

  if (restaurantData?.errorMessage) {
    // means if there is an errorMessage, then only this block will run.
    return (
      <div className="flex items-center justify-center h-96 m-6 rounded-xl text-2xl font-semibold text-red-200 bg-[#dc143c]">
        <MdError className="text-4xl" /> {errorMessage}
      </div>
    );
  }

  return (
    <>
      <div className="py-5 mx-auto flex items-center justify-center">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="border rounded-3xl px-4 pr-10 w-full h-9 bg-gray-50 focus:outline focus:outline-gray-200"
            value={searchText}
            onChange={(e) => handleSearchText(e.target.value)}
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl"
            onClick={handleSearch}
          >
            <IoIosSearch />
          </button>
        </div>
      </div>
      <div className="flex justify-around py-5 px-14">
        <span className="font-semibold text-xl">Filters:</span>
        <div className="flex gap-4">
          <button
            className="bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors"
            onClick={filterRatings}
          >
            Top rated
          </button>
          <button className="bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors">
            Nearby
          </button>
          <button className="bg-gray-100 text-gray-500 p-3 rounded-[30px] hover:bg-gray-200 hover:text-gray-800 transition-colors">
            Budget Friendly
          </button>
        </div>
      </div>
      <div className='font-bold text-xl mx-16 lg:mx-36 md:mx-24 pb-2'>
                <p>What's on your mind?</p>
            </div>
            <div className='px-32'>
                <FoodItemsCarousel />
            </div>

      <div className="font-bold text-xl mx-16 lg:mx-36 md:mx-24 pb-2 mt-3">
        <p>Top restaurant chains:</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:px-2 py-3">
        {
          // This whole fragment of code, ie conditional rendering is enclosed inside {} since it is a piece of JavaScript, and we know that in JSX, if we need to write JS, we enclose it inside {}
          // Now we will be doing conditional rendering, means we will display Shimmer UI until our data is being fetched, so as to avoid user seeing only blank white screen, which ruins UX.
          restaurantData?.restaurantList.length === 0 ? (
            restaurantData?.restaurantListForSearch.length === 0 ? (
              <ShimmerRestaurantCard />
            ) : (
              <h1>
                There are no restaurants matching "{searchText}"
              </h1>
            )
          ) : 
          (
            restaurantData?.restaurantList.map((restaurant) => {
              return <RestaurantCard {...restaurant.info}  key = {restaurant?.info?.id}/>;
            })
          )
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
      </div>
    </>
  );
}

export default CardContainer;
