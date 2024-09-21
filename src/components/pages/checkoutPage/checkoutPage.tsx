import {CheckoutPageNav} from "../../navbar/checkoutPageNav";
import {Footer} from "../../footer/footer"
import "./checkoutPage.css"
import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { AuthContext } from "../../../context/authcontext/authContext";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
    const [clientName, setClientName] = useState<any>()
    const [clientAddress, setClientAddress] = useState<any>()
    const [clientPhoneNumber, setClientPhoneNumber] = useState<any>()
    const [clientRegion, setClientRegion] = useState<any>()
    const [clientCity, setClientCity] = useState<any>();
    const {defaultAddress} = useContext(CheckoutContext)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const name = () => {
          const client = defaultAddress && defaultAddress.firstName.toUpperCase() + " " + defaultAddress.lastName.toUpperCase();
          const address = defaultAddress && defaultAddress.deliveryAddress;
          const phoneNumber = defaultAddress && defaultAddress.phoneNumber;
          const region = defaultAddress && defaultAddress.region;
          const city = defaultAddress && defaultAddress.city
            setClientName(() => client)
            setClientAddress(() => address)
            setClientPhoneNumber(() => phoneNumber)
            setClientRegion(() => region)
            setClientCity(() => city)
        };
        name()
    },[defaultAddress])
    
    const addressBook = () => navigate("/auth/addressBook")

    return (
      <div className="checkoutPage-container">
        <CheckoutPageNav />
        <div className="checkoutPageBody-container">
          <div className="checkoutPage-body">
            <div className="deliveryAddress">
              <div className="deliveryAddress-header">
                <span>Delivery Address</span>
                <span style={{ 
                    color: "rgb(78, 51, 104)", 
                    cursor: "pointer" }}
                    onClick={addressBook}
                    >
                  Change
                </span>
              </div>
              <div className="deliveryAddress-content">
                <span>{clientName}</span> <br />
                <span>{clientAddress} | {clientRegion}-{clientCity} | {clientPhoneNumber}</span>
              </div>
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