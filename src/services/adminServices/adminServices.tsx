import axios from "axios";
import { GalleryProductDto, RtgProductDto } from "../../types";
import { Base_Url } from "../galleryServices/galleryServices";

export const UploadGalleryProduct = async (accessToken: string, galleryProductDto: GalleryProductDto) => {
    const { type, description, file } = galleryProductDto;
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    };
    const formData = new FormData();
    formData.append("type", type)
    formData.append("description", description)
    formData.append("file", file)
    console.log(galleryProductDto);
    console.log(accessToken)
    try {
        const product = await axios.post(`${Base_Url}/adminHub/uploadProduct`, formData, config);
        console.log(product.data)
        return product.data
    } catch (error) {
        console.log(error)
    }
}

export const uploadRtgProduct = async (accessToken: string, rtgProductDto: RtgProductDto) => {
    const {rtgName, rtgType, rtgPrice, rtgDescription, file} = rtgProductDto
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    const formData = new FormData()
    formData.append("rtgName", rtgName);
    formData.append("rtgType", rtgType);
    formData.append("rtgPrice", rtgPrice);
    formData.append("rtgDescription", rtgDescription);
    formData.append("file", file);
    console.log(rtgProductDto)
    try {
        const rtgProduct = await axios.post(
          `${Base_Url}/adminHub/uploadRtgProduct`, formData, config
        );
        console.log(rtgProduct.data)
        return rtgProduct.data;
    } catch (error) {
        console.log(error)
    }
}