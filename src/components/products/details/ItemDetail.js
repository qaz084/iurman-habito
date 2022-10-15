import { Link } from "react-router-dom"

export const ItemDetail = ({ItemDetail}) => {
  return (
    <>
    <div className="grid grid-cols-[1fr_min-content_1fr_1fr] gap-5 w-[80vw] justify-items-centger m-auto mb-10">

      <Link className="m-auto" to={`../../category/${ItemDetail[0].category}`}>
         <h1 className="font-bold text-4xl text-primary  m-auto">{ItemDetail[0].category}</h1>
      </Link>

      <div className="w-[7.5rem] space-y-4 my-auto ">    

        <img className="rounded-md" src={ItemDetail[0].img2} alt={ItemDetail[0].name} />

        <img className="rounded-md" src={ItemDetail[0].img3} alt={ItemDetail[0].name} />

        <img className="rounded-md" src={ItemDetail[0].img4} alt={ItemDetail[0].name} />

      </div>

      <div className="w-96 m-auto">
       <img className="rounded-xl" src={ItemDetail[0].img1} alt={ItemDetail[0].name} />
      </div>

      <div className="w-96 p-10">

        <h1 className="font-bold text-2xl text-primary">{ItemDetail[0].name}</h1>

        <h2 className="text-3xl text-primary my-2 "> $ {ItemDetail[0].price}</h2>

        <p>{ItemDetail[0].description}</p>

        {/* <h3 className="text-xl text-primary mt-4">Stock: {ItemDetail[0].quantity}</h3> */}
        
      </div>
    </div>
    
    </>
  )
}
