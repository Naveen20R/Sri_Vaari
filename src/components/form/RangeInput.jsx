import React, { useState, useEffect } from 'react';

const RangeInput = () => {
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(7000);
    const min = 100;
    const max = 10000;

    // Calculate thumb positions based on current minPrice and maxPrice
    const minThumb = ((minPrice - min) / (max - min)) * 100;
    const maxThumb = 100 - (((maxPrice - min) / (max - min)) * 100);

    // Ensure minPrice is not greater than maxPrice - 500
    useEffect(() => {
        if (minPrice > maxPrice - 500) {
            setMinPrice(maxPrice - 500);
        }
    }, [maxPrice]);

    // Ensure maxPrice is not less than minPrice + 500
    useEffect(() => {
        if (maxPrice < minPrice + 500) {
            setMaxPrice(minPrice + 500);
        }
    }, [minPrice]);

    const handleMinPriceChange = (e) => {
        const newValue = Math.round(Number(e.target.value));
        setMinPrice(Math.min(newValue, maxPrice - 500));
    };

    const handleMaxPriceChange = (e) => {
        const newValue = Math.round(Number(e.target.value));
        setMaxPrice(Math.max(newValue, minPrice + 500));
    };

    const handleTrackClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const trackWidth = rect.width;
        const newValue = min + (offsetX / trackWidth) * (max - min);
        const roundedValue = Math.round(newValue);

        if (Math.abs(roundedValue - minPrice) < Math.abs(roundedValue - maxPrice)) {
            setMinPrice(Math.min(roundedValue, max - 500));
        } else {
            setMaxPrice(Math.max(roundedValue, minPrice + 500));
        }
    };

    return (
        <div className="flex justify-center items-center overflow-x-auto">
            <div className="relative max-w-xl w-full ">
                <div className="flex justify-between items-center py-5">
                    <div>
                        <label htmlFor="minvalue" className='text-gray-600 text-[16px] font-normal leading-[14.4px]'>Minimum</label>
                        <input
                            id='minvalue'
                            type="number"
                            // value={minPrice}
                            onChange={handleMinPriceChange}
                            className="px-3 py-2 border border-gray-200 focus:outline-none rounded w-24 text-center bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="maxvalue" className='text-gray-600 text-[16px] font-normal leading-[14.4px]'>Maximum</label>
                        <input
                            id='maxvalue'
                            type="number"
                            // value={maxPrice}
                            onChange={handleMaxPriceChange}
                            className="px-3 py-2 border border-gray-200 focus:outline-none rounded w-24 text-center bg-gray-100"
                        />
                    </div>
                </div>

                {/* Invisible Range Sliders */}
                <input
                    type="range"
                    step="100"
                    min={min}
                    max={max}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                />
                <input
                    type="range"
                    step="100"
                    min={min}
                    max={max}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                />

                {/* Visible Range Slider */}
                <div
                    className="relative z-10 h-2 cursor-pointer mx-3"
                    onClick={handleTrackClick}
                >
                    {/* Track */}
                    <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                    {/* Filled Track */}
                    <div
                        className="absolute z-20 top-0 bottom-0 rounded-md bg-blue_01"
                        style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
                    ></div>
                    {/* Min Thumb */}
                    <div
                        className="absolute z-30 w-6 h-6 top-0 left-0 bg-light_gray rounded-full -mt-2 -ml-3  shadow-shadow_04"
                        style={{ left: `${minThumb}%`}}
                    ></div>
                    {/* Max Thumb */}
                    <div
                        className="absolute z-30 w-6 h-6 top-0 right-0 bg-light_gray rounded-full -mt-2 -mr-3 shadow-shadow_04"
                        style={{ right: `${maxThumb}%` }}
                    ></div>
                </div>

                {/* Price Buttons */}
                <div className="flex justify-between items-center py-5">
                    <button
                        className='border text-[12px] relative text-white border-gray-200 rounded w-16 text-center bg-blue_01 '
                        style={{ left: `${minThumb-12}%` }}>
                        ₹ {minPrice}
                        <div className="w-0 h-0 
                            border-l-[8px] border-l-transparent
                            border-b-[10px] border-b-blue_01
                            border-r-[8px] border-r-transparent absolute top-[-8px] left-[35%]">
                        </div>
                    </button>

                    <button
                        className='border text-[12px] relative text-white border-gray-200 rounded w-16 text-center bg-blue_01'
                        style={{ right: `${maxThumb-12}%` }} >
                        ₹ {maxPrice}
                        <div className="w-0 h-0 
                            border-l-[8px] border-l-transparent
                            border-b-[10px] border-b-blue_01
                            border-r-[8px] border-r-transparent absolute top-[-8px] left-[35%]">
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RangeInput;
