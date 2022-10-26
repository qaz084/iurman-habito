
export const EmptyCartMessage = ({isBagEmpty}) => {
  return (
    <>
          <div className={isBagEmpty?"absolute flex items-center justify-center top-full right-0 bg-white w-60 pointer-events-none h-20 ":"hidden"}>
          <h1 className="text-primary font-bold" >El carrito está vacio</h1>
      </div>
    </>
  )
}
