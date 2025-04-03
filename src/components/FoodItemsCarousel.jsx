// import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill  } from "react-icons/bs";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { foodItemsCarousel } from "../constants/foodItemsCarousel";

function FoodItemsCarousel() {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <div className="font-bold flex justify-between text-xl mx-16 lg:mx-40 md:mx-24 pt-8 pb-2">
        <p>What's on your mind?</p>
        <div className="flex lg:mx-14 gap-3 lg:gap-6">
          <button className="bg-gray-200 rounded-full p-1" onClick={slideLeft}>
            <svg width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M34 20H10m0 0l9-9m-9 9l9 9" stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="bg-gray-200 rounded-full p-1" onClick={slideRight}>
            <svg width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" >
              <path d="M6 20h24m0 0l-9-9m9 9l-9 9" stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="w-9/12 m-auto overflow-x-auto custom-scrollbar scroll-smooth"
        id="slider"
      >
        <div className="flex gap-4">
          {foodItemsCarousel.map((item) => (
            <div
              className="lg:w-36 min-w-[95px] lg:min-w-[150px]"
              key={item?.id}
            >
              <img src={item?.img} alt={item?.name || "Food Item"} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodItemsCarousel;
