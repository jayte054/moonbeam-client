import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";
import { OrderStores } from "../../stores/orderStores";
import { OrderedObject } from "../../types";
import { AuthContext } from "../authcontext/authContext";


interface OrderProviderProps {
    children: ReactNode
}

interface OrderContextType {
  orderedItems: OrderedObject[];
  addItemsToOrders: (newOrder: OrderedObject) => void;
  setOrderedItems: React.Dispatch<React.SetStateAction<OrderedObject[]>>;
}

export const OrderContext = createContext<OrderContextType>({
  orderedItems: [],
  addItemsToOrders: ()=> {},
  setOrderedItems: () => {}
})

export const OrderProvider = ({children}: OrderProviderProps) => {
    const [orderedItems, setOrderedItems] = useState<OrderedObject[]>([])
    const {fetchOrders} = OrderStores;
    const {user} = useContext(AuthContext)

    useEffect(() => {
        if(user) {
            const orderedItems = async () => {
                const items = await fetchOrders(user.accessToken)
                console.log(items)
                setOrderedItems(items)
            }
            orderedItems()
        }
    }, [user])

    const addItemsToOrders = async (newOrder: OrderedObject) => {
        setOrderedItems((prevItems) => [...prevItems, newOrder])
    }

    const value = {
      orderedItems,
      addItemsToOrders,
      setOrderedItems,
    };

    return (
        <OrderContext.Provider value = {value}>{children}</OrderContext.Provider>
    )
}