import { Form, Formik } from "formik";
import { useContext } from "react";
import { useState } from "react";
import * as yup from "yup";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../stores/adminStores";

import { ProductRateDto, ProductRateFormInterface, ProductRateInterface, updateProductRateDto } from "../../types";
import "../pages/adminProductPage/adminProductPage.css"
import { CustomButton } from "./customButton";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import "./updateRate.css"

interface UpdatePoductRateComponentInterface  {
    productRate: ProductRateInterface
}  


export const UpdateProductRateComponent: React.FC<
  UpdatePoductRateComponentInterface
> = (props) => {
      const {productRate} = props;
      const {admin} = useContext(AdminAuthContext)
      const { updateProductRate } = AdminStores;


  const accessToken = admin.accessToken
  const rateId = productRate.rateId

  const validationSchema = yup.object({
    productRate: yup.string().required("Please select a rate"),
    price: yup.string().required("Please enter a price"),
  });



   const productRateInitialValues: ProductRateFormInterface = {
     productRate: "",
     price: "",
   };

   const productRateObject: ProductRateFormInterface = {
     productRate: "",
     price: "",
   };

   const handleSubmit = async (values: ProductRateFormInterface, formikHelpers: any) => {
        productRateObject.productRate = values.productRate;
        productRateObject.price = values.price;
        console.log(productRateObject)
        const updateProductRateDto: updateProductRateDto = {
            chocolateCakeRate: "",
            strawberryCakeRate: "",
            vanillaCakeRate: "",
            redvelvetCakeRate: "",
            carrotCakeRate: "",
            cheeseCakeRate: "",
            bananaCakeRate: "",
            appleCakeRate: "",
            lemonCakeRate: "",
            coffeeCakeRate: "",
            coconutCakeRate: "",
            blueberryCakeRate: "",
            samosaRate: "",
            springRollRate: "",
            samosa_springrollRate: "",
            puffRate: "",
            pepperedMeatRate: "",
            puff_pepperedMeatRate: "",
            samosa_pepperedMeatRate: "",
            springroll_pepperedMeatRate: "",
            meatPieRate: "",
            donutsRate: "",
            cinamonRollsRate: "",
            pancakesRate: "",
            corndogsRate: "",
            waffelsRate: "",
            meatpie_donutsRate: "",
            pancakes_corndogs_waffelsRate: "",
            
        };
       if (values.productRate in updateProductRateDto) {
         updateProductRateDto[
           values.productRate as keyof updateProductRateDto
         ] = values.price;
       }

       console.log("Updated Product Rate DTO:", updateProductRateDto);

       try {
       const newProductRate = await updateProductRate(
         accessToken,
         updateProductRateDto,
         rateId
       );
        formikHelpers.resetForm()
        return newProductRate;
       } catch (error) {
        console.log(error)
       }
   }



  return (
    <div className="updateRateForm-container">
      <Formik
        initialValues={productRateInitialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <CustomSelect
              label="Product Rate"
              name="productRate" // ensure name is passed
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const selectedRate = e.target.value;
                setFieldValue("productRate", selectedRate);

                // Dynamically set price based on selected product rate
                setFieldValue(
                  "price",
                  productRate[selectedRate as keyof ProductRateInterface] || ""
                );
              }}
            >
              <option value="">Select a rate</option>
              <option value="chocolateCakeRate">Chocolate Cake Rate</option>
              <option value="strawberryCakeRate">Strawberry Cake Rate</option>
              <option value="vanillaCakeRate">Vanilla Cake Rate</option>
              <option value="redvelvetCakeRate">Redvelvet Cake Rate</option>
              <option value="carrotCakeRate">Carrot Cake Rate</option>
              <option value="cheeseCakeRate">Cheese Cake Rate</option>
              <option value="bananaCakeRate">Banana Cake Rate</option>
              <option value="appleCakeRate">Apple Cake Rate</option>
              <option value="lemonCakeRate">Lemon Cake Rate</option>
              <option value="coffeeCakeRate">Coffee Cake Rate</option>
              <option value="coconutCakeRate">Coconut Cake Rate</option>
              <option value="blueberryCakeRate">Blueberry Cake Rate</option>
              <option value="samosaRate">Samosa Rate</option>
              <option value="springRollRate">SpringRoll Rate</option>
              <option value="samosa_springrollRate">
                Samosa and Springroll Rate
              </option>
              <option value="puffRate">Puff Rate</option>
              <option value="pepperedMeatRate">Peppered Meat Rate</option>
              <option value="puff_pepperedMeatRate">
                Puff and Peppered Meat Rate
              </option>
              <option value="samosa_pepperedMeatRate">
                Samosa and Peppered Meat Rate
              </option>
              <option value="springroll_pepperedMeatRate">
                Springroll and Peppered Meat Rate
              </option>
              <option value="meatPieRate">MeatPie Rate</option>
              <option value="donutsRate">Donuts Rate</option>
              <option value="cinamonRollsRate">CinamonRoll Rate</option>
              <option value="pancakesRate">Pancakes Rate</option>
              <option value="corndogsRate">Corndogs Rate</option>
              <option value="waffelsRate">Waffels Rate</option>
              <option value="meatpie_donutsRate">
                Meatpie and Donuts Rate
              </option>
              <option value="pancakes_corndogs_waffelsRate">
                Pancakes, Corndogs and WaffelsRate Rate
              </option>
              {/* Add other options as needed */}
            </CustomSelect>
            <CustomInput
              label="Price"
              name="price"
              type="text"
              value={values.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("price", e.target.value);
              }}
            />
            <button type="submit" >Update</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


