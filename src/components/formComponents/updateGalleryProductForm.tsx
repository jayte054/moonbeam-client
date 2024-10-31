import { Form, FormikProps } from "formik"
import { GalleryProductInterface, UpdateProductDto } from "../../types"
import { CustomButton } from "./customButton"
import { CustomFile } from "./customFile"
import { CustomInput } from "./customInput"
import { CustomSelect } from "./customSelect"
import { CustomTextArea } from "./customTextArea"

interface UpdateGalleryProductFormProps extends FormikProps<UpdateProductDto> {
  updateGalleryProduct: (values: UpdateProductDto, formikHelpers: any) => void;
  product: GalleryProductInterface;
}
export const UpdateGalleryProductForm: React.FC<UpdateGalleryProductFormProps> = (props) => {
    const {
      values,
      handleSubmit,
      handleChange,
      touched,
      errors,
      updateGalleryProduct,
      product
    } = props;

    const handleUpload = (formikHelpers: any) => updateGalleryProduct(values, formikHelpers,)

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <CustomFile label="File" name="file" type="file" />
          <CustomSelect
            label="Type"
            name="type"
            value={values.type}
            onChange={handleChange}
            type="text"
            placeholder="type"
            error={touched.type && errors.type}
          >
            <option value="">{"select type"}</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="chops / pastries">Chops and Pastries</option>
            <option value="suprise package">Surprise Package</option>
          </CustomSelect>
          <CustomTextArea
            label="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            type="text"
            placeholder="description"
            error={touched.description && errors.description}
          />
          <CustomButton
            label="Update Product"
            type="submit"
            onClick={handleUpload}
          />
        </Form>
      </div>
    );
}