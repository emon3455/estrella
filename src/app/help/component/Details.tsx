"use client"
import { helpInfo } from '@/content/HelpInfo';
import React, { useEffect } from 'react';

const Details = ({title}: any) => {

    const helpData = helpInfo
    

    

  
    const find = helpInfo.find((data) => data.title.toLocaleLowerCase() === title);
      
   
    return (
        <div className='my-8  mx-4'>

            <h2 className=' uppercase text-center text-2xl font-semibold mx-8'>{title}</h2>
            <hr className=' bg-black h-1' />
            <p>
                {find?.description}
            </p>
            
        </div>
    );
};

export default Details;