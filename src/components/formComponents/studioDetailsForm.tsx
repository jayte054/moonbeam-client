import { Form, FormikProps } from "formik";
import { RtgProductDto, StudioAddressObject, StudioDetailsDto, SurprisePackageInterface } from "../../types";
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./rtgProductForm.css";

interface UploadStudioDetailsFormProps extends FormikProps<StudioDetailsDto> {
  uploadStudioDetails: (values: StudioDetailsDto, formikHelpers: any) => void;
  studioDetails: StudioAddressObject[];
}
export const StudioDetailsForm: React.FC<UploadStudioDetailsFormProps> = (props) => {
  const {
    values,
    handleSubmit,
    handleChange,
    touched,
    errors,
    uploadStudioDetails,
    studioDetails,
  } = props;

  const handleUpload = async (formikHelpers: any) => await uploadStudioDetails(values, formikHelpers);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          label="Studio Title"
          name="studioTitle"
          value={values.studioTitle}
          onChange={handleChange}
          type="text"
          placeholder="studioTitle"
          error={touched.studioTitle && errors.studioTitle}
        />

        <CustomInput
          label="LGA"
          name="LGA"
          value={values.LGA}
          onChange={handleChange}
          type="text"
          placeholder="LGA"
          error={touched.LGA && errors.LGA}
        />
        <CustomInput
          label="State"
          name="state"
          value={values.state}
          onChange={handleChange}
          type="text"
          placeholder="state"
          error={touched.state && errors.state}
        />
        <CustomInput
          label="Phone Number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          type="text"
          placeholder="phoneNumber"
          error={touched.phoneNumber && errors.phoneNumber}
        />
        <CustomInput
          label="Delivery Base Fee"
          name="deliveryBaseFee"
          value={values.deliveryBaseFee}
          onChange={handleChange}
          type="text"
          placeholder="deliveryBaseFee"
          error={touched.deliveryBaseFee && errors.deliveryBaseFee}
        />
        <CustomInput
          label="Delivery Price Per Km"
          name="deliveryPricePerKm"
          value={values.deliveryPricePerKm}
          onChange={handleChange}
          type="text"
          placeholder="deliveryPricePerKm"
          error={touched.deliveryPricePerKm && errors.deliveryPricePerKm}
        />
        <CustomSelect
          label="Default Studio Address"
          name="defaultStudioAddress"
          value={values.defaultStudioAddress}
          onChange={handleChange}
          type="text"
          placeholder="defaultStudioAddress"
          error={touched.defaultStudioAddress && errors.defaultStudioAddress}
        >
          <option value="">Type</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </CustomSelect>
        <CustomTextArea
          label="Studio Address"
          name="studioAddress"
          value={values.studioAddress}
          onChange={handleChange}
          type="text"
          placeholder="studioAddress"
          error={touched.studioAddress && errors.studioAddress}
        />
        <CustomButton
          label="Upload Studio Details"
          type="submit"
          onClick={handleUpload}
          disabled={studioDetails ? true : false}
        />
      </Form>
    </div>
  );
};
