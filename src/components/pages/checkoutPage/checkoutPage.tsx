import {CheckoutPageNav} from "../../navbar/checkoutPageNav";
import {Footer} from "../../footer/footer"
import "./checkoutPage.css"
import React, { ChangeEventHandler, ReactNode, useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { AuthContext } from "../../../context/authcontext/authContext";
import { useNavigate } from "react-router-dom";
import { calculateDeliveryFee, getCoordinates } from "../../utilsComponent";
import { checkoutStores } from "../../../stores/checkoutStores";
import { StudioAddressObject } from "../../../types";
import { CustomButton } from "../../formComponents/customButton";

export const CheckoutPage = () => {
    const [studioAddress, SetStudioAddress] = useState<StudioAddressObject | null>(null)
    const [clientName, setClientName] = useState<string>()
    const [clientAddress, setClientAddress] = useState<string | number | boolean>();
    const [clientPhoneNumber, setClientPhoneNumber] = useState<string>('')
    const [clientRegion, setClientRegion] = useState<string>();
    const [clientCity, setClientCity] = useState<string>();
    const [deliveryCoordinates, setDeliveryCoordinates] = useState<any | null>(null);
    const [studioCoordinates, setStudioCoordinates] = useState<any | null>(null);
    const [deliveryRate, setDeliveryRate]= useState<number | null>(null)
    const [deliveryOption, setDeliveryOption] = useState<string>('')
    const {defaultAddress} = useContext(CheckoutContext)
    const {getDefaultStudioAddress} = checkoutStores
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
      const studio = async () => {
        const accessToken = user.accessToken;
        const address = await getDefaultStudioAddress(accessToken);
        console.log(address);
        SetStudioAddress(() => address);
      };
      studio();
    }, [ getDefaultStudioAddress]);

        useEffect(() => {
          const geo2 = async () => {
            console.log(studioAddress);
            const studioAddressDetails: string | any = studioAddress
              ? studioAddress.studioAddress +
                " " +
                studioAddress.LGA +
                " " +
                studioAddress.state
              : "";
            console.log(studioAddressDetails);
            const homeCoords = await getCoordinates(studioAddressDetails);
            setStudioCoordinates(homeCoords);
            console.log(homeCoords);
          };
          geo2();
        }, [studioAddress, getDefaultStudioAddress]);

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
    const studioAddressBook = () => navigate("/auth/studioAddressBook")

    const phoneNumber = "0" + clientPhoneNumber;


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

    const handleDeliveryOption = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryOption(event.target.value)
    }

    return (
      <div className="checkoutPage-container">
        <CheckoutPageNav />
        <div className="checkoutPageBody-container">
          <div className="checkoutPage-body">
            <div className="studioAddress">
              <div className="studioAddress-header">
                <span>Studio Address</span>
                <span
                  style={{
                    color: "rgb(78, 51, 104)",
                    cursor: "pointer",
                  }}
                  onClick={studioAddressBook}
                >
                  Change
                </span>
              </div>
              <div className="studioAddress-content">
                {studioAddress ? (
                  <>
                    <span>{studioAddress?.studioTitle}</span> <br />
                    <span>
                      {studioAddress?.studioAddress} | {studioAddress?.state}-
                      {studioAddress?.LGA} | {studioAddress?.phoneNumber}
                    </span>
                  </>
                ) : (
                  <CustomButton
                    type="button"
                    label="Choose Studio Address"
                    onClick={studioAddressBook}
                  />
                )}
              </div>
            </div>
            <div>
              <form>
                <h3>Select Delivery Option</h3>
                <div>
                  <label>
                    <input
                      type="radio"
                      //   name="Pick Up"
                      value="Pick Up"
                      checked={deliveryOption === "Pick Up"}
                      onChange={handleDeliveryOption}
                    />
                    Pick Up
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      //   name="Pick Up"
                      value="Home Delivery"
                      checked={deliveryOption === "Home Delivery"}
                      onChange={handleDeliveryOption}
                    />
                    Home Delivery
                  </label>
                </div>

                <div>
                  <p>Delivery Option: {deliveryOption}</p>{" "}
                </div>
              </form>
            </div>
            {deliveryOption === "Home Delivery" ? (
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
                    {clientAddress} | {clientRegion}-{clientCity} |{" "}
                    {phoneNumber}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="deliveryDetails">
              <div className="deliveryDetails-header">
                <span>Delivery Details</span>
              </div>
              {deliveryOption === "Home Delivery" ? (
                <div className="deliveryDetails-content">
                  <span>
                    {" "}
                    Delivery rate is NGN{" "}
                    {deliveryRate && Math.ceil((deliveryRate * 100) / 100)}
                  </span>
                </div>
              ) : (
                <div className="deliveryDetails-content">
                  <span> Delivery rate is NGN 0</span>
                </div>
              )}
              <br />
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