import Image from 'next/image';
import React from 'react';
import img from '../assets/no-products.jpg'

const NoProduct = () => {
    return (
        <div className='flex justify-center'>
            <Image src={img} height={800} width={800} alt='No Product Found'/>
        </div>
    );
};

export default NoProduct;