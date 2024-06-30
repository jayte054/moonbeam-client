import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const SignInService = async ({email, password}: any) :Promise<any> => {
       const result = await axios.post(`${Base_Url}/auth/signin`, {email, password})
       localStorage.setItem("accessToken", result.data.accessToken)
       const accessToken = result.data.accessToken;
       const userData = {user:result.data.user, accessToken}
       console.log(result)
       return userData
}

export const SignupService = async (
    firstname: string,
    lastname: string,
    phoneNumber: string,
    email: string,
    password: string
): Promise<any> => {
    const result = await axios.post(`${Base_Url}/auth/signup`, {
        firstname, lastname, phoneNumber, email, password
    });
    return result.data
}

export const signoutService = () => {
    return removeToken()
}

const removeToken = () => {
    localStorage.removeItem("accessToken");
}