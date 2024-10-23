import { createRtgOrder, getRtgProducts } from "../services/rtgServices/rtgServices"
import { RtgOrderDto } from "../types";

export const rtgStores = {
  getRtgProducts: async () => {
    return await getRtgProducts();
  },

  createRtgOrder: async (accessToken: string, rtgOrderDto: RtgOrderDto) => {
    return await createRtgOrder(accessToken, rtgOrderDto);
  },
};