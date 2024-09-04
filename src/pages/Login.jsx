import Otp from './Otp';
import Footer01 from '/src/components/footer/Footer01';
import Navbar01 from '/src/components/navbar/Navbar01';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    const [isOtpView, setIsOtpView] = useState(false);
    const [timer, setTimer] = useState(20); // Countdown timer in seconds


    const [inputValue, setInputValue] = useState('');

    // Handler to switch between email and OTP views
    const handleOtpRequest = () => {
        setIsOtpView(!isOtpView);
        // Start the timer when OTP is requested
        // setTimer(20);
    };





    const onSubmit = (data) => {
        console.log(data);
        handleOtpRequest();
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };



    let backFunc = (data) => {

       let res= Object.entries(data).some(([k, v]) => k === 'back' && v === true);
      if(res) setIsOtpView(!isOtpView)
       

    }

    return (
        <>
            <div className="bg-light_white">
                <Navbar01 />
                <div className="grid col-span-1 w-full mx-auto max-w-[555px]">
                    <div className="bg-blue_04 flex justify-center pt-[29px] items-center">
                        <img
                            src={isOtpView ? "/src/assets/images/icons/verification_icon2.svg" : "/src/assets/images/icons/verification_icon1.svg"}
                            alt="Verification Icon"
                            className="w-full h-[239px]"
                        />
                    </div>
                    <div className="bg-white_color px-10 py-8 shadow-lg">
                        <div>
                            <h2 className='text-[36px] font-bold leading-[43.2px] mb-3 text-start'>
                                {isOtpView ? 'Verify OTP' : 'Login'}
                            </h2>
                            <p className='text-[14px] font-normal leading-[16.8px] mb-6 text-start'>
                                {isOtpView ? 'Enter the OTP sent to your email' : 'Kindly Enter Email Id'}
                            </p>

                            {
                                !isOtpView ? (
                                    <>
                                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                                            <>
                                                <div className="mb-4">
                                                    <label htmlFor="email" className='block text-gray_color text-[14px] leading-[16.8px] mb-1'>
                                                        Email ID
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        {...register("email", {
                                                            required: "Email is required.",
                                                            pattern: {
                                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                message: "Email is not valid."
                                                            }
                                                        })}
                                                        onChange={(e) => {
                                                            handleInputChange(e);
                                                        }}
                                                        placeholder='demo@gmail.com'
                                                        className={`w-full bg-[#EEF1F2] focus:outline-none mb-[2px] rounded-md border-2 p-2 ${inputValue == "" ? 'border-gray-300' : 'border-b-primary_color'}`}
                                                    />
                                                    {errors.email && (
                                                        <p className="errorMsg text-red-500 text-sm">
                                                            {errors.email.message}
                                                        </p>
                                                    )}

                                                </div>
                                                <button
                                                    type="submit"
                                                    // onClick={}
                                                    className='w-full py-2 text-white bg-dark_blue flex items-center justify-center font-semibold text-base md:text-lg rounded-md'
                                                >
                                                    Send OTP
                                                </button>
                                            </>
                                        </form>
                                    </>
                                ) : (
                                    <Otp backFunc={backFunc} />
                                )
                            }


                        </div>
                    </div>
                </div>
                <Footer01 />
            </div>
        </>
    );
}

export default Login;
