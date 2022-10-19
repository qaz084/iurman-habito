import { createContext,useState } from "react";



export const ContextCart = createContext();

export const CartContext = ({children}) => {

    const[cart,setCart] = useState([]);
    const[navCart,setNavCart] = useState(0);
    const[totalItemsInCart,setTotalItemsInCart] = useState(0);
    const[totalPriceInCart,setTotalPriceInCart] = useState(0);

   const addItemToNavCart=(productQuantity,moreProducts,stockQuantity)=>{
       
    if((navCart<productQuantity)&&(stockQuantity+moreProducts)<=productQuantity){
       setNavCart(navCart+moreProducts)
       
   }
   
};


   const addItemToCart=(item,quantity)=>{

    
   };

   const addItem=(item,quantity)=>{

    
   };
   const removeItem=(itemId)=>{


   };
   const clearCart=()=>{
    setCart([]);
    setNavCart(0);
    setTotalItemsInCart(0);
    setTotalPriceInCart(0);

   };

   const isInCart=(id)=>{

    return setCart

   };

  return (
    <ContextCart.Provider value={{navCart, addItemToNavCart}}>
        {children}
    t</ContextCart.Provider>
  )
}
