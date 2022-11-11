
export const copyToClipboard = (orderId) => {
    
    navigator.clipboard.writeText(orderId)
       
  return true;
   
}
