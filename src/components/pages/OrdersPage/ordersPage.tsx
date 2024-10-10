import { CheckoutPageNav } from "../../navbar/checkoutPageNav";

import "./ordersPage.css"

export const OrdersPage = () => {

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