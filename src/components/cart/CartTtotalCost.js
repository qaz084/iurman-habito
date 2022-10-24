import { useShoppingCart } from "../../context/CartContext";


export const CartTtotalCost = () => {
    const {cart}=useShoppingCart();

  return (
    <>
        <div>
            <h1>Costo total:</h1>
            <h2>{}</h2>
        </div>
    </>
  )
}
