import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const fetchRequests = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try {
        const requests = await axios.get(
          `${Base_Url}/products/fetchRequests`,
          config
        );
        console.log(requests.data);
        return requests.data;
    } catch (error) {
        console.log(error)
    }
    
}

export const deleteRequests = async (accessToken: string, requestId: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const item = await axios.delete(
          `${Base_Url}/products/deleteRequest/${requestId}`
        );
        console.log(item.data)
        return item.data
    } catch (error) {
        console.log(error)
    }
}