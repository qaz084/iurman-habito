export const CheckoutData = ({ items, total }) => {
  return (
    <>
      <div>
        <h1 className="mt-8 mb-2 text-xl">Detalle de la compra</h1>
        <div className="h-[1px] bg-primary mb-4"></div>

        <div>
          <div>
            {items.map((producto) => (
              <div key={producto.name}>

                <h2 className="text-lg mb-4">Producto:</h2>
                <div>
                  <div className="flex text-xl mb-4 ">
                    <h2>{producto.name} x</h2>
                    <h2>{producto.quantity}</h2>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
          <div className="h-[1px] bg-primary mb-4"></div>
          <h2 className="text-xl">
            Total gastado:
            <span className="font-bold text-primary"> ${total}</span>
          </h2>
        </div>
      </div>
    </>
  );
};
