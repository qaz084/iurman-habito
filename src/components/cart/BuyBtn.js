import { Link } from "react-router-dom";

export const BuyBtn = ({handleBuy}) => {
  return (
    <>
    <Link to='../user/register'>

      <button className="btn-add-cart self-end">Finalizar compra</button>
    </Link>
    </>
  );
};
