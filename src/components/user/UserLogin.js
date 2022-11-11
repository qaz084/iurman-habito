import { useState } from "react";
import { useShoppingCart } from "../../context/CartContext";
import { useForm } from "../../customHooks/useForm";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import { sendOrder } from "../../helpers/sendOrder";
import { InputRegister } from "./InputRegister";
import { OrderIdMsg } from "./OrderIdMsg";
import LeftImageRegister from "../../images/register-left-img.jpg";

export const UserLogin = () => {
  const [orderId = "pendiente", setOrderId] = useState("");

  const { onInputChange, name, surname, email, phone, handleResetForm } =
    useForm({
      name: "",
      surname: "",
      email: "",
      phone: "",
    });

  const { cart, totalCost, clearCart } = useShoppingCart();
  const [,setValue] = useLocalStorage("user", orderId);

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
        <div className="grid md:grid-cols-[40%_60%]  shadow-2xl rounded-lg overflow-hidden m-auto mt-48 w-4/5 p-10 md:p-0 md:mb-20  md:mt-48  md:w-4/6 ">
          <div className="hidden md:flex md:h-full md:overflow-hidden md:m-auto ">
            <img
              className="object-cover h-full"
              src={LeftImageRegister}
              alt="imagen login"
            />
          </div>

          <form onSubmit={handleBuy} className="m-auto md:w-5/6 md:p-8">
            <h2 className="mb-10 text-primary text-xl font-bold">
              Completa tus datos para terminar la compra.
            </h2>

            <InputRegister
              onInputChange={onInputChange}
              name={name}
              surname={surname}
              email={email}
              phone={phone}
            />

            <div>
              <button className="btn-sm-acept" type="submit">
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
