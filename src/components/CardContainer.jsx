import RestaurantCard from "./RestaurantCard";

function CardContainer(){

    const restaurantData = [
        {
            name:"Chinese Wok",
            rating:"4.2",
            deliveryTime:"25-30 mins",
            cuisines:"Chinese, Thai, Mexican",
            location:"Bandra Kurla Complex"
        }, 
        
        {
            name:"Pizza Hut",
            rating:"4.3",
            deliveryTime:"25-28 mins",
            cuisines:"Pizza, Fast Food",
            location:"Santacruz"
        }, 

        {
            name:"Naturals",
            rating:"4.6",
            deliveryTime:"15-20 mins",
            cuisines:"Dessert, Ice Cream",
            location:"Ghatkopar"
        }, 

        {
            name:"McDonalds",
            rating:"4.0",
            deliveryTime:"30-35 mins",
            cuisines:"Burger, Pizza, French",
            location:"Chembur"
        }, 
        
    ] // It is an array of objects of restaurants

    return(
        <>
            <div className="flex flex-wrap justify-center gap-4 md,lg:px-56 px-4 py-14">
               {
                restaurantData.map((restaurant) => {       // restaurant is an object here
                    return <RestaurantCard 
                    {...restaurant} // using spread operator

                    
                    // name={restaurant.name}  // Remember, the property name should be the same as the one present in the RestaurantCard Component
                    // rating={restaurant.rating}
                    // deliveryTime={restaurant.deliveryTime}
                    // cuisines={restaurant.cuisines}
                    // location={restaurant.location} // The same things can be written as location = {restaurant["location"]}. This thing will be more helpful in cases where the key in our data is not a proper string, i.e. it starts from a specil character, like @psp. We can't write restaurant.@psp, it will give an error, instead we can write as restaurant["@psp"].    

                    // You can also change the order of these 5 properties, but it won't affect the data, means where is should be displayed, it will, but the only differemce will be the order in which we write in the code.

                    />
                })
               }
               
               
               
               
                {/* <RestaurantCard 
                name="Chinese Wok" 
                rating="4.2" 
                deliveryTime="25-30 mins" 
                cuisines="Chinese, Thai, Mexican" 
                location="Bandra Kurla Complex"/>

                <RestaurantCard 
                name="Pizza Hut" 
                rating="4.3" 
                deliveryTime="25-28 mins" 
                cuisines="Pizza, Fast Food" 
                location="Santacruz"/>

                <RestaurantCard 
                name="Naturals" 
                rating="4.6" 
                deliveryTime="15-20 mins" 
                cuisines="Dessert, Ice Cream" 
                location="Ghatkopar"/>

                <RestaurantCard />
                <RestaurantCard /> */}
                
            </div>
        </>
    );
}

export default CardContainer;