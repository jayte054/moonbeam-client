import { uploadBudgetCakeRate, uploadDesignRate, UploadGalleryProduct, uploadPackageRate, uploadProductRates, uploadRtgProduct } from "../services/adminServices/adminServices";
import { BudgetRateDto, designRateDto, GalleryProductDto, PackageRatesDto, ProductRateDto, RtgProductDto } from "../types";

export const AdminStores = {
  uploadGalleryProduct: async (
    accessToken: string,
    galleryProductDto: GalleryProductDto
  ) => {
    return await UploadGalleryProduct(accessToken, galleryProductDto);
  },
  uploadRtgProduct: async (
    accessToken: string,
    rtgProductDto: RtgProductDto
  ) => {
    return await uploadRtgProduct(accessToken, rtgProductDto);
  },
  uploadProductRates: async (
    accessToken: string,
    productRatesDto: ProductRateDto
  ) => {
    return await uploadProductRates(accessToken, productRatesDto);
  },
  uploadDesignRate: async (
    accessToken: string,
    designRateDto: designRateDto
  ) => {
    return await uploadDesignRate(accessToken, designRateDto);
  },
  uploadBudgetCakeRate: async (
    accessToken: string,
    budgetCakeRateDto: BudgetRateDto
  ) => {
    return await uploadBudgetCakeRate(accessToken, budgetCakeRateDto);
  },
  uploadPackageRate: async(accessToken: string, packageRatesDto: PackageRatesDto) => {
    return await uploadPackageRate(accessToken, packageRatesDto);
  },
};
