import { createContext, useContext, useEffect, useState } from "react";
import { getCartItems } from "../../services/cartServices/cartServices";
import { CartStores } from "../../stores/cartStores";
import { CartObject } from "../../types";
import { AuthContext } from "../authcontext/authContext";

export const CartContext: any = createContext({
    cartItems: [],
    cartTotal: 0
});

export const CartProvider = ({children}: any) => {
    const [cartItems, setCartItems] = useState<CartObject[]>([])
    const [cartTotal, setCartTotal] = useState(0)
    const {getCartItems} = CartStores
    const {user} = useContext(AuthContext)
    const accessToken = user.accessToken;

    useEffect(() => {
        if(user && user.accessToken) {
          const cartItems = async () => {
            const items = await getCartItems(accessToken);
            console.log(items);
            setCartItems(items);
          };
          cartItems();
        }
    }, [user, accessToken])

    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + Number(cartItem.quantity) * Number(cartItem.price), 0)
        setCartTotal(() => newTotal)
    }, [cartItems])

    const value = {cartItems, cartTotal};

    return (
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}