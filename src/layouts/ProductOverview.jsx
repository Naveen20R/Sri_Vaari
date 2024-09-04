import React, { useState } from 'react';
import RightArrow01 from '/src/assets/images/icons/right_arrow_icon.svg';
import Tab01 from '/src/components/tab/Tab01';

function ProductOverview() {
    // State to keep track of the currently selected image
    const [selectedImage, setSelectedImage] = useState('/src/assets/images/saree_img/saree_1.svg');

    // Array of image sources for the thumbnails
    const images = [
        '/src/assets/images/saree_img/saree_1.svg',
        '/src/assets/images/saree_img/saree_2.svg',
        '/src/assets/images/saree_img/saree_3.svg',
        '/src/assets/images/saree_img/saree_4.svg',
        '/src/assets/images/saree_img/saree_5.svg',
    ];

    return (
        <div className="m-4 md:m-6 lg:m-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center space-x-2">
                <div className='text-xl md:text-2xl lg:text-3xl font-bold flex items-center space-x-2'>
                    <h1 className='mb-2'>Home</h1>
                    <img src={RightArrow01} className='w-6 h-6 md:w-8 md:h-8' alt="Right Arrow" />
                    <h2 className='text-lg md:text-xl lg:text-2xl text-blue-500 font-bold'>
                        Party Wear Saree
                    </h2>
                </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                {/* Large Image and Thumbnails */}
                <div className="flex flex-col gap-4">
                    {/* Large Image */}
                    <div className="border-2 border-gray-300">
                        <img src={selectedImage} alt="Product" className="w-full md:max-h-[600px] object-cover" />
                    </div>
                    {/* Thumbnails */}
                    <div className="flex overflow-x-auto gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="w-full h-[150px]  ">
                                <div className="w-[100px] h-[150px]my-5 cursor-pointer group  ">

                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover m-3  rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                        onClick={() => setSelectedImage(image)} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-between">
                    <div className="">
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>Handloom Saree</h1>
                        <p className='text-lg md:text-xl lg:text-2xl font-normal mb-4'>
                            A traditional Handloom Cotton Saree, this piece is a testament to exquisite craftsmanship.
                        </p>
                        <div className="flex items-center gap-2 mb-4 text-lg md:text-xl lg:text-2xl">
                            <span className='text-black font-medium'>₹ 4000</span>
                            <span className='line-through text-gray-500'>₹ 3000</span>
                            <span className='text-blue-500 font-medium'>10% Off</span>
                        </div>
                        <div className="flex gap-3 mb-4 items-center">
                            <button className="w-10 h-10 rounded-full border-2 border-primary_color text-2xl flex items-center justify-center">
                                -
                            </button>
                            <div className="border-2 min-w-12 rounded-3xl border-primary_color text-lg font-normal text-center">
                                1
                            </div>
                            <button className="w-10 h-10 rounded-full border-2 border-primary_color text-2xl flex items-center justify-center">
                                +
                            </button>
                        </div>
                        <div className='w-full mb-2 py-2 text-red-500 border-2 border-red-600 bg-red-200 flex items-center justify-center font-normal text-base md:text-lg'>
                            <img src="/src/assets/images/icons/warning-icon.svg" alt="Out of Stock" className="w-6 h-6 mr-2" />
                            This Product is not available
                        </div>
                        <button className='w-full mb-2 py-2 text-white bg-dark_blue flex items-center justify-center font-normal text-base md:text-lg'>
                            <img src="/src/assets/images/icons/shopping-bag.svg" alt="Add to Cart" className="w-6 h-6 mr-2" />
                            Add to Cart
                        </button>
                        <button className='w-full py-2 text-black border-2 border-gray-400 bg-light_gray flex items-center justify-center font-normal text-base md:text-lg'>
                            <img src="/src/assets/images/icons/heart_black.svg" alt="Add to Wishlist" className="w-6 h-6 mr-2" />
                            Add to WishList
                        </button>
                         {/* product Details */}
                        <Tab01/>
                           
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductOverview;
