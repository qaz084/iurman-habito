
export const Spinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-[rgba(255,255,255,.6)] backdrop-blur-sm ">
        <div
          className="spinner-border animate-spin color-primary inline-block w-20 h-20 border-8 rounded-full"
          role="status"
        >
        </div>
          <h1 className="mt-5 font-bold">Loading...</h1>
      </div>
    </>
  );
}
