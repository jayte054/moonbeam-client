import { Form, FormikProps } from "formik";
import { GalleryProductInterface, rtgProductInterface, UpdateProductDto, UpdateRtgProductDto } from "../../types";
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";

interface UpdateRtgProductFormProps extends FormikProps<UpdateRtgProductDto> {
  updateRtgProduct: (values: UpdateRtgProductDto, formikHelpers: any) => void;
  rtgProduct: rtgProductInterface;
}
export const UpdateRtgProductForm: React.FC<UpdateRtgProductFormProps> = (props) => {
  const {
    values,
    handleSubmit,
    handleChange,
    touched,
    errors,
    updateRtgProduct,
    rtgProduct,
  } = props;

  const handleUpload = (formikHelpers: any) =>
    updateRtgProduct(values, formikHelpers);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CustomFile label="File" name="file" type="file" />
        <CustomInput
          label="Name"
          name="rtgName"
          value={values.rtgName}
          onChange={handleChange}
          type="text"
          placeholder="name"
          error={touched.rtgName && errors.rtgName}
        />
        <CustomSelect
          label="Type"
          name="rtgType"
          value={values.rtgType}
          onChange={handleChange}
          type="text"
          placeholder="type"
          error={touched.rtgType && errors.rtgType}
        >
          <option value="">{"select type"}</option>
          <option value="Cakes">Cakes</option>
          <option value="Chops">Chops</option>
        </CustomSelect>
        <CustomTextArea
          label="Description"
          name="rtgDescription"
          value={values.rtgDescription}
          onChange={handleChange}
          type="text"
          placeholder="description"
          error={touched.rtgDescription && errors.rtgDescription}
        />
        <CustomButton
          label="Update Product"
          type="submit"
          onClick={handleUpload}
        />
      </Form>
    </div>
  );
};
