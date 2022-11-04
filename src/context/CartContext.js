import { createContext, useContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const ContextCart = createContext();

// Creo una funcion para exportar el contexto, y asi no tener que importar el useContext en cada componente
export function useShoppingCart() {
  return useContext(ContextCart);
}

export const CartContext = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [cartBag, setCartBag] = useLocalStorage("cartBag", 0);
  const [totalCost, setTotalCost] = useLocalStorage("TotalCost", 0);

  const addItemToCart = (ItemDetail, count) => {
    if (isInCart(ItemDetail.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === ItemDetail.id) {
          producto.count += count;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...ItemDetail, count }]);
    }
    setCartBag(cartBag + count);
    setTotalCost(totalCost + ItemDetail.price * count);
  };

  const removeItem = (itemId) => {
    const itemFound = cart.find((product) => product.id === itemId);
    setCart(cart.filter((item) => item.id !== itemId));
    setCartBag(cartBag - itemFound.count);
    setTotalCost(totalCost - itemFound.price * itemFound.count);
  };

  const clearCart = () => {
    setCart([]);
    setCartBag(0);
    setTotalCost(0);
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <ContextCart.Provider
      value={{
        addItemToCart,
        removeItem,
        isInCart,
        clearCart,
        cart,
        cartBag,
        totalCost,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};
