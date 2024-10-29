import { Form, FormikProps } from "formik";
import { PackageRatesDto } from "../../types"
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";

interface UploadSilverPackageFormProps extends FormikProps<PackageRatesDto> {
  uploadSilverPackageRates: (values: PackageRatesDto, formikHelpers: any) => void;
}
export const SilverPackageForm: React.FC<UploadSilverPackageFormProps> = (props) => {
     const { values, handleChange, touched, errors, uploadSilverPackageRates } = props;

      const handleUpload = (formikHelpers: any) =>
        uploadSilverPackageRates(values, formikHelpers);

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
            label="Upload Product"
            type="submit"
            onClick={handleUpload}
          />
        </Form>
      </div>
    );
}