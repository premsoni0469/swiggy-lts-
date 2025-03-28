import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantBanner from "./RestaurantBanner";
import CategoryContainer from "./CategoryContainer";
import { text } from "@fortawesome/fontawesome-svg-core";
import { IoIosSearch } from "react-icons/io";
import SearchBar from "./SearchBar";
import ShimmerMenuPage from "./ShimmerMenuPage";

const Menu = () => {
    const params = useParams();
    // console.log("params", params);

    const data = useRestaurantMenu(params?.id)
    console.log("Data received from menu URL (Menu Component):", data)

    const {title, normalMenu, nestedMenu} = data
    
    console.log("Cuisines: ", title?.cuisines)
    return(
        <>
            {/* <ShimmerMenuPage /> */}
            <div className="w-10/12 mx-auto max-w-[800px]">

            <RestaurantBanner 
            key={title?.id}
            title={title?.name} 
            avgRating={title?.avgRating} 
            totalRatingsString={title?.totalRatingsString} 
            costForTwoMessage={title?.costForTwoMessage} 
            cuisines={title?.cuisines}
            areaName={title?.areaName} 
            maxDeliveryTime={title?.sla?.maxDeliveryTime} 
            minDeliveryTime={title?.sla?.minDeliveryTime} 
            discounts={title?.aggregatedDiscountInfoV2?.descriptionList}/>

            <div className="flex gap-1 items-center justify-center py-3">
                <svg width="30" viewBox="0 0 131 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 44C20 44 28 42 40 35C52 28 60 24 70 24C83 24 94 32 94 48C94 64 83 72 70 72C58 72 52 64 52 56C52 48 58 44 64 44" stroke="#44474F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M94 44H122" stroke="#44474F" strokeWidth="5" strokeLinecap="round"/>
                </svg>
                <span className="font-bold text-xs tracking-[0.4rem] ml-2 text-gray-600">MENU</span>
                <svg width="30" viewBox="0 0 131 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 44C111 44 103 42 91 35C79 28 71 24 61 24C48 24 37 32 37 48C37 64 48 72 61 72C73 72 79 64 79 56C79 48 73 44 67 44" stroke="#44474F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M37 44H9" stroke="#44474F" strokeWidth="5" strokeLinecap="round"/>
                </svg>
            </div>

            <div className="relative flex justify-center my-3">
                <input type="text" className="bg-gray-100 w-full h-11 px-4 rounded-xl" placeholder="Search for dishes"/>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl">
                    <IoIosSearch className="text-gray-600"/>
                </button>
            </div>

            {/* <SearchBar /> */}

            {
                normalMenu.map(category => {
                    return (
                        <>
                            <CategoryContainer 
                                key={category?.card?.card?.categoryId}
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
                            <p className="font-bold text-xl pt-7 pb-3">{mainCategory?.card?.card?.title}</p>
                            {mainCategory?.card?.card?.categories.map(subCategory => (
                                <CategoryContainer 
                                    key={subCategory?.categoryId}
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