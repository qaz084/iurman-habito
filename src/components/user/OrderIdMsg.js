import { useState } from "react";
import { Navigate } from "react-router-dom";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import check from "../../images/check.svg";

export const OrderIdMsg = ({ orderId }) => {
  const [idState, setIdState] = useState(false);
  const [close, setClose] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    setIdState(copyToClipboard(orderId));

    console.log("ESTADO DEL ID:", idState);
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setClose(true);
    setNavigate(true)
  };
  
  return (
    <>
      {navigate&&<Navigate to='/'/>}
      <div 
        id="close-menu"
        className={
          close === true
            ? "close-menu"
            : "absolute w-screen h-screen flex items-center justify-center backdrop-blur-sm  bg-[#3d3d3d80]"
        }
      >
        <div className="flex flex-col items-center justify-center w-96 h-80 rounded-lg m-auto bg-white z-40 overflow-hidden p-4">
          <div>
            <span onClick={closeMenu} className="hover:cursor-pointer">
              x
            </span>
          </div>
          <h1 className="font-bold text-primary text-2xl">Compra exitosa</h1>
          <div className="w-10 h-10 mt-2 mb-12"></div>

          <h2 className="mb-2">Número de orden:</h2>
          <div className="flex items-center ">
            <h2>{orderId}</h2>
            <button
              onClick={handleCopyToClipboard}
              className="btn bg-green-300 rounded-md p-1 w-20 ml-2 active:bg-green-600"
            >
              copiar
            </button>
          </div>
          {idState === true && <h2 className="">Id Copiado</h2>}
        </div>
      </div>
    </>
  );
};
