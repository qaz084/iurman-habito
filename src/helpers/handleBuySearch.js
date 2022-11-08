//"Yzytpv82fIQSOAuYoY4p"

import { db } from "../firebase/firebase";
import { getDoc, collection,doc} from "firebase/firestore";

export const handleBuySearch =async (id)=> {
    const ordersCollection = collection(db, "orders");
    const refDoc = doc(ordersCollection,id);

    
    const response= await getDoc(refDoc);
    
    console.log('PRODUCT',response)
      
      return{
          ...response.data(),
          id:response.id
      }

 

  

 
}
