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
        <div className="flex lg:mx-14 gap-3 lg:gap-10">
          <button className="scale-105 lg:scale-150">
            <CircleChevronLeft className="bg-gray-200 rounded-xl" onClick={slideLeft}/>
          </button>
          <button className="scale-105 lg:scale-150">
            <CircleChevronRight className="bg-gray-200 rounded-xl" onClick={slideRight}/>
          </button>
        </div>
      </div>
      <div className="w-9/12 m-auto overflow-x-auto custom-scrollbar scroll-smooth" id="slider">
        <div className="flex gap-4">
          {foodItemsCarousel.map((item) => (
            <div className="lg:w-36 min-w-[95px] lg:min-w-[150px]" key={item?.id}>
              <img src={item?.img}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodItemsCarousel;
