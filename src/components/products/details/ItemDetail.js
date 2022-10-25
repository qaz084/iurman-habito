import { Link } from "react-router-dom"
import { useShoppingCart } from "../../../context/CartContext";
import { CardProductsButtons } from "../items/CardProductsButtons"

export const ItemDetail = ({ItemDetail}) => {

  const {stock}=ItemDetail;
  const {addItemToCart}=useShoppingCart();
  // const [myCart,setMyCart]=useState([]);
  const countToCart=(count)=>{
      addItemToCart(ItemDetail,count);

  }

  return (
    <>
    <div className="grid grid-cols-1 mt-52 justify-items-center m-auto w-[80vw] overflow-hidden
     lg:grid-cols-[min-content_min-content_1fr_1fr] lg:gap-4 lg:mt-20  lg:w-[90%] lg:justify-items-center lg:content-center lg:mb-10 xl:w-[80%]  ">

      <Link className="order-1  mb-5 lg:m-auto lg:mx-20 hover:underline" to={`../../category/${ItemDetail.category}`}>
         <h1 className="font-bold text-4xl text-primary  m-auto">{ItemDetail.category}</h1>
      </Link>
      
{/* Secondary Images */}
      <div className="flex flex-row w-[7rem] mt-4 space-x-3 items-center justify-center order-3 
      lg:order-2 lg:flex-col  lg:overflow-hidden lg:space-x-0 lg:mt-0  lg:space-y-4 lg:py-4 ">    

        <img className="rounded-md object-cover h-40 w-full" src={ItemDetail.img2} alt={ItemDetail.name} />

        <img className="rounded-md object-cover h-40 w-full" src={ItemDetail.img3} alt={ItemDetail.name} />

        <img className="rounded-md object-cover h-40 w-full" src={ItemDetail.img4} alt={ItemDetail.name} />

      </div>

{/* Main Image */}
      <div className="w-80 h-[33rem] order-2 overflow-hidden m-auto 
      lg:order-3  lg:flex lg:w-full">

       <img className="rounded-xl object-cover  w-full" src={ItemDetail.img1} alt={ItemDetail.name} />
      </div>

{/* Product Info */}
      <div className="order-5 px-10 mt-10 mb-20 overflow-hidden">

        <h1 className="font-bold text-2xl text-primary">{ItemDetail.name}</h1>

        <h2 className="text-3xl text-primary my-2 "> $ {ItemDetail.price}</h2>

        <p className="mb-5">{ItemDetail.description}</p>

        {/* <h3 className="text-xl text-primary mt-4">Stock: {ItemDetail[0].quantity}</h3> */}

        <CardProductsButtons itemStocks={stock}
          countToCart={countToCart}
        />
        
      </div>
    </div>
    
    </>
  )
}
