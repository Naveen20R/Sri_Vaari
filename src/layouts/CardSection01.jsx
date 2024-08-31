import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'; // Try this if the above imports fail

import { cardData } from '/src/datas/CardData.js';
import Card01 from '/src/components/card/Card01';
import { Navigation, Pagination } from 'swiper';

function CardSection01() {
  return (
    <div className="bg-light_blue">
      <h1 className="font-bold leading-[57.6px] text-[48px] my-2 py-4 text-center">Deal of The Day</h1>
      <div className="flex justify-center gap-5 items-center border-4 border-red-900">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          loop
          modules={[Navigation, Pagination]} // Import and use the modules
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
    </div>
  );
}

export default CardSection01;
