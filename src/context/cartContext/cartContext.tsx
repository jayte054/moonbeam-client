import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CartStores } from "../../stores/cartStores";
import { CartObject } from "../../types";
import { AuthContext } from "../authcontext/authContext";

interface CartProviderProps {
    children: ReactNode
}

interface CartContextType {
  cartItems: CartObject[];
  cartTotal: string;
  cartCount: string;
  setCartCount: React.Dispatch<React.SetStateAction<string>>;
  addItemToCart: (newItem: CartObject) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartObject[]>>;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartTotal: "0.00",
  cartCount: "",
  setCartCount: () => {},
  addItemToCart: () => {},
  setCartItems: () => {}
});

export const CartProvider = ({children}: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartObject[]>([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartCount, setCartCount] = useState("")
    const {getCartItems}: any = CartStores
    const {user} = useContext(AuthContext)
    const accessToken = user.accessToken;

    useEffect(() => {
        if(user && user.accessToken) {
          const cartItems = async () => {
            const items = await getCartItems(accessToken);
            console.log(items);
            setCartItems(() => items);
          };
          cartItems();
        }
    }, [ accessToken, getCartItems]);

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

    const addItemToCart = (newItem: CartObject) => {
      setCartItems((prevItems) => [...prevItems, newItem]);
    };

    const value = {
      cartItems,
      cartTotal: formatCurrency(cartTotal),
      cartCount,
      setCartCount,
      setCartItems,
      addItemToCart,
    };

    return (
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}