import { useEffect, useState } from "react";
import { getDbData } from "./getDbData";


export const useGetSearchBarData = () => {
  
  const [info, setInfo] = useState([]);
 
  // const [targetValue, setTargetValue] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // const newInfo=[...info]
  
  //   const getValue = (value) => {
    //    setTargetValue(value);
    // }
    
    useEffect(()=>{
      
      const getDbDataFetched=async()=>{
        
      const newData =await getDbData()
      setInfo(newData)
    }
    getDbDataFetched();
    
// getValue();

  },[info])
  return info

}
