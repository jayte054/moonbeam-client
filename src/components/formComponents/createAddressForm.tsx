import { FormikProps } from "formik";
import { CreateDeliveryAddressDto } from "../../types";
import { AddToCartButton } from "./addToCartButton";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./createAddressForm.css";
import React, { ReactNode, useEffect, useState } from "react";

interface CreateAddressProps extends FormikProps<CreateDeliveryAddressDto> {
  toggleCreateAddress: (
    values: CreateDeliveryAddressDto,
    addressFormikHelper: any
  ) => void;
  toggleAddressForm: () => void
}

export const CreateAddressForm: React.FC<CreateAddressProps> = (props) => {
    const [states, setStates] = useState<string[]>([]);
    const [fetchedStates, setFetchedStates] = useState<any[]>([])
    const [cities, setCities] = useState<string[]>([]);
    const {values, touched, errors, handleChange, setFieldValue, toggleAddressForm} = props;

    const fetchStates = async () => {
      try {
        const response = await fetch(
        //   "https://nigeria-states-towns-lgas.onrender.com/api/all"
          "https://nga-states-lga.onrender.com/fetch"
        );
        console.log(response)
        const data = await response.json();
        console.log(data)
        setFetchedStates(data)
        
        setStates(data); // Assuming data is an array of state names
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    useEffect(() => {
      fetchStates();
    }, []);

    const fetchCities = async (stateName: string) => {
        console.log(stateName)
      try {
       
        const response = await fetch(
          `https://nga-states-lga.onrender.com/?state=${stateName}`
        );
        const data = await response.json();
        console.log(data)
        
        setCities(data); // Assuming data is an array of city names
        setFieldValue("city", "");
    } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    const handleFormSubmit = async (addressFormikHelper: any) => {
      props.toggleCreateAddress(values, addressFormikHelper);
      toggleAddressForm()
    };

    return (
      <div className="address-form">
        <CustomInput
          label="firstname"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          type="text"
          placeholder="firstName"
        />
        <CustomInput
          label="lastname"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          type="text"
          placeholder="lastname"
        />
        <CustomInput
          label="Phone Number"
          name="phoneNumber"
          value={Number(values.phoneNumber)}
          onChange={handleChange}
          type="text"
          placeholder="phoneNumber"
        />
        <CustomInput
          label="Additional Phone Number"
          name="additionalPhoneNumber"
          value={Number(values.additionalPhoneNumber)}
          onChange={handleChange}
          type="text"
          placeholder="additionalPhoneNumber"
        />
        <CustomTextArea
          label="Delivery Address"
          name="deliveryAddress"
          value={values.deliveryAddress}
          onChange={handleChange}
          type="text"
          placeholder="deliveryAddress"
        />
        <CustomSelect
          label="Default Address"
          name="defaultAddress"
          value={values.defaultAddress}
          onChange={handleChange}
          type="text"
          placeholder="defaultAddress"
        >
          <option value="false">false</option>
        </CustomSelect>
        <CustomSelect
          label="State"
          name="region"
          value={values.region}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            console.log(e);
            const selectedState = e.target.value;
            console.log(selectedState);
            setFieldValue("region", selectedState); // Ensure form field is updated
            fetchCities(selectedState);
          }}
          fetchCities={fetchCities}
          type="text"
          placeholder="state"
        >
          <option value="">Select a State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </CustomSelect>
        <CustomSelect
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          type="text"
          fetchCities={fetchCities}
          placeholder="city"
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </CustomSelect>
        <div className="address-button">
          <AddToCartButton
            type="submit"
            label="Add Address"
            onClick={handleFormSubmit}
          />
        </div>
      </div>
    );
}