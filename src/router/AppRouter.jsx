import { Routes, Route, Navigate } from "react-router-dom";
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  Navbar,
} from "../components";
import Home from "../Home";
import { useShoppingCart } from "../context/CartContext";
import { UserLogin } from "../components/user/UserLogin";
import { User } from "../components/user/User";

export const AppRouter = () => {
  const { cart } = useShoppingCart();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/user" element={<User />}/>


        <Route path="user/register" element={<UserLogin />} />

        <Route path="/product/detail/:id" element={<ItemDetailContainer />} />

        <Route path="/category/:id" element={<ItemListContainer />} />

        {cart.length > 0 ? (
          <Route path="/cart" element={<Cart />} />
        ) : (
          <Route element={<Navigate to="/" />} />
        )}

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
