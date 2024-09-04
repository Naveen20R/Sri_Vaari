import React from 'react';

const NumberInput = ({ id, label, register, maxLength, errors, ...rest }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        if (!/^\d*$/.test(value)) {
            // Remove non-numeric characters
            e.target.value = value.replace(/\D/g, '');
        }
    };
    const pattern = new RegExp(`^[0-9]{${maxLength}}$`);
    return (
        <div className="relative mb-4">
            <input
                type="tel"
                id={id}
                placeholder=" "
                maxLength={maxLength}
                {...register(id, {
                    required: `${label} is required.`,
                    pattern: {
                        value:pattern,
                        message: `Must be exactly ${maxLength} digits.`
                    }
                })}
                onChange={handleChange}
                className="peer w-full h-12 px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0"
                {...rest}
            />
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

export default NumberInput;
