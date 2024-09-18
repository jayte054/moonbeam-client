import { createContext, useContext, useEffect, useState } from "react";
import { getCartItems } from "../../services/cartServices/cartServices";
import { CartStores } from "../../stores/cartStores";
import { AuthContext } from "../authcontext/authContext";

export const CartContext: any = createContext({
    items: []
});

export const CartProvider = ({children}: any) => {
    const [cartItems, setCartItems] = useState<any[]>([])
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

    const value = {cartItems};

    return (
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}