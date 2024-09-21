import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const getDeliveryAddress = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    const address = await axios.get(`${Base_Url}/delivery/getAddresses`, config)

}

export const getDefaultAddress = async () => {}