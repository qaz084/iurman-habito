
import { Link } from 'react-router-dom';
import { CardProductsButtons } from './CardProductsButtons'

export const Item = ({ItemData}) => {
 
    const {img1,name,price,quantity}=ItemData;

  return (
    <>
      <div className="flex flex-col  group w-52 h-[23rem] shadow-lg rounded-md overflow-hidden">
        <Link to={`/product/detail/${name}`}>

          {/* -------Image------------- */}
          <div className="cursor-pointer overflow-hidden relative">
            <img
              className="duration-700 ease-in hover:scale-110 h-64 w-full"
              src={img1}
              alt="{name}"
            />

            {/* ------Product Info------------- */}
           
              <div className="flex flex-col -mt-14 text-primary pl-6 bg-[#ffffff79] relative z-10">
                <h4>{name}</h4>
                <h2 className="text-primary font-bold text-2xl">${price}</h2>
              </div>
           
          </div>
        </Link>
        {/* -------Buttons------------- */}

        <CardProductsButtons productQuantity={quantity} />
      </div>
    </>
  );
}
