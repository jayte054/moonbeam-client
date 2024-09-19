import { deleteCartItem, getCartItems } from "../services/cartServices/cartServices"

export const CartStores: any = {
    getCartItems : async (accessToken: string) => {
        return await getCartItems(accessToken);
    },

    deleteCartItem : async(accessToken: string, itemId: string) => {
        return await deleteCartItem(accessToken, itemId)
    }
}