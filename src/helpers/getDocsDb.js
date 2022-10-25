import { db } from "../firebase/firebase";
import  {getDocs,collection,query,where}  from 'firebase/firestore';


export const getDocsDb=async(id)=>{

    const categoryCollection=collection(db,'categories');
    const productsCollection=collection(db,'products');
    const q=query(productsCollection,where('category','==',`${id}`));
   

    
    const response=await getDocs(id?q:categoryCollection);
    const products= response?.docs.map((item)=>{
            return{
                ...item.data(),
                id:item.id
            };
    });

    return products;
}

