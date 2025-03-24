import DishDetails from "./DishDetails"
// This component contains all the dishes present inside each category, like recommended, Veg Pizza, etc
const CategoryContainer = ({categoryTitle, count, collection}) => {
    return (
        <>
            <div>
                <p className="pb-5">
                    <span className="font-bold text-xl">{categoryTitle} ({count})</span>
                </p>
                <div>
                    {
                        collection.map(foodItem => {
                            return <DishDetails 
                            key={foodItem?.info?.id} 
                            imgURL={foodItem?.card?.info?.imageId}
                            isVeg={foodItem?.card?.info?.isVeg}
                            title={foodItem?.card?.info?.name}
                            price={foodItem?.card?.info?.defaultPrice/100}
                            avgRating={foodItem?.card?.info?.ratings?.aggregatedRating?.rating}
                            description={foodItem?.card?.info?.description}
                            ratingCountV2={foodItem?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryContainer