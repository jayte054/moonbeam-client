import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const SignInService = async ({email, password}: any) :Promise<any> => {
       const result = await axios.post(`${Base_Url}/auth/signin`, {email, password})
       const accessToken = result.data.accessToken;
       const userData = {user:result.data.user, accessToken}
       return userData
}