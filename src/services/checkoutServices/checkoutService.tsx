import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const getDeliveryAddress = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try{
    const address = await axios.get(
      `${Base_Url}/delivery/getAddresses`,
      config
    );
    console.log(address.data)
    return address.data

    } catch (error) {
        console.log(error)
        throw error
    }

}

export const getDefaultAddress = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const defaultAddress = await axios.get(`${Base_Url}/delivery/getDefaultAddress`, config)
        console.log(defaultAddress.data)
        return defaultAddress.data
    } catch(error) {
        console.log(error)
        throw error
    }
}

export const defaultAddress = async (accessToken: string, deliveryAddressId: string) => {
    console.log(accessToken)
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const chooseDefaultAddress = await axios.patch(`${Base_Url}/delivery/defaultAddress/${deliveryAddressId}`, {}, config)
        console.log(chooseDefaultAddress.data)
        return chooseDefaultAddress.data
    } catch (error) {
        console.log(error)
        throw error
    }
}