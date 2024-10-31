import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../../stores/adminStores";
import { PackageRatesInterface, BudgetRateDto, BudgetRateInterface, designRateDto, DesignRateInterface, GalleryProductDto, GalleryProductInterface, PackageRatesDto, ProductRateDto, ProductRateInterface, RtgProductDto, rtgProductInterface, StudioDetailsDto, StudioDetailsInterface } from "../../../types";
import { BronzePackageForm } from "../../formComponents/bronzePackageForm";
import { BudgetCakeRateForm } from "../../formComponents/budetCakeRateForm";
import { DesignRatesForm } from "../../formComponents/designRatesForm";
import { DiamondPackageForm } from "../../formComponents/diamondPackageForm";
import { 
    silverPackageRatesValidationSchema,
    goldPackageRatesValidationSchema,
    bonzePackageRatesValidationSchema, 
    budgetCakeRateValidationSchema, 
    designRateValidationSchema, 
    galleryProductFormSchema, 
    productRateValidationSchema, 
    RtgProductSchema, 
    diamondPackageRatesValidationSchema,
    StudioDetailsValidationSchema} from "../../formComponents/formSchema";
import { GalleryProductsForm } from "../../formComponents/galleryProductsForm";
import { GoldPackageForm } from "../../formComponents/goldPackageForm";
import { ProductRatesForm } from "../../formComponents/productRatesForm";
import { RtgProductForm } from "../../formComponents/rtgProductForm";
import { SilverPackageForm } from "../../formComponents/silverPackageForm";
import { StudioDetailsForm } from "../../formComponents/studioDetailsForm";
import "./adminUploadPage.css"

export const AdminUploadPage = () => {
    const [galleryProducts, setGalleryProducts] = useState(false)
    const [rtgProducts, setRtgProducts] = useState(false)
    const [productRate, setProductRate] = useState(false)
    const [budgetRate, setBudgetRate] = useState(false)
    const [designRate, setDesignRate] = useState(false);
    const [packageRates, setPackageRates] = useState(false);
    const [bronzePackageRates, setBronzePackageRates] = useState(false);
    const [silverPackageRates, setSilverPackageRates] = useState(false);
    const [goldPackageRates, setGoldPackageRates] = useState(false);
    const [diamondPackageRates, setDiamondPackageRates] = useState(false);
    const [studioDetails, setStudioDetails] = useState(false)
    const {admin} = useContext(AdminAuthContext)

    const {
      uploadGalleryProduct,
      uploadRtgProduct,
      uploadProductRates,
      uploadDesignRate,
      uploadBudgetCakeRate,
      uploadPackageRate,
      uploadStudioDetails,
    } = AdminStores;
    
    const accessToken = admin.accessToken

    const toggleGalleryProducts = () => {
        setGalleryProducts((prev) => {
            const galleryProductState = !prev
            if (galleryProductState){
                setRtgProducts(false)
            }
            return galleryProductState;
        })
    }
    const toggleRtgProducts = () => { 
        setRtgProducts((prev) => {
            const rtgProductState = !prev
            if(rtgProductState) {
                setGalleryProducts(false)
            }
            return rtgProductState;
        })
    };
    const toggleProductRate = () => {
        setProductRate((prev) => {
            const productRateState = !prev
            if (productRateState) {
                setBudgetRate(false)
                setDesignRate(false)
                setPackageRates(false)
            }
            return productRateState;
        })
        };
    const toggleBudgetRate = () => {
        setBudgetRate((prev) => {
            const budgetRateState = !prev
            if (budgetRateState) {
                setDesignRate(false);
                setPackageRates(false);
                setProductRate(false);
            }
            return budgetRateState;
        })
    };
    const toggleDesignRate = () => {
        setDesignRate((prev) => {
            const designRateState = !prev
            if (designRateState) {
                setPackageRates(false);
                setBudgetRate(false)
                setProductRate(false);
            }
            return designRateState;
        })
    };
    const togglePackageRate = () => {
        setPackageRates((prev) => {
            const packageRateState = !prev
            if (packageRateState) {
                setDesignRate(false);
                setBudgetRate(false);
                setProductRate(false);
            }
            return packageRateState;
        })
    };
    const toggleStudioDetails = () => setStudioDetails((prev) => !prev);

    const toggleBronzePackageForm = () => {
        setBronzePackageRates((prev) => {
            const bronzePackage = !prev;
            if(bronzePackage) {
                setGoldPackageRates(false)
                setSilverPackageRates(false)
                setDiamondPackageRates(false);
            }
            return bronzePackage;
        });
    }

    const toggleSilverPackageForm = () => {
        setSilverPackageRates((prev) => {
            const silverPackage = !prev;
            if(silverPackage) {
                setGoldPackageRates(false);
                setBronzePackageRates(false);
                setDiamondPackageRates(false);
            }
            return silverPackage
        })
    }

    const toggleGoldPackageForm = () => {
        setGoldPackageRates((prev) => {
            const goldPackage = !prev;
            if(goldPackage) {
                setSilverPackageRates(false);
                setBronzePackageRates(false);
                setDiamondPackageRates(false);
            }
            return goldPackage;
        })
    }

    const toggleDiamondPackageForm = () => {
        setDiamondPackageRates((prev) => {
            const diamondPackage = !prev;
            if (diamondPackage) {
              setSilverPackageRates(false);
              setBronzePackageRates(false);
              setGoldPackageRates(false);
            }
            return diamondPackage;
        })
    };

    useEffect(() =>{
        setRtgProducts(true)
    }, [])

    const galleryProductInitialValues: GalleryProductDto = {
        type: "",
        description: "",
        file: null,
    }

    const rtgProductsInitialValues: RtgProductDto = {
      rtgName: "",
      rtgType: "",
      rtgPrice: "",
      rtgDescription: "",
      file: null
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

    const _uploadGalleryProduct = async (values: GalleryProductDto, formikHelpers: any) => {
        const {...galleryProductDto} = values;

        try {
            const product: GalleryProductInterface = await uploadGalleryProduct(
                accessToken, 
                galleryProductDto
                );
            formikHelpers.resetForm()
            return product

        } catch (error){
            console.log(error)
        }
    }

    const _uploadRtgProduct = async (values: RtgProductDto, formikHelpers: any) => {
        const {...rtgProductDto} = values

        try {
            const product: rtgProductInterface = await uploadRtgProduct(accessToken, rtgProductDto);
            formikHelpers.resetForm()
            return product;
        } catch(error) {
            console.log(error)
        }
    }

    const _uploadProductRate = async (values: ProductRateDto, formikHelpers: any) => {
        const {...productRatesDto} = values

        try{
            const rates: ProductRateInterface = await uploadProductRates(accessToken, productRatesDto);
            formikHelpers.resetForm()
            return rates;
        } catch(error) {
            console.log(error)
        }
    }

    const _uploadDesignRate = async(values: designRateDto, formikHelpers: any) => {
        const {...designRateDto} = values;

        try {
            const rates: DesignRateInterface = await uploadDesignRate(accessToken, designRateDto);
            formikHelpers.resetForm()
            return rates 
        } catch (error) {
            console.log(error)
        }
    }

    const _uploadBudgetRate = async(values: BudgetRateDto, formikHelpers: any) => {
        const {...budgetCakeRateDto} = values;
        try{
            const rates: BudgetRateInterface = await uploadBudgetCakeRate(
              accessToken,
              budgetCakeRateDto
            );
            formikHelpers.resetForm()
            return rates
        } catch(error) {
            console.log(error)
        }
    }

    const _uploadbronzePackage = async(values: PackageRatesDto, formikHelpers: any) => {
        const {...packageRatesDto} = values;

        try {
            const bronzeRate: PackageRatesInterface =
              await uploadPackageRate(accessToken, packageRatesDto);
        formikHelpers.resetForm();
        return bronzeRate;
        } catch (error) {
            console.log(error)
        }
    }

    const _uploadSilverPackage = async(values: PackageRatesDto, formikHelpers: any) => {
        const {...packageRatesDto} = values;

        try {
            const silverRate: PackageRatesInterface =
              await uploadPackageRate(accessToken, packageRatesDto);
        formikHelpers.resetForm();
        return silverRate;
        } catch (error) {
            console.log(error)
        }
    }

    const _uploadgGoldPackage = async (
      values: PackageRatesDto,
      formikHelpers: any
    ) => {
      const { ...packageRatesDto } = values;

      try {
        const silverRate: PackageRatesInterface = await uploadPackageRate(
          accessToken,
          packageRatesDto
        );
        formikHelpers.resetForm()
        return silverRate;
      } catch (error) {
        console.log(error);
      }
    };

    const _uploadDiamondPackage = async (
      values: PackageRatesDto,
      formikHelpers: any
    ) => {
      const { ...packageRatesDto } = values;

      try {
        const diamondRate: PackageRatesInterface = await uploadPackageRate(
          accessToken,
          packageRatesDto
        );
        formikHelpers.resetForm();
        return diamondRate;
      } catch (error) {
        console.log(error);
      }
    };

    const _uploadStudioDetails = async (values: StudioDetailsDto, formikHelpers: any) => {
        const { ...studioDetailsDto } = values;

        try {
            const studioDetails: StudioDetailsInterface = await uploadStudioDetails(accessToken, studioDetailsDto)
            formikHelpers.resetForm()
            return studioDetails
        } catch(error) {
            console.log(error)
        }
    }

    const [onSubmit, setOnSubmit] = useState<Function>(
      () => _uploadbronzePackage
    );

    return (
      <div>
        <div className="adminPage-container">
          <h2>Admin Upload Page</h2>
          <div className="adminPage-body">
            <div className="adminPage-upload">
              <h2>Form Guides</h2>

              <div className="adminPage-upload-products">
                <button type="button" onClick={toggleRtgProducts}>
                  Ready To Go products
                </button>
                {rtgProducts && (
                  <div className="upload-product-content">
                    <h3>
                      Upload Ready To Go Go Products which will be <br /> viewed
                      in the homepage with its content showing the following:
                    </h3>
                    <p>product image with a size of 202 x 241 pixels</p>
                    <p>product name</p>
                    <p>product price</p>
                    <p>product decription</p>
                    <p>
                      Note that the correct type must be inputed to ensure it's
                      properly
                      categorized
                    </p>
                  </div>
                )}
                <p>
                  <button
                    type="button"
                    onClick={toggleGalleryProducts}
                    aria-label="Toggle Gallery Products"
                  >
                    Gallery products
                  </button>
                </p>
                {galleryProducts && (
                  <div className="upload-product-content">
                    <h3>
                      Upload products that will be viewed in the gallery with
                      its content showing the following :
                    </h3>
                    <p>Product Image with size of 290 x 322 pixels</p>
                    <p> Type of Product which should be one of :</p>{" "}
                    <ul>
                      <li>Wedding</li>
                      <li>Birthday</li>
                      <li>Anniversary</li>
                      <li>Chops_Pastries</li>
                      <li>Surprise Package</li>
                    </ul>
                    <p> Description</p>
                  </div>
                )}
              </div>

              <div className="adminPage-upload-prices">
                <p>
                  <button type="button" onClick={toggleDesignRate}>
                    Design Rate
                  </button>
                </p>
                {designRate && (
                  <div className="upload-product-content">
                    <h3>
                      The form attached can be used to set the rates for the
                      following designs
                    </h3>
                    <ul>
                      <li>Covering for pastries/chops Rate</li>
                      <li>Naked Design Rate</li>
                      <li>ButterCream Rate</li>
                      <li>Fundant Rate</li>
                    </ul>
                  </div>
                )}
                <p>
                  <p>
                    <button type="button" onClick={toggleProductRate}>
                      Special Cakes and Pastries/Chops Rate
                    </button>
                  </p>
                  {productRate && (
                    <div className="upload-product-content">
                      <h3>
                        The form attached can be used to set the rates for the
                        following special cake flavours and chops/pastries
                      </h3>
                      <ul>
                        <li>Chocolate Cake Rate</li>
                        <li>Strawberry Cake Rate</li>
                        <li>Vanilla Cake Rate</li>
                        <li>Redvelvet Cake Rate</li>
                        <li>Carrot Cake Rate</li>
                        <li>Cheese Cake Rate</li>
                        <li>Banana Cake Rate</li>
                        <li>Apple Cake Rate</li>
                        <li>Lemon Cake Rate</li>
                        <li>Coffee Cake Rate</li>
                        <li>Coconut Cake Rate</li>
                        <li>Blueberry Cake Rate</li>
                        <li>Samosa Rate</li>
                        <li>SpringRoll Rate</li>
                        <li>Samosa_and Springroll Rate</li>
                        <li>Puff Rate</li>
                        <li>Peppered Meat Rate</li>
                        <li>Puffand Peppered Meat Rate</li>
                        <li>Samosaand Peppered Meat Rate</li>
                        <li>Springroll and Peppered Meat Rate</li>
                        <li>MeatPie Rate</li>
                        <li>Donuts Rate</li>
                        <li>Cinamon Rolls Rate</li>
                        <li>Pancakes Rate</li>
                        <li>Corndogs Rate</li>
                        <li>Waffels Rate</li>
                        <li>Meatpie and Donuts Rate</li>
                        <li>Pancakes, Corndogs and Waffels Rate</li>
                        {/* <li></li> */}
                      </ul>
                    </div>
                  )}
                  <p>
                    <button type="button" onClick={toggleBudgetRate}>
                      Budget Cake and Cake Variants Rate
                    </button>
                  </p>
                  {budgetRate && (
                    <div className="upload-product-content">
                      <h3>
                        The form attached can be used to set the rates for
                        flavours for budget cakes and Cake variants
                      </h3>
                      <ul>
                        <li>Chocolate Cake Rate</li>
                        <li>Strawberry Cake Rate</li>
                        <li>Vanilla Cake Rate</li>
                        <li>Redvelvet Cake Rate</li>
                        <li>Carrot Cake Rate</li>
                        <li>Cheese Cake Rate</li>
                        <li>Banana Cake Rate</li>
                        <li>Apple Cake Rate</li>
                        <li>Lemon Cake Rate</li>
                        <li>Coffee Cake Rate</li>
                        <li>Coconut Cake Rate</li>
                        <li>Blueberry Cake Rate</li>
                        <li>Cake Parfait Rate</li>
                        <li>Foil Cakes Rate</li>
                      </ul>
                    </div>
                  )}

                  <button type="button" onClick={togglePackageRate}>
                    Surprise Package Rates
                  </button>
                </p>
                {packageRates && (
                  <div className="upload-product-content">
                    <h3>
                      The form attached can be used to set the rates for suprise
                      packages which include:{" "}
                    </h3>
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <button type="button" onClick={toggleBronzePackageForm}>
                          Bronze Package Rates
                        </button>
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <button type="button" onClick={toggleSilverPackageForm}>
                          Silver Package Rates
                        </button>
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <button type="button" onClick={toggleGoldPackageForm}>
                          Gold Package Rates
                        </button>
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <button
                          type="button"
                          onClick={toggleDiamondPackageForm}
                        >
                          Diamond Package Rates
                        </button>
                      </li>
                    </ul>

                    <p>Each package should contain: </p>
                    <ul>
                      <li>Items as described in the inputs</li>
                      <li>An Image of the surprise Package 344 × 480 pixels</li>
                      <li>A short Description</li>
                      <li>Price tag</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="adminPage-upload-prices">
                <p>
                  <button type="button" onClick={toggleStudioDetails}>
                    Studio Details
                  </button>
                </p>
                {studioDetails && (
                  <div className="upload-product-content">
                    <h3>
                      The form attached can be used to set the details for the
                      location of your Studio and the delivery fee for products
                      with respect to distance.
                    </h3>
                    <p>The following are to be inputed into the form</p>
                    <ul>
                      <li> Studio Address</li>
                      <li> LGA </li>
                      <li> State </li>
                      <li> Phone Number </li>
                      <li> Delivery Base Fee </li>
                      <li> Delivery Price Per Km </li>
                      <li> Studio Title </li>
                      <li> Default Studio Address</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2>Forms</h2>
              {galleryProducts && (
                <div className="form-container">
                  <h3>Gallery Poducts Form</h3>
                  <Formik
                    initialValues={galleryProductInitialValues}
                    onSubmit={(values, formikHelpers) => {
                      _uploadGalleryProduct(values, formikHelpers);
                    }}
                    validationSchema={galleryProductFormSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <GalleryProductsForm
                          {...formikProps}
                          uploadGalleryProduct={(values: GalleryProductDto) =>
                            _uploadGalleryProduct(values, formikProps)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {rtgProducts && (
                <div className="form-container">
                  <h3>Ready to Go Products Form</h3>
                  <Formik
                    initialValues={rtgProductsInitialValues}
                    onSubmit={_uploadRtgProduct}
                    validationSchema={RtgProductSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <RtgProductForm
                          {...formikProps}
                          uploadRtgProduct={(values: RtgProductDto) =>
                            _uploadRtgProduct(values, formikProps)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {productRate && (
                <div className="form-container">
                  <h3>Spacial Cakes and Pastries/chops Rates Form</h3>
                  <Formik
                    initialValues={productRateInitialValues}
                    onSubmit={_uploadProductRate}
                    validationSchema={productRateValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <ProductRatesForm
                          {...formikProps}
                          uploadProductRates={(values: ProductRateDto) =>
                            _uploadProductRate(values, formikProps)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {designRate && (
                <div className="form-container">
                  <h3>Design Rates Form</h3>
                  <Formik
                    initialValues={designRateInitialValues}
                    onSubmit={_uploadDesignRate}
                    validationSchema={designRateValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <DesignRatesForm
                          {...formikProps}
                          uploadDesignRate={(values: designRateDto) =>
                            _uploadDesignRate(values, formikProps)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {budgetRate && (
                <div className="form-container">
                  <h3>Budget Cake Rates Form</h3>
                  <Formik
                    initialValues={budgetRateInitialValues}
                    onSubmit={_uploadBudgetRate}
                    validationSchema={budgetCakeRateValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <BudgetCakeRateForm
                          {...formikProps}
                          uploadBudgetCakeRate={(values: BudgetRateDto) =>
                            _uploadBudgetRate(values, formikProps)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {bronzePackageRates && (
                <div className="form-container">
                  <h3> Bronze Package Rates Form</h3>
                  <Formik
                    initialValues={bronzePackageRatesInitialValues}
                    onSubmit={(values, formikHelpers) => {
                      if (onSubmit) {
                        onSubmit(values, formikHelpers);
                      }
                    }}
                    validationSchema={bonzePackageRatesValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <BronzePackageForm
                          {...formikProps}
                          uploadBronzePackageRates={() =>
                            setOnSubmit(() => _uploadbronzePackage)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {silverPackageRates && (
                <div className="form-container">
                  <h3>Silver Package Rates Form</h3>
                  <Formik
                    initialValues={silverPackageRatesInitialValues}
                    onSubmit={(values, formikHelpers) => {
                      if (onSubmit) {
                        onSubmit(values, formikHelpers);
                      }
                    }}
                    validationSchema={silverPackageRatesValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <SilverPackageForm
                          {...formikProps}
                          uploadSilverPackageRates={() =>
                            setOnSubmit(() => _uploadSilverPackage)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {goldPackageRates && (
                <div className="form-container">
                  <h3>Gold Package Rates Form</h3>
                  <Formik
                    initialValues={goldPackageRatesInitialValues}
                    onSubmit={(values, formikHelpers) => {
                      if (onSubmit) {
                        onSubmit(values, formikHelpers);
                      }
                    }}
                    validationSchema={goldPackageRatesValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <GoldPackageForm
                          {...formikProps}
                          uploadGoldPackageRates={() =>
                            setOnSubmit(() => _uploadgGoldPackage)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {diamondPackageRates && (
                <div className="form-container">
                  <h3>Diamond Package Rates Form</h3>
                  <Formik
                    initialValues={diamondPackageRatesInitialValues}
                    onSubmit={(values, formikHelpers) => {
                      if (onSubmit) {
                        onSubmit(values, formikHelpers);
                      }
                    }}
                    validationSchema={diamondPackageRatesValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <DiamondPackageForm
                          {...formikProps}
                          uploadDiamondPackageRates={() =>
                            setOnSubmit(() => _uploadDiamondPackage)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
              {studioDetails && (
                <div className="form-container">
                  <Formik
                    initialValues={studioDetailsInitialValues}
                    onSubmit={_uploadStudioDetails}
                    validationSchema={StudioDetailsValidationSchema}
                  >
                    {(formikProps) => (
                      <div>
                        <StudioDetailsForm
                          {...formikProps}
                          uploadStudioDetails={(values: StudioDetailsDto) =>
                            _uploadStudioDetails(values, formikProps)
                          }
                        />
                      </div>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          </div>
          <div>sales in graph</div>
        </div>
      </div>
    );
}