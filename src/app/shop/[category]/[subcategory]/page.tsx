

import { useFilterProductQuery } from '@/Redux/Features/admin/product/admin-product-slice';
import NoProduct from '@/shared/NoProduct';
import React from 'react';
import ShopProductCart from '../../component/ShopProductCart';
import Loading from '@/app/loading';
import SubcategoryComponenet from './component';

const SubcategoryDynamicpage = ({ params }: any) => {

 
    return (
        <div>
             {/* <h1>{params.category}</h1>
             <h1>{params.subcategory}</h1> */}
             <SubcategoryComponenet category={params.category} subCategory={params.subcategory}/>

           
        </div>
    );
};

export default SubcategoryDynamicpage;