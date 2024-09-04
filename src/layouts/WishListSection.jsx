import React from 'react';
import { wishListData } from '/src/datas/CardData.js';
import Card02 from '/src/components/card/Card02';

function WishListSection() {
    return (
        <div className="m-4 md:m-6 lg:m-8">
            <div className="mb-6">
                <h1 className='text-2xl md:text-3xl font-bold'>
                    My Wishlist 
                    <span className='text-gray-500 text-lg md:text-xl px-3 font-medium'>20 Products</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishListData.map((card, index) => (
                    <Card02
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        originalPrice={card.originalPrice}
                        discountedPrice={card.discountedPrice}
                        discount={card.discount}
                        heartIcon={card.heartIcon}
                    />
                ))}
            </div>
        </div>
    );
}

export default WishListSection;
