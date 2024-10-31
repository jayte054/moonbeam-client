import { Formik } from "formik";
import { useContext, useState } from "react";
import { AdminAuthContext } from "../../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../../stores/adminStores";
import {
  PackageRatesInterface,
  BudgetRateDto,
  BudgetRateInterface,
  designRateDto,
  DesignRateInterface,
  UpdateProductDto,
  GalleryProductInterface,
  PackageRatesDto,
  ProductRateDto,
  ProductRateInterface,
  RtgProductDto,
  rtgProductInterface,
  StudioDetailsDto,
  StudioDetailsInterface,
  UpdateRtgProductDto,
} from "../../../types";
import { galleryProductFormSchema, RtgProductSchema } from "../../formComponents/formSchema";
import { UpdateGalleryProductForm } from "../../formComponents/updateGalleryProductForm";
import { UpdateRtgProductForm } from "../../formComponents/updateRtgProductForm";

import "./adminProductPage.css"

export const AdminProductPage = () => {
    const [galleryProducts, setGalleryProducts] = useState(false)
    const [_galleryProducts, _setGalleryProducts] =
      useState < GalleryProductInterface[]>([]);
    const [rtgProducts, setRtgProducts] = useState(false)
    const [_rtgProducts, _setRtgProducts] = useState<rtgProductInterface[]>([]);
    const [productRate, setProductRate] = useState(false);
    const [budgetRate, setBudgetRate] = useState(false);
    const [designRate, setDesignRate] = useState(false);
    const [packageRates, setPackageRates] = useState(false);
    const [bronzePackageRates, setBronzePackageRates] = useState(false);
    const [silverPackageRates, setSilverPackageRates] = useState(false);
    const [goldPackageRates, setGoldPackageRates] = useState(false);
    const [diamondPackageRates, setDiamondPackageRates] = useState(false);
    const [studioDetails, setStudioDetails] = useState(false);
    const [updateGalleryProductState, setUpdateGalleryProductState] = useState<{[key: string]: boolean}>({})
    const [updateRtgProductState, setUpdateRtgProductState] = useState<{
      [key: string]: boolean;
    }>({});
    const { admin } = useContext(AdminAuthContext);
    const {
      fetchGalleryProducts,
      updateGalleryProduct,
      deleteGalleryProduct,
      updateRtgProduct,
      fetchRtgProducts,
      deleteRtgProduct,
    } = AdminStores;

    const accessToken = admin.accessToken;

      const toggleGalleryProducts = () => {
        setGalleryProducts((prev) => {
          const galleryProductState = !prev;
          if (galleryProductState) {
            setRtgProducts(false);
            setDesignRate(false);
            setPackageRates(false);
            setProductRate(false);
            setStudioDetails(false);
            setGoldPackageRates(false);
            setSilverPackageRates(false);
            setDiamondPackageRates(false);
          }
          return galleryProductState;
        });
      };
      const toggleRtgProducts = () => {
        setRtgProducts((prev) => {
          const rtgProductState = !prev;
          if (rtgProductState) {
            setGalleryProducts(false);
            setDesignRate(false);
            setPackageRates(false);
            setProductRate(false);
            setStudioDetails(false);
            setGoldPackageRates(false);
            setSilverPackageRates(false);
            setDiamondPackageRates(false);
          }
          return rtgProductState;
        });
      };
      const toggleProductRate = () => {
        setProductRate((prev) => {
          const productRateState = !prev;
          if (productRateState) {
            setBudgetRate(false);
            setDesignRate(false);
            setPackageRates(false);
            setGalleryProducts(false);
            setRtgProducts(false);
            setStudioDetails(false);
            setGoldPackageRates(false);
            setSilverPackageRates(false);
            setDiamondPackageRates(false);
          }
          return productRateState;
        });
      };
      const toggleBudgetRate = () => {
        setBudgetRate((prev) => {
          const budgetRateState = !prev;
          if (budgetRateState) {
            setDesignRate(false);
            setPackageRates(false);
            setProductRate(false);
            setGalleryProducts(false);
            setRtgProducts(false);
            setStudioDetails(false);
            setGoldPackageRates(false);
            setSilverPackageRates(false);
            setDiamondPackageRates(false);
          }
          return budgetRateState;
        });
      };
      const toggleDesignRate = () => {
        setDesignRate((prev) => {
          const designRateState = !prev;
          if (designRateState) {
            setPackageRates(false);
            setBudgetRate(false);
            setProductRate(false);
            setGalleryProducts(false);
            setRtgProducts(false);
            setStudioDetails(false);
            setGoldPackageRates(false);
            setSilverPackageRates(false);
            setDiamondPackageRates(false);
          }
          return designRateState;
        });
      };
      const togglePackageRate = () => {
        setPackageRates((prev) => {
          const packageRateState = !prev;
          if (packageRateState) {
            setDesignRate(false);
            setBudgetRate(false);
            setProductRate(false);
            setGalleryProducts(false);
            setRtgProducts(false);
            setStudioDetails(false);
           
          }
          return packageRateState;
        });
      };
      const toggleStudioDetails = () => {
        setStudioDetails((prev) => {
            const studioDetails = !prev;
            if (studioDetails) {
              setDesignRate(false);
              setBudgetRate(false);
              setProductRate(false);
              setGalleryProducts(false);
              setRtgProducts(false);
              setGoldPackageRates(false);
              setSilverPackageRates(false);
              setDiamondPackageRates(false);
              setPackageRates(false);
            }
            return studioDetails
        })};

      const toggleBronzePackageForm = () => {
        setBronzePackageRates((prev) => {
          const bronzePackage = !prev;
          if (bronzePackage) {
            setGoldPackageRates(false);
            setSilverPackageRates(false);
            setDiamondPackageRates(false);
             setDesignRate(false);
             setBudgetRate(false);
             setProductRate(false);
             setGalleryProducts(false);
             setRtgProducts(false);
             setStudioDetails(false);
          }
          return bronzePackage;
        });
      };

      const toggleSilverPackageForm = () => {
        setSilverPackageRates((prev) => {
          const silverPackage = !prev;
          if (silverPackage) {
            setGoldPackageRates(false);
            setBronzePackageRates(false);
            setDiamondPackageRates(false);
             setDesignRate(false);
             setBudgetRate(false);
             setProductRate(false);
             setGalleryProducts(false);
             setRtgProducts(false);
             setStudioDetails(false);
          }
          return silverPackage;
        });
      };

      const toggleGoldPackageForm = () => {
        setGoldPackageRates((prev) => {
          const goldPackage = !prev;
          if (goldPackage) {
            setSilverPackageRates(false);
            setBronzePackageRates(false);
            setDiamondPackageRates(false);
            setDesignRate(false);
            setBudgetRate(false);
            setProductRate(false);
            setGalleryProducts(false);
            setRtgProducts(false);
            setStudioDetails(false);
          }
          return goldPackage;
        });
      };

      const toggleDiamondPackageForm = () => {
        setDiamondPackageRates((prev) => {
          const diamondPackage = !prev;
          if (diamondPackage) {
            setSilverPackageRates(false);
            setBronzePackageRates(false);
            setGoldPackageRates(false);
             setDesignRate(false);
             setBudgetRate(false);
             setProductRate(false);
             setGalleryProducts(false);
             setRtgProducts(false);
             setStudioDetails(false);
          }
          return diamondPackage;
        });
      };

    

      const _fetchGalleryProducts = async () => {
        try {
            const products: GalleryProductInterface[] =
              await fetchGalleryProducts(accessToken);
             return _setGalleryProducts(() => products)

        } catch (error) {
            console.log(error)
        }
      }

        const toggleUpdateGalleryProduct = (productId: string) => {
        setUpdateGalleryProductState((prev) => ({
          ...prev,
          [productId]: !prev[productId],
        }));
    }

    const _fetchRtgProducts = async () => {
        const products: rtgProductInterface[] = await fetchRtgProducts(accessToken)
        return _setRtgProducts(() => products)
    }

    const toggleUpdateRtgProduct = (rtgId: string) => {
        setUpdateRtgProductState((prev) => ({
            ...prev,
            [rtgId]: !prev[rtgId]
        }))
    }

      const galleryProductInitialValues: UpdateProductDto = {
        type: "",
        description: "",
        file: null,
      };

      const rtgProductsInitialValues: UpdateRtgProductDto = {
        rtgName: "",
        rtgType: "",
        rtgPrice: "",
        rtgDescription: "",
        file: null,
      };

      const productRateInitialValues: ProductRateDto = {
        chocolateCakeRate: "",
        strawberryCakeRate: "",
        vanillaCakeRate: "",
        redvelvetCakeRate: "",
        carrotCakeRate: "",
        cheeseCakeRate: "",
        bananaCakeRate: "",
        appleCakeRate: "",
        lemonCakeRate: "",
        coffeeCakeRate: "",
        coconutCakeRate: "",
        blueberryCakeRate: "",
        samosaRate: "",
        springRollRate: "",
        samosa_springrollRate: "",
        puffRate: "",
        pepperedMeatRate: "",
        puff_pepperedMeatRate: "",
        samosa_pepperedMeatRate: "",
        springroll_pepperedMeatRate: "",
        meatPieRate: "",
        donutsRate: "",
        cinamonRollsRate: "",
        pancakesRate: "",
        corndogsRate: "",
        waffelsRate: "",
        meatpie_donutsRate: "",
        pancakes_corndogs_waffelsRate: "",
      };

      const designRateInitialValues: designRateDto = {
        nakedRate: "",
        butterCreamRate: "",
        fundantRate: "",
        covering: "",
      };

      const budgetRateInitialValues: BudgetRateDto = {
        chocolateCakeRate: "",
        strawberryCakeRate: "",
        vanillaCakeRate: "",
        redvelvetCakeRate: "",
        carrotCakeRate: "",
        cheeseCakeRate: "",
        bananaCakeRate: "",
        appleCakeRate: "",
        lemonCakeRate: "",
        coffeeCakeRate: "",
        coconutCakeRate: "",
        blueberryCakeRate: "",
        foilCakeRate: "",
        cakeParfaitRate: "",
      };

      const bronzePackageRatesInitialValues: PackageRatesDto = {
        packageName: "",
        itemOne: "",
        itemTwo: "",
        itemThree: "",
        itemFour: "",
        itemFive: "",
        itemSix: "",
        file: null,
        price: "",
        description: "",
      };

      const silverPackageRatesInitialValues: PackageRatesDto = {
        packageName: "",
        itemOne: "",
        itemTwo: "",
        itemThree: "",
        itemFour: "",
        itemFive: "",
        itemSix: "",
        itemSeven: "",
        itemEight: "",
        file: null,
        price: "",
        description: "",
      };

      const goldPackageRatesInitialValues: PackageRatesDto = {
        packageName: "",
        itemOne: "",
        itemTwo: "",
        itemThree: "",
        itemFour: "",
        itemFive: "",
        itemSix: "",
        itemSeven: "",
        itemEight: "",
        itemNine: "",
        itemTen: "",
        file: null,
        price: "",
        description: "",
      };

      const diamondPackageRatesInitialValues: PackageRatesDto = {
        packageName: "",
        itemOne: "",
        itemTwo: "",
        itemThree: "",
        itemFour: "",
        itemFive: "",
        itemSix: "",
        itemSeven: "",
        itemEight: "",
        itemNine: "",
        itemTen: "",
        itemEleven: "",
        itemTwelve: "",
        file: null,
        price: "",
        description: "",
      };

      const studioDetailsInitialValues: StudioDetailsDto = {
        studioTitle: "",
        studioAddress: "",
        LGA: "",
        state: "",
        phoneNumber: "",
        deliveryBaseFee: "",
        deliveryPricePerKm: "",
        defaultStudioAddress: false,
      };

      const _updateGalleryProduct = async(values: UpdateProductDto, formikHelpers: any, productId: string) => {
        const {...updateProductDto} = values;

        try{
            const product  = await updateGalleryProduct(accessToken, updateProductDto, productId)
            formikHelpers.resetForm()
            return product
        } catch(error) {
            console.log(error)
        }
      }

      const _deleteGalleryProduct = async(productId: string) => {
        try {
          await deleteGalleryProduct(accessToken, productId)
          _setGalleryProducts((prev) => prev.filter((product) => product.productId !== productId))
        } catch (error) {
            console.log(error)
        }
      } 

      const _updateRtgProduct = async (values: UpdateRtgProductDto, formikHelpers: any, rtgId: string) => {
        const {...updateRtgProductDto} = values;

        try {
            const product = await updateRtgProduct(accessToken, updateRtgProductDto, rtgId)
            formikHelpers.resetForm()
            return product
        } catch (error) {
            console.log(error)
        }
      }

      const _deleteRtgProduct = async (rtgId: string) => {
        try {
          await deleteRtgProduct(accessToken, rtgId);
          _setRtgProducts((prev) =>
            prev.filter((product) => product.rtgId !== rtgId)
          );
        } catch (error) {
          console.log(error);
        }
      }; 

    return (
      <div>
        <div className="adminProductPage-container">
          <h2>Admin Product Page & Rates</h2>
          <div className="adminProduct-body">
            <p>
              <button
                type="button"
                onClick={() => {
                  toggleGalleryProducts();
                  _fetchGalleryProducts();
                }}
              >
                Gallery Products
              </button>
            </p>
            {galleryProducts && (
              <>
                {_galleryProducts &&
                  _galleryProducts.map((product) => (
                    <>
                      <div
                        key={product.productId}
                        className="galleryProducts-container"
                      >
                        <div className="galleryProducts-image">
                          <span>
                            <img
                              src={product.imageUrl}
                              alt={product.description}
                            />
                          </span>
                        </div>
                        <div className="galleryProducts-about">
                          <span>
                            <strong>Description: </strong>
                            {product.description}
                          </span>{" "}
                          <br />
                          <span>
                            <strong>Type: </strong>
                            {product.type}
                          </span>
                        </div>
                        <div className="galleryProducts-button">
                          <span>
                            <button
                              type="button"
                              onClick={() =>
                                toggleUpdateGalleryProduct(product.productId)
                              }
                            >
                              Update{" "}
                            </button>
                          </span>
                          <span>
                            <button
                              type="button"
                              onClick={() =>
                                _deleteGalleryProduct(product.productId)
                              }
                            >
                              {" "}
                              Delete{" "}
                            </button>
                          </span>
                        </div>
                      </div>
                      {updateGalleryProductState[product.productId] && (
                        <div className="updateForm-container">
                          <p>
                            <strong>Note: </strong>
                            Make sure to provide the picture other fields are
                            optional
                          </p>
                          <Formik
                            initialValues={galleryProductInitialValues}
                            onSubmit={(values, formikHelpers) =>
                              _updateGalleryProduct(
                                values,
                                formikHelpers,
                                product.productId
                              )
                            }
                            validationSchema={galleryProductFormSchema}
                          >
                            {(formikProps) => (
                              <div>
                                <UpdateGalleryProductForm
                                  {...formikProps}
                                  product={product}
                                  updateGalleryProduct={(
                                    values: UpdateProductDto
                                  ) =>
                                    _updateGalleryProduct(
                                      values,
                                      formikProps,
                                      product.productId
                                    )
                                  }
                                />
                              </div>
                            )}
                          </Formik>
                        </div>
                      )}
                    </>
                  ))}
              </>
            )}
            <p>
              <button
                type="button"
                onClick={() => {
                  toggleRtgProducts();
                  _fetchRtgProducts();
                }}
              >
                Ready To Go Products
              </button>
            </p>
            {rtgProducts &&
              _rtgProducts &&
              _rtgProducts.map((rtgProduct) => (
                <>
                  <div key={rtgProduct.rtgId} className="rtgProducts-container">
                    <div className="rtgProducts-image">
                      <span>
                        <img
                          src={rtgProduct.rtgImageUrl}
                          alt={rtgProduct.rtgName}
                        />
                      </span>
                    </div>
                    <div className="rtgProducts-about">
                      <span>
                        <strong>Name: </strong>
                        {rtgProduct.rtgName}
                      </span>
                      <br />
                      <span>
                        <strong>Description: </strong>
                        {rtgProduct.rtgDescription}
                      </span>{" "}
                      <br />
                      <span>
                        <strong>Type: </strong>
                        {rtgProduct.rtgType}
                      </span>
                    </div>
                    <div className="rtgProducts-button">
                      <span>
                        <button
                          type="button"
                          onClick={() =>
                            toggleUpdateRtgProduct(rtgProduct.rtgId)
                          }
                        >
                          Update{" "}
                        </button>
                      </span>
                      <span>
                        <button
                          type="button"
                          onClick={() => _deleteRtgProduct(rtgProduct.rtgId)}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                  {updateRtgProductState[rtgProduct.rtgId] && (
                    <div className="updateForm-container">
                      <p>
                        <strong>Note: </strong>
                        Make sure to provide the picture, other fields are
                        optional
                      </p>
                      <Formik
                        initialValues={rtgProductsInitialValues}
                        onSubmit={(values, formikHelpers) =>
                          _updateGalleryProduct(
                            values,
                            formikHelpers,
                            rtgProduct.rtgId
                          )
                        }
                        validationSchema={RtgProductSchema}
                      >
                        {(formikProps) => (
                          <div>
                            <UpdateRtgProductForm
                              {...formikProps}
                              rtgProduct={rtgProduct}
                              updateRtgProduct={(values: UpdateRtgProductDto) =>
                                _updateRtgProduct(
                                  values,
                                  formikProps,
                                  rtgProduct.rtgId
                                )
                              }
                            />
                          </div>
                        )}
                      </Formik>
                    </div>
                  )}
                </>
              ))}

            <p>
              <button type="button">Special cakes and Chops Rate</button>
            </p>
            <p>
              <button type="button">Budget Cakes and Cake Variants Rate</button>
            </p>
            <p>
              <button type="button">Design Rate</button>
            </p>
            <p>
              <button type="button">Suprise Packages</button>
            </p>
            <ul>
              <li>
                <button type="button">Bronze Package</button>
              </li>
              <li>
                <button type="button">Silver Package</button>
              </li>
              <li>
                <button type="button">Gold Package</button>
              </li>
              <li>
                <button type="button">Diamond Package</button>
              </li>
            </ul>
            <p>
              <button type="button">Studio Details</button>
            </p>
          </div>
        </div>
      </div>
    );
}