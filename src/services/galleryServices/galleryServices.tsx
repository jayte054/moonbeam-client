import axios from "axios";

export const Base_Url = "http://localhost:3005"
export const fetchGalleryProducts = async () => {
    try {
        const response = await axios.get(`${Base_Url}/bareAdminHub/getProductsGallery`)
        localStorage.setItem("accessToken", response.data.accessToken)
        console.log(response.data)
        return response.data;
    } catch (error) {
        return ({
            errorMessage: "error fetch products for gallery", error
        });
    }
}