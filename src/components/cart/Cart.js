import { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/CartContext";
import { CartItem, BuyBtn, CancelBuyBtn, CartTtotalCost } from "./";
import { ScrollToTopButton } from "../ScrollToTopButton";
import HabitoLogo from "../../images/logo_negro.svg";

export const Cart = () => {
  const { cart } = useShoppingCart();
  const [windowWidth, setWindowWidth] = useState(0);

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
      <section className=" rounded-md mt-48 mx-4 m-auto p-2 justify-center md:m-auto sm:bg-white md:p-10 md:mt-28 md:grid md:grid-cols-[70%]  md:w-2/4 md:mb-20  ">
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
