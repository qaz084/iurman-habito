import { useShoppingCart } from "../../context/CartContext";
import { CountProductCart } from "./CountProductCart";

export const CartItem = ({cart }) => {
  const { removeItem,cart:test } = useShoppingCart();
  console.log('cart',test)
  return (
    <>
      <div className="bg-slate-100 w-full p-2 rounded-t-md flex flex-wrap py-5 relative border-b-2 border-primary">
        <div className="w-[30%] overflow-hidden ">
          <img
            src={cart.img1}
            alt={cart.name}
            className="object-cover h-36 w-4/5 rounded-md"
          />
        </div>

        <div className="w-[18rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-primary ">{cart.name}</h1>
            <span
              onClick={() => removeItem(cart.id)}
              className="text-md text-red-600 hover:underline hover:cursor-pointer "
            >
              Quitar
            </span>
          </div>

          <h2 className="text-xl font-bold text-primary ">$ {cart.price}</h2>
          <hr />
          <CountProductCart stock={cart.stock} item={cart} count={cart.count} />
          <div className="flex flex-col items-end">
            <h2 className="text-md text-primary mb-1">
              cantidad: {cart.count}
            </h2>
            <h2 className=" text-md text-primary font-bold ">
              Total: ${cart.price * cart.count}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
