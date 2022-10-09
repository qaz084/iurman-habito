import { useState,useEffect } from "react";
import { getDataCategories } from "../helpers/getDataCategories";

export const useFetchCategories = () => {

    const [categories, setcategories] = useState([]);
    const[isLoading, setIsLoading]=useState(true);

    const getCategories=async()=>{
    
        const newCategories=await  getDataCategories();
        setcategories(newCategories);
        setIsLoading(false)
    
    }
     
    useEffect(() => {
        //GENERA DELAY DE 2 SEG PARA SIMULAR FALLA DE CONEXIÓN
        setTimeout(()=>{

            getCategories();

        },'2000')
    
    }, []);
    

  return {
    categories,
    isLoading

  }
}
