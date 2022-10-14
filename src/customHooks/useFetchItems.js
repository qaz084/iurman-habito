import { useState,useEffect } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchItems = ({id}) => {

  
const[items, setItems]=useState([]);
const[isLoading, setIsLoading]=useState(true);


  
    useEffect(() => {

        const getItems =async()=> {

            const newItems =await getProducts();
            console.log('newitemsssss',newItems);
            setItems(newItems.filter(p => p.category === id));
            setIsLoading(false);
        
        }
           //GENERA DELAY DE 2 SEG PARA SIMULAR FALLA DE CONEXIÓN
           setTimeout(()=>{

            getItems();

        },'2000')

    },[id]);

  return {
        items,
        isLoading
  }
}
