import { Item } from "./Item"

export const ItemList = ({ItemData}) => {

  return (

    <>
      {
        ItemData.map((product)=>{

            return <Item key={product.id} ItemData={product}/>

        })
      }
       
    </>
  )
}
