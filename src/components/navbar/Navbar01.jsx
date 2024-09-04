import React, { useState } from 'react';
import { BsFilterRight } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from "react-icons/fa";

const Navbar01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 left-0 h-full bg-primary_color z-10 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`} style={{ width: '70%' }}>
        <button onClick={closeSidebar} className="text-white absolute top-4 right-4">
          <IoCloseSharp className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li><a href="/" className="text-white hover:text-gray-800">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-800">Kurtis</a></li>
          <li><a href="#services" className="text-white hover:text-gray-800">Sarees</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-800">Accessories</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-800">More</a></li>
        </ul>
      </div>

      {/* Top Navbar for Larger Screens */}
      <nav className="bg-primary_color py-[5px] px-4 md:px-20 flex items-center gap-4 justify-between md:justify-start">
        <div className="text-white text-2xl font-bold">Sri Vaari</div>

        <div className="hidden md:flex justify-center md:gap-5 flex-grow">
          <a href="/" className="leading-[19.2px] font-bold text-white hover:text-black">Home</a>
          <a href="#about" className="leading-[19.2px] font-bold text-white hover:text-black">Kurtis</a>
          <a href="#services" className="leading-[19.2px] font-bold text-white hover:text-black">Sarees</a>
          <a href="#contact" className="leading-[19.2px] font-bold text-white hover:text-black">Accessories</a>
          <a href="#contact" className="leading-[19.2px] font-bold text-white hover:text-black">More</a>
        </div>

        <div className="hidden md:flex overflow-hidden px-5 bg-white w-[381px] h-[38px] grid grid-cols-[1fr_auto]  rounded-full items-center">
          <form className="flex w-full">
            <input
              type="search"
              className="w-full p-2 border-none rounded-l-full focus:outline-none"
              placeholder="Search For The Item"
            />
          </form>
          <div className="flex items-center justify-center ml-2">
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        <div className="hidden md:flex flex-grow justify-end space-x-5">
          <a href="#profile" className="flex flex-col items-center justify-center group">
            <img className='w-[24px] h-[24px]' src="/src/assets/images/icons/profile-circle.svg" alt="profile-icon" />
            <span className='text-white_color leading-[14.4px] text-[12px] font-bold mt-1 group-hover:text-black'>Profile</span>
          </a>

          <a href="/wishList" className="flex flex-col items-center justify-center hover:text-black group">
            <img className='w-[24px] h-[24px]' src="/src/assets/images/icons/heart.svg" alt="wishlist-icon" />
            <span className='text-white_color leading-[14.4px] text-[12px] font-bold ml-1 group-hover:text-black'>Wishlist</span>
          </a>
          <a href="#cart" className="flex flex-col items-center justify-center hover:text-black group">
            <img className='w-[24px] h-[24px]' src="/src/assets/images/icons/shopping-bag.svg" alt="cart-icon" />
            <span className='text-white_color leading-[14.4px] text-[12px] font-bold ml-1 group-hover:text-black'>Cart</span>
          </a>
        </div>

        <button onClick={toggleSidebar} className="text-white bg-blue-600 p-2 rounded-md md:hidden">
           <BsFilterRight className="w-6 h-6" />
          {/* {isOpen && <IoCloseSharp className="w-6 h-6" /> : <BsFilterRight className="w-6 h-6" />} */}
        </button>
      </nav>
    </div>
  );
};

export default Navbar01;
