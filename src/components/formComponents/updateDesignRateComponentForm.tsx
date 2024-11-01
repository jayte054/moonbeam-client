import * as yup from "yup";
import { Form, Formik } from "formik";
import { DesignRateFormInterface, DesignRateInterface, UpdateDesignRateDto } from "../../types";
import { CustomSelect } from "./customSelect";
import { CustomInput } from "./customInput";
import { AdminStores } from "../../stores/adminStores";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import "./updateRate.css";

interface UpdateDesignRateComponentFormProps {
  designRate: DesignRateInterface;
}
export const UpdateDesignRateComponentForm:React.FC<UpdateDesignRateComponentFormProps> = (props) => {
    const {designRate} = props;
    const {updateDesignRate} = AdminStores
    const {admin} = useContext(AdminAuthContext)

    const designId = designRate.designId;
    const accessToken = admin.accessToken;

     const designRateInitialValues: DesignRateFormInterface = {
       designRate: "",
       price: "",
     };

     const designRateObject: DesignRateFormInterface = {
       designRate: "",
       price: "",
     };;

      const validationSchema = yup.object({
        designRate: yup.string().required("Please select a rate"),
        price: yup.string().required("Please enter a price"),
      });

      const handleSubmit = async (values: DesignRateFormInterface, formikHelpers: any) => {
        console.log("clicked")
         designRateObject.designRate = values.designRate;
         designRateObject.price = values.price;
        console.log(designRateObject);

        const updateDesignRateDto: UpdateDesignRateDto = {
            butterCreamRate: "",
            fundantRate: "",
            nakedrate: "",
            covering: "",
        }
        if(values.designRate in updateDesignRateDto) {
            updateDesignRateDto[values.designRate as keyof UpdateDesignRateDto] = values.price
        }

        console.log("Updated Product Rate DTO:", updateDesignRateDto);

        try{
            const newDesignRate = await updateDesignRate(
              accessToken,
              updateDesignRateDto,
              designId
            );
            formikHelpers.resetForm()
            return newDesignRate
        } catch(error) {
            console.log(error)
        }
      }

    return (
      <div className="updateRateForm-container">
        <Formik
          initialValues={designRateInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <CustomSelect
                label="Design Rate"
                name="designRate"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const selectedRate = e.target.value;
                  setFieldValue("designRate", selectedRate);
                  setFieldValue(
                    "price",
                    designRate[selectedRate as keyof DesignRateInterface]
                  );
                }}
              >
                <option value="">select type</option>
                <option value="nakedRate">Naked Rate</option>
                <option value="butterCreamRate">ButterCream Rate</option>
                <option value="fundantRate">Fundant Rate</option>
                <option value="covering">Covering Rate</option>
              </CustomSelect>
              <CustomInput
                label="Price"
                name="Price"
                type="text"
                value={values.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("price", e.target.value);
                }}
              />
              <button type="submit">Update</button>
            </Form>
          )}
        </Formik>
      </div>
    );
};