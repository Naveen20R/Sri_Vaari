import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { cardData } from '/src/datas/CardData.js';
import Card01 from '/src/components/card/Card01';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CardSection01({conditions:{bg,title}}) {
  console.log(bg);
  
  const swiperRef = useRef(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  // Function to go to the previous slide
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to go to the next slide
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Callback to update the navigation button states
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setIsFirstSlide(swiper.isBeginning);
      setIsLastSlide(swiper.isEnd);
    }
  };

  return (
    <div className={`${bg ? 'bg-light_blue': ''}  px-8`}>
      <h1 className="font-bold leading-[57.6px] text-[48px] my-2 pt-[43px] text-center">
       {title}
      </h1>
      <div className="pb-3 px-3 flex justify-end">
        <a href="" className='font-bold text-black leading-[28.8px] text-[24px] '>View All</a>
      </div>
      <div className="flex justify-center items-center">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation
          loop={false}
          modules={[Navigation, Pagination]}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cardData.map(card => (
            <SwiperSlide key={card.id}>
              <Card01
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                originalPrice={card.originalPrice}
                discountedPrice={card.discountedPrice}
                discount={card.discount}
                heartIcon={card.heartIcon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end gap-5 py-5 px-3 items-center">
        <button className={`rounded-full w-[40px] h-[40px] flex justify-center items-center
                      bg-dark_blue text-white border-2 border-transparent
                      ${isFirstSlide ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:border-dark_blue hover:text-dark_blue'} 
                      transition-colors duration-300`}
          onClick={handlePrevClick}
          disabled={isFirstSlide} >
          <FaChevronLeft className='text-inherit' />
        </button>
        <button
          className={`rounded-full w-[40px] h-[40px] flex justify-center items-center
                      bg-dark_blue text-white border-2 border-transparent
                      ${isLastSlide ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:border-dark_blue hover:text-dark_blue'}
                      transition-colors duration-300`}
          onClick={handleNextClick}
          disabled={isLastSlide}
        >
          <FaChevronRight className='text-inherit' />
        </button>
      </div>
    </div>
  );
}

export default CardSection01;
