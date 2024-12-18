import { useContext, useState } from "react";
import { CustomButton2 } from "./customButton2";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import { AddToCartButton } from "./addToCartButton";
import './foilCakeForm.css'
import { FormikProps } from "formik";
import { foilObject, setCartCountProps } from "../../types";
import { CustomDate } from "./customDate";
import { CartContext } from "../../context/cartContext/cartContext";
import { CartStores } from "../../stores/cartStores";
import { AuthContext } from "../../context/authcontext/authContext";
import { ClockLoader } from "react-spinners";
import { useMediaQuery } from "react-responsive";

interface FoilCakeFormProps extends FormikProps<foilObject>  {
  toggleFoilOrder: (values: foilObject, foilFormikHelpers: any) => void
}

export const FoilCakeForm: React.FC<FoilCakeFormProps> = (props) => {
    const [foilCakeForm, setFoilCakeForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const {values, handleChange, handleSubmit, setFieldValue, touched, errors} = props;
    const {setCartCount, cartCount}: setCartCountProps = useContext(CartContext)
    const {getCartItems} = CartStores
    const {user} = useContext(AuthContext)

    const toggleFoilCakeForm = () => {
        setFoilCakeForm(prev => !prev);
    }

    const handleFoilFormSubmit = async(foilFormikHelpers: any) => {
      setIsLoading(true)
      props.toggleFoilOrder(values, foilFormikHelpers)
      const newCount = Number(cartCount) + Number(values.quantity)
      setCartCount(newCount.toString())
      await getCartItems(user.accessToken)
      setIsLoading(false)
    }

 const isDesktop = useMediaQuery({ minWidth: 1024 });
 const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
      <div className="quickOrder-foilCakesInput">
        <div>
          {isDesktop && (
            <CustomButton2
              type="button"
              label="Foil Cakes"
              onClick={toggleFoilCakeForm}
              style={{ width: "auto" }}
            />
          )}

          {isMobile && (
            <CustomButton2
              type="button"
              label="Foil Cakes"
              onClick={toggleFoilCakeForm}
              style={{
                padding: ".5rem",
                height: "3rem",
                width: "10rem",
                fontSize: "1rem",
              }}
            />
          )}
          {foilCakeForm && (
            <div className="variant-inputs">
              <CustomInput
                label="Order Name"
                name="orderName"
                value={values.orderName}
                onChange={handleChange}
                type="text"
                placeholder="order name"
              />
              <CustomSelect
                label="Product Flavour"
                name="productFlavour"
                value={values.productFlavour}
                onChange={handleChange}
                type="text"
                placeholder="Cake Flavour"
              >
                <option value="">Cake Flavours</option>
                <option value="chocolateCake">Chocolate Cake</option>
                <option value="strawberryCake">Strawberry Cake</option>
                <option value="vanillaCake">Vanilla Cake</option>
                <option value="redvelvetCake">Red Velvet Cake</option>
              </CustomSelect>
              <CustomInput
                label="Quantity"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                type="text"
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
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                type="text"
                placeholder="additional info"
              />

              <div>
                {isDesktop && (
                  <AddToCartButton
                    type="submit"
                    label={
                      isLoading ? <ClockLoader size={13} /> : "Add To Cart"
                    }
                    onClick={handleFoilFormSubmit}
                  />
                )}
                {isMobile && (
                  <AddToCartButton
                    type="submit"
                    label={
                      isLoading ? <ClockLoader size={13} /> : "Add To Cart"
                    }
                    onClick={handleFoilFormSubmit}
                    style={{
                      padding: ".5rem",
                      height: "3rem",
                      width: "10rem",
                      fontSize: "1rem",
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
}