import React from 'react';

function Card02({ imageSrc, title, description, originalPrice, discountedPrice, discount, heartIcon }) {
  return (
    <a href='/productDetail' className="bg-white border border-gray-300 rounded-md  overflow-hidden relative hover:shadow-shadow_02">
      <img src={imageSrc} alt="card_img" className="w-full h-48 md:h-80 object-cover" />
      {/* Card like part */}
      <div className="absolute top-2 right-2 cursor-pointer">
        {/* <div className="w-9 h-9 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md"> */}
          <img src={heartIcon} alt="heart_icon" className="w-[25px] h-[25px]" />
        {/* </div> */}
      </div>
      {/* Card body part */}
      <div className="p-4">
        <h3 className='text-xl font-bold mb-1'>{title}</h3>
        <p className='text-base font-normal mb-1'>{description}</p>
        <div className="flex items-center gap-2 mb-1 text-lg font-medium">
          <span className='text-black'>{discountedPrice}</span>
          {originalPrice && <span className='line-through text-gray-500'>{originalPrice}</span>}
          {discount && <span className='text-blue-500'>{discount}</span>}

        </div>

        <a href="" className='border-[1px] py-2 text-dark_blue  font-medium leading-[24px] text-[18px] border-gray_color flex justify-center
        hover:text-white_color hover:bg-dark_blue hover:border-dark_blue hover:rounded-sm  transition-all duration-300 ease-in-out'>
          Move To Bag
        </a>
      </div>
    </a>
  );
}

export default Card02;
