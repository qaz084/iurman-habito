import { useState } from "react";
import { Link } from "react-router-dom";

export const CardProductsButtons = ({ itemStocks, countToCart }) => {
  const productsCounter = 1;
  const [cartCount, setCartCount] = useState(productsCounter);

  const handleMoreProduct = () => {
    if (cartCount <= itemStocks) {
      setCartCount(cartCount + 1);
    }
  };

  const handleSubtractProduct = () => {
    if (cartCount <= itemStocks) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="flex flex-col flex-none h-28 justify-between">
      <div className="flex flex-row mt-3   mx-6 items-center ">
        {/*----------- Subtract Button--------- */}

        <button
          onClick={handleSubtractProduct}
          className=" btn-add-sub disabled"
          disabled={cartCount === productsCounter}
        >
          <h2 className="font-extrabold text-xl  ">-</h2>
        </button>

        {/*----------- Product Counter--------- */}

        <h2 className="w-2/3 m-auto text-center font-bold">{cartCount}</h2>

        {/*----------- Add Button--------- */}

        <button
          onClick={handleMoreProduct}
          className="btn-add-sub "
          disabled={cartCount >= itemStocks}
        >
          <h2 className="font-extrabold text-xl">+</h2>
        </button>
      </div>

      {/*----------- Add to cart Button--------- */}
      <Link to="/cart">
        <button
          className="btn-add-cart self-end"
          onClick={() => countToCart(cartCount)}
        >
          Agregar al carrito
        </button>
      </Link>
    </div>
  );
};
