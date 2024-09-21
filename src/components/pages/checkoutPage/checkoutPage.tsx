import {CheckoutPageNav} from "../../navbar/checkoutPageNav";
import {Footer} from "../../footer/footer"
import "./checkoutPage.css"

export const CheckoutPage = () => {

    return (
      <div className="checkoutPage-container">
        <CheckoutPageNav />
        <div className="checkoutPageBody-container">
          <div className="checkoutPage-body">
            <div className="deliveryAddress">
              <div className="deliveryAddress-header">
                <span>Delivery Address</span>
                <span style={{ color: "rgb(78, 51, 104)", cursor: "pointer" }}> Change </span>
              </div>
              <span></span>
              <span></span>
            </div>
            <div className="deliveryDetails">
              <h3>Delivery Details</h3>
              <span>Modify Cart</span>
            </div>
            <div className="payment">
              <h3>Payment Method</h3>
            </div>
          </div>
          <div className="orderSummary">
            <h3>Order Summary</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
}