import { budgetCakeOrder, cakeVariantRates, specialCakeOrder, surprisePackageOrderDetails } from "../services/orderServices/orderServices"
import { GenericProductOrderDto, OrderObject } from "../types";

export const OrderStores = {
    surprisePackageOrderDetails: async() => {
        return await surprisePackageOrderDetails()
    },

    cakeVariantRates:  async() =>{
        return await cakeVariantRates();
    },

    budgetCakeOrder: async(accessToken: string, genericProductOrderDto: GenericProductOrderDto,) => {
        return await budgetCakeOrder(accessToken, genericProductOrderDto)
    },

    specialCakeOrder: async(accessToken: string, genericProductOrderDto: OrderObject) => {
        return await specialCakeOrder(accessToken, genericProductOrderDto);
    }
}