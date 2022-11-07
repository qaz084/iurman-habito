
export const copyToClipboard = (orderId) => {
    
    navigator.clipboard.writeText(orderId)
        console.log('TEXTO COPIADO',orderId)
  return (
    <div>copyToClipboard</div>
  )
}
