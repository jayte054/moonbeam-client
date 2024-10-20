import { getRtgProducts } from "../services/rtgServices/rtgServices"

export const rtgStores = {
    getRtgProducts: async () => {
        return await getRtgProducts()
    }
}