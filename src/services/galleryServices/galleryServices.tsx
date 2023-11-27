import axios from "axios";

export const Base_Url = "http://localhost:3005"
export const fetchGalleryProducts = async () => {
    const response = await axios.get(`${Base_Url}/bareAdminHub/getProductsGallery`)
    try {
        return response.data;
    } catch (error) {
        return ({
            errorMessage: "error fetch products for gallery", error
        });
    }
}