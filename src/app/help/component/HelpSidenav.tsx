"use client"
import { helpInfo } from '@/content/HelpInfo';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';

const HelpSidenav = () => {

    const [active, setActive] = useState('Welcome')

    const [click, setClick] = useState(false)

    

   helpInfo
// 
    return (
        <div className='ml-6 mt-8'>

           <div className=' hidden md:block'>
           {
                helpInfo.map((data: any, idx:any)=>(

                   <Link onClick={()=>(setActive(data.title))} href={`/help?info=${data.title.toLowerCase()}`} key={idx}>
                    <div  className={active ===data.title ? "flex  justify-between items-center border border-black py-4 my-2 px-2 cursor-pointer bg-[#D0E9C6] ": "flex  justify-between items-center  border border-black py-4 my-2 px-2 cursor-pointer"}>
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

export default HelpSidenav;