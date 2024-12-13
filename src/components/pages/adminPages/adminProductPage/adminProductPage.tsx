import { Formik } from "formik";
import { useContext, useState } from "react";
import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../../../stores/adminStores";
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
  StudioAddressObject,
  UpdateRtgProductDto,
  SurprisePackageInterface,
  UpdateStudioDetailsDto,
} from "../../../../types";
import {
  galleryProductFormSchema,
  RtgProductSchema,
} from "../../../formComponents/formSchema";
import { UpdateBudgetRateComponent } from "../../../formComponents/updateBudgetRateComponent";
import { UpdateDesignRateComponentForm } from "../../../formComponents/updateDesignRateComponentForm";
import { UpdateGalleryProductForm } from "../../../formComponents/updateGalleryProductForm";
import { UpdateProductRateComponent } from "../../../formComponents/updateProductRatecomponent";
import { UpdateRtgProductForm } from "../../../formComponents/updateRtgProductForm";
import { UpdateBronzePackageForm } from "../../../formComponents/updateBronzePackageForm";

import "./adminProductPage.css";
import { UpdateSilverPackageForm } from "../../../formComponents/updateSilverPackageForm";
import { UpdateGoldPackageForm } from "../../../formComponents/updateGoldPacakgeForm";
import { UpdateDiamondPackageForm } from "../../../formComponents/updateDiamondPackageForm";
import { UpdateStudioDetailsComponent } from "../../../formComponents/updateStudioDetailsComponent";

export const AdminProductPage = () => {
  const [galleryProducts, setGalleryProducts] = useState(false);
  const [_galleryProducts, _setGalleryProducts] = useState<
    GalleryProductInterface[]
  >([]);
  const [rtgProducts, setRtgProducts] = useState(false);
  const [_rtgProducts, _setRtgProducts] = useState<rtgProductInterface[]>([]);
  const [productRate, setProductRate] = useState(false);
  const [_productRate, _setProductRate] = useState<ProductRateInterface[]>([]);
  const [budgetRate, setBudgetRate] = useState(false);
  const [_budgetRate, _setBudgetRate] = useState<BudgetRateInterface[]>([]);
  const [designRate, setDesignRate] = useState(false);
  const [_designRate, _setDesignRate] = useState<DesignRateInterface[]>([]);
  const [packageRates, setPackageRates] = useState(false);
  const [bronzePackageRates, setBronzePackageRates] = useState(false);
  const [_bronzePackageRates, _setBronzePackageRates] = useState<
    SurprisePackageInterface[]
  >([]);
  const [silverPackageRates, setSilverPackageRates] = useState(false);
  const [_silverPackageRates, _setSilverPackageRates] = useState<
    SurprisePackageInterface[]
  >([]);
  const [goldPackageRates, setGoldPackageRates] = useState(false);
  const [_goldPackageRates, _setGoldPackageRates] = useState<
    SurprisePackageInterface[]
  >([]);
  const [diamondPackageRates, setDiamondPackageRates] = useState(false);
  const [_diamondPackageRates, _setDiamondPackageRates] = useState<
    SurprisePackageInterface[]
  >([]);
  const [studioDetails, setStudioDetails] = useState(false);
  const [_studioDetails, _setStudioDetails] = useState<StudioAddressObject[]>(
    []
  );
  const [updateGalleryProductState, setUpdateGalleryProductState] = useState<{
    [key: string]: boolean;
  }>({});
  const [updateRtgProductState, setUpdateRtgProductState] = useState<{
    [key: string]: boolean;
  }>({});
  const [updateStudioDetailsState, setUpdateStudioDetailsState] = useState<{
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
    fetchProductRates,
    fetchBudgetRate,
    fetchDesignRate,
    fetchSurpisePackage,
    fetchStudioDetails,
    updateStudioDetails,
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
      return studioDetails;
    });
  };

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
      const products: GalleryProductInterface[] = await fetchGalleryProducts(
        accessToken
      );
      return _setGalleryProducts(() => products);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleUpdateGalleryProduct = (productId: string) => {
    setUpdateGalleryProductState((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const toggleUpdateStudioDetails = (studioId: string) => {
    setUpdateStudioDetailsState((prev) => ({
      ...prev,
      [studioId]: !prev[studioId],
    }));
  };

  const _fetchRtgProducts = async () => {
    const products: rtgProductInterface[] = await fetchRtgProducts(accessToken);
    return _setRtgProducts(() => products);
  };

  const toggleUpdateRtgProduct = (rtgId: string) => {
    setUpdateRtgProductState((prev) => ({
      ...prev,
      [rtgId]: !prev[rtgId],
    }));
  };

  const _fetchProductRates = async () => {
    const rates: ProductRateInterface[] = await fetchProductRates(accessToken);
    return _setProductRate(() => rates);
  };

  const _fetchBudgetRates = async () => {
    const rates: BudgetRateInterface[] = await fetchBudgetRate(accessToken);
    return _setBudgetRate(() => rates);
  };

  const _fetchDesignRates = async () => {
    const rates: DesignRateInterface[] = await fetchDesignRate(accessToken);
    return _setDesignRate(() => rates);
  };

  const _fetchSurprisePackage = async (_package: string) => {
    const packages: SurprisePackageInterface[] = await fetchSurpisePackage();

    const saidPackage = packages.find((pkg) => pkg.packageName === _package);
    console.log(saidPackage);
    if (_package === "Bronze" && saidPackage) {
      _setBronzePackageRates([saidPackage]);
    } else if (_package === "Silver" && saidPackage) {
      _setSilverPackageRates([saidPackage]);
    } else if (_package === "Gold" && saidPackage) {
      _setGoldPackageRates([saidPackage]);
    } else if (_package === "Diamond" && saidPackage) {
      _setDiamondPackageRates([saidPackage]);
    } else {
      return null;
    }
  };

  const _fetchStudioDetails = async () => {
    const studioDetails: StudioAddressObject[] = await fetchStudioDetails();
    return _setStudioDetails(() => studioDetails);
  };

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

  const studioDetailsInitialValues: UpdateStudioDetailsDto = {
    studioTitle: "",
    studioAddress: "",
    LGA: "",
    state: "",
    phoneNumber: "",
    deliveryBaseFee: "",
    deliveryPricePerKm: "",
    defaultStudioAddress: false,
  };

  const _updateGalleryProduct = async (
    values: UpdateProductDto,
    formikHelpers: any,
    productId: string
  ) => {
    const { ...updateProductDto } = values;

    try {
      const product = await updateGalleryProduct(
        accessToken,
        updateProductDto,
        productId
      );
      formikHelpers.resetForm();
      return product;
    } catch (error) {
      console.log(error);
    }
  };

  const _deleteGalleryProduct = async (productId: string) => {
    try {
      await deleteGalleryProduct(accessToken, productId);
      _setGalleryProducts((prev) =>
        prev.filter((product) => product.productId !== productId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const _updateRtgProduct = async (
    values: UpdateRtgProductDto,
    formikHelpers: any,
    rtgId: string
  ) => {
    const { ...updateRtgProductDto } = values;

    try {
      const product = await updateRtgProduct(
        accessToken,
        updateRtgProductDto,
        rtgId
      );
      formikHelpers.resetForm();
      return product;
    } catch (error) {
      console.log(error);
    }
  };

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

  const _updateStudioDetails = async (
    values: UpdateStudioDetailsDto,
    formikHelpers: any,
    studioId: string
  ) => {
    const { ...updateStudioDetailsDto } = values;

    try {
      const studio = await updateStudioDetails(
        accessToken,
        updateStudioDetailsDto,
        studioId
      );
      formikHelpers.resetForm();
      return studio;
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
                          <strong>Gallery Products Form</strong>
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
                        onClick={() => toggleUpdateRtgProduct(rtgProduct.rtgId)}
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
                      <strong>Ready to Go Products Form</strong>
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
            <button
              type="button"
              onClick={() => {
                toggleProductRate();
                _fetchProductRates();
              }}
            >
              Special cakes and Chops Rate
            </button>
          </p>
          {productRate &&
            _productRate &&
            _productRate.map((productRate) => (
              <>
                <div
                  key={productRate.rateId}
                  className="productRates-container"
                >
                  <UpdateProductRateComponent productRate={productRate} />
                </div>
              </>
            ))}
          <p>
            <button
              type="button"
              onClick={() => {
                toggleBudgetRate();
                _fetchBudgetRates();
              }}
            >
              Budget Cakes and Cake Variants Rate
            </button>
          </p>
          {budgetRate &&
            _budgetRate &&
            _budgetRate.map((budgetRate) => (
              <>
                <div key={budgetRate.rateId} className="budgetRates-container">
                  <UpdateBudgetRateComponent budgetRate={budgetRate} />
                </div>
              </>
            ))}
          <p>
            <button
              type="button"
              onClick={() => {
                toggleDesignRate();
                _fetchDesignRates();
              }}
            >
              Design Rate
            </button>
          </p>
          {designRate &&
            _designRate &&
            _designRate.map((designRate) => (
              <div key={designRate.designId} className="designRates-container">
                <UpdateDesignRateComponentForm designRate={designRate} />
              </div>
            ))}
          <p>
            <button
              type="button"
              onClick={() => {
                togglePackageRate();
              }}
            >
              Suprise Packages
            </button>
          </p>
          {packageRates && (
            <>
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      toggleBronzePackageForm();
                      _fetchSurprisePackage("Bronze");
                    }}
                  >
                    Bronze Package
                  </button>
                </li>
                {bronzePackageRates &&
                  _bronzePackageRates &&
                  _bronzePackageRates.map((bronzePackage) => (
                    <div
                      key={bronzePackage.packageId}
                      className="bronzePackageRates-container"
                    >
                      <UpdateBronzePackageForm bronzePackage={bronzePackage} />
                    </div>
                  ))}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      toggleSilverPackageForm();
                      _fetchSurprisePackage("Silver");
                    }}
                  >
                    Silver Package
                  </button>
                </li>
                {silverPackageRates &&
                  _silverPackageRates &&
                  _silverPackageRates.map((silverPackage) => (
                    <div
                      key={silverPackage.packageId}
                      className="silverPackageRates-container"
                    >
                      <UpdateSilverPackageForm silverPackage={silverPackage} />
                    </div>
                  ))}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      toggleGoldPackageForm();
                      _fetchSurprisePackage("Gold");
                    }}
                  >
                    Gold Package
                  </button>
                </li>
                {goldPackageRates &&
                  _goldPackageRates &&
                  _goldPackageRates.map((goldPackage) => (
                    <div
                      key={goldPackage.packageId}
                      className="goldPackageRates-container"
                    >
                      <UpdateGoldPackageForm goldPackage={goldPackage} />
                    </div>
                  ))}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      toggleDiamondPackageForm();
                      _fetchSurprisePackage("Diamond");
                    }}
                  >
                    Diamond Package
                  </button>
                </li>
                {diamondPackageRates &&
                  _diamondPackageRates &&
                  _diamondPackageRates.map((diamondPackage) => (
                    <div
                      key={diamondPackage.packageId}
                      className="diamondPackageRates-container"
                    >
                      <UpdateDiamondPackageForm
                        diamondPackage={diamondPackage}
                      />
                    </div>
                  ))}
              </ul>
            </>
          )}

          <p>
            <button
              type="button"
              onClick={() => {
                toggleStudioDetails();
                _fetchStudioDetails();
              }}
            >
              Studio Details
            </button>
          </p>
          {studioDetails &&
            _studioDetails &&
            _studioDetails.map((studioDetails) => (
              <>
                <div
                  key={studioDetails.studioId}
                  className="studioDetails-container"
                >
                  <div className="studioDetails-title">
                    <span>
                      <strong>Studio Title </strong>
                      <br />
                      {studioDetails.studioTitle}
                    </span>
                  </div>
                  <div className="studioDetails-about">
                    <span>
                      <strong>Phone Number: </strong>
                      {studioDetails.phoneNumber}
                    </span>{" "}
                    <br />
                    <span>
                      <strong>State: </strong>
                      {studioDetails.state}
                    </span>
                  </div>
                  <div className="studioDetails-button">
                    <span>
                      <button
                        type="button"
                        onClick={() =>
                          toggleUpdateStudioDetails(studioDetails.studioId)
                        }
                      >
                        Update{" "}
                      </button>
                    </span>
                    <span>
                      <button
                        disabled={true}
                        //   type="button"
                        //   onClick={() =>
                        //     _deleteGalleryProduct(studioDetails.studioId)
                        //   }
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </span>
                  </div>
                </div>
                {updateStudioDetailsState[studioDetails.studioId] && (
                  <div className="updateForm-container">
                    <p></p>
                    <Formik
                      initialValues={studioDetailsInitialValues}
                      onSubmit={(values, formikHelpers) =>
                        _updateStudioDetails(
                          values,
                          formikHelpers,
                          studioDetails.studioId
                        )
                      }
                    >
                      {(formikProps) => (
                        <div>
                          <UpdateStudioDetailsComponent
                            {...formikProps}
                            studioDetails={studioDetails}
                            updateStudioDetails={(
                              values: UpdateStudioDetailsDto
                            ) =>
                              _updateStudioDetails(
                                values,
                                formikProps,
                                studioDetails.studioId
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
        </div>
      </div>
    </div>
  );
};
