import { useShoppingCart } from "../../context/CartContext";


export const CartTtotalCost = () => {
    const {totalCost}=useShoppingCart();

  return (
    <>
        <div className="flex items-center justify-around font-bold text-2xl text-primary my-5">
            <h1>Costo total: </h1>
            <h2> $ {totalCost}</h2>
        </div>
    </>
  )
}
