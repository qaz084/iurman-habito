import { db } from "../firebase/firebase";
import  {getDocs,collection}  from 'firebase/firestore';

export const getDbData=async()=> {

  const categoryCollection=collection(db,'categories');
  const productsCollection=collection(db,'products');
 

  const categories=await getDocs(categoryCollection);
  
  const products=await getDocs(productsCollection);

  const dataCategories=categories?.docs.map((category)=>{
     
      return{
        ...category.data()
      }
  });
  const dataProducts=products?.docs.map((product)=>{
     
      return{
        ...product.data()
      }
  });

  const totalData=[...dataCategories,...dataProducts]

  return {
    totalData
}
    
  }
  