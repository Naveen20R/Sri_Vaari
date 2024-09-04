import React from 'react';

function Card01({ imageSrc, title, description, originalPrice, discountedPrice, discount, heartIcon }) {
  return (
    <div className="w-[310px] bg-white_color relative border-2 border-800-red">
      <img src={imageSrc} alt="card_img" className="w-full h-auto" />
      {/* card like part */}
      <div className="absolute top-2 right-2">
        <div className="w-[36px] h-[36px] bg-white_color text-red-600 rounded-full flex justify-center items-center shadow-shadow_01">
          <img src={heartIcon} alt="heart_icon" className="w-6 h-6" />
        </div>
      </div>
      {/* card body part */}
      <div className="pl-[16px] py-[22px]">
        <h3 className='leading-[28.8px] font-bold text-[28px] pb-[8px]'>{title}</h3>
        <p className='leading-[19.2px] text-[16px] font-normal pb-[8px]'>{description}</p>
        <div className="flex justify-start items-center gap-[8px] text-[18px] font-normal leading-[21.6px]">
          <span>{discountedPrice}</span>
          <span className='line-through'>{originalPrice}</span>
          <span className='text-blue_01'>{discount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card01;
