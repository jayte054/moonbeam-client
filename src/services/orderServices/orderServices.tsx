import axios from "axios"
import { OrderDto } from "../../types"
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

export const addItemToOrders = async (accessToken: string, orderDto: OrderDto) => {
    console.log(orderDto);
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    try{
        const newOrder = await axios.post(`${Base_Url}/products/createOrder`, orderDto, config);
        console.log(newOrder.data)
        return newOrder.data
    } catch (error) {
        console.log(error)
    }
}
