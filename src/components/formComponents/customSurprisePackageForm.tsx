import { Form } from "formik";
import { useState } from "react"
import { AddToCartButton } from "./addToCartButton";
import { CustomAutoInput } from "./customAutoInput";
import { CustomButton } from "./customButton"
import { CustomDate } from "./customDate";
import { CustomInput } from "./customInput";
import "./customSurprisePackageForm.css"
import { CustomTextArea } from "./customTextArea";

export const CustomSurprisePackageForm = () => {
  const surpriseFormImage = (
    <img src="/surpriseForm.png" alt="surprise-package" />
  );
  const [packageForm, setPackageForm] = useState(false);
 
  const togglePackageForm = () => {
    setPackageForm((prev) => !prev);
  };

  
  const renderForm = () => (
    <Form>
      <CustomInput
        label="Order Name"
        name="packageOrderName"
        type="text"
        placeholder="Order Name"
      />
      <CustomAutoInput
        label="Item"
        name="items" // This name will be used in Formik's values object
      />
      <CustomDate
        label="Delivery Date"
        name="deliveryDate"
        type="date"
        placeholder="Delivery Date"
      />
      <CustomTextArea
        label="Additional Info"
        name="addInfo"
        type="text"
        placeholder="please include any other additional information like delivery address"
      />
      <AddToCartButton type="submit" label=" Custom Request" />
    </Form>
  );

  return (
    <div className="customSurprisePackage-container">
      <CustomButton
        type="button"
        label={!packageForm ? "Surprise Packages" : "Order Package"}
        onClick={togglePackageForm}
      />
      <>{packageForm ? renderForm() : <span>{surpriseFormImage}</span>}</>
    </div>
  );
};