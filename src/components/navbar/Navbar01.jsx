import React, { useState } from 'react';
import { BsFilterRight } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

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
      <div
        className={`fixed top-0 left-0 h-full bg-[#88D2FF] transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        style={{ width: '50%' }}
      >
        <button
          onClick={closeSidebar}
          className="text-white absolute top-4 right-4"
        >
          <IoCloseSharp className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li><a href="#home" className="text-white hover:text-gray-800">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-800">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-800">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-800">Contact</a></li>
        </ul>
      </div>

      {/* Top Navbar for Larger Screens */}
      <nav className="bg-gray-800 p-4 flex items-center justify-between md:justify-start">
        <div className="text-white text-2xl font-bold">MyApp</div>
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <a href="#services" className="text-white hover:text-gray-400">Services</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white bg-blue-600 p-2 rounded-md md:hidden"
        >
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
