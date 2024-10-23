import axios from "axios"
import { RtgOrderDto } from "../../types";
import { Base_Url } from "../galleryServices/galleryServices"

export const getRtgProducts = async () => {
    try {
        const products = await axios.get(
          `${Base_Url}/bareAdminHub/getRtgProducts`
        );
        console.log(products.data)
        return products.data
    } catch (error) {
        console.log(error)
    }
}

export const createRtgOrder = async (accessToken: string, rtgOrderDto: RtgOrderDto) => {

        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        const rtgOrder = await axios.post(
          `${Base_Url}/products/cretateRtgOrder`, rtgOrderDto, config
        );

        try {
            console.log(rtgOrder.data)
            return rtgOrder.data;
        } catch (error) {
            console.log(error)
            throw error
        }
} 
