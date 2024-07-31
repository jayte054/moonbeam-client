import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const CreateProfileService = async(
    address: string,
    dateOfBirth: string,
    file: File 
) => {
    const formData = new FormData();
            formData.append("address", address)
            formData.append("dateOfBirth", dateOfBirth)
            formData.append("file", file)

    try{
        const result = await axios.post(`${Base_Url}/profile/createProfile`, formData)
        return result.data
    } catch(error) {
        throw error
    }
    
}

export const getProfileService = async(user: any) => {
    console.log(user)

    const config = {
      headers: { 
        'Authorization': `Bearer ${user}`
      }
    };

    try{
    const profile = await axios.get(`${Base_Url}/profile/getProfile`, config)
    console.log(profile.data)
        return profile.data
    }catch(error){
        throw error
    }
}