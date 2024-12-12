import { useContext, useState } from "react";
import { CustomButton2 } from "./customButton2";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import { AddToCartButton } from "./addToCartButton";
import "./foilCakeForm.css";
import { parfaitObject, setCartCountProps } from "../../types";
import { FormikProps } from "formik";
import { CustomDate } from "./customDate";
import { CartContext } from "../../context/cartContext/cartContext";
import { CartStores } from "../../stores/cartStores";
import { AuthContext } from "../../context/authcontext/authContext";
import { ClockLoader } from "react-spinners";

interface CakeParfaitFormProps extends FormikProps<parfaitObject>  {
  toggleParfaitOrder: (values: parfaitObject, foilFormikHelpers: any) => void 
}
export const CakeParfaitForm: React.FC<CakeParfaitFormProps> = (props) => {
  const [parfaitForm, setParfaitForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {values, handleChange, handleSubmit, touched, errors, toggleParfaitOrder} = props;
  const {setCartCount, cartCount}: setCartCountProps = useContext(CartContext)
   const { getCartItems } = CartStores;
   const { user } = useContext(AuthContext);
   
  const toggleParfaitForm = () => {
    setParfaitForm((prev) => !prev);
  };

  const handleParfaitFormOrder = async(formikHelpers: any) => {
    setIsLoading(true)
    toggleParfaitOrder(values, formikHelpers)
    const newCount = Number(cartCount) + Number(values.quantity)
    setCartCount(newCount.toString())
    await getCartItems(user.accessToken);
    setIsLoading(false)
  }
  return (
    <div className="quickOrder-foilCakesInput">
      <div>
        <CustomButton2
          type="button"
          label="Cake Parfait"
          onClick={toggleParfaitForm}
          style={{width: 'auto'}}
        />
        {parfaitForm && (
          <div>
            <CustomInput
              label="Order Name"
              name="orderName"
              value={values.orderName}
              onChange={handleChange}
              type="text"
              placeholder="order name"
              error={touched.orderName && errors.orderName}
            />
            <CustomInput
              label="Quantity"
              name="quantity"
              value={values.quantity}
              onChange={handleChange}
              type="text"
              error={touched.quantity && errors.quantity}
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
              error={touched.description && errors.description}
            />

            <div>
              <AddToCartButton
                type="submit"
                label={isLoading ? <ClockLoader size={13} /> : "Add To Cart" }
                onClick={handleParfaitFormOrder}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
