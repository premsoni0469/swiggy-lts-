// import Pizza from '../assets/pizza.avif'
import { IMG_URL } from "../constants/config";

function RestaurantCard({name, avgRating, sla, cuisines, locality, cloudinaryImageId}){
    // console.log(props) // This line should be commented if you are passing all the props as argument 

    // const {name, rating, deliveryTime, cuisines, location} = props

    return(
        <>
            <div className='w-[300px]'>
                <div className='w-[300px] md:max-w-[275px] h-[150px]'>
                    {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c08ef470-8561-436d-81ec-b119dfc997fa_9862.jpg" alt="Pizza" className='w-full h-full object-cover rounded-[20px]' /> */}
                    <img src={IMG_URL + cloudinaryImageId} alt="Pizza" className='w-full h-full object-cover rounded-[20px]' />
                </div>
                {/* <div className='text-[18px] pt-2'>
                    <p className='font-bold px-2'>{props.name}</p>
                    <div className='flex font-semibold gap-2'> 
                        <p>⭐ {props.rating}</p>
                        <p>•</p>
                        <p>{props.deliveryTime}</p>
                    </div>
                    <p className='text-gray-600 px-2'>{props.cuisines}</p>
                    <p className='text-gray-600 px-2'>{props.location}</p> */}
                <div className='text-[18px] pt-2'>
                    <p className='font-bold px-2'>{name}</p>
                    <div className='flex font-semibold gap-2'> 
                        <p>⭐ {avgRating}</p>
                        <p>•</p>
                        <p>{sla.deliveryTime} min</p>
                    </div>
                    <p className='text-gray-600 px-2'>{cuisines.join(", ")}</p>
                    <p className='text-gray-600 px-2'>{locality}</p>
                </div>
            </div>
        </>
    );
}

export default RestaurantCard;