import { defaultAddress, getDefaultAddress, getDeliveryAddress } from "../services/checkoutServices/checkoutService"

export const checkoutStores = {
    getDefaultAddress: async (accessToken: string) => {
        return await getDefaultAddress(accessToken)
    },

    getDeliveryAddress: async (accessToken: string) => {
        return await getDeliveryAddress(accessToken);
    },

    defaultAddress: async (accessToken: string, deliveryAddressId: string) => {
        return await defaultAddress(accessToken, deliveryAddressId);
    }
}