import { createContext,useContext,useState } from "react";

export const ContextCart = createContext();

// Creo una funcion para exportar el contexto, y asi no tener que importar el useContext en cada componente
export function useShoppingCart() {
  return useContext(ContextCart)
}

export const CartContext = ({children}) => {

    const[cart,setCart] = useState([]);
    // const[navCart,setNavCart] = useState(0);
    // const[totalItemsInCart,setTotalItemsInCart] = useState(0);
    // const[totalPriceInCart,setTotalPriceInCart] = useState(0);

  //  const addItemToCart=(item,quantity)=>{

    
  //  };

  //  const addItem=(item,quantity)=>{

    
  //  };
  //  const removeItem=(itemId)=>{


  //  };
  //  const clearCart=()=>{
  //   setCart([]);
  //   setNavCart(0);
  //   setTotalItemsInCart(0);
  //   setTotalPriceInCart(0);

  //  };

  //  const isInCart=(id)=>{

  //   return setCart

  //  };

  return (
    <ContextCart.Provider value={{cart}}>
        {children}
    </ContextCart.Provider>
  )
}
