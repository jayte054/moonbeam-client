import axios from "axios"
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