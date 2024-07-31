import { surprisePackageOrder } from "../services/orderServices/orderServices"

export const OrderStores = {
    surprisePackageOrder: async() => {
        return await surprisePackageOrder()
    },
}