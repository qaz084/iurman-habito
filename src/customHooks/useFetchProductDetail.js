import { useState,useEffect } from "react";
import { db } from "../firebase/firebase";
import  {getDoc,collection,doc}  from 'firebase/firestore';


export const useFetchProductDetail = ({id}) => {

const[productDetail, setProductDetail]=useState([]);
const[isLoading, setIsLoading]=useState(true);

useEffect(() => {

  const productsCollection=collection(db,'products');
  const refDoc=doc(productsCollection,id);
  
  getDoc(refDoc)
  .then((result)=>{
   
    setProductDetail({
      ...result.data(),
      id:result.id,
    });
  
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(setIsLoading(false));


    },[id]);

  return {
    productDetail,
        isLoading
  }
}
