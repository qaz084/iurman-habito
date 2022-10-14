import { useState,useEffect } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProductDetail = ({id}) => {

  
const[productDetail, setProductDetail]=useState([]);
const[isLoading, setIsLoading]=useState(true);


  
    useEffect(() => {

        const getItems =async()=> {

            const newDetail =await getProducts();
            console.log('productDetail',newDetail[0].name);
            setProductDetail(newDetail.filter(p => p.name === id));
            setIsLoading(false);
            // console.log('product id',productDetail[0].name);
        
        }
        getItems();

    },[id]);

  return {
    productDetail,
        isLoading
  }
}
