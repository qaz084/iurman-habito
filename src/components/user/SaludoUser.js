
export const SaludoUser = ({greetings}) => {
  return (
    <>
        <div className="flex fex-row items-baseline ml-4 mt-4 mb-5 sm:mt-20 sm:mb-2 sm:ml-10 lg:ml-20 ">
          <h2 className="text-primary font-bold sm:text-2xl mr-2 lg:text-4xl">Bienvenido
            </h2>
           <span className="text-primary text-2xl sm:text-4xl sm:font-light lg:text-6xl lg:font-light"> {greetings[0]?.name}!</span>
        </div>
           <div className="border-b-2 border-b-primary h-1 w-screen"></div>
       
    </>
  )
}
