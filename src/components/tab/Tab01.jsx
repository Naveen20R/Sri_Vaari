import React, { useState } from 'react';

function Tab01() {
    const [activeTab, setActiveTab] = useState('info');

    return (
        <div className="p-4">
            {/* Tab Headers */}
            <div className="flex space-x-4">
                <button
                    onClick={() => setActiveTab('info')}
                    className={`py-2 px-4 text-lg font-semibold ${activeTab === 'info' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
                >
                    Product Information
                </button>
                <button
                    onClick={() => setActiveTab('shipping')}
                    className={`py-2 px-4 text-lg font-semibold ${activeTab === 'shipping' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
                >
                    Shipping & Returns
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === 'info' && (
                    <div className="relative overflow-x-auto">
                        <table className="w-full md:w-[80%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-dashed">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Product Name
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'shipping' && (
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Shipping & Returns</h2>
                        <p>Information about shipping and returns goes here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tab01;
