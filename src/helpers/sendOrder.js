import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useForm } from "../customHooks/useForm";

export const sendOrder = async (name,email,phone) => {

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

   name&&console.log('INPUTS',name);

  // const{name,email,phone} =useForm()

  const order = {
    buyer: {name:name,email:email, phone:phone,},
    items: [{ name: "Bici", price: 41200 }],
    total: 100,
    date: serverTimestamp(),
  };

  const orderResult = await addDoc(ordersCollection, order);

  return orderResult?.id;
};
