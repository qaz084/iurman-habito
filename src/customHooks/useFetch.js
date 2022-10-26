import { useState,useEffect } from "react";
import { getDocsDb } from "../helpers/getDocsDb";

export const useFetch = ({id}) => {
    const [dataFetched, setdataFetched] = useState([]);
    const[isLoading, setIsLoading]=useState(true);

    // const getDataFetch=async()=>{
    
    //     const newData=await getData(param);
    //     setdataFetched(newData);
    //     setIsLoading(false)
    
    // }´
    
    useEffect(() => {
      
        const getDocsFetch=async()=>{
    
          const dataDocs=await getDocsDb(id)
          setdataFetched(dataDocs);
          setIsLoading(false)
          
        }
      
      getDocsFetch();
     
 
        //GENERA DELAY DE 2 SEG PARA SIMULAR FALLA DE CONEXIÓN
    /*     setTimeout(()=>{

          getDataFetch();

        },'2000') */
    },[id]);
  return {
    dataFetched,
    isLoading
  }
}
