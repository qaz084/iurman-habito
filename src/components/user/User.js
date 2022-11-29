import { useEffect,useState  } from "react";
import { Navigate } from "react-router-dom";
import { handleBuySearch } from "../../helpers/handleBuySearch";
import { CheckoutData } from "./CheckoutData";

export const User = () => {
  const [valueId, setValueId] = useState("");
  const [logOut, setLogOut] = useState(false);
  const [dataBuyer, setDataBuyer] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handlePasteId = async () => {
    setValueId("");
    const copied =await navigator.clipboard.readText();
    setValueId(copied.trim());
  };
  const handleWrittedId = ({ target }) => {
    setValueId("");
    const writtedId = target.value;
    setValueId(writtedId);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setLogOut(true);
    // window.location.href="/";
  };

  const handleSearchById = async () => {
    const product = await handleBuySearch(valueId);
    return product ? setDataBuyer(product) : "";
  };

  useEffect(() => {
    const handleData = () => {
      const items = dataBuyer.items;
      const { total } = dataBuyer;
      total && setTotal(total);
      items && setItems(items);

      return { items, total };
    };
    handleData();
  }, [dataBuyer, setDataBuyer]);

  return (
    <>
       {/* {logOut && <Navigate to="/" />}   */}
      <div className="w-screen h-screen  flex items-center justify-center">
        <div className="w-2/4 mt-20 bg-white p-10 rounded-md shadow-2xl">
          <div className="text-2xl mb-5 text-primary">
            {dataBuyer.buyer ? (
              <h1>
                Hola
                <span className="font-bold ml-2">
                  {dataBuyer.buyer.name.toUpperCase()}
                </span>
              </h1>
            ) : (
              <h1>Hola</h1>
            )}
          </div>

          <h2 className="text-lg">
            Para ver tu última compra, escribe o pega tu{" "}
            <span className="font-bold">número de comprobante.</span>{" "}
          </h2>

          <div className="mt-5 mb-4 flex">
            <input
              onChange={handleWrittedId}
              className=" w-3/4 p-1 border-2 border-primary rounded-bl-md rounded-tl-md "
              type="text"
              name=""
              id=""
              value={valueId}
            />

            <button
              onClick={handlePasteId}
              className="text-white w-1/4 bg-primary rounded-sm -ml-1 "
            >
              Pegar
            </button>
          </div>

          <button onClick={handleSearchById} className="btn-sm-acept">
            Aceptar
          </button>

          {dataBuyer.buyer && <CheckoutData items={items} total={total} />}

          <div className="flex justify-end">
            <button
              onClick={handleLogOut}
              className="text-primary mt-20 hover:underline hover:text-primary text-"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
