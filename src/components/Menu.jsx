import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantBanner from "./RestaurantBanner";
import CategoryContainer from "./CategoryContainer";

const Menu = () => {
    const params = useParams();
    // console.log("params", params);

    const data = useRestaurantMenu(params?.id)
    console.log("Data received from menu URL (Menu Component):", data)

    const {title, normalMenu, nestedMenu} = data
    

    // console.log(data?.title?.totalRatingsString)
    return(
        <>
        <div className="w-10/12 mx-auto max-w-[800px]">

            <RestaurantBanner 
            title={title?.name} 
            avgRating={title?.avgRating} 
            totalRatingsString={title?.totalRatingsString} 
            costForTwoMessage={title?.costForTwoMessage} 
            areaName={title?.areaName} 
            maxDeliveryTime={title?.sla?.maxDeliveryTime} 
            minDeliveryTime={title?.sla?.minDeliveryTime} 
            discounts={title?.aggregatedDiscountInfoV2?.descriptionList}/>

            {
                normalMenu.map(category => {
                    return (
                        <>
                            <CategoryContainer 
                                categoryTitle={category?.card?.card?.title} 
                                count={category?.card?.card?.itemCards.length} 
                                collection={category?.card?.card?.itemCards}
                            /> 
                            <div className="h-3 bg-gray-100"></div>

                        </>
                    )
                })
            }

            {
                nestedMenu.map(mainCategory => {
                    return(
                        <>
                            <p className="font-bold text-xl py-6">{mainCategory?.card?.card?.title}</p>
                            {mainCategory?.card?.card?.categories.map(subCategory => (
                                <CategoryContainer 
                                    categoryTitle={subCategory?.title}
                                    count={subCategory?.itemCards?.length}
                                    collection={subCategory?.itemCards}
                                
                                />
                            ))}
                            <div className="h-3 bg-gray-100"></div>

                        </>
                    )
                })
            }
        </div>
        </>
    );
}

export default Menu;