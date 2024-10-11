import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authcontext/authContext";
import { OrderContext } from "../../../context/orderContext/orderContext";
import { OrderStores } from "../../../stores/orderStores";
import { CheckoutPageNav } from "../../navbar/checkoutPageNav";

import "./ordersPage.css"

export const OrdersPage = () => {
    const {orderedItems, setOrderedItems} = useContext(OrderContext);
    const {user} = useContext(AuthContext)
    const {fetchOrders} = OrderStores;

    useEffect(() => {
        const newItems = async () => {
            const newOrder = await fetchOrders(user.accessToken)
            setOrderedItems( () => newOrder)
        }
        newItems();
    }, [fetchOrders])

    return (
        <div>
            <CheckoutPageNav />
            Orders Page
            <div>
                <h2>Custom Requests</h2>
            </div>
            <div>
                <h2>Quick Orders</h2> 
            </div>
        </div>
    )
}