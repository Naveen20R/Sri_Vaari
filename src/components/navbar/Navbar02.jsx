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
      <div className={`fixed top-0 left-0 h-full bg-[#88D2FF] transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        style={{ width: '50%' }}>
        <button onClick={closeSidebar}
          className="text-white absolute top-4 right-4">
          <IoCloseSharp className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li><a href="#home" className="text-white hover:text-gray-800">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-800">Kurtis</a></li>
          <li><a href="#services" className="text-white hover:text-gray-800">Sarees</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-800">Accessories</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-800">More</a></li>
        </ul>
      </div>

      {/* Top Navbar for Larger Screens */}
      <nav className="bg-primary py-2 px-4 md:px-20 flex items-center gap-4  justify-between md:justify-start border border-red-500">
        <div className="text-white text-2xl font-bold">Sri Vaari</div>
        <div className="text-[16px] font-bold hidden md:flex flex-grow justify-start space-x-4 border border-red-500">
          <a href="#home" className="leading-[19.2px] text-white hover:text-black">Home</a>
          <a href="#about" className="leading-[19.2px] text-white hover:text-black">Kurtis</a>
          <a href="#services" className="leading-[19.2px] text-white hover:text-black">Sarees</a>
          <a href="#contact" className="leading-[19.2px] text-white hover:text-black">Accessories</a>
          <a href="#contact" className="leading-[19.2px] text-white hover:text-black">More</a>
        </div>

        <div className="border px-5 bg-white grid grid-cols-[1fr_auto] border-red-700 rounded-[40px] items-center">
          <form action="" className="flex w-full">
            <input
              type="text"
              className="w-full p-2 border-none rounded-l-[40px] focus:outline-none"
              placeholder="Search For The Item"
            />
          </form>
          <div className="flex items-center justify-center ml-2">
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-4 xl:grid-cols-2 xl:gap-6 flex-grow justify-end">
          <a href="#home" className="flex items-center justify-center gap-2 hover:text-black">
            <img className='w-[24px] h-[24px]' src="/src/assets/images/icons/profile-circle.svg" alt="profile-icon" />
            <span className='text-white_color text-[12px] font-bold'>Profile</span>
          </a>
          <a href="#home" className="flex items-center justify-center gap-2 hover:text-black">
            <img className='w-[24px] h-[24px]' src="/src/assets/images/icons/heart.svg" alt="wishlist-icon" />
            <span className='text-white_color text-[12px] font-bold'>Wishlist</span>
          </a>
          <a href="#home" className="flex items-center justify-center gap-2 hover:text-black">
            <img className='w-[24px] h-[24px]' src="/src/assets/images/icons/shopping-bag.svg" alt="cart-icon" />
            <span className='text-white_color text-[12px] font-bold'>Cart</span>
          </a>
        </div>

        <button onClick={toggleSidebar}
          className="text-white bg-blue-600 p-2 rounded-md md:hidden" >
          {isOpen ? <IoCloseSharp className="w-6 h-6" /> : <BsFilterRight className="w-6 h-6" />}
        </button>
      </nav>

      {/* Main Content */}
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
        <p className="mt-4">This is a responsive navbar example with a sidebar on mobile and a horizontal navbar on larger screens.</p>
      </main>
    </div>
  );
};

export default Navbar01;
