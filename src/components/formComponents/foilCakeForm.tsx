import { useState } from "react";
import { CustomButton2 } from "./customButton2";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import { AddToCartButton } from "./addToCartButton";
import './foilCakeForm.css'

export const FoilCakeForm = () => {
    const [foilCakeForm, setFoilCakeForm] = useState(false)

    const toggleFoilCakeForm = () => {
        setFoilCakeForm(prev => !prev);
    }
    return (
      <div className="quickOrder-foilCakesInput">
        <div>
          <CustomButton2
            type="button"
            label="Foil Cakes"
            onClick={toggleFoilCakeForm}
          />
          {foilCakeForm && (
            <div>
                <CustomInput
                  label="Order Name"
                  name="orderName"
                  type="text"
                  placeholder="order name"
                />
                <CustomSelect
                  name="Flavour"
                  type="text"
                  placeholder="Cake Flavour"
                >
                  <option value="">Cake Flavours</option>
                  <option value="chocolateCake">Chocolate Cake</option>
                  <option value="strawberryCake">Strawberry Cake</option>
                  <option value="vanillaCake">Vanilla Cake</option>
                  <option value="redvelvetCake">Red Velvet Cake</option>
                </CustomSelect>
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
}