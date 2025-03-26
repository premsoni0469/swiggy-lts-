import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const RestaurantBanner = ({title, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, minDeliveryTime, maxDeliveryTime, discounts}) => {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
      
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // console.log("Discounts: ", discounts)

    return (
        <>
            <div className="mt-5">
                <p className="font-bold text-3xl mx-5 py-8">{title}</p>
                <div className="p-5 border border-t-0 rounded-[36px] bg-[linear-gradient(rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)]">
                    <div className="p-5 border rounded-3xl bg-white">
                        <div className="flex items-center lg:mx-4">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                <path
                                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                    fill="white"
                                    ></path>
                                <defs>
                                    <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse" >
                                        <stop stopColor="#21973B"></stop>
                                        <stop offset="1" stopColor="#128540"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="flex ml-2 font-semibold gap-2">
                                <span>{avgRating}</span>
                                <span>({totalRatingsString})</span>
                                <span className="text-gray-500">•</span>
                                <span>{costForTwoMessage}</span>
                            </div> 
                        </div>
                        <div className="flex mt-2 lg:mx-4">
                            {   
                                Array.isArray(cuisines) && cuisines.map((item, index) => {
                                    return(
                                        <span className="text-orange-500" key={index}>
                                            {(index ? ", " : " ") + item}
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <div className="flex items-center lg:mx-5 py-1">

                            <div className="flex flex-col items-center">
                                <div className="w-[7px] h-[7px] bg-[#c4c4c4] rounded-full"></div>
                                <div className="w-[1px] h-[23px] bg-[#c4c4c4]"></div>
                                <div className="w-[7px] h-[7px] bg-[#c4c4c4] rounded-full"></div>
                            </div>

                            <div className="flex flex-col w-full ml-[12px] justify-content-center">
                                <div className="flex mb-[2px] pb-[3px]">
                                    <span className="font-semibold">Outlet: </span>
                                    <span className="text-gray-500 ml-3 text-center cursor-pointer">{areaName}</span>
                                </div>
                                <div>
                                    <span>{minDeliveryTime}-{maxDeliveryTime} mins</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="font-bold flex justify-between lg:justify-between text-xl px-5 lg:mx-5 mt-10 mb-5">
                    <p>Deals for you</p>
                    <div className="flex lg:mx-14 gap-10">
                    <button className="scale-150">
                        <CircleChevronLeft className="bg-gray-200 rounded-xl" onClick={slideLeft}/>
                    </button>
                    <button className="scale-150">
                        <CircleChevronRight className="bg-gray-200 rounded-xl" onClick={slideRight}/>
                    </button>
                    </div>
                </div>
                
                <div className="m-auto overflow-x-auto custom-scrollbar scroll-smooth pb-5" id="slider">
                    <div className="flex flex-row gap-4 mx-5">

                        {Array.isArray(discounts) && discounts.map((offer, index) => (
                            <div className="lg:flex gap-4 w-[300px] border p-3 rounded-[20px]" key={index}>
                                <div>
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day" className="w-5/12 lg:w-12" alt="deal of the day" />
                                </div>
                                <div>
                                    <p className="font-semibold">{offer?.meta}</p>
                                </div>
                            </div> 
                        ))} 
                   </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantBanner;
