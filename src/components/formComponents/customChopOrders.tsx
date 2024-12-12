import { Form, FormikProps } from "formik";
import { useContext, useState } from "react";
import { AddToCartButton } from "./addToCartButton";
import { CustomButton } from "./customButton"
import { CustomDate } from "./customDate";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./customChopOrderForm.css"
import { CustomChopsObject } from "../../types";
import { RequestContext } from "../../context/customRequestContext/customRequestContext";
import { ClockLoader } from "react-spinners";

interface CustomChopsOrderFormProps extends FormikProps<CustomChopsObject> {
  toggleChopsOrder: (values: CustomChopsObject, formikHelpers: any)=> void
}

export const CustomChopOrdersForm: React.FC<CustomChopsOrderFormProps> = (props) => {
    const chopsFormImage = <img src="/chopsform.png" alt="chops image" />;
    const [isLoading, setIsLoading] = useState(false);
    const [chopsForm, setChopsForm] = useState(false);
    const {values, handleChange, touched, errors, toggleChopsOrder} = props;
    const {requestCount, setRequestCount} = useContext(RequestContext)

    const toggleChopsForm = () => {
        setChopsForm(prev=> !prev);
    }

    const handleChopsFormSubmit = async(formikHelpers: any) => {
      setIsLoading(true);
      toggleChopsOrder(values, formikHelpers)
      const newCount = Number(requestCount) + 1;
      setRequestCount(newCount.toString())
      setTimeout(() => {
      setIsLoading(false);
      }, 6000)
    }
    
    return (
      <div className="customOderChops-container">
        <CustomButton
          type="button"
          label={!chopsForm ? "chops/pastries" : "order chops/pastries"}
          onClick={toggleChopsForm}
        />
        {chopsForm ? (
          <Form>
            <CustomInput
              label="Order Name"
              name="orderName"
              value={values.orderName}
              onChange={handleChange}
              type="text"
              placeholder="Order Name"
              error= {touched.orderName && errors.orderName}
            />
            <CustomInput
              label="chop / Pastry type"
              name="chopType"
              value={values.chopType}
              onChange={handleChange}
              type="text"
              placeholder="example: samosa / meatpie"
              error= {touched.chopType && errors.chopType}
            />
            <CustomInput
              label="number of packs"
              name="numberOfPacks"
              value={values.numberOfPacks}
              onChange={handleChange}
              type="text"
              placeholder="number of packs"
              error= {touched.numberOfPacks && errors.numberOfPacks}
            />
            <CustomDate
              label="Delivery Date"
              name="deliveryDate"
              value={values.deliveryDate}
              onChange={handleChange}
              type="date"
              placeholder="Delivery Date"
              error= {touched.deliveryDate && errors.deliveryDate}
            />

            <CustomTextArea
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              type="text"
              placeholder="please describe or add any other information we would need like delivery address or combination"
              error= {touched.description && errors.description}
            />
            <AddToCartButton 
                type="submit" 
                label={ isLoading ? <ClockLoader size={13} /> : "Chops Request" }
                onClick={handleChopsFormSubmit}
                />
          </Form>
        ) : (
          <span>{chopsFormImage}</span>
        )}
      </div>
    );
}