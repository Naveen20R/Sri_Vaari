import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

function Otp({ backFunc }) {
    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        mode: 'onChange'
    });
    const [timer, setTimer] = useState(20);
    const otpInputs = useRef([]);

    useEffect(() => {
        let interval = null;

        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            setValue(`otp[${index}]`, value); // Update the value in react-hook-form
            if (index < otpInputs.current.length - 1) {
                otpInputs.current[index + 1].focus();
            }
        } else if (value === '') {
            setValue(`otp[${index}]`, ''); // Clear value
            if (index > 0) {
                otpInputs.current[index - 1].focus();
            }
        }
    };

    const handleFocus = (e) => {
        e.target.select(); // Highlight text on focus
    };

    const handleResendOtp = () => {
        setTimer(20);
    };

    const onSubmit_1 = (data) => {
        // Check if there are errors
        if (Object.keys(errors).length === 0) {
            setTimer(0); // Stop the timer
            alert('OTP Verified Successfully!');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit_1)}>
                <div className="flex justify-center items-center space-x-2 mb-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Controller
                            key={index}
                            name={`otp[${index}]`}
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Otp Is Required",
                                pattern: {
                                    value: /^[0-9]$/,
                                    message: "Enter a single digit"
                                }
                            }}
                            render={({ field }) => (
                                <div className="relative">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        {...field}
                                        ref={(el) => otpInputs.current[index] = el}
                                        onChange={(e) => handleOtpChange(e, index)}
                                        onFocus={handleFocus}
                                        className={`w-[52px] h-[50px] bg-[#EEF1F2] ${field.value ? 'border-b-primary_color' : 'border-gray-300'} rounded-md border-2 p-2 text-center focus:outline-none`}
                                    />
                                    {errors.otp && errors.otp[index] && (
                                        <p className="absolute text-red-500 text-xs mt-1">
                                            {errors.otp[index]?.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    ))}
                </div>
                <h5 className={`mb-3 ${timer <= 5 ? 'text-red-500' : ''}`}>
                    Resend OTP in {timer} Sec
                </h5>
                {timer === 0 && (
                    <button
                        type="button"
                        onClick={handleResendOtp}
                        className='w-full py-2 text-white bg-dark_blue flex items-center justify-center font-semibold text-base md:text-lg rounded-md'
                    >
                        Resend OTP
                    </button>
                )}
                {timer > 0 && (
                    <button
                        type="submit"
                        className='w-full py-2 text-white bg-dark_blue flex items-center justify-center font-semibold text-base md:text-lg rounded-md'
                    >
                        Verify OTP
                    </button>
                )}
                <button
                    onClick={() => { backFunc({back:true}) }}
                    type="button"
                    className='w-full py-2 mt-2 bg-light_gray text-gray_color active:bg-black hover:bg-slate-600 flex items-center justify-center font-semibold text-base md:text-lg rounded-md'
                >
                    Back
                </button>
            </form>
        </>
    );
}

export default Otp;
