import { Link } from "react-router-dom";

export const Item = ({ ItemData }) => {
  const { img1, name, price, id } = ItemData;

  return (
    <>
      <div className="flex flex-col items-center group w-52 shadow-lg rounded-md overflow-hidden">
        <Link to={`/product/detail/${id}`} className="w-full ">
          {/* -------Image------------- */}
          <div className="cursor-pointer overflow-hidden m-auto ">
            <img
              className="duration-700 ease-in hover:scale-110 object-cover h-[19rem] w-full "
              src={img1}
              alt={name}
            />
          </div>

          {/* ------Product Info------------- */}
          <div className="flex flex-col  text-primary pl-6 bg-white group">
            <h4>{name}</h4>
            <h2 className="text-primary font-bold text-2xl">${price}</h2>
          </div>
        </Link>
      </div>
    </>
  );
};
