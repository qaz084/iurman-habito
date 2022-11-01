import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { BuyBtn } from "./BuyBtn";
import { CancelBuyBtn } from "./CancelBuyBtn";
import { CartTtotalCost } from "./CartTtotalCost";
import { ScrollToTopButton } from "../ScrollToTopButton";
import HabitoLogo from "../../images/logo_negro.svg";

export const Cart = () => {
  const navigate = useNavigate();

  const { cart } = useShoppingCart();
  const [windowWidth, setWindowWidth] = useState(0);

  //Controla el boton back para navegar a la página previa donde haya estado el usuario.

  const handleBack = () => {
    navigate(-2);
  };
  const changeBackgroundColor = () => {
    const widthBreak = 640;
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width < widthBreak) {
        document.body.classList.remove("body-cart");
      }
      setWindowWidth(width);
    });
  };

  useEffect(() => {
    changeBackgroundColor();
    document.body.classList.add("body-cart");

    return () => {
      document.body.classList.remove("body-cart");
    };
  }, [windowWidth]);

  return (
    <>
      <section className="bg-white rounded-md mt-48 mx-5 m-auto p-2 sm:m-auto sm:bg-white sm:p-10 sm:mt-28 sm:grid sm:grid-cols-[70%] justify-center sm:w-2/4 sm:mb-20  ">
        <div className="w-full mb-10 ">
          <img
            className="m-auto w-40"
            src={HabitoLogo}
            alt="Habito, logo negro"
          />
        </div>
        {cart.map((item) => {
          return <CartItem key={item.id} cart={item} />;
        })}
        <CartTtotalCost />
        <BuyBtn />
        <CancelBuyBtn />
        <ScrollToTopButton />
      </section>
    </>
  );
};
