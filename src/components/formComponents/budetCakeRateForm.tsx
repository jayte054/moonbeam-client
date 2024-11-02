import { Form, FormikProps } from "formik"
import { BudgetRateDto, BudgetRateInterface } from "../../types"
import { CustomButton } from "./customButton"
import { CustomInput } from "./customInput"

interface UploadBudgetCakeRateFormProps extends FormikProps<BudgetRateDto> {
  uploadBudgetCakeRate: (values: BudgetRateDto, formikHelpers: any) => void;
  budgetRate: BudgetRateInterface[];
}
export const BudgetCakeRateForm: React.FC<UploadBudgetCakeRateFormProps> = (props) => {
    const {
      values,
      handleSubmit,
      handleChange,
      touched,
      errors,
      uploadBudgetCakeRate,
      budgetRate
    } = props;
    
    const handleUpload = async (formikHelpers: any) =>
      await uploadBudgetCakeRate(values, formikHelpers);


    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <CustomInput
            label="Chocolate Cake Rate"
            name="chocolateCakeRate"
            value={values.chocolateCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="chocolateCakeRate"
            error={touched.chocolateCakeRate && errors.chocolateCakeRate}
          />{" "}
          <CustomInput
            label="Strawberry Cake Rate"
            name="strawberryCakeRate"
            value={values.strawberryCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="strawberryCakeRate"
            error={touched.strawberryCakeRate && errors.strawberryCakeRate}
          />{" "}
          <CustomInput
            label="Vanilla Cake Rate"
            name="vanillaCakeRate"
            value={values.vanillaCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="vanillaCakeRate"
            error={touched.vanillaCakeRate && errors.vanillaCakeRate}
          />{" "}
          <CustomInput
            label="Redvelvet Cake Rate"
            name="redvelvetCakeRate"
            value={values.redvelvetCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="redvelvetCakeRate"
            error={touched.redvelvetCakeRate && errors.redvelvetCakeRate}
          />{" "}
          <CustomInput
            label="Carrot Cake Rate"
            name="carrotCakeRate"
            value={values.carrotCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="carrotCakeRate"
            error={touched.carrotCakeRate && errors.carrotCakeRate}
          />{" "}
          <CustomInput
            label="Carrot Cake Rate"
            name="carrotCakeRate"
            value={values.carrotCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="carrotCakeRate"
            error={touched.carrotCakeRate && errors.carrotCakeRate}
          />{" "}
          <CustomInput
            label="Cheese Cake Rate"
            name="cheeseCakeRate"
            value={values.cheeseCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="cheeseCakeRate"
            error={touched.cheeseCakeRate && errors.cheeseCakeRate}
          />{" "}
          <CustomInput
            label="Banana Cake Rate"
            name="bananaCakeRate"
            value={values.bananaCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="bananaCakeRate"
            error={touched.bananaCakeRate && errors.bananaCakeRate}
          />{" "}
          <CustomInput
            label="Apple Cake Rate"
            name="appleCakeRate"
            value={values.appleCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="appleCakeRate"
            error={touched.appleCakeRate && errors.appleCakeRate}
          />{" "}
          <CustomInput
            label="Lemon Cake Rate"
            name="lemonCakeRate"
            value={values.lemonCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="lemonCakeRate"
            error={touched.lemonCakeRate && errors.lemonCakeRate}
          />{" "}
          <CustomInput
            label="Coffee Cake Rate"
            name="coffeeCakeRate"
            value={values.coffeeCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="coffeeCakeRate"
            error={touched.coffeeCakeRate && errors.coffeeCakeRate}
          />{" "}
          <CustomInput
            label="Coconut Cake Rate"
            name="coconutCakeRate"
            value={values.coconutCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="coconutCakeRate"
            error={touched.coconutCakeRate && errors.coconutCakeRate}
          />{" "}
          <CustomInput
            label="Blueberry Cake Rate"
            name="blueberryCakeRate"
            value={values.blueberryCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="blueberryCakeRate"
            error={touched.blueberryCakeRate && errors.blueberryCakeRate}
          />
          <CustomInput
            label="Foil Cake Rate"
            name="foilCakeRate"
            value={values.foilCakeRate}
            onChange={handleChange}
            type="text"
            placeholder="foilCakeRate"
            error={touched.foilCakeRate && errors.foilCakeRate}
          />{" "}
          <CustomInput
            label="Cake Parfait Rate"
            name="cakeParfaitRate"
            value={values.cakeParfaitRate}
            onChange={handleChange}
            type="text"
            placeholder="cakeParfaitRate"
            error={touched.cakeParfaitRate && errors.cakeParfaitRate}
          />
          <CustomButton
            label="Upload Product Rate"
            type="submit"
            onClick={handleUpload}
            disabled={budgetRate ? true : false}
          />
        </Form>
      </div>
    );
}