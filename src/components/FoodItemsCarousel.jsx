import { FaCircleChevronLeft , FaCircleChevronRight  } from "react-icons/fa6";


function FoodItemsCarousel() {
  return (
    <>
      <div className="font-bold flex justify-between text-xl mx-16 lg:mx-40 md:mx-24 pb-2">
        <p>What's on your mind?</p>
        <div className="flex mx-14 gap-5">
            <div>
                <FaCircleChevronLeft className="text-3xl text-gray-700"/>
            </div>
            <div>
            <FaCircleChevronRight className="text-3xl text-gray-700" />
            </div>
        </div>
      </div>
      <div className="w-9/12 m-auto overflow-x-auto custom-scrollbar">
        <div className="flex gap-4">
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png"
              alt=""
            />
          </div>
          <div className="w-36 min-w-[150px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItemsCarousel;
