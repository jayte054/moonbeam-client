import { SignInService } from "../services/authenticationServices/authenticationServices"

const signIn = async ({email, password}: any): Promise<any>  => {
    const result = await SignInService({email, password});
    return result;
}

export const userStore = {
    signIn
}