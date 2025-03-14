import { useState, useEffect } from "react";
import { API_URL } from "../constants/config";

const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  // Here, restaurantList is a state-variable, and it is initially assigned the value, i.e. restaurantData (Array of objects) by passing it in useState(). It actually holds data of array of restaurants, which is later on used in rendering the restaurants.

  // setRestaurantList is a method, that is used to update the state-variable. State-variable can be only updated by this method only.

  // So, for using useState hook, we require:
  // 1. state-variable
  // 2. a method for updating the state-variable &
  // 3. initial value of the state-variable [passed in by using method useState()]

  const [restaurantListForSearch, setRestaurantListForSearch] = useState("");
  // This state variable we have created to store the whole restaurantList after searchText is entered, so that our main restaurantList isn't tampered and subsequent searching works.

  const [errorMessage, setErrorMessage] = useState("");
  // Here, initially the value of error message is empty ie "".

  useEffect(() => {
    const getRestaurantDatafromAPI = async () => {
      const response = await fetch(API_URL);
      try {
        console.log("Response: ", response);
        if (response.ok) {
          // we are writing this condition to check if our response is ok, then only go inside this block, else avoid going inside unnecessarily
          const data = await response.json();

          // console.log("JSON: ", data);
          // console.log(data?.data?.cards[1]?.card?.card?.header?.title,":",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          // console.log(data?.data?.cards[0]?.card?.card?.header?.title,":",data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
          // console.log("")
          const restaurantData =
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          // console.log(restaurantData);

          setRestaurantList(restaurantData);
          setRestaurantListForSearch(restaurantData);
        } else {
          console.log("Error code: ", response.status); // prints status code of response, like 400, 401, 403, 404, etc
          // throw new Error("Something went wrong!")  // this block reaches the nearest catch block and throws the following error.
          if (response.status === 400) {
            throw new Error("Bad request");
          }
          if (response.status === 401) {
            throw new Error("Request resource is unauthorized");
          }
          if (response.status === 403) {
            throw new Error("Request resource is forbidden");
          }
          if (response.status === 404) {
            throw new Error("Requested resource couldn't be found");
          } else {
            throw new Error("Something went wrong!");
          }
        }
      } catch (error) {
        setErrorMessage(error.message); // sets the value of error.message to our state variable errorMessage, i.e. setting error message content as value of errorMessage, which we are getting from above try block
        console.log(error);
        // console.log(error.message); // prints only the error message content, not like  "Error: Error message"
      }
    };
    getRestaurantDatafromAPI();
  }, []);

  const resObject = {
    restaurantList: restaurantList, // setting key and value names same to avoid changes in component's code

    restaurantListForSearch: restaurantListForSearch,

    errorMessage: errorMessage,
  };
  // Now since this is a function, it must return something. And we don't know exactly what to return, so we are creating an object & returning that object as a result. this also fulfills the condition, Hooks return some value

  return resObject;
};

export default useRestaurant;
