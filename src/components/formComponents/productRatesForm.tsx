import { Form, FormikProps } from "formik"
import { ProductRateDto } from "../../types"
import { CustomButton } from "./customButton";
import { CustomInput } from "./customInput";

interface UploadproductRatesFormProps extends FormikProps<ProductRateDto> {
    uploadProductRates: (values: ProductRateDto, formikHelpers: any) => void;
}
export const ProductRatesForm: React.FC<UploadproductRatesFormProps> = (props) => {
    const {
      values,
      handleSubmit,
      handleChange,
      touched,
      errors,
      uploadProductRates,
    } = props;

    const handleUpload = (formikHelpers: any) => uploadProductRates(values, formikHelpers)

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
          />{" "}
          <CustomInput
            label="Samosa Rate"
            name="samosaRate"
            value={values.samosaRate}
            onChange={handleChange}
            type="text"
            placeholder="samosaRate"
            error={touched.samosaRate && errors.samosaRate}
          />{" "}
          <CustomInput
            label="SpringRoll Rate"
            name="springRollRate"
            value={values.springRollRate}
            onChange={handleChange}
            type="text"
            placeholder="springRollRate"
            error={touched.springRollRate && errors.springRollRate}
          />{" "}
          <CustomInput
            label="Samosa and Springroll Rate"
            name="samosa_springrollRate"
            value={values.samosa_springrollRate}
            onChange={handleChange}
            type="text"
            placeholder="samosa_springrollRate"
            error={
              touched.samosa_springrollRate && errors.samosa_springrollRate
            }
          />{" "}
          <CustomInput
            label="Puff Rate"
            name="puffRate"
            value={values.puffRate}
            onChange={handleChange}
            type="text"
            placeholder="puffRate"
            error={touched.puffRate && errors.puffRate}
          />{" "}
          <CustomInput
            label="PepperedMeat Rate"
            name="pepperedMeatRate"
            value={values.pepperedMeatRate}
            onChange={handleChange}
            type="text"
            placeholder="pepperedMeatRate"
            error={touched.pepperedMeatRate && errors.pepperedMeatRate}
          />{" "}
          <CustomInput
            label="Puff and PepperedMeat Rate"
            name="puff_pepperedMeatRate"
            value={values.puff_pepperedMeatRate}
            onChange={handleChange}
            type="text"
            placeholder="puff_pepperedMeatRate"
            error={
              touched.puff_pepperedMeatRate && errors.puff_pepperedMeatRate
            }
          />{" "}
          <CustomInput
            label="Samosa and PepperedMeat Rate"
            name="samosa_pepperedMeatRate"
            value={values.samosa_pepperedMeatRate}
            onChange={handleChange}
            type="text"
            placeholder="samosa_pepperedMeatRate"
            error={
              touched.samosa_pepperedMeatRate && errors.samosa_pepperedMeatRate
            }
          />{" "}
          <CustomInput
            label="Springroll and PepperedMeat Rate"
            name="springroll_pepperedMeatRate"
            value={values.springroll_pepperedMeatRate}
            onChange={handleChange}
            type="text"
            placeholder="springroll_pepperedMeatRate"
            error={
              touched.springroll_pepperedMeatRate &&
              errors.springroll_pepperedMeatRate
            }
          />{" "}
          <CustomInput
            label="MeatPie Rate"
            name="meatPieRate"
            value={values.meatPieRate}
            onChange={handleChange}
            type="text"
            placeholder="meatPieRate"
            error={touched.meatPieRate && errors.meatPieRate}
          />{" "}
          <CustomInput
            label="Donuts Rate"
            name="donutsRate"
            value={values.donutsRate}
            onChange={handleChange}
            type="text"
            placeholder="donutsRate"
            error={touched.donutsRate && errors.donutsRate}
          />{" "}
          <CustomInput
            label="CinamonRolls Rate"
            name="cinamonRollsRate"
            value={values.cinamonRollsRate}
            onChange={handleChange}
            type="text"
            placeholder="cinamonRollsRate"
            error={touched.cinamonRollsRate && errors.cinamonRollsRate}
          />{" "}
          <CustomInput
            label="Pancakes Rate"
            name="pancakesRate"
            value={values.pancakesRate}
            onChange={handleChange}
            type="text"
            placeholder="pancakesRate"
            error={touched.pancakesRate && errors.pancakesRate}
          />{" "}
          <CustomInput
            label="Corndogs Rate"
            name="corndogsRate"
            value={values.corndogsRate}
            onChange={handleChange}
            type="text"
            placeholder="corndogsRate"
            error={touched.corndogsRate && errors.corndogsRate}
          />{" "}
          <CustomInput
            label="Waffels Rate"
            name="waffelsRate"
            value={values.waffelsRate}
            onChange={handleChange}
            type="text"
            placeholder="waffelsRate"
            error={touched.waffelsRate && errors.waffelsRate}
          />
          <CustomInput
            label="Meatpie and Donuts Rate"
            name="meatpie_donutsRate"
            value={values.meatpie_donutsRate}
            onChange={handleChange}
            type="text"
            placeholder="meatpie_donutsRate"
            error={touched.meatpie_donutsRate && errors.meatpie_donutsRate}
          />
          <CustomInput
            label="Pancakes, Corndogs and Waffels Rate"
            name="pancakes_corndogs_waffelsRate"
            value={values.pancakes_corndogs_waffelsRate}
            onChange={handleChange}
            type="text"
            placeholder="pancakes_corndogs_waffelsRate"
            error={
              touched.pancakes_corndogs_waffelsRate &&
              errors.pancakes_corndogs_waffelsRate
            }
          />
          <CustomButton
            label="Upload Product"
            type="submit"
            onClick={handleUpload}
          />
        </Form>
      </div>
    );
}