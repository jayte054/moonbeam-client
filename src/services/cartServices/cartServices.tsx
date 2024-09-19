import axios from "axios";
import { Base_Url } from "../galleryServices/galleryServices";

export const getCartItems = async(accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const cartItems = await axios.get(`${Base_Url}/products/fetchCartItems`, config);
        console.log(cartItems.data);
        return cartItems.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
}

export const deleteCartItem = async (accessToken: string, itemId: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    console.log(itemId)
    try {
        return await axios.delete(`${Base_Url}/products/deleteCartItem/${itemId}`, config)
    } catch(error) {
        console.log(error);
        throw error;
    }
}