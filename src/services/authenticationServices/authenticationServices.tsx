import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"


export const SignInService = async ({email, password}: any) :Promise<any> => {
       const result = await axios.post(`${Base_Url}/auth/signin`, {email, password})
       
       try {
        localStorage.setItem("accessToken", result.data.accessToken);
        const accessToken = result.data.accessToken;
        const userData = { user: result.data.user, accessToken };
        return userData;
       } catch (error) {
        console.log(error)
       }
}

export const SignupService = async (
    firstname: string,
    lastname: string,
    phoneNumber: string,
    email: string,
    password: string
): Promise<any> => {
    
    try {
        const result = await axios.post(`${Base_Url}/auth/signup`, {
          firstname,
          lastname,
          phoneNumber,
          email,
          password,
        });
        return result.data;
    } catch (error) {
        console.log(error)
    }
}

export const AdminSignupService = async (
  firstname: string,
  lastname: string,
  phoneNumber: string,
  email: string,
  password: string
) => {
 
  try {
     const result = await axios.post(`${Base_Url}/adminAuth/adminSignup`, {
       firstname,
       lastname,
       phoneNumber,
       email,
       password,
     });
    console.log(result.data)
    return result.data;

  } catch (error) {
    console.log(error)
  }
};

export const AdminSignInService = async ({ email, password }: any): Promise<any> => {
  const result = await axios.post(`${Base_Url}/adminAuth/adminSignin`, {
    email,
    password,
  });
  console.log(result.data)
  try {
     localStorage.setItem("accessToken", result.data.accessToken);
     const accessToken = result.data.accessToken;
     const adminData = { admin: result.data.admin, accessToken };
     console.log(adminData);
     return adminData;
  } catch (error) {
    console.log(error)
  }
};

export const signoutService = () => {
    return removeToken()
}

const removeToken = () => {
    localStorage.removeItem("accessToken");
}