import DynamicCategoryComponent from "./component";




const DynamicCategoryPage = ({ params }: any) => {

  console.log(params?.category)



  
  return (
    <div>
    <DynamicCategoryComponent category={params?.category}/>
   


    </div>
  );
};

export default DynamicCategoryPage;
