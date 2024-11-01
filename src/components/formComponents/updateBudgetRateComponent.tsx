import { Form, Formik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";

import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { BudgetRateFormInterface, BudgetRateInterface, updateProductRateDto } from "../../types";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { AdminStores } from "../../stores/adminStores";
import "./updateRate.css";


interface UpdateBudgetRatesFormComponentPops {
    budgetRate: BudgetRateInterface;
}

export const UpdateBudgetRateComponent: React.FC<UpdateBudgetRatesFormComponentPops> = (props) => {
    const {budgetRate} = props;
    const { admin } = useContext(AdminAuthContext);
    const { updateBudgetRate } = AdminStores;

    const accessToken= admin.accessToken
    const rateId = budgetRate.rateId;

     const validationSchema = yup.object({
       budgetRate: yup.string().required("Please select a rate"),
       price: yup.string().required("Please enter a price"),
     });
    
    const budgetRateInitialValues: BudgetRateFormInterface = {
      budgetRate: "",
      price: "",
    };

    const budgetRateObject: BudgetRateFormInterface = {
      budgetRate: "",
      price: "",
    };

    const handleSubmit = async (
      values: BudgetRateFormInterface,
      formikHelpers: any
    ) => {
      budgetRateObject.budgetRate = values.budgetRate;
      budgetRateObject.price = values.price;

      console.log(budgetRateObject);

      const updateBudgetRateDto: updateProductRateDto = {
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
        foilCakeRate: "",
        cakeParfaitRate: "",
      };

      if (values.budgetRate in updateBudgetRateDto) {
        updateBudgetRateDto[values.budgetRate as keyof updateProductRateDto] =
          values.price;
      }

       console.log("Updated Product Rate DTO:", updateBudgetRateDto);

        try {
            const newBudgetRate = await updateBudgetRate(accessToken, updateBudgetRateDto, rateId)
            formikHelpers.resetForm()
            return newBudgetRate;
        } catch(error) {
            console.log(error)
        }
    };

    return (
      <div className="updateRateForm-container">
        <Formik
          initialValues={budgetRateInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <CustomSelect
                label="Budget Rate"
                name="budgetRate"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const selectedRate = e.target.value;
                  setFieldValue("productRate", selectedRate);
                  setFieldValue(
                    "price",
                    budgetRate[selectedRate as keyof BudgetRateInterface]
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
                <option value="foilCakeRate">Foil Cake Rate</option>
                <option value="cakeParfaitRate">Cake Parfait Rate</option>
              </CustomSelect>
              <CustomInput
                label="Price"
                name="Price"
                type="text"
                value={values.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("price", e.target.value);
                }}
              />
              <button type="submit">Update</button>
            </Form>
          )}
        </Formik>
      </div>
    );
}