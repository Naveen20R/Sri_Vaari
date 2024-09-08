import React, { useState } from 'react';
import { cardData_1 } from '/src/datas/CardData.js';
import Card01 from '/src/components/card/Card01';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagenation() {
    const totalAmount = 100; // Total number of items
    const itemsPerPage = 12; // Number of items per page
    const totalPages = Math.ceil(totalAmount / itemsPerPage); // Calculate total pages

    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Slice cardData_1 to display only items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = cardData_1.slice(startIndex, startIndex + itemsPerPage);

    // Generate the pages to show
    const getPagesToShow = () => {
        const pagesToShow = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // If total pages are less than the max visible, show all
            for (let i = 1; i <= totalPages; i++) {
                pagesToShow.push(i);
            }
        } else {
            if (currentPage < 4) {
                // Show the first few pages
                for (let i = 1; i <= 4; i++) {
                    pagesToShow.push(i);
                }
                pagesToShow.push('...');
                pagesToShow.push(totalPages);
            } else if (currentPage > totalPages - 3) {
                // Show the last few pages
                pagesToShow.push(1);
                pagesToShow.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pagesToShow.push(i);
                }
            } else {
                // Show a range around the current page
                pagesToShow.push(1);
                pagesToShow.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pagesToShow.push(i);
                }
                pagesToShow.push('...');
                pagesToShow.push(totalPages);
            }
        }
        return pagesToShow;
    };

    const pagesToShow = getPagesToShow();

    return (
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 custom_sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {currentItems.map(card => (
                    <div key={card.id} className='flex justify-center'>
                        <Card01
                            productDetail={true}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                            originalPrice={card.originalPrice}
                            discountedPrice={card.discountedPrice}
                            discount={card.discount}
                            heartIcon={card.heartIcon}
                        />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center rounded-lg p-4 space-x-4 bg-white shadow-md mt-4">
                <button
                    className={`flex items-center border-2 px-2 py-1 rounded-md focus:outline-none border-dark_blue ${currentPage === 1 ? 'bg-dark_blue opacity-50 cursor-not-allowed' : 'bg-dark_blue text-white border-dark_blue hover:bg-dark_blue-dark'}`}
                    aria-label="Previous Page"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft />
                    <span className="hidden md:inline ml-2">Previous</span>
                </button>
                <div className="flex gap-1  max-w-[230px] overflow-hidden">
                    {pagesToShow.map((page, index) => (
                        <span
                            key={index}
                            className={`text-lg font-semibold rounded-md px-4 py-1 ${page === currentPage ? 'bg-dark_blue text-white' : page === '...' ? 'bg-gray-200 text-gray-700' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => page !== '...' && setCurrentPage(page)}
                        >
                            {page}
                        </span>
                    ))}
                </div>
                <button
                    className={`flex items-center border-2 px-2 py-1 rounded-md focus:outline-none ${currentPage === totalPages ? 'bg-dark_blue opacity-50 cursor-not-allowed' : 'bg-dark_blue text-white border-dark_blue hover:bg-dark_blue-dark'}`}
                    aria-label="Next Page"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}>
                    <span className="mr-2 font-semibold">Next</span>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Pagenation;
