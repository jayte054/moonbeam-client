import { Form, FormikProps } from "formik";
import { useContext, useState } from "react"
import { AddToCartButton } from "./addToCartButton";
import { CustomButton } from "./customButton"
import { CustomDate } from "./customDate";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./customCakeOrders.css"
import { CustomOrderObject } from "../../types";
import { RequestContext } from "../../context/customRequestContext/customRequestContext";

interface CustomCakeOrderFormProps extends FormikProps<CustomOrderObject> {
  toggleCakeOrder: (values: CustomOrderObject, formikHelpers: any) => void;
}


export const CustomCakeOrderForm: React.FC<CustomCakeOrderFormProps> = (props) => {
    const cakeFormImage = <img src="/cake-form.png" alt="cake-form" />;
    const [cakeForm, setCakeForm] = useState(false);
    const {requestCount, setRequestCount} = useContext(RequestContext)
    const {values, handleSubmit, handleChange, touched, errors, toggleCakeOrder} = props

    const toggleCakeForm = () => {
        setCakeForm((prev) => !prev)
    }

    const handleCakeFormSubmit = (formikHelpers: any) => {
      toggleCakeOrder(values, formikHelpers);
      const newCount =Number (requestCount) + 1
      setRequestCount(newCount.toString())
    }

     const renderForm = () => (
       <Form onSubmit={handleSubmit}>
         <CustomInput
           label="Order Name"
           name="orderName"
           value={values.orderName}
           onChange={handleChange}
           type="text"
           placeholder="Order Name"
           error={touched.orderName && errors.orderName}
         />
         <CustomSelect
           label="Flavour"
           name="productFlavour"
           value={values.productFlavour}
           onChange={handleChange}
           type="text"
           placeholder="Cake Flavour"
           error={touched.productFlavour && errors.productFlavour}
         >
           <option value="">Cake Flavour</option>
           <option value="chocolateCake">Chocolate Cake</option>
           <option value="strawberryCake">Strawberry Cake</option>
           <option value="vanillaCake">Vanilla Cake</option>
           <option value="redvelvetCake">Red Velvet Cake</option>
           <option value="carrotCake">Carrot Cake</option>
           <option value="cheeseCake">Cheese Cake</option>
           <option value="bananaCake">Banana Cake</option>
           <option value="appleCake">Apple Cake</option>
           <option value="lemonCake">Lemon Cake</option>
           <option value="coffeeCake">Coffee Cake</option>
           <option value="coconutCake">Coconut Cake</option>
           <option value="blueberryCake">Blueberry Cake</option>
         </CustomSelect>
         <CustomSelect
           label="Type"
           name="type"
           value={values.type}
           onChange={handleChange}
           type="text"
           placeholder="Cake Type"
           error={touched.type && errors.type}
         >
           <option value="">Cake Type</option>
           <option value="Traditional">Traditional</option>
           <option value="Wedding">Wedding</option>
           <option value="Birthday">Birthday</option>
           <option value="Anniversary">Anniversary</option>
         </CustomSelect>
         <CustomSelect
           label="Covering"
           name="designCovering"
           value= {values.designCovering}
           onChange={handleChange}
           type="text"
           placeholder="Cake Covering"
           error={touched.designCovering && errors.designCovering}
         >
           <option value="">Cake Covering</option>
           <option value="naked">Naked</option>
           <option value="butterCream">Butter Cream</option>
           <option value="fundant">Fundant</option>
         </CustomSelect>
         <CustomSelect
           label="Layers"
           name="layers"
           value={values.layers}
           onChange={handleChange}
           type="text"
           placeholder="Cake Layers"
           error= {touched.layers && errors.layers}
         >
           <option value="">Cake Layers</option>
           <option value="1">1</option>
           <option value="2">2 </option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
         </CustomSelect>
         <CustomDate
           label="Delivery Date"
           name="deliveryDate"
           value={values.deliveryDate}
           onChange={handleChange}
           type="date"
           placeholder="Delivery Date"
           error={touched.deliveryDate && errors.deliveryDate}
         />
         <CustomSelect
           label="Inches"
           name="inches"
           value={values.inches}
           onChange={handleChange}
           type="text"
           placeholder="Cake Inches"
           error={touched.inches && errors.inches}
         >
           <option value="">Cake Inches</option>
           <option value="6">6</option>
           <option value="8">8 </option>
           <option value="10">10</option>
           <option value="12">12</option>
           <option value="14">14</option>
           <option value="16">16</option>
           <option value="18">18</option>
           <option value="20">20</option>
         </CustomSelect>
         <CustomTextArea
           label="Description"
           name="description"
           value={values.description}
           onChange={handleChange}
           type="text"
           placeholder="please describe or add any other information we would need like decor title or delivery address"
           error={touched.description && errors.description}
         />
         <CustomFile label="File" name="file" type="file" />
         <AddToCartButton 
              type="submit" 
              label="Custom Request" 
              onSubmit={handleCakeFormSubmit}
              />
       </Form>
     );
    return (
      <div className="customCakeOrder-container">
        <CustomButton
          type="button"
          label={!cakeForm ? "Cakes" : "Cake Orders"}
          onClick={toggleCakeForm}
        />
        <>{cakeForm ? renderForm() : <span>{cakeFormImage}</span>}</>
      </div>
    );
}