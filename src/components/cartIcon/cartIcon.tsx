import { useContext } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { CartContext } from "../../context/cartContext/cartContext";

interface CartCountInt {
    cartCount: string
}
export const CartIcon = () => {
    const { cartCount }: CartCountInt = useContext(CartContext);

    return (
      <>
           <BsBasket2Fill />
          <span>{cartCount}</span>
      </>
    );
}