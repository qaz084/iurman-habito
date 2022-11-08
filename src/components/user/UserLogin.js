import { useState } from "react";
import { useShoppingCart } from "../../context/CartContext";
import { useForm } from "../../customHooks/useForm";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import { sendOrder } from "../../helpers/sendOrder";
import { InputRegister } from "./InputRegister";
import { OrderIdMsg } from "./OrderIdMsg";
import LeftImageRegister from '../../images/register-left-img.jpg';

export const UserLogin = () => {
  const [orderId = "pendiente", setOrderId] = useState("");
  const { onInputChange, name, email, phone, handleResetForm } = useForm({
    name: "",
    email: "",
    phone: "",
  });

  const { cart, totalCost, clearCart } = useShoppingCart();
  const [setValue] = useLocalStorage("user", orderId);

  const sendInformation = () => {
    sendOrder(name, email, phone, cart, totalCost).then((response) => {
      setOrderId(response);
      setValue(response);
    });

    clearCart();
    window.localStorage.clear();
  };

  const handleBuy = (e) => {
    e.preventDefault();
    sendInformation();
    handleResetForm();
  };

  return (
    <>
      {orderId && <OrderIdMsg orderId={orderId} />}
      <div className="flex  items-center justify-center w-screen h-screen ">
        <div className="grid grid-cols-[40%_60%]  shadow-2xl rounded-lg overflow-hidden m-auto mt-40  mb-20 w-4/5 h-3/4 md:w-4/6 ">
          <div className="h-full  bg-red-300 overflow-hidden m-auto ">

            <img className="object-contain h-auto" src={LeftImageRegister} alt="imagen login" />
          </div>
          <form onSubmit={handleBuy} className="m-auto p-5" action="">
            <h2 className="mb-10 text-primary text-xl">
              Completa tus datos para terminar la compra.
            </h2>

            <InputRegister
              onInputChange={onInputChange}
              name={name}
              email={email}
              phone={phone}
            />

            <div>
              <button className="bg-green-300 w-20 rounded-md text-primary p-1 hover:bg-green-400" type="submit">
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
