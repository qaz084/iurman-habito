import { Item } from "./Item"

export const ItemList = ({ItemData}) => {

  return (

    <>

      <div className="bg-red-500 m-auto  flex flex-column flex-wrap sm:flex-row sm:flex-wrap sm:w-[82vw]">

        {
          ItemData.map((product)=>{

              return <Item key={product.id} ItemData={product}/>

          })
        }
      </div>
       
    </>
  )
}
