import { useShoppingCart } from "../../context/CartContext";

export const CountProductCart = ({ stock, item }) => {
  const { addItemToCart } = useShoppingCart();

  const handleMoreProduct = () => {
    if (item.count <= stock) {
      addItemToCart(item, 1);
    }
  };

  const handleSubtractProduct = () => {
    if (item.count <= stock) {
      addItemToCart(item, -1);
    }
  };

  return (
    <div className="flex flex-col mt-10 mb-4 ">
      <div className="flex flex-row">
        <button
          onClick={handleSubtractProduct}
          className=" btn-add-sub disabled"
          disabled={item.count <= 1}
        >
          <h2 className="font-extrabold text-xl  ">-</h2>
        </button>

        <h2 className="w-2/3 m-auto text-center font-bold">{item.count}</h2>

        <button
          onClick={handleMoreProduct}
          className="btn-add-sub "
          disabled={item.count >= stock}
        >
          <h2 className="font-extrabold text-xl">+</h2>
        </button>
      </div>
    </div>
  );
};
