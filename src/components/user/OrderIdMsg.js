
export const OrderIdMsg = ({orderId}) => {
  return (
    <>

        <div className="absolute w-screen h-screen flex items-center justify-center bg-[rgba(255,255,255,.5)]" >
            <div className="flex flex-col items-center justify-center w-80 h-40 rounded-lg m-auto bg-white z-40 overflow-hidden p-4">
                <h2 className="mb-4">Número de orden:</h2>
                <h1>{orderId}</h1>
            </div>
        </div>
    
    </>
  )
}
