import React from 'react';

function Card01({ productDetail, imageSrc, title, description, originalPrice, discountedPrice, discount, heartIcon, likedProduct }) {

  return (
      <div className={`${productDetail ? 'w-full' : 'min-w-[310px]'} bg-white_color relative shadow-md`}>
        <img src={imageSrc} alt="card_img" className="w-full h-auto mb-4" />
        {/* card like part */}
        <div className="absolute top-2 right-2">
          <button onClick={(e) => {
            e.stopPropagation();
            likedProduct()
          }} className="w-[36px] h-[36px] bg-white_color text-red-600 rounded-full flex justify-center items-center shadow-shadow_01">
            <img src={heartIcon} alt="heart_icon" className="w-6 h-6" />
          </button>
        </div>
        {/* card body part */}
        <div className='p-4'>
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
