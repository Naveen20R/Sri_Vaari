import React from 'react'

function RadioInput({ id ,label }) {
    return (
        <>
            <div role="button"
                className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start
                 hover:bg-light_blue hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80
                  focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <label htmlFor={label} className="flex items-center w-full px-3 py-2 cursor-pointer">
                    <div className="grid mr-3 place-items-center">
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor={label}>
                                <input name="vertical-list" id={label} type="radio"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full
                                     border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4
                                      before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4
                                       before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900
                                        checked:before:bg-gray-900 hover:before:opacity-0" />
                                <span
                                    className="absolute text-blue_01 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                    </svg>
                                </span>
                            </label>
                        </div>
                    </div>
                    <p className="cursor-pointer ml-2 text-slate-600 text-sm">
                        {label}
                    </p>
                </label>
            </div>
        </>
    )
}

export default RadioInput