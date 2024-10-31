import { Form, FormikProps } from "formik";
import { designRateDto, RtgProductDto } from "../../types";
import { CustomButton } from "./customButton";
import { CustomInput } from "./customInput";

interface UploadDesignRateFormProps extends FormikProps<designRateDto> {
  uploadDesignRate: (values: designRateDto, formikHelpers: any) => void;
}

export const DesignRatesForm: React.FC<UploadDesignRateFormProps> = (props) => {
    const {
      values,
      handleSubmit,
      handleChange,
      touched,
      errors,
      uploadDesignRate,
    } = props;

    const handleUpload = (formikHelpers: any) => uploadDesignRate(values, formikHelpers);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          label="Naked Rate"
          name="nakedRate"
          value={values.nakedRate}
          onChange={handleChange}
          type="text"
          placeholder="nakedRate"
          error={touched.nakedRate && errors.nakedRate}
        />
        <CustomInput
          label="ButterCream Rate"
          name="butterCreamRate"
          value={values.butterCreamRate}
          onChange={handleChange}
          type="text"
          placeholder="butterCreamRate"
          error={touched.butterCreamRate && errors.butterCreamRate}
        />
        <CustomInput
          label="Fundant Rate"
          name="fundantRate"
          value={values.fundantRate}
          onChange={handleChange}
          type="text"
          placeholder="fundantRate"
          error={touched.fundantRate && errors.fundantRate}
        />
        <CustomInput
          label="Covering"
          name="covering"
          value={values.covering}
          onChange={handleChange}
          type="text"
          placeholder="covering"
          error={touched.covering && errors.covering}
        />
        <CustomButton
          label="Upload Rate"
          type="submit"
          onClick={handleUpload}
        />
      </Form>
    </div>
  );
};