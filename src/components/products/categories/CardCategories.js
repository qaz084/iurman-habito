import { Link } from "react-router-dom"

export const CardCategories = ({title,description,image,id}) => {
  return (
    <>
    <Link to={ `/category/${title}`}>
        <div className="flex flex-col group cursor-pointer mb-4 sm:mb-0 ">

          <div className="flex flex-row bg-white duration-500 ease-in ">

            {/* IMAGE */}
            <div className="overflow-hidden  m-auto w-2/3">
              <img className=" duration-[1000ms] ease-in group-hover:scale-110 " src={image} alt={title} />
            </div>

            {/* TEXT */}
            
            <div className="flex flex-col w-2/3 justify-center p-2 md:p-4 lg:p-6  ">
                <h2 className="font-bold text-xl text-primary mb-2 lg:text-3xl group-hover:underline group-hover:underline-offset-4 group-hover:decoration-3 group-hover:duration-200  ">{title} </h2>
              
                <p className="line-clamp-3 text-primary lg:line-clamp-none md:text-lg ">{description}</p>
            </div>
          </div>
          
        </div>
      </Link>
    </>
  )
}
