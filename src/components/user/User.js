import { useState } from "react";
import { Navigate } from "react-router-dom";
import { handleBuySearch } from "../../helpers/handleBuySearch";

export const User = () => {

  const [valueId, setValueId] = useState("");
  const [logOut, setLogOut] = useState(false);
  const [dataBuyer, setDataBuyer] = useState({});
 

  const handlePasteId = async () => {
    setValueId("");
    const copied = await await navigator.clipboard.readText();
    setValueId(copied.trim());
  };
  const handleWrittedId = ({ target }) => {
    setValueId("");
    const writtedId = target.value;
    setValueId(writtedId);
  };

  const handleLogOut=()=>{
    localStorage.clear();
    setLogOut(true);
  }


  const handleSearchById=async()=>{

    const product=await handleBuySearch(valueId);
    // console.log('PRODUCTosssss',product.length)
    product&& setDataBuyer(product)

   

  }

  console.log('PRODUCTosssss',dataBuyer.buyer.name)


  return (
    <>
      {logOut&&<Navigate to="/"/>}
      <div className="w-screen h-screen  flex items-center justify-center">
        <div className="w-2/4 h-2/4 bg-white p-10 rounded-md shadow-2xl">

          <div className="text-2xl mb-5">
            <h1>Hola <span className="font-bold ml-2">
            {dataBuyer.buyer.name.toUpperCase()}
            </span>  </h1>

          </div>
          <hr />
          <h2 className="text-lg">Para ver tu última compra, escribe o pega tu <span className="font-bold">número de comprobante.</span> </h2>

          <div className="mt-5 mb-4 flex bg-red-300">
            <input
              onChange={handleWrittedId}
              className="w-3/4 p-1 border-2 border-primary rounded-bl-md rounded-tl-md "
              type="text"
              name=""
              id=""
              value={valueId}
            />

            <button onClick={handlePasteId} className="text-white w-1/4 bg-primary rounded-sm ">Pegar</button>
          </div>

          <button onClick={handleSearchById} className="bg-green-300">Aceptar</button>

            <div>
              
            </div>

          <button onClick={handleLogOut} className="block mt-20 bg-red-300">LogOut</button>
        </div>
      </div>
    </>
  );
};
