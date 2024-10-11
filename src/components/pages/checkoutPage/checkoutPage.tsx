import {CheckoutPageNav} from "../../navbar/checkoutPageNav";
import {Footer} from "../../footer/footer"
import "./checkoutPage.css"
import React, { ChangeEventHandler, ReactNode, useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { AuthContext } from "../../../context/authcontext/authContext";
import { useNavigate } from "react-router-dom";
import { calculateDeliveryFee, decryptReference, encryptReference, getCoordinates } from "../../utilsComponent";
import { checkoutStores } from "../../../stores/checkoutStores";
import { CartObject, OrderDto, ReferenceObject, StudioAddressObject, verificationDto } from "../../../types";
import { CustomButton } from "../../formComponents/customButton";
import { CartContext } from "../../../context/cartContext/cartContext";
import { paymentStores } from "../../../stores/paymentStores";
import {usePaystackPayment} from "react-paystack"
import { config } from "process";
import { deleteCartItem } from "../../../services/cartServices/cartServices";
import { CartStores } from "../../../stores/cartStores";
import { OrderStores } from "../../../stores/orderStores";

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
    const [cartItem, setCartItem] = useState(null)
    const {defaultAddress} = useContext(CheckoutContext)
    const {getDefaultStudioAddress} = checkoutStores
    const { initiatePayment, verifyPayment } = paymentStores;
    const { deleteCartItem, getCartItems } = CartStores;
    const {addItemToOrders} = OrderStores;
    const {user} = useContext(AuthContext)
    const { cartItems, cartTotal, setCartItems } = useContext(CartContext);
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
    };

    const parsedCartTotal = Number(cartTotal.replace(/[^0-9.-]+/g, ""));
    

    const total = deliveryRate && deliveryRate + parsedCartTotal;
    console.log(total);

    
const paymentDto = {
  amount:
    deliveryOption === "Pick Up" || "" ? parsedCartTotal.toString() : total?.toString(),
  userId: user.id,
};

const config = {
  email: user.email,
  amount: Number(paymentDto.amount) * 100,
  publicKey: process.env.REACT_APP_Paystack_Test_Public_Key!,
  currency: "NGN",
};

const initializePayment = usePaystackPayment(config);


const handlePayment = async () => {
  
  try {
    // Call initiatePayment to get the reference
    const paymentResponse = await initiatePayment(user.accessToken, paymentDto);
    
    const reference = paymentResponse.reference 

    const iv= paymentResponse.iv

    const decryptedReference = await decryptReference(
      reference,
      iv
    );
    
    // Trigger the payment
    
    initializePayment({
      config: {
        ...config,
        reference: decryptedReference,
      },
      onSuccess: async (reference: ReferenceObject) => {
        console.log("Payment successful", reference.reference);
        const encryptedReference = await encryptReference(
          reference.reference,
          paymentResponse.iv
        );
        const verificationDto: verificationDto = {
          reference: encryptedReference,
          iv: paymentResponse.iv,
          paymentId: paymentResponse.paymentId,
        };

        await verifyPayment(user.accessToken, verificationDto);
        console.log("payment verified successfully");
        // const orderDto: OrderDto = {
        //   orderName: cartItem.itemName
        // }
        // await addItemToOrders(user.accessToken, orderDto);
        const deleteCart =  cartItems.map( async (cartItem) => {
          const orderDto: OrderDto = {
            orderName: cartItem.itemName,
            imageUrl: cartItem.imageUrl || cartItem.image,
            quantity: cartItem.quantity,
            deliveryDate: cartItem.deliveryDate,
          };
            await addItemToOrders(user.accessToken, orderDto);

           await deleteCartItem(user.accessToken, cartItem.itemId)
        })
        
        await Promise.all(deleteCart)
       
        const updatedCart: CartObject[] = await getCartItems(user.accessToken);
        console.log(updatedCart)
        setCartItems(updatedCart);
        navigate("/auth/ordersPage")
      },
      onClose: () => {
        console.log("Payment closed");
      },
    });
  } catch (error) {
    console.log("Error during payment:", error);
  }
};



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
                    style={{ width: "100%" }}
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
                  <p>
                    <strong>Delivery Option</strong>: {deliveryOption}
                  </p>{" "}
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
                  <div className="cart-container">
                    {cartItems.map((cartItem) => (
                      <div key={cartItem.itemId} className="cartItems">
                        <span style={{ borderBottom: "1px solid black" }}>
                          Delivery Date : {cartItem.deliveryDate}
                        </span>{" "}
                        <div className="cart-desc">
                          <div>
                            <span style={{ paddingTop: "1rem" }}>
                              <img
                                src={
                                  cartItem.itemType === "foilCake"
                                    ? "/foilcake.png"
                                    : cartItem.itemType === "cakeParfait"
                                    ? "/cakeParfait.png"
                                    : cartItem.imageUrl || ""
                                }
                                alt={cartItem.itemName}
                              />
                            </span>
                          </div>

                          <div>
                            <span style={{ paddingTop: ".7rem" }}>
                              {cartItem.itemName}
                            </span>{" "}
                            <br />
                            <span>Quantity: {cartItem.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p> Items Total : {cartTotal}</p>

                  <span>
                    Delivery rate : NGN{" "}
                    {deliveryRate && deliveryRate.toFixed(2)}
                  </span>
                  <p>Total: NGN {total && total.toFixed(2)}</p>
                </div>
              ) : (
                <div className="deliveryDetails-content">
                  <div className="cart-container">
                    {cartItems.map((cartItem) => (
                      <div key={cartItem.itemId} className="cartItems">
                        <span style={{ borderBottom: "1px solid black" }}>
                          Delivery Date : {cartItem.deliveryDate}
                        </span>{" "}
                        <div className="cart-desc">
                          <div>
                            <span style={{ paddingTop: "1rem" }}>
                              <img
                                src={
                                  cartItem.itemType === "foilCake"
                                    ? "/foilcake.png"
                                    : cartItem.itemType === "cakeParfait"
                                    ? "/cakeParfait.png"
                                    : cartItem.imageUrl || ""
                                }
                                alt={cartItem.itemName}
                              />
                            </span>
                          </div>

                          <div>
                            <span style={{ paddingTop: ".7rem" }}>
                              {cartItem.itemName}
                            </span><br />
                            <span>Quantity: {cartItem.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p>
                    <strong>Items Total</strong> : {cartTotal}
                  </p>
                  <p>
                    {" "}
                    <strong>Delivery rate</strong> : NGN 0
                  </p>
                  <p>
                    {" "}
                    <strong>Total</strong>: {cartTotal}
                  </p>
                </div>
              )}
            </div>
            <div className="payment">
              {deliveryOption === "" ? null : (
                <>
                  <h3>Payment</h3>
                  <CustomButton
                    type="button"
                    label="Make Payment"
                    onClick={handlePayment}
                    style={{ width: "100%" }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
}