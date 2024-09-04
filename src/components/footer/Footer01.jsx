import React from 'react';

function Footer01() {
    return (
        <div className="bg-dark text-white_color py-12 px-4 md:px-8 lg:px-12 mt-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Sree Vaari</h3>
                    <p className="text-sm leading-relaxed">
                        Our passion for fashion, commitment to quality, and celebration of diverse styles set us apart in the world of ethnic wear.
                    </p>
                </div>
                <div className="p-4">
                    <ul className="list-none pl-0">
                        <li className='uppercase font-bold text-xl mb-2'>Information</li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">My Account</a>
                        </li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">About Us</a>
                        </li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        </li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Services</a>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <ul className="list-none pl-0">
                        <li className='uppercase font-bold text-xl mb-2'>Customer Service</li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">My Account</a>
                        </li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">About Us</a>
                        </li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        </li>
                        <li className="text-sm mb-1">
                            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Services</a>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <ul className="list-none pl-0">
                        <li className='uppercase font-bold text-xl mb-2'>Contact Us</li>
                        <li className="text-sm mb-3">
                            <div className="flex items-center gap-2">
                                <img src="/src/assets/images/icons/location.svg" className='w-6 h-6' alt="location_icon" />
                                <p className="text-sm">Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
                            </div>
                        </li>
                        <li className="text-sm mb-3">
                            <div className="flex items-center gap-2">
                                <img src="/src/assets/images/icons/email.svg" className='w-6 h-6' alt="email_icon" />
                                <p className="text-sm">support@srivarri.com</p>
                            </div>
                        </li>
                        <li className="text-sm mb-3">
                            <div className="flex items-center gap-2">
                                <img src="/src/assets/images/icons/call.svg" className='w-6 h-6' alt="phone_icon" />
                                <p className="text-sm">+91 800 854 3680</p>
                            </div>
                        </li>
                        <li className='uppercase font-bold text-xl mb-2'>Follows</li>
                        <li className="flex gap-2">
                            <a href="#">
                                <img src="/src/assets/images/icons/whatsapp_icon.svg" alt="whatsapp_icon" className="w-7 h-7" />
                            </a>
                            <a href="#">
                                <img src="/src/assets/images/icons/insta_icon.svg" alt="insta_icon" className="w-7 h-7" />
                            </a>
                            <a href="#">
                                <img src="/src/assets/images/icons/facebook_icon.svg" alt="facebook_icon" className="w-7 h-7" />
                            </a>
                            <a href="#">
                                <img src="/src/assets/images/icons/utube_icon.svg" alt="utube_icon" className="w-7 h-7" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer01;
