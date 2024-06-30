import { CreateProfileService, getProfileService } from "../services/profileServices/profileServices";

const createProfile = async (
    address: string,
    dateOfBirth: string,
    file: File
) => {
    const result = await CreateProfileService(address,dateOfBirth,file);
    return result; 
}

const getProfile = async(user: any) => {
    const result = await getProfileService(user)
    return result
}

export const profileStore = {
    createProfile,
    getProfile
}