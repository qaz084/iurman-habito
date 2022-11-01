import { useShoppingCart } from "../../context/CartContext";

export const CancelBuyBtn = () => {
  const { clearCart } = useShoppingCart();

  return (
    <>
      <button className="btn-cancel-cart self-end" onClick={clearCart}>
        Cancelar compra
      </button>
    </>
  );
};
