import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getCartItems } from "../../services/cartServices/cartServices";
import { CartStores } from "../../stores/cartStores";
import { CartObject } from "../../types";
import { AuthContext } from "../authcontext/authContext";

interface CartProviderProps {
    children: ReactNode
}

interface CartContextType {
    cartItems: [],
    cartTotal: string,
    cartCount: string,
    setCartCount: () => void
}

export const CartContext: any = createContext<CartContextType>({
    cartItems: [],
    cartTotal: "0.00",
    cartCount: "",
    setCartCount: () => {},
});

export const CartProvider = ({children}: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartObject[]>([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartCount, setCartCount] = useState("")
    const {getCartItems} = CartStores
    const {user} = useContext(AuthContext)
    const accessToken = user.accessToken;

    useEffect(() => {
        if(user && user.accessToken) {
          const cartItems = async () => {
            const items = await getCartItems(accessToken);
            // console.log(items);
            setCartItems(() => items);
          };
          cartItems();
        }
    }, [user, cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + Number(cartItem.quantity) * Number(cartItem.price), 0)
        setCartTotal(() => newTotal)
    }, [cartItems])

    useEffect(() => {
         const totalCartCount = () => {
           const count = cartItems.reduce(
             (total, cartItem) => total + Number(cartItem.quantity),
             0
           );
           setCartCount(() => count.toString());
         };
         totalCartCount()
    }, [cartItems])
   

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "NGN"
        }).format(amount)
    }

    const value = {
        cartItems, 
        cartTotal: formatCurrency(cartTotal),
        cartCount,
        setCartCount,
    };

    return (
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}