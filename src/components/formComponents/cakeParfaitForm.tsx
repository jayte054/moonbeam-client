import { useState } from "react";
import { CustomButton2 } from "./customButton2";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import { AddToCartButton } from "./addToCartButton";
import "./foilCakeForm.css";

export const CakeParfaitForm = () => {
  const [parfaitForm, setParfaitForm] = useState(false);

  const toggleParfaitForm = () => {
    setParfaitForm((prev) => !prev);
  };
  return (
    <div className="quickOrder-foilCakesInput">
      <div>
        <CustomButton2
          type="button"
          label="Cake Parfait"
          onClick={toggleParfaitForm}
        />
        {parfaitForm && (
          <div>
            <CustomInput
              label="Order Name"
              name="orderName"
              type="text"
              placeholder="order name"
            />
            <CustomInput label="Quantity" name="Quantity" type="number" />
            <CustomTextArea
              label="Description"
              name="description"
              type="text"
              placeholder="additional info"
            />

            <div>
              <AddToCartButton 
                            type="submit"
                            label="Add To Cart"
                          /> 
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
