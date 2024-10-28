import { Formik } from "formik";
import { useContext, useState } from "react";
import { AdminAuthContext } from "../../../context/authcontext/adminAuthContext";
import { AdminStores } from "../../../stores/adminStores";
import { GalleryProductDto, GalleryProductInterface, RtgProductDto, rtgProductInterface } from "../../../types";
import { galleryProductFormSchema, RtgProductSchema } from "../../formComponents/formSchema";
import { GalleryProductsForm } from "../../formComponents/galleryProductsForm";
import { RtgProductForm } from "../../formComponents/rtgProductForm";
import { AdminPageNavbar } from "../../navbar/adminPageNavBar"
import "./adminPage.css"

export const AdminPage = () => {
    const [galleryProducts, setGalleryProducts] = useState(false)
    const [rtgProducts, setRtgProducts] = useState(false)
    const [productRate, setProductRate] = useState(false)
    const [budgetRate, setBudgetRate] = useState(false)
    const [designRate, setDesignRate] = useState(false);
    const [packageRates, setPackageRates] = useState(false);
    const [studioDetails, setStudioDetails] = useState(false)
    const {admin} = useContext(AdminAuthContext)

    const {uploadGalleryProduct, uploadRtgProduct} = AdminStores;
    
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

    const _uploadGalleryProduct = async (values: GalleryProductDto, formikHelpers: any) => {
        const {...galleryProductDto} = values;

        console.log("product", galleryProductDto)
        console.log(accessToken);

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

    const [onSubmit, setOnSubmit] = useState<Function>(
      () => _uploadGalleryProduct
    );

    return (
      <div>
        <AdminPageNavbar />
        <div className="adminPage-container">
          <h1>Admin Page</h1>
          <div className="adminPage-body">
            <div className="adminPage-upload">
              <div className="adminPage-upload-products">
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
                      Note that the correct must be inputed to ensure it's
                      properly <br />
                      categorized
                    </p>
                  </div>
                )}
              </div>

              <div className="adminPage-upload-prices">
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
                      <li>Bronze Package</li>
                      <li>Silver Package</li>
                      <li>Gold Package</li>
                      <li>Diamond Package</li>
                    </ul>
                    <p>Each package should contain: </p>
                    <ul>
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
                                uploadRtgProduct={(values: RtgProductDto) => _uploadRtgProduct(values, formikProps)}
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