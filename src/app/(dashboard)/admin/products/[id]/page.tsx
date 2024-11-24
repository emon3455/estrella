import React from 'react';
import UpdateProduct from '../component/UpdateProduct';

const UpdateProductPage = ({params}) => {
    return (
        <div>
            <UpdateProduct id={params.id}/>
        </div>
    );
};

export default UpdateProductPage;