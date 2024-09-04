import React from 'react';

const RadioGroup = ({ name, options, register, errors }) => {
    return (
        <div className="relative mb-4">
            <span className="text-gray-500 text-sm">Gender*</span>
            <div className="flex space-x-4 mt-2">
                {options.map(option => (
                    <label key={option.value} className="flex items-center">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            {...register(name, { required: "Gender is required." })}
                            className="form-radio h-4 w-4 text-blue-500"
                        />
                        <span className="ml-2">{option.label}</span>
                    </label>
                ))}
            </div>
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
        </div>
    );
};

export default RadioGroup;
