import { createContext,useContext,useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const ContextCart = createContext();

// Creo una funcion para exportar el contexto, y asi no tener que importar el useContext en cada componente
export function useShoppingCart() {
  return useContext(ContextCart)
}

export const CartContext = ({children}) => {
    console.log('CHILDREN');
    const[cart,setCart] = useState([]);
    const [cartBag,setCartBag]=useState(0);
    const [totalCost,setTotalCost]=useState(0);

   const addItemToCart=(ItemDetail,count)=>{

    if(isInCart(ItemDetail.id)){

      // Metodo más performante:
      
 /*      const found= cart.find(item=>
            item.id===ItemDetail.id
      );
      const index= cart.indexOf(found);
      const aux=[...cart];
      setCart(aux);
       */

    const modificado=cart.map((producto)=>{
      if(producto.id===ItemDetail.id){
        producto.count+=count;
      }
      return producto
     });
     setCart(modificado);
    } else{
      setCart([...cart, {...ItemDetail,count} ])
    } ;
    setCartBag(cartBag+count)
    setTotalCost(totalCost + ItemDetail.price * count)
    // console.log('ItemDetail',ItemDetail.price*count )
    
   
  };
 

   const removeItem=(itemId)=>{
      const itemFound=cart.find(product=>product.id===itemId);
      setCart(cart.filter(item=>item.id!==itemId))
      setCartBag(cartBag-itemFound.count)
      setTotalCost(totalCost - itemFound.price * itemFound.count)

   };
   const substractItem=(itemId)=>{
      const itemFound=cart.find(product=>product.id===itemId);
     itemFound.count--
      setCartBag(cartBag-1)
      setTotalCost(totalCost-itemFound.price)

   };
   const addOneItem=(itemId)=>{
      const itemFound=cart.find(product=>product.id===itemId);
     itemFound.count++
      setCartBag(cartBag+1)
      setTotalCost(totalCost+itemFound.price)
     
   };

   const clearCart=()=>{
    setCart([]);
    setCartBag(0)
    setTotalCost(0)
   };

  const isInCart=(id)=>cart.some(item=>item.id===id)


  return (
    <ContextCart.Provider value={{addItemToCart,removeItem,isInCart,clearCart,cart,cartBag,substractItem,addOneItem,totalCost}}>
        {children}
    </ContextCart.Provider>
  )
}
