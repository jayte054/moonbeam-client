import { deleteGalleryProduct, deleteRtgProduct, fetchGalleryProducts, fetchRtgProducts, updateGalleryProduct, updateRtgProduct, uploadBudgetCakeRate, uploadDesignRate, UploadGalleryProduct, uploadPackageRate, uploadProductRates, uploadRtgProduct, uploadStudioDetails } from "../services/adminServices/adminServices";
import { BudgetRateDto, designRateDto, GalleryProductDto, PackageRatesDto, ProductRateDto, RtgProductDto, StudioDetailsDto, UpdateProductDto, UpdateRtgProductDto } from "../types";

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
  uploadPackageRate: async (
    accessToken: string,
    packageRatesDto: PackageRatesDto
  ) => {
    return await uploadPackageRate(accessToken, packageRatesDto);
  },
  uploadStudioDetails: async (
    accessToken: string,
    studioDetailsDto: StudioDetailsDto
  ) => {
    return await uploadStudioDetails(accessToken, studioDetailsDto);
  },
  fetchGalleryProducts: async (accessToken: string) => {
    return await fetchGalleryProducts(accessToken);
  },
  updateGalleryProduct: async (
    accessToken: string,
    updateProductDto: UpdateProductDto,
    productId: string
  ) => {
    return await updateGalleryProduct(accessToken, updateProductDto, productId);
  },
  deleteGalleryProduct: async (accessToken: string, productId: string) => {
    return await deleteGalleryProduct(accessToken, productId);
  },
  updateRtgProduct: async (
    accessToken: string,
    updateRtgProductDto: UpdateRtgProductDto,
    rtgId: string
  ) => {
    return await updateRtgProduct(accessToken, updateRtgProductDto, rtgId);
  },
  fetchRtgProducts: async (accessToken: string) => {
    return await fetchRtgProducts(accessToken);
  },
  deleteRtgProduct: async (accessToken: string, rtgId: string) => {
    return await deleteRtgProduct(accessToken, rtgId);
  },
};
