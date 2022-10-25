import { useState,useEffect, useCallback } from "react";
import { getDocsDb } from "../helpers/getDocsDb";

export const useFetch = ({id}) => {
  console.log(id)
    const [dataFetched, setdataFetched] = useState([]);
    const[isLoading, setIsLoading]=useState(true);

    // const getDataFetch=async()=>{
    
    //     const newData=await getData(param);
    //     setdataFetched(newData);
    //     setIsLoading(false)
    
    // }´
    const getDocsFetch=async()=>{

      const dataDocs=await getDocsDb(id)
      setdataFetched(dataDocs);
      console.log(dataDocs)
      setIsLoading(false)
      
    }
     
    useEffect(() => {
      getDocsFetch();
     
 
        //GENERA DELAY DE 2 SEG PARA SIMULAR FALLA DE CONEXIÓN
    /*     setTimeout(()=>{

          getDataFetch();

        },'2000') */
    },[useCallback(id)]);
  return {
    dataFetched,
    isLoading
  }
}
