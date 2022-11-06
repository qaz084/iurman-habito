import { useState } from "react";
import { useForm } from "../../customHooks/useForm";
import { sendOrder } from "../../helpers/sendOrder";
import { InputRegister } from "./InputRegister";

export const UserLogin = () => {
 
 
  const [orderId, setOrderId] = useState('')
  const {onInputChange,name,email,phone} = useForm({name:'',email:'',phone:''})

  const handleBuy=(e)=>{
    const idOrder= sendOrder(name,email,phone);
    e.preventDefault();
   setOrderId(idOrder);
   console.log('ORDERID:',orderId)
  }
//MOSTRAR MENSAJE GRACIAS POR TU COMPRA Y LUEGO TU ID DE COMPRA ES:
//GUARDAR ORDEN ID EN LOCALSTORAGE,,,SI HAY MOSTRAR WIDGET USUARIO
  return (
    <>
    <div className="flex  items-center justify-center w-screen h-screen ">

        <div className="grid grid-cols-2 gap-10 shadow-2xl rounded-lg overflow-hidden m-auto mt-40  mb-20 w-4/5 h-3/4 ">

                <div className="bg-primary h-full">
                  <img src="" alt="" />
                </div>
              <form onSubmit={handleBuy} className='m-auto p-5' action="">
              <h2 className="mb-10 text-primary text-xl">Completa tus datos para terminar la compra.</h2>

                 <InputRegister onInputChange={onInputChange} name={name}
                  email={email} phone={phone}
                 />
                
                <div>
                  <button className='bg-green-400' type="submit">Aceptar</button>
                </div>
              </form>
              

        </div>
    </div>
    </>
  )
}
