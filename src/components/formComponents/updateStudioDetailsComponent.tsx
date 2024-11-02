import { Form, Formik, FormikProps } from "formik";
import { StudioAddressObject, UpdateStudioDetailsDto } from "../../types";
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";

interface UpdateStudioDetailsFormProps
  extends FormikProps<UpdateStudioDetailsDto> {
  updateStudioDetails: (
    values: UpdateStudioDetailsDto,
    formikHelpers: any
  ) => void;
    studioDetails:StudioAddressObject
}
export const UpdateStudioDetailsComponent: React.FC<UpdateStudioDetailsFormProps> = (
  // {studioDetails}
  props
) => {
  const {
    values,
    handleSubmit,
    handleChange,
    touched,
    errors,
    updateStudioDetails,
    studioDetails,
  } = props;

  const handleUpload = (formikHelpers: any) => updateStudioDetails(values, formikHelpers)

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          label="Studio Title"
          name="studioTitle"
          value={values.studioTitle || studioDetails.studioTitle}
          onChange={handleChange}
          type="text"
          placeholder="studio title"
          error={touched.studioTitle && errors.studioTitle}
        />
        <CustomInput
          label="LGA"
          name="LGA"
          value={values.LGA || studioDetails.LGA}
          onChange={handleChange}
          type="text"
          placeholder="LGA"
          error={touched.LGA && errors.LGA}
        />
        <CustomInput
          label="State"
          name="state"
          value={values.state || studioDetails.state}
          onChange={handleChange}
          type="text"
          placeholder="state"
          error={touched.state && errors.state}
        />
        <CustomInput
          label="Phone Number"
          name="phoneNumber"
          value={values.phoneNumber || studioDetails.phoneNumber}
          onChange={handleChange}
          type="text"
          placeholder="phoneNumber"
          error={touched.phoneNumber && errors.phoneNumber}
        />
        <CustomInput
          label="Type"
          name="type"
          value={values.studioTitle}
          onChange={handleChange}
          type="text"
          placeholder="type"
          error={touched.studioTitle && errors.studioTitle}
        />
        <CustomInput
          label="Default Delivery Fee"
          name="deliveryBaseFee"
          value={values.deliveryBaseFee || studioDetails.deliveryBaseFee}
          onChange={handleChange}
          type="text"
          placeholder="deliveryBaseFee"
          error={touched.deliveryBaseFee && errors.deliveryBaseFee}
        />
        <CustomInput
          label="Delivery Price Per Km"
          name="deliveryPricePerKm"
          value={values.deliveryPricePerKm || studioDetails.deliveryPricePerKm}
          onChange={handleChange}
          type="text"
          placeholder="deliveryPricePerKm"
          error={touched.deliveryPricePerKm && errors.deliveryPricePerKm}
        />
        <CustomSelect
          label="Default Address"
          name="defaultStudioAddress"
          value={values.defaultStudioAddress || studioDetails.defaultStudioAddress}
          onChange={handleChange}
          type="text"
          placeholder="defaultStudioAddress"
          error={touched.defaultStudioAddress && errors.defaultStudioAddress}
        >
          <option value=""></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </CustomSelect>
        <CustomTextArea
          label="Studio Address"
          name="studioAddress"
          value={values.studioAddress || studioDetails.studioAddress}
          onChange={handleChange}
          type="text"
          placeholder="studioAddress"
          error={touched.studioAddress && errors.studioAddress}
        />
        <CustomButton
          label="Upload Product"
          type="submit"
          onClick={handleUpload}
        />
      </Form>
    </div>
  );
};