import { useNavigate } from "react-router-dom";
import { HomePageNavbarMobile } from "../../navbar/homePageNavbarMobile"
import { CartStores } from "../../../stores/cartStores";
import { AuthContext } from "../../../context/authcontext/authContext";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext/cartContext";
import { CartObject } from "../../../types";
import { toastify } from "../../utilsComponent";
import './cartItemsPageMobile.css'
import { CustomButton } from "../../formComponents/customButton";
import { FaTrash } from "react-icons/fa";
import { Footer } from "../../footer/footer";

export const CartItemsPageMobile = () => {
    const [cartItem, setCartItem] = useState<CartObject[]>([]);
    const { cartItems, cartTotal, cartCount, setCartCount, setCartItems } =
      useContext<any>(CartContext);
    const { user } = useContext(AuthContext);
    const { deleteCartItem } = CartStores;
    const navigate = useNavigate();
    
 const name = user ? `${user.firstname}'s Cart` : "Cart";

   useEffect(() => {
     const cart = async () => {
       const items = await cartItems;

       // Assign images based on item type
       const updatedItems = items.map((item: CartObject) => {
         if (item.itemType === "foilCake") {
           return { ...item, image: "/foilcake.png" };
         } else if (item.itemType === "cakeParfait") {
           return { ...item, image: "/cakeParfait.png" };
         }
         return item;
       });

       setCartItem(updatedItems);
     };
     cart();
   }, [cartItems]);

    const handleRemoveItem = async (itemId: string) => {
      try {
        const updatedCart = cartItem.filter((item) => item.itemId !== itemId);
        await deleteCartItem(user.accessToken, itemId);
        setCartItem(updatedCart);
        setCartItems(updatedCart);
        const quantity = updatedCart.reduce(
          (total: number, cartItem) => total + Number(cartItem.quantity),
          0
        );
        setCartCount(quantity.toString());
        toastify.deleteItem("item successfully deleted");
      } catch (error) {
        toastify.error("something went wrong, please try again later");
      }
    };

    const quickOrderPage = () => navigate("/auth/quickOrderPage");
    const checkoutPage = () => navigate("/auth/checkoutPage");
    
    return (
      <div className="cartItemsPageMobile-container">
        <HomePageNavbarMobile />
        <div className="cartItemsPageMobile-body">
          <div className="cartItemsPageMobile-header">
            <span>{name}</span>
            <button type="button" onClick={quickOrderPage}>
              quick order page
            </button>
          </div>
          <div>
            {cartItem.map((item) => (
              <>
                <div key={item.itemId} className="cartItemsMobile-content">
                  <div>
                    <img
                      src={
                        item.itemType === "foilCake"
                          ? "/foilcake.png"
                          : item.itemType === "cakeParfait"
                          ? "/cakeParfait.png"
                          : item.imageUrl || ""
                      }
                      alt={item.itemName}
                    />
                  </div>
                  <div>
                    <span> {item.itemName} </span>
                    <br />
                    <span> {item.itemType} </span>
                    <br />
                    <span> {item.quantity} </span>
                    <br />
                    <span> {item.price} </span>
                  </div>
                </div>
                <CustomButton
                  type="button"
                  label="delete"
                  onClick={() => {
                    handleRemoveItem(item.itemId);
                  }}
                  style={{
                    backgroundColor: "#f4f3f0",
                    color: "red",
                    padding: ".2rem",
                  }}
                />
              </>
            ))}
          </div>
          <div className='cartItems-end'>
            <h2>Total : {cartTotal}</h2>
            <span>
              <CustomButton
                type="button"
                label="proceed to checkout"
                onClick={checkoutPage}
                style={{ width: "auto" }}
              />
            </span>
          </div>
        </div>
        <Footer />
      </div>
    );
}