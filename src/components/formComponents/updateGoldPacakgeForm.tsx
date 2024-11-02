import { Form, Formik } from "formik";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../stores/adminStores";
import { PackageRatesDto, SurprisePackageInterface } from "../../types";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";

interface UpdateGoldPackageFormProps {
  goldPackage: SurprisePackageInterface;
}
export const UpdateGoldPackageForm: React.FC<UpdateGoldPackageFormProps> = ({
  goldPackage,
}) => {
  const { admin } = useContext(AdminAuthContext);
  const { updateSilverPackage } = AdminStores;

  const accessToken = admin.accessToken;
  const packageId = goldPackage.packageId;

  const goldPackageInitialValues: PackageRatesDto = {
    packageName: "",
    itemOne: "",
    itemTwo: "",
    itemThree: "",
    itemFour: "",
    itemFive: "",
    itemSix: "",
    itemSeven: "",
    itemEight: "",
    itemNine: "",
    itemTen: "",
    file: null,
    price: "",
    description: "",
  };

  const handleSubmit = async (values: PackageRatesDto, formikHelpers: any) => {
    console.log(values);
    const { ...updateGoldPackageRateDto } = values;
    console.log(updateGoldPackageRateDto);

    try {
      const newGoldPackageRate = await updateSilverPackage(
        accessToken,
        updateGoldPackageRateDto,
        packageId
      );
      formikHelpers.resetForm();
      return newGoldPackageRate;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="updateRateForm-container">
      <h3>Gold Package Form</h3>
      <p>All options are optional</p>

      <Formik initialValues={goldPackageInitialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <CustomInput
              label="Package Name"
              name="packageName"
              type="text"
              value={values.packageName || goldPackage.packageName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("packageName", e.target.value);
              }}
            />
            <CustomInput
              label="Item One"
              name="itemOne"
              type="text"
              value={values.itemOne || goldPackage.itemOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemOne", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Two"
              name="itemTwo"
              type="text"
              value={values.itemTwo || goldPackage.itemTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTwo", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Three"
              name="itemThree"
              type="text"
              value={values.itemThree || goldPackage.itemThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemThree", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Four"
              name="itemFour"
              type="text"
              value={values.itemFour || goldPackage.itemFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFour", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Five"
              name="itemFive"
              type="text"
              value={values.itemFive || goldPackage.itemFive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFive", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Six"
              name="itemSix"
              type="text"
              value={values.itemSix || goldPackage.itemSix}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSix", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Seven"
              name="itemSeven"
              type="text"
              value={values.itemSeven || goldPackage.itemSeven}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSeven", e.target.value);
              }}
            />
            <CustomInput
              label="Item Eight"
              name="itemEight"
              type="text"
              value={values.itemEight || goldPackage.itemEight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemEight", e.target.value);
              }}
            />
            <CustomInput
              label="Item Nine"
              name="itemNine"
              type="text"
              value={values.itemNine || goldPackage.itemNine}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemNine", e.target.value);
              }}
            />
            <CustomInput
              label="Item Ten"
              name="itemTen"
              type="text"
              value={values.itemTen || goldPackage.itemTen}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTen", e.target.value);
              }}
            />
            <CustomInput
              label="Price"
              name="Price"
              type="text"
              value={values.price || goldPackage.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("price", e.target.value);
              }}
            />{" "}
            <CustomFile label="File" name="file" type="file" />
            <CustomInput
              label="Description"
              name="description"
              type="text"
              value={values.description || goldPackage.description}
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
