import Pizza from '../assets/pizza.avif'

function RestaurantCard(){
    return(
        <>
            <div>
                <div className='w-[300px] md:max-w-[250px] h-[150px]'>
                    {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c08ef470-8561-436d-81ec-b119dfc997fa_9862.jpg" alt="Pizza" className='w-full h-full object-cover rounded-[20px]' /> */}
                    <img src={Pizza} alt="Pizza" className='w-full h-full object-cover rounded-[20px]' />
                </div>
                <div className='text-[18px] pt-2'>
                    <p className='font-bold px-2'>Pizza Hut</p>
                    <div className='flex font-semibold gap-2'> 
                        <p>⭐ 4.2</p>
                        <p>•</p>
                        <p>25-30 mins</p>
                    </div>
                    <p className='text-gray-600 px-2'>Pizzas</p>
                    <p className='text-gray-600 px-2'>Bandra Kurla Complex</p>
                </div>
            </div>
        </>
    );
}

export default RestaurantCard;