"use client"

import { helpInfo } from '@/content/HelpInfo';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const MobileView = () => {
    const [active, setActive] = useState('Welcome')

    const [click, setClick] = useState(true)
    helpInfo
    return (
        <div>

            
           <div>
            <h1 className='block md:hidden'  onClick={()=>{setClick(!click)}}>
                {
                    click ?
                   <span className='  '> <FaChevronCircleRight /> </span>
                    :
                    <span className=' '><FaChevronCircleLeft/></span>
                }
            </h1>
           </div>


            <div className={click ? "hidden " : 'block md:hidden w-2/3 bg-slate-200 p-4'}>

                {
                    helpInfo.map((data: any, idx: any) => (

                        <Link onClick={() => (setActive(data.title))} href={`/help?info=${data.title.toLowerCase()}`} key={idx}>
                            <div onClick={()=>{setClick(!click)}} className={active === data.title ? "flex  justify-between items-center border border-black py-4 my-2 px-2 cursor-pointer bg-[#D0E9C6] " : "flex  justify-between items-center  border border-black py-4 my-2 px-2 cursor-pointer"}>
                                <h2 className='w-[80%] font-semibold'>{data.title}</h2>
                                <FaArrowRight />



                            </div>
                        </Link>
                    ))
                }
            </div>



        </div>
    );
};

export default MobileView;