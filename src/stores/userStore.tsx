import { AdminSignInService, SignInService, signoutService, SignupService } from "../services/authenticationServices/authenticationServices"

const signIn = async ({email, password}: any): Promise<any>  => {
    const result = await SignInService({email, password});
    return result;
}

const signUp = async (
    firstname: string,
    lastname: string,
    phoneNumber: string,
    email: string,
    password: string,
): Promise<any> => {
    const result = await SignupService(firstname, lastname, phoneNumber, email, password);
    return result;
}

const signOut = async () => {
    const result = await signoutService();
    return result;
}

const adminSignUp = async (
  firstname: string,
  lastname: string,
  phoneNumber: string,
  email: string,
  password: string
): Promise<any> => {
  const result = await SignupService(
    firstname,
    lastname,
    phoneNumber,
    email,
    password
  );
  return result;
};

const adminSignin = async ({ email, password }: any): Promise<any> => {
  const result = await AdminSignInService({ email, password });
  return result;
};

export const userStore = {
    signIn,
    signUp,
    adminSignUp,
    adminSignin,
    signOut
}