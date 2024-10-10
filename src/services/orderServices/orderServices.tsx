import axios from "axios"
import { Base_Url } from "../galleryServices/galleryServices"

export const fetchOrders = async (accessToken: string) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try{
        const orders = await axios.get(`${Base_Url}/products/fetchOrders`, config)
        console.log(orders.data)
        return orders.data;
    } catch (error) {
        console.log(error)
    }
}


