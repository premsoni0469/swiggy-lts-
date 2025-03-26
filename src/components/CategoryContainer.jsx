import { useState } from "react";
import DishDetails from "./DishDetails";
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoryContainer = ({ categoryTitle, count, collection }) => {
  const [isActive, setIsActive] = useState(false); // State to toggle accordion

  return (
    <>
      <div className="border-b border-gray-300">
        <div
          className="py-5 flex justify-between cursor-pointer"
          onClick={() => setIsActive(!isActive)} // Toggle accordion on click
        >
          <p>
            <span className="font-bold text-xl">
              {categoryTitle} ({count})
            </span>
          </p>
          <div>
            {isActive ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
        {isActive && ( // Conditionally render content if accordion is active
          <div className="lg:pl-5">
            {collection.map((foodItem) => (
              <DishDetails
                key={foodItem?.info?.id}
                imgURL={foodItem?.card?.info?.imageId}
                isVeg={foodItem?.card?.info?.isVeg}
                title={foodItem?.card?.info?.name}
                price={
                  foodItem?.card?.info?.defaultPrice / 100 ||
                  foodItem?.card?.info?.price / 100
                }
                avgRating={
                  foodItem?.card?.info?.ratings?.aggregatedRating?.rating ||
                  "Be the first one to try and review"
                }
                ratingCountV2={
                  foodItem?.card?.info?.ratings?.aggregatedRating
                    ?.ratingCountV2 || "0"
                }
                description={foodItem?.card?.info?.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryContainer;