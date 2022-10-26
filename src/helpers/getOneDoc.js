import { db } from "../firebase/firebase";
import  {getDoc,collection,doc}  from 'firebase/firestore';


export const getOneDocDb=async(id)=>{

    
    const productsCollection=collection(db,'products');
    const refDoc=doc(productsCollection,id);
    
    
   getDoc(refDoc)
   .then(result=>{

    return{
        ...result.data(),
        id:result.id
    }
   })
    
}

