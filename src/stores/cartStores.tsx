import { getCartItems } from "../services/cartServices/cartServices"

export const CartStores: any = {
    getCartItems : async (accessToken: string) => {
        return await getCartItems(accessToken);
    }
}