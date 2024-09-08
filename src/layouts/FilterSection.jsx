import React, { useState } from 'react';
import RightArrow01 from '/src/assets/images/icons/right_arrow_icon.svg';
import { useLocation } from 'react-router-dom';
import { filterData } from '/src/datas/CardData.js';
import RangeInput from '/src/components/form/RangeInput';
import RadioInput from '/src/components/form/RadioInput';
import CheckboxInput from '/src/components/form/CheckboxInput';
import { IoCloseSharp } from 'react-icons/io5';
import Pagenation from '/src/components/pagenation/Pagenation';
import { BsFillFilterSquareFill } from "react-icons/bs";

function FilterSection() {
    let { pathname } = useLocation();
    let [search, setSearch] = useState({ search_1: false });
    let [isSidebarOpen, setIsSidebarOpen] = useState(false);

    let { search_1 } = search;

    const handleReset = () => {
        setSearch(prev => ({
            ...prev,
            search_1: !search_1
        }));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
        <div className="bg-white_color">
            <div className="mx-4 py-4 md:mx-6 md:py-6 lg:mx-8 lg:my-0 lg:py-8">
                {/* Breadcrumb */}
                <div className="mb-6 flex items-center space-x-2">
                    <div className='text-xl md:text-2xl lg:text-3xl font-bold flex items-center space-x-2'>
                        <h1 className='mb-2'>Home</h1>
                        <img src={RightArrow01} className='w-6 h-6 md:w-8 md:h-8' alt="Right Arrow" />
                        <h2 className='text-lg md:text-xl lg:text-2xl text-blue-500 font-bold'>
                            {pathname.startsWith('/') ? pathname.split('/').join('') : pathname}
                        </h2>
                    </div>
                </div>

                {/* Main filter */}
                <div className="relative flex flex-col md:flex-row">
                    {/* Mobile Filter Button */}
                    <div className="md:hidden block">
                        <div className="bg-blue_03 gap-2 flex w-full py-2 px-4" onClick={toggleSidebar}>
                            <BsFillFilterSquareFill className='text-[25px] text-blue_01' />
                            <span className='font-bold'>Filter</span>
                        </div>
                    </div>

                    {/* Mobile Sidebar */}
                    <div className={`fixed inset-0 bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 overflow-y-auto`}>
                        <div className="flex justify-between items-center p-4 border-b-2">
                            <h2 className='text-[20px] leading-[24px] font-bold'>Filter</h2>
                            <button onClick={toggleSidebar} className='text-[16px] leading-[19px] font-bold text-primary_color'>
                                <IoCloseSharp className="w-[20px] h-[19px]" />
                            </button>
                        </div>
                        <div className="p-4">
                            <form action="">
                                <div className="border-b-2 mb-4 max-h-[250px] overflow-y-auto">
                                    <div className="flex mb-2 justify-between items-center">
                                        <h2 className='text-[20px] leading-[24px] font-bold'>Select Main Category</h2>
                                        <button type='reset' className='text-[16px] leading-[19px] font-bold text-primary_color'>Clear All</button>
                                    </div>
                                    {
                                        filterData.map(({ id, label }) => (
                                            <div key={id}>
                                                <RadioInput id={id} label={label} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="border-b-2 mb-2 max-h-[250px] overflow-y-auto">
                                    <div className="flex mb-1 mx-3 justify-between items-center relative">
                                        <h2 className='text-[20px] leading-[24px] font-bold'>Categories</h2>
                                        {
                                            search_1 && <input type="text" placeholder='Search For Categories' className='bg-light_gray px-2 py-1 focus:outline-none rounded-md absolute mt-[2px]' />
                                        }
                                        <button type='button' onClick={handleReset} className='text-[16px] leading-[19px] rounded-md bg-light_gray p-[7px] font-bold text-primary_color'>
                                            {
                                                search_1 ? <IoCloseSharp className="w-[20px] h-[19px]" /> : <img className='w-[20px] h-[19px]' src="/src/assets/images/icons/search_icon.svg" alt="search_icon" />
                                            }
                                        </button>
                                    </div>
                                    {
                                        filterData.map(({ id, label }) => (
                                            <div key={id}>
                                                <CheckboxInput id={id} label={label} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="border-b-2 mb-2">
                                    <RangeInput />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Filter on larger screens */}
                    <div className="hidden md:block md:w-[300px] bg-white shadow-md border-2 border-gray-200 p-4 overflow-y-auto">
                        <nav className="flex flex-col gap-4">
                            <form action="">
                                <div className="border-b-2 mb-4 max-h-[250px] overflow-y-auto">
                                    <div className="flex mb-2 justify-between items-center">
                                        <h2 className='text-[20px] leading-[24px] font-bold'>Filter</h2>
                                        <button type='reset' className='text-[16px] leading-[19px] font-bold text-primary_color'>Clear All</button>
                                    </div>
                                    {
                                        filterData.map(({ id, label }) => (
                                            <div key={id}>
                                                <RadioInput id={id} label={label} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="border-b-2 mb-4 max-h-[250px] overflow-y-auto">
                                    <div className="flex mb-2 justify-between items-center relative">
                                        <h2 className='text-[20px] leading-[24px] font-bold'>Categories</h2>
                                        {
                                            search_1 && <input type="text" placeholder='Search For Categories' className='bg-light_gray px-2 py-1 focus:outline-none rounded-md absolute mt-[2px]' />
                                        }
                                        <button type='reset' onClick={handleReset} className='text-[16px] leading-[19px] rounded-md bg-light_gray p-[7px] font-bold text-primary_color'>
                                            {
                                                search_1 ? <IoCloseSharp className="w-[20px] h-[19px]" /> : <img className='w-[20px] h-[19px]' src="/src/assets/images/icons/search_icon.svg" alt="search_icon" />
                                            }
                                        </button>
                                    </div>
                                    {
                                        filterData.map(({ id, label }) => (
                                            <div key={id}>
                                                <CheckboxInput id={id} label={label} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="border-b-2 mb-4">
                                    <RangeInput />
                                </div>
                            </form>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-0 mt-4 md:pl-0">
                        <Pagenation />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FilterSection;
