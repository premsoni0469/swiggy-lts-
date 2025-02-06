import RestaurantCard from "./RestaurantCard";

function CardContainer(){
    return(
        <>
            <div className="flex flex-wrap justify-center gap-4 md,lg:px-56 px-4 py-14">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </>
    );
}

export default CardContainer;