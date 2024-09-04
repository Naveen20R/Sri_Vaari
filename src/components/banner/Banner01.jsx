import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

const carouselItems = [
  {
    imgSrc: "/src/assets/images/explore/exp_1.svg",
    alt: "Category Image 1",
    text: "New Designer Jewellery collection & Trendy Accessories",
    buttonText: "Shop Now",
    link: "#shop-now-1"
  },
  {
    imgSrc: "/src/assets/images/explore/exp_2.svg",
    alt: "Category Image 2",
    text: "Elegant Watches Collection",
    buttonText: "Discover More",
    link: "#discover-more"
  },
  {
    imgSrc: "/src/assets/images/explore/exp_3.svg",
    alt: "Category Image 3",
    text: "Exclusive Handbags Sale",
    buttonText: "View Deals",
    link: "#view-deals"
  },
  {
    imgSrc: "/src/assets/images/explore/exp_4.svg",
    alt: "Category Image 4",
    text: "Trendy Accessories",
    buttonText: "Explore",
    link: "#explore"
  },
  {
    imgSrc: "/src/assets/images/explore/exp_5.svg",
    alt: "Category Image 5",
    text: "Handcrafted Scarves",
    buttonText: "Shop Now",
    link: "#shop-now-2"
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTextVisible(false);
    const timeout = setTimeout(() => {
      setTextVisible(true);
    }, 1000); // Delay to match the text animation duration

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 1000); // Show text after animation
  };

  const { imgSrc, alt, text, buttonText, link } = carouselItems[currentIndex];
  const words = text.split(' ');

  return (
    <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden bg-gray-100 shadow-lg">
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-1500 ease-in-out  ${textVisible ? 'scale-110' : 'scale-100'}`}
      />
      {textVisible && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 transition-opacity duration-1000 opacity-100">
          <div className="text-white p-4 md:p-6 max-w-lg mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="text-xl font-bold opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
            <a
              href={link}
              className={`mt-4 inline-flex items-center px-3 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full
                 shadow-lg transition-transform transform ${textVisible ? 'scale-100' : 'scale-0'} duration-900`}
            >
              <span className='px-2'>{buttonText}</span> <FaArrowRight />
            </a>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500 scale-150' : 'bg-gray-400'} transition-transform duration-300`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
