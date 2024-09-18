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