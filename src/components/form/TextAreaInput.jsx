import React from 'react';

const TextareaInput = ({ id, label, register, errors, ...rest }) => {
    return (
        <div className="relative mb-4">
            <textarea
                id={id}
                placeholder=" "
                {...register(id, { required: `${label} is required.` })}
                className="peer w-full h-32 px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0 resize-none"
                {...rest}
            ></textarea>
            <label
                htmlFor={id}
                className="absolute top-[-4px] left-3 text-gray-500 text-sm transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-1 px-5 peer-focus:py-1 bg-white peer-focus:scale-75 peer-focus:text-blue-500"
            >
                {label}
            </label>
            {errors[id] && (
                <p className="text-red-500 text-sm">{errors[id]?.message}</p>
            )}
        </div>
    );
};

export default TextareaInput;
