import { copyToClipboard } from "../../helpers/copyToClipboard"




export const OrderIdMsg = ({orderId}) => {


const handleCopyToClipboard=(e) => {
  e.preventDefault();
  copyToClipboard(orderId)
}


  return (
    <>

        <div className="absolute w-screen h-screen flex items-center justify-center bg-[rgba(255,255,255,.5)]" >
            <div className="flex flex-col items-center justify-center w-80 h-50 rounded-lg m-auto bg-white z-40 overflow-hidden p-4">
                <h2 className="mb-4">Número de orden:</h2>
                <div className="flex items-center ">
                  <h1>{orderId}</h1>
                  <button onClick={handleCopyToClipboard} className="btn bg-green-300 rounded-md p-1 ml-2">copiar</button>
                </div>
            </div>
        </div>
    
    </>
  )
}
