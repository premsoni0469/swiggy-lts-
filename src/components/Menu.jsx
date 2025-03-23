import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantBanner from "./RestaurantBanner";

const Menu = () => {
    const params = useParams();
    // console.log("params", params);

    const data = useRestaurantMenu(params?.id)
    console.log("Data received from menu URL (Menu Component):", data)

    

    // console.log(data?.title?.totalRatingsString)
    return(
        <>
        <div className="w-10/12 mx-auto max-w-[800px]">

            <RestaurantBanner title={data?.title?.name} avgRating={data?.title?.avgRating} totalRatingsString={data?.title?.totalRatingsString} costForTwoMessage={data?.title?.costForTwoMessage} areaName={data?.title?.areaName} maxDeliveryTime={data?.title?.sla?.maxDeliveryTime} minDeliveryTime={data?.title?.sla?.minDeliveryTime} discounts={data?.title?.aggregatedDiscountInfoV2?.descriptionList}/>
        </div>
        </>
    );
}

export default Menu;