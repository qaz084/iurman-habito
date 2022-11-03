import { useState,useEffect } from "react";
 import { getDocsDb, } from "../helpers/getDocsDb";

export const useFetch = ({id}) => {
  
  
  
      const [dataFetched, setdataFetched] = useState([]);
      const[isLoading, setIsLoading]=useState(true);
      console.log(1);

  useEffect(() => {
    console.log(2);
        const getDocsFetch=async()=>{
            try{

              const dataDocs=await getDocsDb(id)
              setdataFetched(dataDocs);
              setIsLoading(false)
            }
            catch(e){
                console.log('ERROR:',e)
            }
        }
      
      getDocsFetch();

    },[id]);

  return {
    dataFetched,
    isLoading
  }
}
