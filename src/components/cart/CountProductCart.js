import { useState } from "react";
import { useShoppingCart } from "../../context/CartContext";
import { useLocalStorage } from "../../customHooks/useLocalStorage";

export const CountProductCart = ({ stock, item }) => {

  
  
  const { addOneItem, substractItem,cartCount } = useShoppingCart();
  const [itemCount, setItemCount] = useLocalStorage('itemCount',0)
  

  const cartStoraged=window.localStorage.getItem('cart');
    console.log(JSON.parse(cartStoraged))
    console.log('item',item)


  // Add Function------------
  const handleMoreProduct = () => {
    if (item.count <= stock) {
      
       addOneItem(item.id);
    }
  };

  // Subtract Function------------
  const handleSubtractProduct = () => {
    if (item.count <= stock) {
     
      substractItem(item.id);
    }
  };

  return (
    <div className="flex flex-col mt-10 mb-4 ">
      <div className="flex flex-row">

        {/*----------- Subtract Button--------- */}
        <button
          onClick={handleSubtractProduct}
          className=" btn-add-sub disabled"
          disabled={item.count <= 1}
        >
          <h2 className="font-extrabold text-xl  ">-</h2>
        </button>

        {/*----------- Product Counter--------- */}

        <h2 className="w-2/3 m-auto text-center font-bold">{item.count}</h2>

        {/*----------- Add Button--------- */}
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
