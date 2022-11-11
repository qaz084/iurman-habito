export const EmptyUserMessage = ({ data }) => {
  return (
    <>
      <div
        className={
          data
            ? " flex items-center justify-center z-50 fixed top-24 right-0 bg-white w-60 pointer-events-none h-20 "
            : "hidden"
        }
      >
        <h1 className="text-primary font-bold">No estás registrado</h1>
      </div>
    </>
  );
};
