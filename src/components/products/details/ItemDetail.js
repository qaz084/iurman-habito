
export const ItemDetail = ({ItemDetail}) => {
  return (
    <>
      <h1>{ItemDetail[0].name}</h1>
      <h1>{ItemDetail[0].price}</h1>
      <h1>{ItemDetail[0].quantity}</h1>
      <img src={ItemDetail[0].img1} alt={ItemDetail[0].name} />
      <img src={ItemDetail[0].img2} alt={ItemDetail[0].name} />
      <h1>{ItemDetail[0].description}</h1>
    
    </>
  )
}
