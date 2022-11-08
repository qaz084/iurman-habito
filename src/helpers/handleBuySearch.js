//"Yzytpv82fIQSOAuYoY4p"

import { db } from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

export const handleBuySearch = async (id) => {
  if (id.length > 0) {
    const ordersCollection = collection(db, "orders");
    const refDoc = doc(ordersCollection, id);
    const response = await getDoc(refDoc);
    return {
      ...response.data(),
      id: response.id,
    };
  } else {
    return;
  }
};
