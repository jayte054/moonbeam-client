import { Form, Formik } from "formik";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../stores/adminStores";
import { PackageRatesDto, SurprisePackageInterface } from "../../types";
import { CustomFile } from "./customFile";
import { CustomInput } from "./customInput";

interface UpdateDiamondPackageFormProps {
  diamondPackage: SurprisePackageInterface;
}
export const UpdateDiamondPackageForm: React.FC<UpdateDiamondPackageFormProps> = ({
  diamondPackage,
}) => {
  const { admin } = useContext(AdminAuthContext);
  const { updateDiamondPackage } = AdminStores;

  const accessToken = admin.accessToken;
  const packageId = diamondPackage.packageId;

  const diamondPackageInitialValues: PackageRatesDto = {
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
    itemEleven: "",
    itemTwelve: "",
    file: null,
    price: "",
    description: "",
  };

  const handleSubmit = async (values: PackageRatesDto, formikHelpers: any) => {
    console.log(values);
    const { ...updateDiamondPackageRateDto } = values;
    console.log(updateDiamondPackageRateDto);

    try {
      const newDiamondPackageRate = await updateDiamondPackage(
        accessToken,
        updateDiamondPackageRateDto,
        packageId
      );
      formikHelpers.resetForm();
      return newDiamondPackageRate;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="updateRateForm-container">
      <h3>Diamond Package Form</h3>
      <p>All options are optional</p>
      <Formik
        initialValues={diamondPackageInitialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <CustomInput
              label="Package Name"
              name="packageName"
              type="text"
              value={values.packageName || diamondPackage.packageName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("packageName", e.target.value);
              }}
            />
            <CustomInput
              label="Item One"
              name="itemOne"
              type="text"
              value={values.itemOne || diamondPackage.itemOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemOne", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Two"
              name="itemTwo"
              type="text"
              value={values.itemTwo || diamondPackage.itemTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTwo", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Three"
              name="itemThree"
              type="text"
              value={values.itemThree || diamondPackage.itemThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemThree", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Four"
              name="itemFour"
              type="text"
              value={values.itemFour || diamondPackage.itemFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFour", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Five"
              name="itemFive"
              type="text"
              value={values.itemFive || diamondPackage.itemFive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemFive", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Six"
              name="itemSix"
              type="text"
              value={values.itemSix || diamondPackage.itemSix}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSix", e.target.value);
              }}
            />{" "}
            <CustomInput
              label="Item Seven"
              name="itemSeven"
              type="text"
              value={values.itemSeven || diamondPackage.itemSeven}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemSeven", e.target.value);
              }}
            />
            <CustomInput
              label="Item Eight"
              name="itemEight"
              type="text"
              value={values.itemEight || diamondPackage.itemEight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemEight", e.target.value);
              }}
            />
            <CustomInput
              label="Item Nine"
              name="itemNine"
              type="text"
              value={values.itemNine || diamondPackage.itemNine}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemNine", e.target.value);
              }}
            />
            <CustomInput
              label="Item Ten"
              name="itemTen"
              type="text"
              value={values.itemTen || diamondPackage.itemTen}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTen", e.target.value);
              }}
            />
            <CustomInput
              label="Item Eleven"
              name="itemEleven"
              type="text"
              value={values.itemEleven || diamondPackage.itemEleven}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTen", e.target.value);
              }}
            />
            <CustomInput
              label="Item Twelve"
              name="itemTwelve"
              type="text"
              value={values.itemTwelve || diamondPackage.itemTwelve}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("itemTwelve", e.target.value);
              }}
            />
            <CustomInput
              label="Price"
              name="Price"
              type="text"
              value={values.price || diamondPackage.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("price", e.target.value);
              }}
            />{" "}
            <CustomFile label="File" name="file" type="file" />
            <CustomInput
              label="Description"
              name="description"
              type="text"
              value={values.description || diamondPackage.description}
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
