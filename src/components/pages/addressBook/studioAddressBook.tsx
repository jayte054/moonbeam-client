import { Formik, FormikHelpers } from "formik";
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authcontext/authContext";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { checkoutStores } from "../../../stores/checkoutStores";
import { AddressObject, CreateDeliveryAddressDto, StudioAddressObject } from "../../../types";
import { CreateAddressForm } from "../../formComponents/createAddressForm";
import { CustomButton } from "../../formComponents/customButton";
import { createAddressSchema } from "../../formComponents/formSchema";
import { CheckoutPageNav } from "../../navbar/checkoutPageNav";
import "./addressBook.css";

interface addressFormikHelper extends FormikHelpers<CreateDeliveryAddressDto> {}



export const StudioAddressBook = () => {
  const [addresses, setAddresses] = useState<ReactNode[] | any[]>([]);
  const { getStudioAddresses, setDefaultStudioAddress, studioAddresses } =
    checkoutStores;
  const { user } = useContext(AuthContext);
  const accessToken = user?.accessToken;
  const navigate = useNavigate();

  // Memoize the render function to avoid unnecessary recalculations
  const renderAddresses = useCallback(
    (addresses: StudioAddressObject[]) => {
      const jsxAddresses = addresses.map((address: StudioAddressObject) => (
        <div key={address.studioId} className="addressBook-deliveryDetails">
          <div className="deliveryAddress-content">
            <span>{address.studioTitle}</span>
            <br />
            <span>
              {address.studioAddress} | {address.state} - {address.LGA} <br />
              {address.phoneNumber}
            </span>
          </div>
          <div className="addressAction">
            {address.defaultStudioAddress ? (
              <div className="deliveryAddress-badge">
                <span>Studio Address</span>
              </div>
            ) : (
              <CustomButton
                type="button"
                label="Select"
                onClick={async () => {
                  try {
                    await setDefaultStudioAddress(
                      accessToken,
                      address.studioId
                    );
                    navigate("/auth/checkoutPage");
                  } catch (error) {
                    console.error(error);
                  }
                }}
              />
            )}
          </div>
        </div>
      ));
      setAddresses(jsxAddresses);
    },
    [setDefaultStudioAddress, accessToken, navigate]
  );

  // Fetch addresses and call render once
  const fetchAndRenderAddresses = useCallback(async () => {
    try {
      const fetchedStudioAddresses = await studioAddresses(accessToken);
      //
    //   const addressList =
    //     fetchedStudioAddresses.length > 0
    //       ? fetchedStudioAddresses
    //       : await getStudioAddresses(accessToken);
     
    const addressList = await getStudioAddresses(accessToken);
      const sortedAddresses = addressList.sort(
        (a: StudioAddressObject, b: StudioAddressObject) =>
          b.defaultStudioAddress ? 1 : 0 - (a.defaultStudioAddress ? 1 : 0)
      );
      renderAddresses(sortedAddresses);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  }, [accessToken, studioAddresses, getStudioAddresses, renderAddresses]);

  useEffect(() => {
    if (accessToken) {
      fetchAndRenderAddresses();
    }
  }, [accessToken, fetchAndRenderAddresses]);

  return (
    <div>
      <CheckoutPageNav />
      <div className="addressBook-body">
        <div className="addressBook-header">
          <h3>Studio Address Book</h3>
          <span>Select Studio Address</span>
        </div>
        <div className="addressBook-content">
          {addresses.length > 0 ? addresses : <span>No addresses found</span>}
        </div>
      </div>
    </div>
  );
};


