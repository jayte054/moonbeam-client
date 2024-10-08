import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext/cartContext";
import { CartObject } from "../../types"
import { CustomButton } from "../formComponents/customButton"
import "./cartPreview.css"

interface CartObjectProps {
    cartItems: CartObject[]
}

export const CartPreview = () => {
const {cartItems}: CartObjectProps = useContext(CartContext)
const navigate = useNavigate()

    const viewCart = () => navigate("/auth/cartItemsPage");


    return (
      <div className="cartPreview-container">
        <div className="cartItem-body">
          {cartItems.map((cartItem: CartObject) => {
            const imageUrl =
              cartItem.itemType === "foilCake"
                ? "/foilcake.png"
                : cartItem.itemType === "cakeParfait"
                ? "/cakeParfait.png"
                : cartItem.imageUrl || "";
          return (
            <div className="cartItem-content" key={cartItem.itemId}>
              <div>
              <span>
                <img src={imageUrl} alt={cartItem.itemName} />
              </span>
              </div>
              <div>
                <span style={{ fontSize: "1rem" }}>{cartItem.itemName}</span>
                <span style={{ fontSize: "1rem" }}>
                  {cartItem.quantity}*{cartItem.price}
                </span>
              </div>
            </div>
          )})}
        </div>
        <span>
          <CustomButton type="button" label="checkout" onClick={viewCart} />
        </span>
      </div>
    );
}