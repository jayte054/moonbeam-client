import { Formik, FormikHelpers } from "formik";
import { ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authcontext/authContext";
import { CheckoutContext } from "../../../context/checkoutContext/checkoutContext";
import { checkoutStores } from "../../../stores/checkoutStores";
import { AddressObject, CreateDeliveryAddressDto } from "../../../types";
import { CreateAddressForm } from "../../formComponents/createAddressForm";
import { CustomButton } from "../../formComponents/customButton";
import { createAddressSchema } from "../../formComponents/formSchema";
import { CheckoutPageNav } from "../../navbar/checkoutPageNav";
import "./addressBook.css"

interface addressFormikHelper extends FormikHelpers<CreateDeliveryAddressDto> {}


export const AddressBook = () => {
  const [addressList, setAddressList] = useState<AddressObject[]>([]); // Raw data
  const [addresses, setAddresses] = useState<ReactNode[] | any[]>([]); // JSX to render
  const [createAddressForm, setCreateAddressForm] = useState(false);
  const { 
    getDeliveryAddress, 
    defaultAddress, 
    createDeliveryAddress,
    deleteDeliveryAddress,
} =
    checkoutStores;
  const { user } = useContext(AuthContext);
  const { setDefaultAddress } = useContext(CheckoutContext);
  const accessToken = user?.accessToken;
  const navigate = useNavigate();

  const checkoutPage = () => navigate("/auth/checkoutPage");

  const addressInitialValues: CreateDeliveryAddressDto = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    additionalPhoneNumber: "",
    deliveryAddress: "",
    defaultAddress: false,
    region: "",
    city: "",
  };

  const toggleAddressForm = () => setCreateAddressForm((prev) => !prev);

  const renderAddresses = (addresses: AddressObject[]) => {
    const jsxAddresses = addresses.map((address: AddressObject) => (
      <div
        key={address.deliveryAddressId}
        className="addressBook-deliveryDetails"
      >
        <div className="deliveryAddress-content">
          <span>
            {address.firstName} {address.lastName}
          </span>
          <br />
          <span>
            {address.deliveryAddress} | {address.region} - {address.city} <br />
            {address.phoneNumber}
          </span>
        </div>
        <div className="addressAction">
          {address.defaultAddress === true ? (
            <div className="deliveryAddress-badge">
              <span>Delivering Address</span>
            </div>
          ) : (
            <CustomButton
              type="button"
              label="Select"
              onClick={async () => {
                try {
                  const newDefault = await defaultAddress(
                    accessToken,
                    address.deliveryAddressId
                  );
                  setDefaultAddress(newDefault);
                  await fetchAndRenderAddresses();
                  checkoutPage();
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          )}
          <span>
            <CustomButton
              type="button"
              label="Delete"
              onClick={async() => {
                await deleteAddress(address.deliveryAddressId, addresses, accessToken)}}
            />
          </span>
        </div>
      </div>
    ));

    setAddresses(jsxAddresses); // Update the JSX-rendered state
  };

  const fetchAndRenderAddresses = async () => {
    const address = await getDeliveryAddress(accessToken);

    // Sort addresses to ensure default address is at the top
    const sortedAddresses = address.sort((a: AddressObject, b: AddressObject) =>
      b.defaultAddress === true ? 1 : 0 - (a.defaultAddress === true ? 1 : 0)
    );
    setAddressList(sortedAddresses); // Set the raw data in `addressList`
    renderAddresses(sortedAddresses); // Render the JSX elements based on `addressList`
  };

  useEffect(() => {
    fetchAndRenderAddresses();
  }, [getDeliveryAddress, accessToken, defaultAddress]);

  const deleteAddress = async (deliveryAddressId: string, addresses: AddressObject[], accessToken: string) => {

    try {
         const updatedAddressList = addresses?.filter(
           (address: AddressObject) =>
             address.deliveryAddressId !== deliveryAddressId
         );
         await deleteDeliveryAddress(accessToken, deliveryAddressId)
         
         if (updatedAddressList.length < addresses.length) {
           setAddressList(updatedAddressList); // Update raw data
           renderAddresses(updatedAddressList); // Re-render the JSX
         } else {
           console.log("No address was deleted.");
         }

        // Update the state with the filtered list
        setAddressList(updatedAddressList);
    } catch (error) {
      console.log("Error deleting address:", error);
    }
  };

  const createAddress = async (
    values: CreateDeliveryAddressDto,
    formikHelpers: addressFormikHelper
  ) => {
    try {
      if (!accessToken) return;

      // Create the new delivery address
      await createDeliveryAddress(accessToken, values);

      // Reset the form
      formikHelpers.resetForm();
      await fetchAndRenderAddresses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CheckoutPageNav />
      <div className="addressBook-body">
        <div className="addressBook-header">
          <h3>Address Book</h3>
          <span>Select Delivery Address</span>
        </div>
        <div className="addressBook-content">
          {addresses.length > 0 ? addresses : <span>No addresses found</span>}

          <span className="add-address" onClick={toggleAddressForm}>
            + Add Address
          </span>

          {createAddressForm && (
            <Formik
              initialValues={addressInitialValues}
              validationSchema={createAddressSchema}
              onSubmit={(values, addressFormikHelper) => {
                createAddress(values, addressFormikHelper);
              }}
            >
              {(formikProps) => (
                <div>
                  <CreateAddressForm
                    {...formikProps}
                    toggleCreateAddress={(values: CreateDeliveryAddressDto) =>
                      createAddress(values, formikProps)
                    }
                  />
                </div>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};
