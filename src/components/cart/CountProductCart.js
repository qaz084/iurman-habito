import { useState } from "react";
import { useShoppingCart } from "../../context/CartContext";

export const CountProductCart = ({stock,item,count}) => {

   const{addOneItem,substractItem}= useShoppingCart();

    // Counter State------------
    const productsCounter=count;
    const[cartCount,setCartCount]=useState(productsCounter);
   

// Add Function------------
    const handleMoreProduct= () => {
        if(item.count<=stock){
        //   setCartCount(cartCount+1);
        addOneItem(item.id);
        }
    }

// Subtract Function------------
    const handleSubtractProduct= () => {
        if(item.count<=stock){

            // setCartCount(cartCount-1)
            substractItem(item.id);
            
          }
    }

//HANDLER COLOR BUY BUTTON------------

const handlerColor= (e) => {

    const btn= e.currentTarget;
    console.log(btn);
    btn.classList.remove('btn-add-cart')
    btn.classList.add('btn-add-cart-added')
    btn.innerHTML ="v"
    
    setTimeout(() => {
        btn.classList.remove('btn-add-cart-added')
        btn.classList.add('btn-add-cart')
        btn.innerHTML ="Agregar al carrito"
    }, 1500);
}

  return (
    <div className="flex flex-col mt-10 mb-4 ">
            <div className="flex flex-row">

                {/*----------- Subtract Button--------- */}

                <button onClick={handleSubtractProduct}  className=" btn-add-sub disabled"
                 disabled={(item.count<=1)}>
                    <h2 className="font-extrabold text-xl  ">-</h2>
                </button>
    
             {/*----------- Product Counter--------- */}

                    <h2 className="w-2/3 m-auto text-center font-bold">{item.count}</h2>

                        {/*----------- Add Button--------- */}

                        <button onClick={handleMoreProduct} className="btn-add-sub "
                        disabled={(item.count>=stock)}>
                     <h2 className="font-extrabold text-xl">+</h2>
                    </button>
            </div>
     </div>
  )
}
