import {CheckoutPageNav} from "../../navbar/checkoutPageNav";
import {Footer} from "../../footer/footer"

export const CheckoutPage = () => {

    return (
        <div>
            <CheckoutPageNav />
            <div>
            <div>
                <div>
                <h3>Delivery Address</h3>
                </div>
                <div>
                    <h3>Delivery Details</h3>
                    <span>Modify Cart</span>
                </div>
                <div>
                    <h3>Payment Method</h3>
                </div>
            </div>
            <div>
                <h3>Order Summary</h3>
            </div>
            </div>
            <Footer />
        </div>
    )
}