import { Form, FormikProps } from "formik";
import { PackageRatesDto, SurprisePackageInterface } from "../../types";
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";

interface UploadGoldPackageFormProps extends FormikProps<PackageRatesDto> {
  uploadGoldPackageRates: (values: PackageRatesDto, formikHelpers: any) => void;
  diamondPackage: SurprisePackageInterface[];
}
export const GoldPackageForm: React.FC<UploadGoldPackageFormProps> = (
  props
) => {
  const {
    values,
    handleChange,
    touched,
    errors,
    uploadGoldPackageRates,
    diamondPackage,
  } = props;

  const handleUpload = (formikHelpers: any) =>
    uploadGoldPackageRates(values, formikHelpers);
  return (
    <div>
      <Form>
        <CustomInput
          label="Package Name"
          name="packageName"
          value={values.packageName}
          onChange={handleChange}
          type="text"
          placeholder="Package Name"
          error={touched.packageName && errors.packageName}
        />
        <CustomInput
          label="Item One"
          name="itemOne"
          value={values.itemOne}
          onChange={handleChange}
          type="text"
          placeholder="Item One"
          error={touched.itemOne && errors.itemOne}
        />{" "}
        <CustomInput
          label="Item Two"
          name="itemTwo"
          value={values.itemTwo}
          onChange={handleChange}
          type="text"
          placeholder="Item Two"
          error={touched.itemTwo && errors.itemTwo}
        />{" "}
        <CustomInput
          label="Item Three"
          name="itemThree"
          value={values.itemThree}
          onChange={handleChange}
          type="text"
          placeholder="Item Three"
          error={touched.itemThree && errors.itemThree}
        />{" "}
        <CustomInput
          label="Item Four"
          name="itemFour"
          value={values.itemFour}
          onChange={handleChange}
          type="text"
          placeholder="Item Four"
          error={touched.itemFour && errors.itemFour}
        />{" "}
        <CustomInput
          label="Item Five"
          name="itemFive"
          value={values.itemFive}
          onChange={handleChange}
          type="text"
          placeholder="Item Five"
          error={touched.itemFive && errors.itemFive}
        />{" "}
        <CustomInput
          label="Item Six"
          name="itemSix"
          value={values.itemSix}
          onChange={handleChange}
          type="text"
          placeholder="Item Six"
          error={touched.itemSix && errors.itemSix}
        />{" "}
        <CustomInput
          label="Item Seven"
          name="itemSeven"
          value={values.itemSeven}
          onChange={handleChange}
          type="text"
          placeholder="Item Seven"
          error={touched.itemSeven && errors.itemSeven}
        />{" "}
        <CustomInput
          label="Item Eight"
          name="itemEight"
          value={values.itemEight}
          onChange={handleChange}
          type="text"
          placeholder="Item Eight"
          error={touched.itemEight && errors.itemEight}
        />{" "}
        <CustomInput
          label="Item Nine"
          name="itemNine"
          value={values.itemNine}
          onChange={handleChange}
          type="text"
          placeholder="Item Nine"
          error={touched.itemNine && errors.itemNine}
        />{" "}
        <CustomInput
          label="Item Ten"
          name="itemTen"
          value={values.itemTen}
          onChange={handleChange}
          type="text"
          placeholder="Item Ten"
          error={touched.itemTen && errors.itemTen}
        />{" "}
        <CustomInput
          label="Price"
          name="price"
          value={values.price}
          onChange={handleChange}
          type="text"
          placeholder="price"
          error={touched.price && errors.price}
        />{" "}
        <CustomInput
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          type="text"
          placeholder="description"
          error={touched.description && errors.description}
        />{" "}
        <CustomFile label="File" name="file" type="file" />
        <CustomButton
          label="Upload Product Rate"
          type="submit"
          onClick={handleUpload}
          disabled={diamondPackage ? true : false}
        />
      </Form>
    </div>
  );
};
