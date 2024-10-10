import { fetchOrders } from "../services/orderServices/orderServices"

export const OrderStores = {
    fetchOrders: async (accessToken: string) => {
        return await fetchOrders(accessToken)
    }
} 