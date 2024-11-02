import { Form, Formik } from "formik";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../stores/adminStores";
import { PackageRatesDto, SurprisePackageInterface } from "../../types";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";

interface UpdateSilverPackageFormProps {
    silverPackage: SurprisePackageInterface
}
export const UpdateSilverPackageForm: React.FC<UpdateSilverPackageFormProps> = ({
  silverPackage,
}) => {
     const { admin } = useContext(AdminAuthContext);
     const { updateSilverPackage } = AdminStores;

     const accessToken = admin.accessToken;
     const packageId = silverPackage.packageId;

     const silverPackageInitialValues: PackageRatesDto = {
       packageName: "",
       itemOne: "",
       itemTwo: "",
       itemThree: "",
       itemFour: "",
       itemFive: "",
       itemSix: "",
       itemSeven: "",
       itemEight: "",
       file: null,
       price: "",
       description: "",
     };

       const handleSubmit = async (
         values: PackageRatesDto,
         formikHelpers: any
       ) => {
         console.log(values);
         const { ...updateSilverPackageRateDto } = values;
         console.log(updateSilverPackageRateDto);

         try {
           const newSilverPackageRate = await updateSilverPackage(
             accessToken,
             updateSilverPackageRateDto,
             packageId
           );
           formikHelpers.resetForm();
           return newSilverPackageRate;
         } catch (error) {
           console.log(error);
         }
       };

  return (
    <div className="updateRateForm-container">
      <h3>Silver Package Form</h3>
      <Formik
        initialValues={silverPackageInitialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <CustomInput
              label="Package Name"
              name="packageName"
              type="text"
              value={values.packageName || silverPackage.packageName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("packageName", e.target.value);
              }}
            />
            <CustomInput
              label="Item One"
              name="itemOne"
              type="text"
              value={values.itemOne || silverPackage.itemOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemOne", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Two"
              name="itemTwo"
              type="text"
              value={values.itemTwo || silverPackage.itemTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTwo", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Three"
              name="itemThree"
              type="text"
              value={values.itemThree || silverPackage.itemThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemThree", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Four"
              name="itemFour"
              type="text"
              value={values.itemFour || silverPackage.itemFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFour", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Five"
              name="itemFive"
              type="text"
              value={values.itemFive || silverPackage.itemFive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFive", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Six"
              name="itemSix"
              type="text"
              value={values.itemSix || silverPackage.itemSix}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSix", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Seven"
              name="itemSeven"
              type="text"
              value={values.itemSeven || silverPackage.itemSeven}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSeven", e.target.value);
              }}
            />
            <CustomInput
              label="Item Eight"
              name="itemEight"
              type="text"
              value={values.itemEight || silverPackage.itemEight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemEight", e.target.value);
              }}
            />
            <CustomInput
              label="Price"
              name="Price"
              type="text"
              value={values.price || silverPackage.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("price", e.target.value);
              }}
            />{" "}
            <CustomFile label="File" name="file" type="file" />
            <CustomInput
              label="Description"
              name="description"
              type="text"
              value={values.description || silverPackage.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("description", e.target.value);
              }}
            />
            <button type="submit" style={{ textAlign: "center" }}>
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};