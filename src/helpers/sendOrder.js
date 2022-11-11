import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

export const sendOrder = async (name,email,phone,cart,totalCost) => {

 const items=cart.map(item =>{

  const obj= {
    name:item.name,
    quantity:item.count,
    price:item.price
    };
    return obj;
  })

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const order = {
    buyer: {name:name,email:email, phone:phone,},
    items: items,
    total: totalCost,
    date: serverTimestamp(),
  };
  try{
    const orderResult = await addDoc(ordersCollection, order);
    return orderResult.id;
  }catch(e){
    console.log('Error en Order Id:',e)
  }
};
