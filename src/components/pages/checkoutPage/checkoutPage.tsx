import {CheckoutPageNav} from "../../navbar/checkoutPageNav";
import {Footer} from "../../footer/footer"
import "./checkoutPage.css"
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { AuthContext } from "../../../context/authcontext/authContext";
import { useNavigate } from "react-router-dom";
import { calculateDeliveryFee, getCoordinates } from "../../utilsComponent";

export const CheckoutPage = () => {
    const [clientName, setClientName] = useState<string>()
    const [clientAddress, setClientAddress] = useState<string | number | boolean>();
    const [clientPhoneNumber, setClientPhoneNumber] = useState<any>()
    const [clientRegion, setClientRegion] = useState<string>();
    const [clientCity, setClientCity] = useState<string>();
    const [deliveryCoordinates, setDeliveryCoordinates] = useState<any | null>(null);
    const [studioCoordinates, setStudioCoordinates] = useState<any | null>(null);
    const [deliveryRate, setDeliveryRate]= useState<any>(null)
    const {defaultAddress} = useContext(CheckoutContext)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const addressDetails = () => {
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
        addressDetails();
    },[defaultAddress])
    
    const addressBook = () => navigate("/auth/addressBook")
    //     const address =
    //       clientAddress && clientCity
    //         ? clientAddress + ", " + clientCity + ", " + clientRegion
    //         : "";
    // const geo = async () => console.log(await getCoordinates(address));
    // geo()

    const phoneNumber = "0" + clientPhoneNumber;

    useEffect(() => {
      const geo2 = async () => {
        const studioAddress = "new haven hostel, bishops' court owerri";
        const homeCoords = await getCoordinates(studioAddress);
        setStudioCoordinates(homeCoords);
        console.log(homeCoords);
      };
      geo2();
    }, []);

    
    // const fetchDeliveryCoordinates = async() => {
    //     const address = clientAddress && clientCity ? clientAddress + ", " + clientCity + ", " + clientRegion : ""
    //     const coordinates = await getCoordinates(address)
    //     console.log(coordinates)
    //     setDeliveryCoordinates(() => coordinates)
    // }

    useEffect(() => {
        const fetchDeliveryCoordinates = async () => {
            console.log(defaultAddress)
          const address = defaultAddress
            ? defaultAddress.deliveryAddress +
              ", " +
              defaultAddress.city +
              ", " +
              defaultAddress.region
            : "";
              console.log(address)
          const coordinates = await getCoordinates(address);
          console.log(coordinates);
          setDeliveryCoordinates(() => coordinates);
        };
        fetchDeliveryCoordinates()
    }, [defaultAddress]);

    const deliveryFee = async () => {
        const customerLat = deliveryCoordinates && deliveryCoordinates.lat;
        const customerLon = deliveryCoordinates && deliveryCoordinates.lng;
        const studioLat = studioCoordinates && studioCoordinates.lat;
        const studioLon = studioCoordinates && studioCoordinates.lng;
        const rate = await calculateDeliveryFee(customerLat, customerLon, studioLat, studioLon)
        setDeliveryRate(rate)
        console.log(rate)
    }

    useEffect(() => {
      const delivery = () =>
        studioCoordinates && deliveryCoordinates !== null
          ? deliveryFee()
          : null;
      delivery();
    }, [studioCoordinates, deliveryCoordinates]);

    return (
      <div className="checkoutPage-container">
        <CheckoutPageNav />
        <div className="checkoutPageBody-container">
          <div className="checkoutPage-body">
            <div className="deliveryAddress">
              <div className="deliveryAddress-header">
                <span>Delivery Address</span>
                <span
                  style={{
                    color: "rgb(78, 51, 104)",
                    cursor: "pointer",
                  }}
                  onClick={addressBook}
                >
                  Change
                </span>
              </div>
              <div className="deliveryAddress-content">
                <span>{clientName}</span> <br />
                <span>
                  {clientAddress} | {clientRegion}-{clientCity} | {phoneNumber}
                </span>
              </div>
            </div>
            <div className="deliveryDetails">
              <h3>Delivery Details</h3>
              <span> Delivery rate is {deliveryRate}</span><br />
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