import { Form, FormikProps } from "formik"
import { GalleryProductDto } from "../../types"
import { CustomButton } from "./customButton";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { CustomSelect } from "./customSelect";
import { CustomTextArea } from "./customTextArea";
import "./galleryProductsForm.css"

interface UploadGalleryProductFormProps extends FormikProps<GalleryProductDto> {
  uploadGalleryProduct: (values: GalleryProductDto, formikHelpers: any) => void;
}
export const GalleryProductsForm: React.FC<UploadGalleryProductFormProps> = (props) => {
    const {values, handleSubmit, handleChange, touched, errors, uploadGalleryProduct} = props;

    const handleUpload = async (formikHelpers: any)=> {
        console.log("clicked")
        await uploadGalleryProduct(values, formikHelpers)
    }

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
            <option value="">Type</option>
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
            label="Upload Product"
            type="submit"
            onClick={handleUpload}
          />
        </Form>
      </div>
    );
}