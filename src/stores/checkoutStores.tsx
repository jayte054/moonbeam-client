import { createDeliveryAddress, defaultAddress, deleteDeliveryAddress, getDefaultAddress, getDeliveryAddress } from "../services/checkoutServices/checkoutService"
import { CreateDeliveryAddressDto } from "../types";

export const checkoutStores = {
    getDefaultAddress: async (accessToken: string) => {
        return await getDefaultAddress(accessToken)
    },

    getDeliveryAddress: async (accessToken: string) => {
        return await getDeliveryAddress(accessToken);
    },

    defaultAddress: async (accessToken: string, deliveryAddressId: string) => {
        return await defaultAddress(accessToken, deliveryAddressId);
    },

    createDeliveryAddress: async (accessToken: string, createDeliveryAddressDto: CreateDeliveryAddressDto) => {
        return await createDeliveryAddress(accessToken, createDeliveryAddressDto);
    },

    deleteDeliveryAddress: async (accessToken: string, deliveryAddressId: string) => {
        return await deleteDeliveryAddress(accessToken, deliveryAddressId)
    }
}