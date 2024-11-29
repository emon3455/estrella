import DynamicCategoryComponent from "./component";




const DynamicCategoryPage = ({ params }: any) => {

  console.log(params?.category)



  
  return (
    <div>
    <DynamicCategoryComponent category={params?.category}/>
    <h2>{params?.category}</h2>


    </div>
  );
};

export default DynamicCategoryPage;
