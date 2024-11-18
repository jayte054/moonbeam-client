import {Formik, Form, useFormikContext, FormikErrors, FormikTouched, FormikHelpers} from "formik"
import { BsBasket2Fill } from "react-icons/bs";

import {QuickOrderPageNav} from "../../navbar/quickOrder"
import {Footer} from "../../footer/footer"
import {chopsOrderSchema, foilOrderSchema, packageOrderSchema, parfaitOrderSchema, quickOrderSchema} from "../../formComponents/formSchema"
import {QuickCakeOrderForm} from "../../formComponents/quickCakeOrderForm"
import {QuickSurprisePackageForm} from "../../formComponents/quickSurprisePackageForm"
import {QuickChopsOrderForm} from "../../formComponents/quickChopsOrder"
import {bronzePackageOrderType, CakeOrder, CartObject, chopsObject, ChopsOrderType, diamondPackageOrderType, foilObject, GenericProductOrderDto, goldPackageOrderType, OrderObject, packageObject, parfaitObject, silverPackageOrderType, VariantCakeOrder} from "../../../types"

import "./quickOrderPage.css"
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

interface formikHelper extends FormikHelpers<chopsObject> {}
interface foilFormikHelper extends FormikHelpers<foilObject> {}
interface parfaitFormikHelper extends FormikHelpers<parfaitObject> {}


export const QuickOrderPage = () => {
    const [foilCakePrice, setFoilCakePrice] = useState<string>('');
    const [cakeParfaitPrice, setCakeParfaitPrice] = useState<string>("");
    const {foilCake, cakeParfait} = useContext(CakeVariantRatesContext);
    const {user} = useContext(AuthContext)
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
    const {addItemToCart}: any = useContext(CartContext)
            
    const name = user?.firstname || ""

    useEffect(() => {
        const getRates = () => {
            setFoilCakePrice(() =>foilCake)
            setCakeParfaitPrice(() => cakeParfait)
        }
        getRates()
    }, [foilCake, cakeParfait, foilCakePrice, cakeParfaitPrice])

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
  
  const budgetOrder = async (values: GenericProductOrderDto, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const {...genericProductOrderDto} = values;
      
    console.log("order: ", genericProductOrderDto);
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
        category: 'budgetCake',
        imageUrl: order.imageUrl,
        deliveryDate: order.deliveryDate,
        userId: order.userId,
      };
      addItemToCart(item)
      formikHelpers.resetForm();
      return order
    } catch (error) {
      console.log(error);
    }
  };

  const specialOrder = async (values: OrderObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const {...genericProductOrderDto} = values;
    console.log("special order", genericProductOrderDto)
   

    try {
      const order: CakeOrder =await specialCakeOrder(accessToken, genericProductOrderDto)
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
      formikHelpers.resetForm()
      return order;
    } catch (error) {
      console.log(error)
    }
  }

  const bronzeOrder = async(values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const {...surprisePackageOrderDto} = values;
    console.log("bronzeOrder", surprisePackageOrderDto)
    console.log(formikHelpers);

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
      formikHelpers.resetForm()
    } catch (error) {
      console.log(error)
    }
  }

  const silverOrder = async(values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const {...surprisePackageOrderDto} = values;
    console.log("silverOrder", surprisePackageOrderDto)

    try {
      const order: silverPackageOrderType=await silverPackageOrder(accessToken, surprisePackageOrderDto)
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
      formikHelpers.resetForm()
    } catch(error) {
      console.log(error)
    }
  }

  const goldOrder = async(values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const {...surprisePackageOrderDto} = values;
    console.log(surprisePackageOrderDto)

    try{
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
      formikHelpers.resetForm();
    } catch (error) {
      console.log(error)
    }
  }

  const diamondOrder = async (values: packageObject, formikHelpers: any) => {
    const accessToken = user.accessToken;
    const {...surprisePackageOrderDto} = values;
    console.log(" diamond",surprisePackageOrderDto)

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
      formikHelpers.resetForm()
    } catch (error) {
      console.log(error)
    }
  }


  const chopOrder = async( values: chopsObject, formikHelpers: formikHelper) => {
    try {
       const accessToken = user.accessToken;
       const { ...genericChopsOrderDto } = values;
       console.log("chops", genericChopsOrderDto);
      const order: ChopsOrderType  = await chopsOrder(
        accessToken,
        genericChopsOrderDto
      );

      const item: CartObject = {
        itemId: order.id,
        itemName: order.orderTitle,
        quantity: order.numberOfPacks || order.customNumberOfPacks,
        price: order.price,
        itemType: order.chopPackageType || order.pastryPackageType,
        category: order.chopPackageType ? "chops" : 'pastry',
        deliveryDate: order.deliveryDate,
        imageUrl: order.imageUrl,
        userId: order.userId,
      };

      addItemToCart(item);

      formikHelpers.resetForm()
      return order;
    } catch (error) {
      console.log(error)
    }
  }

  const foilOrder = async(values: foilObject, foilFormikHelpers: foilFormikHelper) => {
    try {
      const accessToken = user.accessToken;
      const {...foilCakeOrderDto}= values;
      console.log(foilCakeOrderDto)
      const order: VariantCakeOrder =await foilCakeOrder(accessToken, foilCakeOrderDto);
      
      const item: CartObject = {
        itemId: order.variantId,
        itemName: order.orderName,
        quantity: order.quantity,
        price: order.price,
        itemType: order.type,
        category: 'foilCake',
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
      foilFormikHelpers.resetForm()
      return order;

    } catch (error) {
      console.log(error)
    }
  }

  const parfaitOrder = async(values: parfaitObject, formikHelpers: parfaitFormikHelper) => {
    try{
      const accessToken = user.accessToken;
      const {...parfaitOrderDto} = values;
      console.log("parfait", parfaitOrderDto);
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
        category: 'cakeParfait',
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
      formikHelpers.resetForm()
      return order;
    } catch (error) {
      console.log(error)
    }
  }
   

    const [onSubmit, setOnSubmit] = useState<Function>(
      () => budgetOrder
    );
    const [packageSubmit, setPackageSubmit] = useState<Function>(() => bronzeOrder);

  

    return (
      <div className="quickOrderPage-container">
        <QuickOrderPageNav />
        <div className="quickOrderPage-body">
          <div className="quickOrder-header">
            <span>Make Your Quick Order {name}</span>
            <span>
              <CartIcon />
            </span>
          </div>
          <div className="quickOrder-input">
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
                <div className="quickCakeOrder-container">
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
                <div className="quickCakeOrder-container">
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
            <Formik
              initialValues={chopsInitialValues}
              onSubmit={(values, formikHelpers) => {
                chopOrder(values, formikHelpers);
              }}
              validationSchema={chopsOrderSchema}
            >
              {(formikProps) => (
                <div className="quickCakeOrder-container">
                  <div>
                    <QuickChopsOrderForm
                      {...formikProps}
                      toggleChopOrder={(
                        values: chopsObject,
                        // formikHelpers: formikHelper
                      ) => chopOrder(values, formikProps)}
                    />
                  </div>
                </div>
              )}
            </Formik>
          </div>
          <div className="quickOrder-variants">
            <div className="quickOrder-foilCakes">
              <Formik
                initialValues={foilInitialValues}
                onSubmit={(values, foilFormikHelpers) => {
                  foilOrder(values, foilFormikHelpers)
                }}
                validationSchema={foilOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickOrder-foilCakes">
                    <FoilCakeForm 
                      {...formikProps}
                      toggleFoilOrder={(values: foilObject) => foilOrder(values, formikProps)}
                    />
                  </div>
                )}
              </Formik>

              <div className="foilPrice">
                Price:<span> ₦{foilCakePrice}</span>
              </div>
            </div>
            <div className="quickOrder-cakeParfait">
              <Formik
                initialValues={parfaitInitialValues}
                onSubmit={(values, formikHelpers) => {
                  parfaitOrder(values, formikHelpers)
                }}
                validationSchema={parfaitOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickOrder-foilCakes">
                    <CakeParfaitForm 
                        {...formikProps}
                        toggleParfaitOrder={(values: parfaitObject) => parfaitOrder(values, formikProps)}
                    />
                  </div>
                )}
              </Formik>

              <div className="parfaitPrice">
                Price:<span> ₦{cakeParfaitPrice}</span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
}