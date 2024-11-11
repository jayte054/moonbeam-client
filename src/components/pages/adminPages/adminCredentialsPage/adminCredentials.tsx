import { ErrorMessage, Form, Formik } from "formik";
import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import "./adminPageCredentials.css"
import { ResetPasswordDto, ResetPasswordEmailDto } from "../../../../types";
import { useContext } from "react";
import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../../../stores/adminStores";
import { CustomInput } from "../../../formComponents/customInput";
import { ResetPasswordEmailValidationSchema } from "../../../formComponents/formSchema";
import { CustomButton } from "../../../formComponents/customButton";

export const AdminCredentials = () => {
    const {admin} = useContext(AdminAuthContext)
    const {resetPasswordEmail, resetPassword} = AdminStores;
    
    const resetPasswordEmailInitialValues: ResetPasswordEmailDto = {
      email: "",
    };

    const resetPasswordInitialValues: ResetPasswordDto = {
        newPassword: "",
        token: ""
    }

    const _resetPasswordEmail = async (
      values: ResetPasswordEmailDto,
      formikHelpers: any
    ) => {
      try {
        const { ...resetPasswordEmailDto } = values;
        const sendEmail = await resetPasswordEmail(resetPasswordEmailDto);
        formikHelpers.resetForm()
        return sendEmail;
      } catch (error) {
        console.log(error);
      }
    };

    const _resetPassword = async (values: ResetPasswordDto, formikHelpers: any) => {
        try {
            const {...resetPasswordDto} = values;
            const resetPass = await resetPassword(resetPasswordDto);
            formikHelpers.resetForm();
            return resetPass;
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div>
        <AdminPageNavbar />
        <div className="admin-credentials-container">
          <h2>Admin Credentials</h2>
          <h3>Change Password</h3>
          <div className="admin-credentials-body">
            <div className="admin-token">
              <h3>Get Token</h3>
              <Formik
                initialValues={resetPasswordEmailInitialValues}
                onSubmit={_resetPasswordEmail}
                validationSchema={ResetPasswordEmailValidationSchema}
              >
                {(formikProps) => (
                  <div>
                    <Form>
                      <CustomInput
                        label="Email"
                        type="text"
                        name="email"
                        value={formikProps.values.email}
                        onChange={formikProps.handleChange}
                        placeholder="Email"
                        error={
                          formikProps.touched.email && formikProps.errors.email
                        }
                      />
                      <CustomButton type="submit" label="Request Token" />
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            <div className="admin-pass">
              <h3>Reset Password</h3>
              <Formik
                initialValues={resetPasswordInitialValues}
                onSubmit={_resetPassword}
                validationSchema={ResetPasswordEmailValidationSchema}
              >
                {(formikProps) => (
                  <div>
                    <Form>
                      <CustomInput
                        label="New Password"
                        type="text"
                        name="newPassword"
                        value={formikProps.values.newPassword}
                        onChange={formikProps.handleChange}
                        placeholder="New Password"
                        error={
                          formikProps.touched.newPassword && formikProps.errors.newPassword
                        }
                      />
                      <CustomInput
                        label="Token"
                        type="text"
                        name="token"
                        value={formikProps.values.token}
                        onChange={formikProps.handleChange}
                        placeholder="Email"
                        error={
                          formikProps.touched.token && formikProps.errors.token
                        }
                      />
                      <CustomButton type="submit" label="Change Password" />
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
}