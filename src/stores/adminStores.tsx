import { deleteGalleryProduct, deleteRtgProduct, fetchBudgetRate, fetchDesignRate, fetchGalleryProducts, fetchProductRates, fetchRequests, fetchRtgProducts, fetchStudioDetails, fetchSurpisePackage, fetchUserOrders, getAllUsers, resetPassword, resetPasswordEmail, updateBudgetRate, updateDesignRate, updateDiamondPackage, updateGalleryProduct, updateGoldPackage, updateProductRate, updateRtgProduct, updateSilverPackage, updateStudioDetails, updateSurprisePackage, updateUserOrder, uploadBudgetCakeRate, uploadDesignRate, UploadGalleryProduct, uploadPackageRate, uploadProductRates, uploadRtgProduct, uploadStudioDetails } from "../services/adminServices/adminServices";
import { BudgetRateDto, designRateDto, GalleryProductDto, PackageRatesDto, ProductRateDto, ResetPasswordDto, ResetPasswordEmailDto, RtgProductDto, StudioDetailsDto, UpdateDesignRateDto, UpdateProductDto, updateProductRateDto, UpdateRtgProductDto, UpdateStudioDetailsDto, UpdateUserOrderDto } from "../types";

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
  fetchProductRates: async (accessToken: string) => {
    return await fetchProductRates(accessToken);
  },
  updateProductRate: async (
    accessToken: string,
    updateProductRateDto: updateProductRateDto,
    rateId: string
  ) => {
    return await updateProductRate(accessToken, updateProductRateDto, rateId);
  },
  fetchBudgetRate: async (accesToken: string) => {
    return await fetchBudgetRate(accesToken);
  },
  updateBudgetRate: async (
    accessToken: string,
    updateBudgetRateDto: updateProductRateDto,
    rateId: string
  ) => {
    return await updateBudgetRate(accessToken, updateBudgetRateDto, rateId);
  },
  fetchDesignRate: async (accessToken: string) => {
    return await fetchDesignRate(accessToken);
  },
  updateDesignRate: async (
    accessToken: string,
    updateDesignRateDto: UpdateDesignRateDto,
    designId: string
  ) => {
    return await updateDesignRate(accessToken, updateDesignRateDto, designId);
  },
  fetchSurpisePackage: async () => {
    return await fetchSurpisePackage();
  },
  updateSurprisePackage: async (
    accessToken: string,
    updateBronzePackageRateDto: PackageRatesDto,
    packageId: string
  ) => {
    return await updateSurprisePackage(
      accessToken,
      updateBronzePackageRateDto,
      packageId
    );
  },

  updateSilverPackage: async (
    accessToken: string,
    updateSilverPackageRateDto: PackageRatesDto,
    packageId: string
  ) => {
    return await updateSilverPackage(
      accessToken,
      updateSilverPackageRateDto,
      packageId
    );
  },

  updateGoldPackage: async (
    accessToken: string,
    updateGoldPackageRateDto: PackageRatesDto,
    packageId: string
  ) => {
    return await updateGoldPackage(
      accessToken,
      updateGoldPackageRateDto,
      packageId
    );
  },

  updateDiamondPackage: async (
    accessToken: string,
    updateDiamondPackageRateDto: PackageRatesDto,
    packageId: string
  ) => {
    return await updateDiamondPackage(
      accessToken,
      updateDiamondPackageRateDto,
      packageId
    );
  },

  fetchStudioDetails: async () => {
    return await fetchStudioDetails();
  },

  updateStudioDetails: async (
    accessToken: string,
    updateStudioDetailsDto: UpdateStudioDetailsDto,
    studioId: string
  ) => {
    return await updateStudioDetails(
      accessToken,
      updateStudioDetailsDto,
      studioId
    );
  },

  resetPasswordEmail: async (resetPasswordEmailDto: ResetPasswordEmailDto) => {
    return resetPasswordEmail(resetPasswordEmailDto);
  },

  resetPassword: async (resetPasswordDto: ResetPasswordDto) => {
    return await resetPassword(resetPasswordDto);
  },

  getAllUsers: async (accessToken: string) => {
    return await getAllUsers(accessToken);
  },

  fetchUserOrders: async (accessToken: string) => {
    return await fetchUserOrders(accessToken);
  },

  fetchRequests: async (accessToken: string) => {
    return await fetchRequests(accessToken);
  },

  updateUserOrder: async (accessToken: string, orderId: string, updateOrderDto: UpdateUserOrderDto) => {
    return await updateUserOrder(accessToken, orderId, updateOrderDto);
  },
};


// updateSilverPackageRateDto;