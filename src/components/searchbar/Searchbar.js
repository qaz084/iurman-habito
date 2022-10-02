

const Searchbar = () => {
  return (
    <>
      <div className="flex relative w-3/4 max-w-2/4 sm:w-2/4 md:w-1/3 ">

        <input className="peer  w-full h-8  pl-4 bg-transparent border-b-2 border-white  focus:outline-0 placeholder-white text-white" type="search" name="searchBar" placeholder="Search..." id="" />

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-4 h-4 top-2 sm:w-6 sm:h-6 absolute right-3 sm:top-1 hidden peer-placeholder-shown:inline ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

      </div>


    </>


  )
}

export default Searchbar