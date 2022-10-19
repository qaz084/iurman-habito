import { AppRouter } from "./router/AppRouter";
import {CartContext} from "./context/CartContext";


export const HabitoApp = () => {
  return (
    <>
      <CartContext>

        <AppRouter/>

      </CartContext>
    </>
  )
}
