import { ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authcontext/authContext";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { checkoutStores } from "../../../stores/checkoutStores";
import { AddressObject } from "../../../types";
import { CustomButton } from "../../formComponents/customButton";
import { CheckoutPageNav } from "../../navbar/checkoutPageNav";
import "./addressBook.css"

export const AddressBook = () => {
    const [addresses, setAddresses] = useState<ReactNode>();
    const { getDeliveryAddress, defaultAddress } = checkoutStores;
    const {user} = useContext(AuthContext)
    const {setDefaultAddress} = useContext(CheckoutContext)
    const accessToken = user?.accessToken;
    const navigate = useNavigate()

    const checkoutPage = () => navigate("/auth/checkoutPage");

    useEffect(() => {
        const _addresses = async () => {
            const address = await getDeliveryAddress(accessToken);

            const sortedAddresses = address.sort((a: AddressObject, b:AddressObject) => {
                return(b.defaultAddress === true ? 1 : 0 ) - (a.defaultAddress ===true ? 1 : 0)
            })

            const _address = sortedAddresses.map((address: AddressObject) => (
              <div
                key={address.deliveryAddressId}
                className="addressBook-deliveryDetails"
              >
                <div className="deliveryAddress-content">
                  <span>
                    {address.firstName} {address.lastName}
                  </span>{" "}
                  <br />
                  <span>
                    {address.deliveryAddress} | {address.region}-{address.city}{" "}
                    <br />
                    {address.phoneNumber}
                  </span>
                </div>
                <div className="addressAction">
                  {address.defaultAddress === true ? (
                    <div className="deliveryAddress-badge">
                      <span> Delivering Address </span>
                    </div>
                  ) : (
                    <CustomButton
                      type="button"
                      label="select"
                      onClick={async () => {
                        try {
                          const newDefault = await defaultAddress(
                            accessToken,
                            address.deliveryAddressId
                          );
                          setDefaultAddress(newDefault);
                          _addresses();
                          checkoutPage();
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    />
                  )}
                  <span>
                    <CustomButton type="button" label="delete" />
                  </span>
                </div>
              </div>
            ));
            setAddresses(() => _address)
        }
        _addresses()
    }, [getDeliveryAddress, accessToken, defaultAddress])

    return (
      <div>
        <CheckoutPageNav />
        <div className="addressBook-body">
          <div className="addressBook-header">
            <h3>Address Book</h3>
            <span>Select Delivery Address</span>
          </div>
          <div className="addressBook-content">
            {addresses && addresses}
            <span className="add-address">+ Add Address</span>
          </div>
        </div>
      </div>
    );
}