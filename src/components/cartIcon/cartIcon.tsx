import { useContext, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext/cartContext";
import { CartPreview } from "../cartView/cartPreview";

interface CartCountInt {
    cartCount: string
}
export const CartIcon = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { cartCount }: CartCountInt = useContext(CartContext);
    const navigate = useNavigate()

    const toggleCart = () => setIsOpen((prev) => !prev)


    return (
      <>
        <BsBasket2Fill
          style={{ cursor: "pointer", color: "black" }}
          onClick={toggleCart}
        />
        <span style={{ fontSize: "1rem", color: "black" }}>{cartCount}</span>
        {isOpen && <CartPreview />}
      </>
    );
}