import { AppRouter } from "./router/AppRouter";
import { CartContext } from "./context";

export const HabitoApp = () => {
  return (
    <>
      <CartContext>
        <AppRouter />
      </CartContext>
    </>
  );
};
