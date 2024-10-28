import { Form, FormikProps } from "formik";
import { RtgProductDto } from "../../types"
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./rtgProductForm.css"

interface UploadRtgProductFormProps extends FormikProps<RtgProductDto> {
    uploadRtgProduct: (values: RtgProductDto, formikHelpers: any) => void;
}
export const RtgProductForm: React.FC<UploadRtgProductFormProps> = (props) => {
    const {values, handleSubmit, handleChange, touched, errors, uploadRtgProduct} = props

    const handleUpload =  async (formikHelpers: any) => await uploadRtgProduct(values, formikHelpers)

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CustomFile label="File" name="file" type="file" />
        <CustomSelect
          label="Type"
          name="rtgType"
          value={values.rtgType}
          onChange={handleChange}
          type="text"
          placeholder="type"
          error={touched.rtgType && errors.rtgType}
        >
          <option value="">Type</option>
          <option value="Cakes">Cakes</option>
          <option value="Chops">Chops</option>
        </CustomSelect>
        <CustomInput
          label="Name"
          name="rtgName"
          value={values.rtgName}
          onChange={handleChange}
          type="text"
          placeholder="name"
          error={touched.rtgName && errors.rtgName}
        />
        <CustomInput
          label="Price"
          name="rtgPrice"
          value={values.rtgPrice}
          onChange={handleChange}
          type="text"
          placeholder="price"
          error={touched.rtgPrice && errors.rtgPrice}
        />
        <CustomTextArea
          label="Desription"
          name="rtgDescription"
          value={values.rtgDescription}
          onChange={handleChange}
          type="text"
          placeholder="description"
          error={touched.rtgDescription && errors.rtgDescription}
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