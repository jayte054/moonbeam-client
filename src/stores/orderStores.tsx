import { addItemToOrders, fetchOrders } from "../services/orderServices/orderServices"
import { OrderDto } from "../types";

export const OrderStores = {
  fetchOrders: async (accessToken: string) => {
    return await fetchOrders(accessToken);
  },

  addItemToOrders: async (accessToken: string, orderDto: OrderDto) => {
    return await addItemToOrders(accessToken, orderDto);
  },
}; 