import { createContext,useContext,useState } from "react";

export const ContextCart = createContext();

// Creo una funcion para exportar el contexto, y asi no tener que importar el useContext en cada componente
export function useShoppingCart() {
  return useContext(ContextCart)
}

export const CartContext = ({children}) => {
    const[cart,setCart] = useState([]);
    const [cartBag,setCartBag]=useState(0);

    // const[navCart,setNavCart] = useState(0);
    // const[totalItemsInCart,setTotalItemsInCart] = useState(0);
    // const[totalPriceInCart,setTotalPriceInCart] = useState(0);

   const addItemToCart=(ItemDetail,count)=>{

    if(isInCart(ItemDetail.id)){

    const modificado=cart.map((producto)=>{
      if(producto.id===ItemDetail.id){
        producto.count+=count;
      }
      return producto
     });
     setCart(modificado);
    } else{
      setCart([...cart, {...ItemDetail,count} ])
    } 
    
    setCartBag(cartBag+count)
    
  };

  //  const addItem=(item,quantity)=>{

  //  };
   const removeItem=(itemId)=>{
      const itemFound=cart.find(product=>product.id===itemId);
      setCart(cart.filter(item=>item.id!==itemId))
      setCartBag(cartBag-itemFound.count)

   };

   const clearCart=()=>{
    setCart([]);
   };

  const isInCart=(id)=>cart.some(item=>item.id===id)


  return (
    <ContextCart.Provider value={{addItemToCart,removeItem,isInCart,clearCart,cart,cartBag}}>
        {children}
    </ContextCart.Provider>
  )
}
