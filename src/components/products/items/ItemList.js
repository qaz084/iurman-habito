import { Item } from "./Item";

export const ItemList = ({ItemData}) => {

  return (
    <>
      <div className="flex flex-column mt-10 justify-center flex-wrap w-80 m-auto space-y-10
      sm:flex-row sm:w-[80vw] sm:justify-around sm:space-y-0 sm:gap-10">

        {
          ItemData.map((product)=>{

              return <Item key={product.id} ItemData={product}/>

          })
        }
      </div>
       
    </>
  )
}
