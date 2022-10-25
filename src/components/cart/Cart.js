import { useShoppingCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import {useNavigate} from "react-router-dom";
import { BuyBtn } from "./BuyBtn";
import { CancelBuyBtn } from "./CancelBuyBtn";
import { CartTtotalCost } from "./CartTtotalCost";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useEffect } from "react";
import HabitoLogo from '../../images/logo_negro.svg'

export const Cart = () => {

  const navigate=useNavigate();
  
  const {cart}=useShoppingCart();
 
  //Controla el boton back para navegar a la página previa donde haya estado el usuario.

   const handleBack=()=>{

    navigate(-2);
      
/*     if(window.history.state && window.history.state.idx > 0) {
      navigate(-1);
  } else {
      navigate('/');
  } */

   }
   useEffect(()=>{
      document.body.classList.add('body-cart');

      return()=>{
        document.body.classList.remove('body-cart');
      }
   },[]);
 
  return (
     <>
      
      <section className="bg-white rounded-md m-auto sm:p-10 sm:mt-28 sm:grid sm:grid-cols-[70%] justify-center sm:w-2/4 sm:mb-20  ">

         <span onClick={handleBack} className="flex justify-end mb-5 text-xl text-right text-blue-500 hover:underline hover:cursor-pointer">Volver</span>

        <div className="w-full mb-10 ">
          <img className="m-auto w-40" src={HabitoLogo} alt="Habito, logo negro" />
        </div>
          {
            cart.map(item=>{

              return <CartItem cart={item}/>
            })

          }
          <CartTtotalCost/>
          <BuyBtn/>
          <CancelBuyBtn/>
          <ScrollToTopButton/>
        

      </section>
     </>
  )
}
