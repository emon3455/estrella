import React from 'react';
import UpdateProduct from '../component/UpdateProduct';

const UpdateProductPage = ({params}:any) => {
    return (
        <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto'>
            <UpdateProduct id={params.id}/>
        </div>
    );
};

export default UpdateProductPage;