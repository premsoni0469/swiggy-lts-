function ShimmerRestaurantCard() {
    return new Array(20).fill(0).map(() => {
        return (
            <div className="w-[300px] border py-3 px-3 rounded-[30px]">
                <div className="w-[300px] md:max-w-[275px] h-[150px]">
                    <div className="w-full h-full object-cover bg-gray-200 animate-pulse rounded-[20px]"/>
                </div>
                <div className="text-[18px] mx-3 pt-3">
                    <p className="font-bold h-5 bg-gray-200 animate-pulse w-60"></p>
                    <div className="flex font-semibold gap-2">
                        <p className="h-3 bg-gray-200 animate-pulse mt-3 w-16"></p>  
                        <p className="h-3 bg-gray-200 animate-pulse mt-3 w-16"></p>
                    </div>
                    <p className="bg-gray-200 animate-pulse h-3 mt-3 w-44"></p>
                    <p className="bg-gray-200 animate-pulse h-3 mt-3 w-44"></p>
              </div>
            </div>
        );
    })
  
}

export default ShimmerRestaurantCard;
