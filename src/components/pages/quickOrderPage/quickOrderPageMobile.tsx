import {
  Formik,
  Form,
  useFormikContext,
  FormikErrors,
  FormikTouched,
  FormikHelpers,
} from "formik";
import { BsBasket2Fill } from "react-icons/bs";

import { QuickOrderPageNav } from "../../navbar/quickOrder";
import { Footer } from "../../footer/footer";
import {
  chopsOrderSchema,
  foilOrderSchema,
  packageOrderSchema,
  parfaitOrderSchema,
  quickOrderSchema,
} from "../../formComponents/formSchema";
import { QuickCakeOrderForm } from "../../formComponents/quickCakeOrderForm";
import { QuickSurprisePackageForm } from "../../formComponents/quickSurprisePackageForm";
import { QuickChopsOrderForm } from "../../formComponents/quickChopsOrder";
import {
  bronzePackageOrderType,
  CakeOrder,
  CartObject,
  chopsObject,
  ChopsOrderType,
  diamondPackageOrderType,
  foilObject,
  GenericProductOrderDto,
  goldPackageOrderType,
  OrderObject,
  packageObject,
  parfaitObject,
  silverPackageOrderType,
  VariantCakeOrder,
} from "../../../types";

import "./quickOrderPageMobile.css";
import { CustomSelect } from "../../formComponents/customSelect";
import { CustomButton } from "../../formComponents/customButton";
import { FoilCakeForm } from "../../formComponents/foilCakeForm";
import { CakeParfaitForm } from "../../formComponents/cakeParfaitForm";
import { useContext, useEffect, useState } from "react";
import { CakeVariantRatesContext } from "../../../context/packageContext/packageContext";
import { AuthContext } from "../../../context/authcontext/authContext";
import { OrderStores } from "../../../stores/productStores";
import { CartIcon } from "../../cartIcon/cartIcon";
import { CartContext } from "../../../context/cartContext/cartContext";
import { toastify } from "../../utilsComponent";
import { HomePageNavbarMobile } from "../../navbar/homePageNavbarMobile";

interface formikHelper extends FormikHelpers<chopsObject> {}
interface foilFormikHelper extends FormikHelpers<foilObject> {}
interface parfaitFormikHelper extends FormikHelpers<parfaitObject> {}


export const QuickOrderPageMobile = () => {
  const [foilCakePrice, setFoilCakePrice] = useState<string>("");
  const [cakeParfaitPrice, setCakeParfaitPrice] = useState<string>("");
  const [showCake, setShowCake] = useState(false)
  const [showPackage, setShowPackage] = useState(false)
  const [showChops, setShowChops] = useState(false);
  const [showParfait, setShowParfait] = useState(false);
  const [showFoil, setShowFoil] = useState(false);
  const { foilCake, cakeParfait } = useContext(CakeVariantRatesContext);
  const { user } = useContext(AuthContext);
  const {
    budgetCakeOrder,
    specialCakeOrder,
    bronzePackageOrder,
    goldPackageOrder,
    silverPackageOrder,
    diamondPackageOrder,
    chopsOrder,
    foilCakeOrder,
    cakeParfaitOrder,
  } = OrderStores;
  const { addItemToCart }: any = useContext(CartContext);

  const name = user?.firstname || "";

  useEffect(() => {
    const getRates = () => {
      setFoilCakePrice(() => foilCake);
      setCakeParfaitPrice(() => cakeParfait);
    };
    getRates();
    setShowCake(() => true);
    setShowParfait(() => true);
  }, [foilCake, cakeParfait, foilCakePrice, cakeParfaitPrice]);

  const initialValues: GenericProductOrderDto = {
    orderName: "",
    description: "",
    productFlavour: "",
    type: "",
    designCovering: "",
    layers: "",
    deliveryDate: "",
    inches: "",
    file: null,
  };
  const packageInitialValues: packageObject = {
    packageOrderName: "",
    deliveryDate: "",
    addInfo: "",
  };
  const chopsInitialValues: chopsObject = {
    orderTitle: "",
    type: "",
    chopPackageType: "",
    pastryPackageType: "",
    covering: "",
    numberOfPacks: "",
    deliveryDate: "",
    description: "",
    file: null,
  };
  const foilInitialValues: foilObject = {
    orderName: "",
    quantity: "",
    description: "",
    deliveryDate: "",
    productFlavour: "",
  };
  const parfaitInitialValues: parfaitObject = {
    orderName: "",
    quantity: "",
    deliveryDate: "",
    description: "",
  };

  const budgetOrder = async (
    values: GenericProductOrderDto,
    formikHelpers: any
  ) => {
    const accessToken = user.accessToken;
    const { ...genericProductOrderDto } = values;

    try {
      const order: CakeOrder = await budgetCakeOrder(
        accessToken,
        genericProductOrderDto
      );
      const item: CartObject = {
        itemId: order.id,
        itemName: order.orderName,
        quantity: "1",
        price: order.price,
        itemType: "bronze Package",
        category: "budgetCake",
        imageUrl: order.imageUrl,
        deliveryDate: order.deliveryDate,
        userId: order.userId,
      };
      addItemToCart(item);
      formikHelpers.resetForm();
      toastify.addItemToCart(`item successfully added to cart`);
      return order;
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const specialOrder = async (values: OrderObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const { ...genericProductOrderDto } = values;

    try {
      const order: CakeOrder = await specialCakeOrder(
        accessToken,
        genericProductOrderDto
      );
      const item: CartObject = {
        itemId: order.id,
        itemName: order.orderName,
        quantity: "1",
        price: order.price,
        itemType: "bronze Package",
        category: "specialCake",
        deliveryDate: order.deliveryDate,
        imageUrl: order.imageUrl,
        userId: order.userId,
      };
      addItemToCart(item);
      formikHelpers.resetForm();
      toastify.addItemToCart(`item successfully added to cart`);
      return order;
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const bronzeOrder = async (values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const { ...surprisePackageOrderDto } = values;

    try {
      const order: bronzePackageOrderType = await bronzePackageOrder(
        accessToken,
        surprisePackageOrderDto
      );
      const item: CartObject = {
        itemId: order.packageId,
        itemName: order.packageOrderName,
        quantity: "1",
        price: order.price,
        itemType: "bronze Package",
        category: "bronzePackage",
        deliveryDate: order.deliveryDate,
        imageUrl: order.imageUrl,
        userId: order.userId,
      };
      addItemToCart(item);
      toastify.addItemToCart(`item successfully added to cart`);
      formikHelpers.resetForm();
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const silverOrder = async (values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const { ...surprisePackageOrderDto } = values;

    try {
      const order: silverPackageOrderType = await silverPackageOrder(
        accessToken,
        surprisePackageOrderDto
      );
      const item: CartObject = {
        itemId: order.packageId,
        itemName: order.packageOrderName,
        quantity: "1",
        price: order.price,
        itemType: "bronze Package",
        category: "silverPackage",
        deliveryDate: order.deliveryDate,
        imageUrl: order.imageUrl,
        userId: order.userId,
      };
      addItemToCart(item);
      toastify.addItemToCart(`item successfully added to cart`);
      formikHelpers.resetForm();
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const goldOrder = async (values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const { ...surprisePackageOrderDto } = values;

    try {
      const order: goldPackageOrderType = await goldPackageOrder(
        accessToken,
        surprisePackageOrderDto
      );
      const item: CartObject = {
        itemId: order.packageId,
        itemName: order.packageOrderName,
        quantity: "1",
        price: order.price,
        itemType: "bronze Package",
        category: "goldPackage",
        deliveryDate: order.deliveryDate,
        imageUrl: order.imageUrl,
        userId: order.userId,
      };
      addItemToCart(item);
      toastify.addItemToCart(`item successfully added to cart`);
      formikHelpers.resetForm();
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const diamondOrder = async (values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const { ...surprisePackageOrderDto } = values;

    try {
      const order: diamondPackageOrderType = await diamondPackageOrder(
        accessToken,
        surprisePackageOrderDto
      );
      const item: CartObject = {
        itemId: order.packageId,
        itemName: order.packageOrderName,
        quantity: "1",
        price: order.price,
        itemType: "bronze Package",
        category: "diamondPackage",
        imageUrl: order.imageUrl,
        deliveryDate: order.deliveryDate,
        userId: order.userId,
      };
      addItemToCart(item);
      toastify.addItemToCart(`item successfully added to cart`);
      formikHelpers.resetForm();
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const chopOrder = async (
    values: chopsObject,
    formikHelpers: formikHelper
  ) => {
    try {
      const accessToken = user.accessToken;
      const { ...genericChopsOrderDto } = values;
      const order: ChopsOrderType = await chopsOrder(
        accessToken,
        genericChopsOrderDto
      );

      const item: CartObject = {
        itemId: order.id,
        itemName: order.orderTitle,
        quantity: order.numberOfPacks || order.customNumberOfPacks,
        price: order.price,
        itemType: order.chopPackageType || order.pastryPackageType,
        category: order.chopPackageType ? "chops" : "pastry",
        deliveryDate: order.deliveryDate,
        imageUrl: order.imageUrl,
        userId: order.userId,
      };

      addItemToCart(item);
      formikHelpers.resetForm();
      toastify.addItemToCart(`item successfully added to cart`);
      return order;
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const foilOrder = async (
    values: foilObject,
    foilFormikHelpers: foilFormikHelper
  ) => {
    try {
      const accessToken = user.accessToken;
      const { ...foilCakeOrderDto } = values;
      const order: VariantCakeOrder = await foilCakeOrder(
        accessToken,
        foilCakeOrderDto
      );

      const item: CartObject = {
        itemId: order.variantId,
        itemName: order.orderName,
        quantity: order.quantity,
        price: order.price,
        itemType: order.type,
        category: "foilCake",
        deliveryDate: order.deliveryDate,
        imageUrl:
          order.type === "foilCake"
            ? "/foilcake.png"
            : order.type === "cakeParfait"
            ? "/cakeParfait.png"
            : order.type || "",
        userId: order.userId,
      };

      addItemToCart(item);
      foilFormikHelpers.resetForm();
      toastify.addItemToCart(`item successfully added to cart`);
      return order;
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const parfaitOrder = async (
    values: parfaitObject,
    formikHelpers: parfaitFormikHelper
  ) => {
    try {
      const accessToken = user.accessToken;
      const { ...parfaitOrderDto } = values;
      const order: VariantCakeOrder = await cakeParfaitOrder(
        accessToken,
        parfaitOrderDto
      );
      const item: CartObject = {
        itemId: order.variantId,
        itemName: order.orderName,
        quantity: order.quantity,
        price: order.price,
        itemType: order.type,
        category: "cakeParfait",
        deliveryDate: order.deliveryDate,
        imageUrl:
          order.type === "foilCake"
            ? "/foilcake.png"
            : order.type === "cakeParfait"
            ? "/cakeParfait.png"
            : order.type || "",
        userId: order.userId,
      };

      addItemToCart(item);
      formikHelpers.resetForm();
      toastify.addItemToCart(`item successfully added to cart`);
      return order;
    } catch (error) {
      toastify.error(`something went wrong please try again later`);
    }
  };

  const [onSubmit, setOnSubmit] = useState<Function>(() => budgetOrder);
  const [packageSubmit, setPackageSubmit] = useState<Function>(
    () => bronzeOrder
  );

  return (
    <div className="quickOrderPageMobile-container">
      <HomePageNavbarMobile />
      <div className="quickOrderPageMobile-body">
        <div className="quickOrderMobile-header">
          <span>Make Your Quick Order {name}</span>
          <span>
            <CartIcon />
          </span>
        </div>
        <div className="quickOrderMobile-input">
          <span>
            <button
              type="button"
              style={{ borderTopRightRadius: "4rem", marginRight: "1rem" }}
              onClick={() => {
                setShowCake(() => true);
                setShowPackage(() => false);
                setShowChops(() => false);
              }}
            >
              Cakes
            </button>
          </span>
          <span>
            <button
              type="button"
              style={{
                borderTopLeftRadius: "1.5rem",
                borderTopRightRadius: "1.5rem",
                marginRight: "1rem",
                fontSize: ".9rem",
              }}
              onClick={() => {
                setShowPackage(() => true);
                setShowCake(() => false);
                setShowChops(() => false);
              }}
            >
              Packages
            </button>
          </span>
          <span>
            <button
              type="button"
              style={{ borderTopLeftRadius: "4rem" }}
              onClick={() => {
                setShowChops(() => true);
                setShowPackage(() => false);
                setShowCake(() => false);
              }}
            >
              Chops
            </button>
          </span>
          <p></p>
          {showCake && (
            <Formik
              initialValues={initialValues}
              onSubmit={(values, formikHelpers) => {
                if (onSubmit) {
                  onSubmit(values, formikHelpers);
                }
              }}
              validationSchema={quickOrderSchema}
            >
              {(formikProps) => (
                <div className="quickCakeOrderMobile-container">
                  <div>
                    <QuickCakeOrderForm
                      {...formikProps}
                      toggleBudgetOrder={() => setOnSubmit(() => budgetOrder)}
                      toggleSpecialOrder={() => setOnSubmit(() => specialOrder)}
                    />
                  </div>
                </div>
              )}
            </Formik>
          )}
          {showPackage && (
            <Formik
              initialValues={packageInitialValues}
              onSubmit={(values, formikHelpers) => {
                if (packageSubmit) {
                  packageSubmit(values, formikHelpers);
                }
              }}
              validationSchema={packageOrderSchema}
            >
              {(formikProps) => (
                <div className="quickCakeOrderMobile-container">
                  <div>
                    <QuickSurprisePackageForm
                      {...formikProps}
                      toggleBronzeOrder={() =>
                        setPackageSubmit(() => bronzeOrder)
                      }
                      toggleSilverOrder={() =>
                        setPackageSubmit(() => silverOrder)
                      }
                      toggleGoldOrder={() => setPackageSubmit(() => goldOrder)}
                      toggleDiamondOrder={() =>
                        setPackageSubmit(() => diamondOrder)
                      }
                    />
                  </div>
                </div>
              )}
            </Formik>
          )}
          {showChops && (
            <Formik
              initialValues={chopsInitialValues}
              onSubmit={(values, formikHelpers) => {
                chopOrder(values, formikHelpers);
              }}
              validationSchema={chopsOrderSchema}
            >
              {(formikProps) => (
                <div className="quickCakeOrderMobile-container">
                  <div>
                    <QuickChopsOrderForm
                      {...formikProps}
                      toggleChopOrder={(
                        values: chopsObject
                        // formikHelpers: formikHelper
                      ) => chopOrder(values, formikProps)}
                    />
                  </div>
                </div>
              )}
            </Formik>
          )}
        </div>
        <div className="quickOrderMobile-variants">
          <span>
            <button
              type="button"
              style={{ borderTopRightRadius: "4rem", marginRight: "1rem" }}
              onClick={() => {
                setShowParfait(() => true);
                setShowFoil(() => false);
              }}
            >
              Foil Cakes
            </button>
          </span>
          <span>
            <button
              type="button"
              style={{ borderTopLeftRadius: "4rem", marginLeft: "1.6rem" }}
              onClick={() => {
                setShowFoil(() => true);
                setShowParfait(() => false);
              }}
            >
              Cake parfait
            </button>
          </span>

          {showParfait && (
            <div className="quickOrderMobile-foilCakes">
              <Formik
                initialValues={foilInitialValues}
                onSubmit={(values, foilFormikHelpers) => {
                  foilOrder(values, foilFormikHelpers);
                }}
                validationSchema={foilOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickOrder-foilCakes">
                    <FoilCakeForm
                      {...formikProps}
                      toggleFoilOrder={(values: foilObject) =>
                        foilOrder(values, formikProps)
                      }
                    />
                  </div>
                )}
              </Formik>

              <div className="foilPrice-mobile">
                Price:<span> ₦{foilCakePrice}</span>
              </div>
            </div>
          )}
          {showFoil && (
            <div className="quickOrderMobile-cakeParfait">
              <Formik
                initialValues={parfaitInitialValues}
                onSubmit={(values, formikHelpers) => {
                  parfaitOrder(values, formikHelpers);
                }}
                validationSchema={parfaitOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickOrder-foilCakes">
                    <CakeParfaitForm
                      {...formikProps}
                      toggleParfaitOrder={(values: parfaitObject) =>
                        parfaitOrder(values, formikProps)
                      }
                    />
                  </div>
                )}
              </Formik>

              <div className="parfaitPrice">
                Price:<span> ₦{cakeParfaitPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
