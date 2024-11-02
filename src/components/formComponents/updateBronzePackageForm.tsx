import { Form, Formik } from "formik";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../stores/adminStores";
import { PackageRatesDto, SurprisePackageInterface } from "../../types"
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";
import { bonzePackageRatesValidationSchema } from "./formSchema";
import "./updateRate.css";

interface UpdateBronzePackageFormProps {
    bronzePackage: SurprisePackageInterface
}

export const UpdateBronzePackageForm: React.FC<UpdateBronzePackageFormProps> = ({
  bronzePackage,
}) => {
    const {admin} = useContext(AdminAuthContext)
    const { updateSurprisePackage } = AdminStores;

    const accessToken = admin.accessToken;
    const packageId = bronzePackage.packageId

    const bronzePackageInitialValues: PackageRatesDto = {
      packageName: "",
      itemOne: "",
      itemTwo: "",
      itemThree: "",
      itemFour: "",
      itemFive: "",
      itemSix: "",
      file: null,
      price: "",
      description: "",
    };

    const handleSubmit = async (values: PackageRatesDto, formikHelpers: any) => {
        console.log(values)
        const { ...updateBronzePackageRateDto } = values;
             console.log(updateBronzePackageRateDto);

        try {
            const newBronzePackageRate = await updateSurprisePackage(
              accessToken,
              updateBronzePackageRateDto,
              packageId
            );
            formikHelpers.resetForm()
            return newBronzePackageRate;
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="updateRateForm-container">
        <h3>Bronze Package Form</h3>
      <Formik
        initialValues={bronzePackageInitialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <CustomInput
              label="Package Name"
              name="packageName"
              type="text"
              value={values.packageName || bronzePackage.packageName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("packageName", e.target.value);
              }}
            />
            <CustomInput
              label="Item One"
              name="itemOne"
              type="text"
              value={values.itemOne || bronzePackage.itemOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemOne", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Two"
              name="itemTwo"
              type="text"
              value={values.itemTwo || bronzePackage.itemTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTwo", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Three"
              name="itemThree"
              type="text"
              value={values.itemThree || bronzePackage.itemThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemThree", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Four"
              name="itemFour"
              type="text"
              value={values.itemFour || bronzePackage.itemFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFour", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Five"
              name="itemFive"
              type="text"
              value={values.itemFive || bronzePackage.itemFive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFive", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Six"
              name="itemSix"
              type="text"
              value={values.itemSix || bronzePackage.itemSix}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSix", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Price"
              name="Price"
              type="text"
              value={values.price || bronzePackage.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("price", e.target.value);
              }}
            />{" "}
            <CustomFile label="File" name="file" type="file" />
            <CustomInput
              label="Description"
              name="description"
              type="text"
              value={values.description || bronzePackage.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("description", e.target.value);
              }}
            />
            <button type="submit" style={{textAlign: "center"}}>Update</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};