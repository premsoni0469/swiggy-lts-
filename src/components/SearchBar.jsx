import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ resListForSearch, setResList, text, updateText }) => {
  const [searchText, setSearchtext] = useState("");

  let handleSearchText = (val) => {
    updateText(val);
  };

  let handleSearch = () => {
    if(text === ""){
        console.log("Empty Search Text entered");
        setResList(resListForSearch)
    }
    else{
        const searchRes = resListForSearch.filter((restaurant) =>
            restaurant?.info?.name.toLowerCase().includes(text.trim().toLowerCase())
        );
   

    // Here, we converted text to lower case, to make the searh functionality case insensitive. Here, we convert the searchText to lower case and also the restaurant name to lower case for comparison purpose, not converted in lower case in the UI.

    // Here, we are applying filter on restaurantListForSearch, and that data, which is stored in searchRes, we pass it to setRestaurantList method, to update restaurantList based on searchText. In this way, we have a copy of all the restautants stored in restaurantList, and the value of restaurantListForSearch only hanges, and that only is displayed in the UI, by setting that value for restaurantList. It doesn't empty our restaurantList, which happened in the initial phase.

        searchRes.length === null // means if searchRes is null
        ? setResList(null)
        : setResList(searchRes); // Here, we are checking if searchRes length is zero, we set the restaurantList to null, else we set it according to the searchRes if searchRes is not empty, ie we have matching data

        console.log("searchRes: ", searchRes);
        // console.log("restaurantList: ", restaurantList)
    }
};

  return (
    <div className="py-5 mx-auto flex items-center justify-center">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-3xl px-4 pr-10 w-full h-10 bg-gray-50 focus:outline focus:outline-gray-200"
          value={text}
          onChange={(e) => handleSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
          onClick={handleSearch}
        >
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
