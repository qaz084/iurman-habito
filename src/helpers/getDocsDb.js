import { db } from "../firebase/firebase";
import  {getDoc,getDocs,doc,collection,query,where}  from 'firebase/firestore';

export const getDocsDb=async(id)=>{

    const categoryCollection=collection(db,'categories');
    const productsCollection=collection(db,'products');
    const q=query(productsCollection,where('category','==',`${id}`));
    const refDoc=doc(productsCollection,id);

    const response=await getDocs(id?q:categoryCollection);
    const oneDocRespone=await getDoc(refDoc)

    const product=()=>{

        return{
            ...oneDocRespone.data(),
            id:oneDocRespone.id
        }
    }
        
    const products= response.docs.map((item)=>{
        
            return{
                ...item.data(),
                id:item.id
            };
    });

    return {
        products,
        product
    }
}

