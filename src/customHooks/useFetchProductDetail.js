import { useState,useEffect } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProductDetail = ({id}) => {

const[productDetail, setProductDetail]=useState([]);
const[isLoading, setIsLoading]=useState(true);

    useEffect(() => {

        const getItems =async()=> {

            const newDetail =await getProducts();
            setProductDetail(newDetail.filter(p => p.name === id));
            setIsLoading(false);
         
        }
        getItems();

    },[id]);

  return {
    productDetail,
        isLoading
  }
}
