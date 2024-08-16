import { Form } from "formik";
import { useState } from "react";
import { AddToCartButton } from "./addToCartButton";
import { CustomButton } from "./customButton"
import { CustomDate } from "./customDate";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./customChopOrderForm.css"

export const CustomChopOrdersForm = () => {
    const chopsFormImage = <img src="/chopsform.png" alt="chops image" />;

    const [chopsForm, setChopsForm] = useState(false)

    const toggleChopsForm = () => {
        setChopsForm(prev=> !prev);
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
              name="orderTitle"
              type="text"
              placeholder="Order Name"
            />
            <CustomInput
              label="chop / Pastry type"
              name="chopPackageType"
              type="text"
              placeholder="example: samosa / meatpie"
            />
            <CustomInput
              label="number of packs"
              name="numberOfPacks"
              type="text"
              placeholder="number of packs"
            />
            <CustomDate
              label="Delivery Date"
              name="deliveryDate"
              type="date"
              placeholder="Delivery Date"
            />

            <CustomTextArea
              label="Description"
              name="description"
              type="text"
              placeholder="please describe or add any other information we would need like delivery address or combination"
            />
            <AddToCartButton type="submit" label="Custom Request" />
          </Form>
        ) : (
          <span>{chopsFormImage}</span>
        )}
      </div>
    );
}