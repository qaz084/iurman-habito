import { useState,useEffect } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchItems = () => {

const[items, setItems]=useState([]);
const[isLoading, setIsLoading]=useState(true);

const getItems= async() => {

    const newItems =await getProducts();
    setItems(newItems);
    setIsLoading(false);

}
    // const[loading, setLoading]=useState(true);

    useEffect(() => {
           //GENERA DELAY DE 2 SEG PARA SIMULAR FALLA DE CONEXIÓN
           setTimeout(()=>{

            getItems();

        },'2000')

    }, []);

  return {
        items,
        isLoading
  }
}
