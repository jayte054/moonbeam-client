import { UploadGalleryProduct, uploadRtgProduct } from "../services/adminServices/adminServices";
import { GalleryProductDto, RtgProductDto } from "../types";

export const AdminStores = {
    uploadGalleryProduct: async (accessToken: string, galleryProductDto: GalleryProductDto) => {
        return await UploadGalleryProduct(accessToken, galleryProductDto)
    },
    uploadRtgProduct: async (accessToken: string, rtgProductDto: RtgProductDto) => {
        return await uploadRtgProduct(accessToken, rtgProductDto)
    }
}
