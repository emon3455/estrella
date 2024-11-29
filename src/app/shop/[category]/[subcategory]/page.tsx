import React from 'react';

const SubcategoryDynamicpage = ({ params }: any) => {
    return (
        <div>
             <h1>{params.subcategory}</h1>
        </div>
    );
};

export default SubcategoryDynamicpage;