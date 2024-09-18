import { ErrorMessage, Form, FormikHelpers, FormikProps } from "formik";
import { useState } from "react"
import { CustomPackageObject } from "../../types";
import { AddToCartButton } from "./addToCartButton";
import { CustomAutoInput } from "./customAutoInput";
import { CustomButton } from "./customButton"
import { CustomDate } from "./customDate";
import { CustomInput } from "./customInput";
import "./customSurprisePackageForm.css"
import { CustomTextArea } from "./customTextArea";

interface CustomSurprisePackageFormProps extends FormikProps<CustomPackageObject> {
  togglePackageOrder: (values: CustomPackageObject, formikHelpers: any) => void
}

export const CustomSurprisePackageForm: React.FC<CustomSurprisePackageFormProps> = (props) => {
  const surpriseFormImage = (
    <img src="/surpriseForm.png" alt="surprise-package" />
  );
  const [packageForm, setPackageForm] = useState(false);
  const {values, handleChange, handleSubmit, touched, errors, togglePackageOrder} = props;
 
  const togglePackageForm = () => {
    setPackageForm((prev) => !prev);
  };

  const handlePackageFormSubmit = (formikHelpers: any) => togglePackageOrder(values, formikHelpers)
  
  const renderForm = () => (
    <Form>
      <CustomInput
        label="Order Name"
        name="orderName"
        value={values.orderName}
        onChange={handleChange}
        type="text"
        placeholder="Order Name"
        error={touched.orderName && errors.orderName}
      />
      <CustomAutoInput
        label="Item"
        name="item" // This name will be used in Formik's values object
      />
      <CustomDate
        label="Delivery Date"
        name="deliveryDate"
        value={values.deliveryDate}
        onChange={handleChange}
        type="date"
        placeholder="Delivery Date"
        error={touched.deliveryDate && errors.deliveryDate}
      />
      <CustomTextArea
        label="Additional Info"
        name="addInfo"
        value={values.addInfo}
        onChange={handleChange}
        type="text"
        placeholder="please include any other additional information like delivery address"
        error={touched.addInfo && errors.addInfo}
      />
      <AddToCartButton 
        type="submit" 
        label=" Custom Request" 
        onClick={handlePackageFormSubmit}
        />
    </Form>
  );

  return (
    <div className="customSurprisePackage-container">
      <CustomButton
        type="button"
        label={!packageForm ? "Packages" : "Order Package"}
        onClick={togglePackageForm}
      />
      <>{packageForm ? renderForm() : <span>{surpriseFormImage}</span>}</>
    </div>
  );
};