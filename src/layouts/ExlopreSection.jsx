import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function ExampleComponent() {
  return (
    <div className="bg-light_blue px-4 sm:px-6 lg:px-8 xl:px-10 py-16">
      <h1 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl my-2 text-center">
        Explore The Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:mx-[100px] gap-4 md:gap-5 lg:gap-6 mt-6">
        {/* First Column */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[615px] overflow-hidden">
          <img
            src="/src/assets/images/explore/exp_1.svg"
            alt="Category Image"
            className="w-full h-full object-cover"
          />
          <a href='' className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-dark text-pure_white py-2 px-3 sm:py-3 sm:px-4 min-w-[150px] sm:min-w-[200px] shadow-lg flex items-center gap-2 justify-center transition-colors duration-300 hover:bg-white hover:text-blue_02">
            <span className='font-normal text-sm sm:text-base lg:text-lg whitespace-nowrap'>Sarees</span> <FaArrowRight />
          </a>
        </div>

        {/* Second Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[300px] overflow-hidden">
            <img
              src="/src/assets/images/explore/exp_2.svg"
              alt="Category Image 1"
              className="w-full h-full object-cover"
            />
            <a href='' className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-dark text-pure_white py-2 px-3 sm:py-3 sm:px-4 min-w-[150px] sm:min-w-[200px] shadow-lg flex items-center gap-2 justify-center transition-colors duration-300 hover:bg-white hover:text-blue_02">
              <span className='font-normal text-sm sm:text-base lg:text-lg whitespace-nowrap'>Earrings</span> <FaArrowRight />
            </a>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[300px] overflow-hidden ">
            <img
              src="/src/assets/images/explore/exp_3.svg"
              alt="Category Image 1"
              className="w-full h-full object-cover"
            />
            <a href='' className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-dark text-pure_white py-2 px-3 sm:py-3 sm:px-4 min-w-[150px] sm:min-w-[200px] shadow-lg flex items-center gap-2 justify-center transition-colors duration-300 hover:bg-white hover:text-blue_02">
              <span className='font-normal text-sm sm:text-base lg:text-lg whitespace-nowrap'>Dress Material</span> <FaArrowRight />
            </a>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[300px] overflow-hidden ">
            <img
              src="/src/assets/images/explore/exp_4.svg"
              alt="Category Image 1"
              className="w-full h-full object-cover"
            />
            <a href='' className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-dark text-pure_white py-2 px-3 sm:py-3 sm:px-4 min-w-[150px] sm:min-w-[200px] shadow-lg flex items-center gap-2 justify-center transition-colors duration-300 hover:bg-white hover:text-blue_02">
              <span className='font-normal text-sm sm:text-base lg:text-lg whitespace-nowrap'>Handbag</span> <FaArrowRight />
            </a>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[300px] overflow-hidden ">
            <img
              src="/src/assets/images/explore/exp_5.svg"
              alt="Category Image 1"
              className="w-full h-full object-cover"
            />
            <a href='' className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-dark text-pure_white py-2 px-3 sm:py-3 sm:px-4 min-w-[150px] sm:min-w-[200px] shadow-lg flex items-center gap-2 justify-center transition-colors duration-300 hover:bg-white hover:text-blue_02">
              <span className='font-normal text-sm sm:text-base lg:text-lg whitespace-nowrap'>Embroidered Design</span> <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleComponent;
