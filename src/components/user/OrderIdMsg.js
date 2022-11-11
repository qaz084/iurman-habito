import { useState } from "react";
import { Navigate } from "react-router-dom";
import { copyToClipboard } from "../../helpers/copyToClipboard";

export const OrderIdMsg = ({ orderId }) => {
  const [idState, setIdState] = useState(false);
  const [close, setClose] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    setIdState(copyToClipboard(orderId));
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setClose(true);
    setNavigate(true);
  };

  return (
    <>
      {navigate && <Navigate to="/" />}
      <div
        id="close-menu"
        className={
          close === true
            ? "close-menu"
            : "absolute w-screen h-screen flex mt-10 items-center justify-center backdrop-blur-sm  bg-[#3d3d3d80]"
        }
      >
        <div className="flex flex-col items-center justify-center w-96 h-80 rounded-lg m-auto bg-white z-40 overflow-hidden p-8">
          <div className="flex self-end">
           
              <span onClick={closeMenu} className="hover:cursor-pointer hover:font-bold text-xl text-primary -mt-8 mb-5">
                x
              </span>
           
          </div>
          <h1 className="font-bold text-primary text-2xl">Compra exitosa</h1>
          <div className="bg-primary w-full h-[1px] mt-2 mb-10">

          </div>

          <h2 className="mb-2 text-lg">Número de orden:</h2>
          <div className="flex items-center w-full ">
            <h2 className=" w-3/4 p-1 border-2 border-primary rounded-bl-md rounded-tl-md">{orderId}</h2>
            <button
              onClick={handleCopyToClipboard}
              className="text-white w-1/4 h-full bg-primary rounded-sm active:bg-white active:text-primary  "
            >
              copiar
            </button>
          </div>
          {idState === true && <div className="flex w-full justify-center mt-4">
            <h2 className="rounded-sm flex items-center justify-center bg-primary text-white  text-center h-8 w-28">Id Copiado</h2>
          </div>
          }
        </div>
      </div>
    </>
  );
};
