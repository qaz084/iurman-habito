import { useEffect, useState } from "react";


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
        

      
    }
    getDbDataFetched();
    
// getValue();

  },[info])
  return info

}
