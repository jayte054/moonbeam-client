import axios from "axios"
import { string } from "yup";
import { CreateDeliveryAddressDto } from "../../types";
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

export const defaultAddress: any = async (accessToken: string, deliveryAddressId: string) => {
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

export const createDeliveryAddress = async (accessToken: string, createDeliveryAddressDto: CreateDeliveryAddressDto) => {
    console.log(createDeliveryAddressDto)
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const newAddress = await axios.post(`${Base_Url}/delivery/createDeliveryAddress`, createDeliveryAddressDto, config)
        console.log(newAddress.data)
        return newAddress.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteDeliveryAddress = async (accessToken: string, deliveryAddressId: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const deliveryAddress = await axios.delete(`${Base_Url}/delivery/deleteAddress/${deliveryAddressId}`, config)
        console.log(deliveryAddress.data)
        return deliveryAddress.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getStudioAddresses = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try {
        const studioAddresses = await axios.post(
          `${Base_Url}/delivery/setStudioAddress`,
          {},
          config
        );
        console.log(studioAddresses.data)
        return studioAddresses.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const studioAddresses = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try {
        const studioAddresses = await axios.get(
          `${Base_Url}/delivery/getStudioAddresses`,
          config
        );
        console.log(studioAddresses.data)
        return studioAddresses.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const setDefaultStudioAddress = async (accessToken: string, studioId: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try {
        const studioAddress = await axios.patch(`${Base_Url}/delivery/setDefaultStudioAddress/${studioId}`, {}, config)
        console.log(studioAddress.data)
        return studioAddress.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getDefaultStudioAddress = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {const defaultStudioAddress = await axios.get(`${Base_Url}/delivery/getDefaultStudioAddress`, config)
    console.log(defaultStudioAddress.data)
    return defaultStudioAddress.data
    } catch (error) {
        console.log(error)
        throw error
    }
}