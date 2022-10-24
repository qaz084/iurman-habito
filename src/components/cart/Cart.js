import { useShoppingCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import {useNavigate} from "react-router-dom";
import { BuyBtn } from "./BuyBtn";
import { CancelBuyBtn } from "./CancelBuyBtn";
import { CartTtotalCost } from "./CartTtotalCost";

export const Cart = () => {

  const navigate=useNavigate();
  
  const {cart}=useShoppingCart();
 
  //Controla el boton back para navegar a la página previa donde haya estado el usuario.

   const handleBack=()=>{
      
    if(window.history.state && window.history.state.idx > 0) {
      navigate(-1);
  } else {
      navigate('/');
  }

   }
 
  return (
     <>
       
      <section className="bg-white m-auto sm:mt-36 sm:grid sm:grid-cols-[40%_60%] justify-items-center sm:w-2/4 sm:mb-20 ">

        <div className="w-full "> <h1>CART</h1></div>

        <div>
         <span onClick={handleBack} className="flex justify-end mb-10 text-xl text-blue-500 hover:underline hover:cursor-pointer text-center">Volver</span>
          {
            cart.map(item=>{

              return <CartItem cart={item}/>
            })

          }
          <CartTtotalCost/>
          <BuyBtn/>
          <CancelBuyBtn/>
        </div>

      </section>
     </>
  )
}
