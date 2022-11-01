import { AppRouter } from "./router/AppRouter";
import {CartContext,UserContext} from "./context";

export const HabitoApp = () => {
  return (
    <>
      <CartContext>
      <UserContext>

        <AppRouter/>

      </UserContext>
      </CartContext>
    </>
  )
}
