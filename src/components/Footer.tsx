import CButton from '@/utils/CButton/CButton';
import CInput from '@/utils/CInput/CInput';
import React from 'react';
import { IoMail, IoPhoneLandscape } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div >

            {/* first footer */}
            <div className='px-6 flex flex-col md:flex-row justify-around gap-4 py-10 bg-slate-700'>

                <div className='space-y-3'>
                    <div className=' flex gap-2 justify-center md:justify-start items-center text-sm md:text-base lg:text-xl text-white '>
                        <IoMail className='text-orange-400' />
                        <h1 className='uppercase '>GET SPECIAL DISCOUNTS IN YOUR INBOX</h1>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full   gap-1   '>
                        <CInput placeholder='Enter email and get offer and more' className='h-10 float-left outline-none md:w-[260px] lg:w-[330px]    border border-b border-white border-x-0 border-t-0 rounded-none ' />
                        <CButton variant="contained" className='bg-amber-600 float-right flex-1 h-10' fullWidth > Subscribe </CButton>
                    </div>
                </div>


                <div>

                    <div className='flex gap-2 justify-center md:justify-start items-center text-sm md:text-base lg:text-xl text-white'>
                        <FaPhoneAlt className='text-orange-400' />
                        <h1>FOR ANY HELP YOU MAY CALL US AT</h1>

                    </div>
                    <div className=' text-center md:text-left text-slate-400'>
                        <p >
                            +8809677666888

                        </p>
                        <p>Open 24 Hours a Day, 7 Days a week</p>
                    </div>

                </div>

            </div>

            {/* 2nd footer */}

            <div className='bg-[#091d3b] uppercase py-10 px-6'>

                <div className='grid grid-cols-2 gap-2 md:grid-cols-4 max-w-6xl mx-auto text-white'>

                    <div className='space-y-4'>
                        <h1>ESTEELLA</h1>

                        <div className='text-xs flex flex-col gap-1 cursor-pointer'>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> TERMS & CONDITIONS</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> PRIVACY POLICY</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> CANCELLATION & RETURN POLICY</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> FAQS</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> CONTACT US</Link>

                            <div className='flex text-base gap-1'>
                                <Link href={'/xxx'} className='cursor-pointer bg-black rounded-full p-2'><FaFacebook /></Link>
                                <Link href={'/xxx'} className='cursor-pointer bg-black rounded-full p-2'><FaTwitter /></Link>
                                <Link href={'/xxx'} className='cursor-pointer bg-black rounded-full p-2'><FaYoutube /></Link>
                                <Link href={'/xxx'} className='cursor-pointer bg-black rounded-full p-2'><FaInstagram /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1>MEN</h1>

                        <div className='text-xs flex flex-col gap-1'>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> SHORT SLEEVE</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> LONG SLEEVE</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> POLO</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> SHIRT</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> HOODIE</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> COMFY TROUSER</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> SPORTS TROUSER</Link>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1>W0MEN</h1>

                        <div className='text-xs flex flex-col gap-1'>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> COMFY TROUSER</Link>
                            <p className='text-sm font-semibold'> FACE MASK</p>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> CLASSIC</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> DESIGNER EDITION</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> KIDS MASK</Link>
                            <p className='text-sm font-semibold'> SPORTS</p>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> JERSEY</Link>


                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1>KIDS</h1>

                        <div className='text-xs flex flex-col gap-1'>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> MAGGIE</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> SHORT SLEEVE</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> LONG SLEEVE</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> SHORTS</Link>
                            <Link href={'/xxx'} className='transform  duration-300 hover:ml-2 hover:text-amber-500'> SHORTS</Link>
                        </div>
                    </div>
                </div>



            </div>

            {/* 3rd footer */}

            <div className='bg-white space-y-2 py-4 mx-6 '>
                <p className='text-black text-sm  text-center'>ESTRELLA prints a huge variety of custom clothing like T-shirts, hoodies and more. Your order is handled daily with a lot of ❤️️ from BANGLADESH and delivered worldwide!</p>
                <p className='text-gray-400 text-sm  text-center'>Copyright © 2024 ESTRELLA Limited. All Right Reserved</p>

            </div>

        </div>
    );
};

export default Footer;