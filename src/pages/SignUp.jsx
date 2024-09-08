import React from 'react';
import Footer01 from '/src/components/footer/Footer01';
import Navbar01 from '/src/components/navbar/Navbar01';
import { useForm } from "react-hook-form";
import TextInput from '/src/components/form/TextInput';
import NumberInput from '/src/components/form/NumberInput';
import TextareaInput from '/src/components/form/TextareaInput';
import RadioGroup from '/src/components/form/RadioGroup';
import DateInput from '/src/components/form/DateInput';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    let navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        navigate('/login');
        // Handle OTP request here
    };

    return (
        <>
            <div className="bg-light_white">
                <Navbar01 />
                <div className="grid col-span-1 w-full mx-auto max-w-[555px]">
                    <div className="bg-white_color px-10 py-8 shadow-lg">
                        <div>
                            <h2 className='text-[36px] font-normal leading-[43.2px] mb-3 text-start'>
                                Create Account
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextInput
                                    id="name"
                                    label="Your Name*"
                                    register={register}
                                    errors={errors}
                                    minLength={2}  // Minimum length for name
                                />

                                <NumberInput
                                    id="mobileNumber"
                                    label="Mobile Number*"
                                    register={register}
                                    maxLength={10}
                                    errors={errors}
                                />
                                <NumberInput
                                    id="pincode"
                                    label="Pincode*"
                                    register={register}
                                    maxLength={6}
                                    errors={errors}
                                />
                                <TextareaInput
                                    id="address"
                                    label="Address*"
                                    register={register}
                                    errors={errors}
                                />
                                <TextInput
                                    id="city"
                                    label="City*"
                                    register={register}
                                    errors={errors}
                                />
                                <TextInput
                                    id="state"
                                    label="State*"
                                    register={register}
                                    errors={errors}
                                />
                                <RadioGroup
                                    name="gender"
                                    options={[
                                        { value: 'male', label: 'Male' },
                                        { value: 'female', label: 'Female' }
                                    ]}
                                    register={register}
                                    errors={errors}
                                />
                                <DateInput
                                    id="dob"
                                    label="Date of Birth*"
                                    register={register}
                                    errors={errors}
                                />

                                <button
                                    type="submit"
                                    className='w-full py-2 text-white bg-dark_blue flex items-center justify-center font-semibold text-base md:text-lg rounded-md'
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer01 />
            </div>
        </>
    );
}

export default SignUp;
