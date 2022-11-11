export const EmptyCartMessage = ({ isBagEmpty }) => {
  return (
    <>
      <div
        className={
          isBagEmpty
            ? " flex items-center justify-center z-50 fixed top-24 right-0 bg-white w-60 pointer-events-none h-20 "
            : "hidden"
        }
      >
        <h1 className="text-primary font-bold">El carrito está vacío</h1>
      </div>
    </>
  );
};
