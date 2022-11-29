import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  Navbar,
  UserLogin,
  User,
} from "../components";
import Home from "../Home";
import { useShoppingCart } from "../context/CartContext";

export const AppRouter = () => {
  const [storage, setStorage] = useState("");
  const { cart } = useShoppingCart();

  useEffect(() => {
    const local = localStorage.getItem("user");
    setStorage(local);
    console.log("LOCAL STORAGE", localStorage);
  }, [storage, cart]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="./" element={<Home />} />

        {storage ? (
          <Route path="/user" element={<User />} />
        ) : (
          <Route element={<Navigate to="./" />} />
        )}

        <Route path="/user/register" element={<UserLogin />} />

        <Route path="/product/detail/:id" element={<ItemDetailContainer />} />

        <Route path="/category/:id" element={<ItemListContainer />} />

        {cart.length >= 1 ? (
          <Route path="/cart" element={<Cart />} />
        ) : (
          <Route element={<Navigate to="./" />} />
        )}

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
