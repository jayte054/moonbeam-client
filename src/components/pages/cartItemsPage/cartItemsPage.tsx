import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext/cartContext";
import { Footer } from "../../footer/footer"
import { CartPageNav } from "../../navbar/cartPageNav"
import "./cartItemsPage.css";


export const CartItemsPage = () => {
  const [itemName, setItemName] = useState<string>("");
  const [price, setPrice]= useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [itemType, setItemtype] = useState<string>("")
  const {cartItems} = useContext<any>(CartContext)

  useEffect(() => {
    const cart = async() => {
      const items = await cartItems;
      console.log(items)
    }
    cart()
  }, [])

    return (
      <div className="cartItemsPage-container">
        <CartPageNav />
        <div className="cartItemsPage-body">
          <div className="cartItemsPage-header">Cart Items Page</div>
          <div className="cartItems-content">
            <div className="cartItems-contentHeader">
              <span>Product</span>
              <span>Name</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Type</span>
              <span>Remove</span>
            </div>
            <div>
              <span>{imageUrl}</span>
              <span>{itemName}</span>
              <span>{quantity}</span>
              <span>{price}</span>
              <span>{itemType}</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}