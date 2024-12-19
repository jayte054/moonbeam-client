import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext/cartContext";
import { CartObject } from "../../types"
import { CustomButton } from "../formComponents/customButton"
import "./cartPreview.css"
import { useMediaQuery } from "react-responsive";

interface CartObjectProps {
    cartItems: CartObject[]
}

export const CartPreview = () => {
const {cartItems}: CartObjectProps = useContext(CartContext)
const navigate = useNavigate()

    const viewCart = () => navigate("/auth/cartItemsPage");
 const isDesktop = useMediaQuery({ minWidth: 1024 });
 const isMobile = useMediaQuery({ maxWidth: 767 });

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
                <div className="content-details">
                  {isDesktop && (
                    <>
                      <span style={{ fontSize: "1rem" }}>
                        {cartItem.itemName}
                      </span>
                      <span style={{ fontSize: "1rem" }}>
                        {cartItem.quantity}
                      </span>
                      <span style={{ fontSize: "1rem" }}>
                        ₦{cartItem.price}
                      </span>
                    </>
                  )}
                  {isMobile && (
                    <>
                      <span>
                        {cartItem.itemName}
                      </span>
                      <span>
                        {cartItem.quantity}
                      </span>
                      <span>
                        ₦{cartItem.price}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <span>
          <CustomButton 
            type="button" 
            label="checkout" 
            onClick={viewCart}
            style={{
              fontSize: '1.5rem',
              padding: '.5rem'
            }}
            />
        </span>
      </div>
    );
}