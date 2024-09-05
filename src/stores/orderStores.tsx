import { bronzePackageOrder, budgetCakeOrder, cakeVariantRates, chopsOrder, diamondPackageOrder, goldPackageOrder, silverPackageOrder, specialCakeOrder, surprisePackageOrderDetails } from "../services/orderServices/orderServices"
import { chopsObject, GenericProductOrderDto, OrderObject, packageObject } from "../types";

export const OrderStores = {
  surprisePackageOrderDetails: async () => {
    return await surprisePackageOrderDetails();
  },

  cakeVariantRates: async () => {
    return await cakeVariantRates();
  },

  budgetCakeOrder: async (
    accessToken: string,
    genericProductOrderDto: GenericProductOrderDto
  ) => {
    return await budgetCakeOrder(accessToken, genericProductOrderDto);
  },

  specialCakeOrder: async (
    accessToken: string,
    genericProductOrderDto: OrderObject
  ) => {
    return await specialCakeOrder(accessToken, genericProductOrderDto);
  },

  bronzePackageOrder: async (
    accessToken: string,
    surprisePackageOrderDto: packageObject
  ) => {
    return await bronzePackageOrder(accessToken, surprisePackageOrderDto);
  },

  silverPackageOrder: async (
    accessToken: string,
    surprisePackageOrderDto: packageObject
  ) => {
    return await silverPackageOrder(accessToken, surprisePackageOrderDto);
  },

  goldPackageOrder: async (accessToken: string, surprisePackageOrderDto: packageObject) => {
    return await goldPackageOrder(accessToken, surprisePackageOrderDto)
  },

  diamondPackageOrder: async(accessToken: string, surprisePacakgeOrderDto: packageObject) => {
    return await diamondPackageOrder(accessToken, surprisePacakgeOrderDto)
  },

  chopsOrder: async(accessToken: string, genericChopsOrderDto: chopsObject) => {
    return await chopsOrder(accessToken, genericChopsOrderDto);
  },

};