import { cakeVariantRates, surprisePackageOrderDetails } from "../services/orderServices/orderServices"

export const OrderStores = {
    surprisePackageOrderDetails: async() => {
        return await surprisePackageOrderDetails()
    },

    cakeVariantRates:  async() =>{
        return await cakeVariantRates();
    },
}