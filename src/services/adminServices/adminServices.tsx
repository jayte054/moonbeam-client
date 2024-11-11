import axios from "axios";
import { BudgetRateDto, designRateDto, GalleryProductDto, PackageRatesDto, ProductRateDto, ResetPasswordDto, ResetPasswordEmailDto, RtgProductDto, StudioDetailsDto, UpdateDesignRateDto, UpdateProductDto, updateProductRateDto, UpdateRtgProductDto, UpdateStudioDetailsDto } from "../../types";
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


    export const uploadProductRates = async (
      accessToken: string,
      productRateDto: ProductRateDto
    ) => {
   

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      try {
        const productRates = await axios.post(
          `${Base_Url}/adminHub/setProductRate`,
          productRateDto,
          config
        );
        return productRates.data;
      } catch (error) {
        console.log(error);
      }
    };

    export const uploadDesignRate = async(accessToken: string, designRateDto: designRateDto) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }

        try{
            const rates = await axios.post(
              `${Base_Url}/adminHub/productDesignRate`, designRateDto,
              config
            );
            console.log(rates.data)
            return rates.data
        } catch (error) {
            console.log(error)
        }
    }

    export const uploadBudgetCakeRate = async (accessToken: string, budgetCakeRateDto: BudgetRateDto) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }

        try {
            const rates = await axios.post(
              `${Base_Url}/adminHub/setBudgetCakeRate`, budgetCakeRateDto, config
            );
            console.log(rates.data)
            return rates.data;
        } catch (error) {
            console.log(error)
        }

    }

    export const uploadPackageRate = async (accessToken: string, packageRatesDto: PackageRatesDto) => {
        const {
            packageName,
            itemOne,
            itemTwo,
            itemThree,
            itemFour,
            itemFive,
            itemSix,
            itemSeven,
            itemEight,
            itemNine,
            itemTen,
            itemEleven,
            itemTwelve,
            file,
            price,
            description,} = packageRatesDto

            const config = {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }

            const formData = new FormData()

            formData.append("packageName", packageName);
            formData.append("itemOne", itemOne);
            formData.append("itemTwo", itemTwo);
            formData.append("itemThree", itemThree);
            formData.append("itemFour", itemFour);
            formData.append("itemFive", itemFive);
            formData.append("itemSix", itemSix);
            formData.append("itemSeven", itemSeven);
            formData.append("itemEight", itemEight);
            formData.append("itemNine", itemNine);
            formData.append("itemTen", itemTen);
            formData.append("itemEleven", itemEleven);
            formData.append("itemTwelve", itemTwelve);
            formData.append("file", file);
            formData.append("price", price);
            formData.append("description", description);

            try {
                const packageRates = await axios.post(
                  `${Base_Url}/adminHub/surprisePackage`, formData, config
                );
                console.log(packageRates.data)
                return packageRates.data;
            } catch (error) {
                console.log(error)
            }
    }

    export const uploadStudioDetails = async (accessToken: string, studioDetailsDto: StudioDetailsDto) => {
        const config = {
            headers : {
                "Authorization": `Bearer ${accessToken}`
            }
        }

        try {
            const studio = await axios.post(
              `${Base_Url}/adminHub/createStudioDetails`, studioDetailsDto, config
            );
            console.log(studio.data)
            return studio.data
        } catch (error) {
            console.log(error)
        }
    }

    export const fetchGalleryProducts = async (accessToken: string) => {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        try{
            const products = await axios.get(`${Base_Url}/adminHub/getProducts`, config)
            console.log(products.data)
            return products.data
        }catch(error) {
            console.log(error)
        }
    }

    export const updateGalleryProduct = async (accessToken: string, updateProductDto: UpdateProductDto, productId: string) => {
    console.log(updateProductDto);

          const { type, description, file } = updateProductDto;
          const config = {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
            },
          };
          const formData = new FormData();
          formData.append("type", type);
          formData.append("description", description);
          formData.append("file", file);

          try {
            const product = await axios.patch(
              `${Base_Url}/adminHub/updateProduct/${productId}`,
              formData,
              config
            );
            console.log(product.data);
            return product.data;
          } catch (error) {
            console.log(error);
          }
    }

    export const deleteGalleryProduct = async (accessToken: string, productId: string) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }

        try {
            const product = await axios.delete(`${Base_Url}/adminHub/deleteProduct/${productId}`, config)
            console.log(product.data)
            return product.data
        } catch(error) {
            console.log(error)
        }
    }

    export const updateRtgProduct = async (
      accessToken: string,
      updateRtgProductDto: UpdateRtgProductDto,
      rtgId: string
    ) => {
      const { rtgName, rtgType, rtgPrice, file, rtgDescription } =
        updateRtgProductDto;
        // console.log(updateRtgProductDto)
        const config = {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }

        const formData = new FormData();
        formData.append("rtgName", rtgName);
        formData.append("rtgType", rtgType);
        formData.append("rtgPrice", rtgPrice);
        formData.append("file", file);
        formData.append("rtgDescription", rtgDescription);

        try {
            const rtgProduct = await axios.patch(
              `${Base_Url}/adminHub/updateRtgProduct${rtgId}`, formData, config
            );
            console.log(rtgProduct.data)
            return rtgProduct.data
        } catch (error) {
            console.log(error)
        }
    };

    export const fetchRtgProducts = async (accessToken: string) => {
        const config= {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }

        try {
            const rtgProducts = await axios.get(
              `${Base_Url}/adminHub/getRtgProduct`, config
            );
            console.log(rtgProducts.data)
            return rtgProducts.data
        } catch (error) {
            console.log(error)
        }
    }

    export const deleteRtgProduct = async (accessToken: string, rtgId: string) => {
        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        };

        try {
            const rtgProduct = await axios.delete(
              `${Base_Url}/adminHub/deleteRtgProduct/${rtgId}`, config
            );
            console.log(rtgProduct.data)
            return rtgProduct.data
        } catch (error) {
            console.log(error)
        }
    }

    export const fetchProductRates = async (accessToken: string) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
        try {
            const productRates = await axios.get(
              `${Base_Url}/adminHub/getProductRates`, config
            );
            console.log(productRates.data)
            return productRates.data
        } catch (error) {
            console.log(error)
        }
    }

    export const updateProductRate = async (accessToken: string, updateProductRateDto: updateProductRateDto, rateId: string) => {
             const config = {
               headers: {
                 Authorization: `Bearer ${accessToken}`,
               },
             };

              try {
                const productRates = await axios.patch(
                  `${Base_Url}/adminHub/updateProductRate/${rateId}`,
                  updateProductRateDto,
                  config
                );
                console.log(productRates.data);
                return productRates.data;
              } catch (error) {
                console.log(error);
              }
    }

    export const fetchBudgetRate = async(accessToken: string) => {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        try {
            const productRates = await axios.get(
              `${Base_Url}/adminHub/getBudgetRates`,
              config 
            );
            console.log(productRates.data)
            return productRates.data
        } catch (error) {
            console.log(error)
        }
    } 

    export const updateBudgetRate = async(accessToken: string, updateBudgetRateDto: updateProductRateDto, rateId: string) => {
         const config = {
           headers: {
             Authorization: `Bearer ${accessToken}`,
           },
         };

         try {
            const budgetRates = await axios.patch(
              `${Base_Url}/adminHub/updateBudgetCakeRate/${rateId}`, 
              updateBudgetRateDto,
              config
            );
            console.log(budgetRates.data)
            return budgetRates.data;
         } catch (error) {
            console.log(error)
         }
    }

    export const fetchDesignRate = async (accessToken: string) =>{
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        try {
            const designRates = await axios.get(
              `${Base_Url}/adminHub/getProductDesignRate`,
              config
            );
            console.log(designRates.data)
            return designRates.data
        } catch(error) {
            console.log(error)
        }

    }


        export const updateDesignRate = async (
          accessToken: string,
          updateDesignRateDto: UpdateDesignRateDto,
          designId: string
        ) => {
          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };

          try {
            const designRates = await axios.patch(
              `${Base_Url}/adminHub/updateDesignRate/${designId}`,
              updateDesignRateDto,
              config
            );
            console.log(designRates.data);
            return designRates.data;
          } catch (error) {
            console.log(error);
          }
        };

        export const fetchSurpisePackage = async() => {
        //   const config = {
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`,
        //     },
        //   };

          try {
            const surprisePackage = await axios.get(
              `${Base_Url}/bareAdminHub/getSurprisePackages`
            //   config
            );
            console.log(surprisePackage.data)
            return surprisePackage.data
          } catch (error) {
            console.log(error);
          }
        }

        export const updateSurprisePackage = async(accessToken: string, updateBronzePackageRateDto: PackageRatesDto, packageId: string) => {
             const {
               packageName,
               itemOne,
               itemTwo,
               itemThree,
               itemFour,
               itemFive,
               itemSix,
               file,
               price,
               description,
             } = updateBronzePackageRateDto;
             console.log(updateBronzePackageRateDto);
             const config = {
               headers: {
                 Authorization: `Bearer ${accessToken}`,
               },
             };
             console.log(file)
             const formData = new FormData();

             formData.append("packageName", packageName);
             formData.append("itemOne", itemOne);
             formData.append("itemTwo", itemTwo);
             formData.append("itemThree", itemThree);
             formData.append("itemFour", itemFour);
             formData.append("itemFive", itemFive);
             formData.append("itemSix", itemSix);
             formData.append("price", price);
             formData.append("description", description);
             formData.append("file", file);
             
               try {
                    const bronzePackage = await axios.patch(
                      `${Base_Url}/adminHub/updateSurprisePackage/${packageId}`,
                      formData,
                      config
                    );
                    console.log(bronzePackage.data)
                    return bronzePackage.data;
               } catch (error) {
                console.log(error)
               }
        }

    export const updateSilverPackage = async (
      accessToken: string,
      updateSilverPackageRateDto: PackageRatesDto,
      packageId: string
    ) => {
      const {
        packageName,
        itemOne,
        itemTwo,
        itemThree,
        itemFour,
        itemFive,
        itemSix,
        itemSeven,
        itemEight,
        file,
        price,
        description,
      } = updateSilverPackageRateDto;
      console.log(updateSilverPackageRateDto);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const formData = new FormData();

      formData.append("packageName", packageName);
      formData.append("itemOne", itemOne);
      formData.append("itemTwo", itemTwo);
      formData.append("itemThree", itemThree);
      formData.append("itemFour", itemFour);
      formData.append("itemFive", itemFive);
      formData.append("itemSix", itemSix);
      formData.append("itemSeven", itemSeven);
      formData.append("itemEight", itemEight);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("file", file);

      try {
        const silverPackage = await axios.patch(
          `${Base_Url}/adminHub/updateSurprisePackage/${packageId}`,
          formData,
          config
        );
        console.log(silverPackage.data);
        return silverPackage.data;
      } catch (error) {
        console.log(error);
      }
    };

    export const updateGoldPackage = async (
      accessToken: string,
      updateGoldPackageRateDto: PackageRatesDto,
      packageId: string
    ) => {
      const {
        packageName,
        itemOne,
        itemTwo,
        itemThree,
        itemFour,
        itemFive,
        itemSix,
        itemSeven,
        itemEight,
        itemNine,
        itemTen,
        file,
        price,
        description,
      } = updateGoldPackageRateDto;
      console.log(updateGoldPackageRateDto);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const formData = new FormData();

      formData.append("packageName", packageName);
      formData.append("itemOne", itemOne);
      formData.append("itemTwo", itemTwo);
      formData.append("itemThree", itemThree);
      formData.append("itemFour", itemFour);
      formData.append("itemFive", itemFive);
      formData.append("itemSix", itemSix);
      formData.append("itemSeven", itemSeven);
      formData.append("itemEight", itemEight);
      formData.append("itemNine", itemNine);
      formData.append("itemTen", itemTen);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("file", file);

      try {
        const goldPackage = await axios.patch(
          `${Base_Url}/adminHub/updateSurprisePackage/${packageId}`,
          formData,
          config
        );
        console.log(goldPackage.data);
        return goldPackage.data;
      } catch (error) {
        console.log(error);
      }
    };

    export const updateDiamondPackage = async (
      accessToken: string,
      updateDiamondPackageRateDto: PackageRatesDto,
      packageId: string
    ) => {
      const {
        packageName,
        itemOne,
        itemTwo,
        itemThree,
        itemFour,
        itemFive,
        itemSix,
        itemSeven,
        itemEight,
        itemNine,
        itemTen,
        itemEleven,
        itemTwelve,
        file,
        price,
        description,
      } = updateDiamondPackageRateDto;
      console.log(updateDiamondPackageRateDto);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const formData = new FormData();

      formData.append("packageName", packageName);
      formData.append("itemOne", itemOne);
      formData.append("itemTwo", itemTwo);
      formData.append("itemThree", itemThree);
      formData.append("itemFour", itemFour);
      formData.append("itemFive", itemFive);
      formData.append("itemSix", itemSix);
      formData.append("itemSeven", itemSeven);
      formData.append("itemEight", itemEight);
      formData.append("itemNine", itemNine);
      formData.append("itemTen", itemTen);
      formData.append("itemEleven", itemEleven);
      formData.append("itemTwelve", itemTwelve);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("file", file);

      try {
        const diamondPackage = await axios.patch(
          `${Base_Url}/adminHub/updateSurprisePackage/${packageId}`,
          formData,
          config
        );
        console.log(diamondPackage.data);
        return diamondPackage.data;
      } catch (error) {
        console.log(error);
      }
    };    

    export const fetchStudioDetails = async () => {

            try {
                const studioDetails = await axios.get(
                  `${Base_Url}/bareAdminHub/getStudios`
                );
                console.log(studioDetails.data)
                return studioDetails.data;
            } catch (error) {
                console.log(error)
            }
    }

    export const updateStudioDetails = async (accessToken: string, updateStudioDetailsDto: UpdateStudioDetailsDto, studioId: string) => {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      try {
        const newStudioDetails = await axios.patch(
            `${Base_Url}/adminHub/updateStudioDetails/${studioId}`,
                updateStudioDetailsDto,
                config
          )
          console.log(newStudioDetails.data)
          return newStudioDetails.data;
      } catch (error) {
        console.log(error);
      }
    }

    
export const resetPasswordEmail = async (resetPasswordEmailDto: ResetPasswordEmailDto) => {
  try{
   const resetEmail = await axios.post(
     `${Base_Url}/adminAuth/adminResetPasswordEmail`,
     resetPasswordEmailDto
   );
   return resetEmail.data;
    }
   catch (error) {
    console.log(error)
  }
}
        
export const resetPassword = async (resetPasswordDto: ResetPasswordDto) => {
  try{
    const resetPassword = await axios.post(
      `${Base_Url}/adminAuth/adminResetPassword`, resetPasswordDto
    );
    console.log(resetPassword.data)
    return resetPassword.data;
  } catch (error) {
    console.log(error)
  }
}     