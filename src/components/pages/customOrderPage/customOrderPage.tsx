import React, {useContext} from "react";
import { BsBasket2Fill } from "react-icons/bs";
import {Formik, Form, FormikHelpers} from "formik"
import {QuickChopsOrderForm} from "../../formComponents/quickChopsOrder"
import {chopsOrderSchema, foilOrderSchema, packageOrderSchema, parfaitOrderSchema, quickOrderSchema} from "../../formComponents/formSchema"
import {QuickSurprisePackageForm} from "../../formComponents/quickSurprisePackageForm"
import {QuickCakeOrderForm} from "../../formComponents/quickCakeOrderForm"
import {CustomOrderObject, CustomChopsObject, CustomPackageObject} from "../../../types"
import {AuthContext} from "../../../context/authcontext/authContext";
import {userStore} from "../../../stores/userStore"
import {QuickOrderPageNav} from "../../navbar/quickOrder"


import "./customOrderPage.css"
import { CustomCakeOrderForm } from "../../formComponents/customCakeOders";
import { CustomSurprisePackageForm } from "../../formComponents/customSurprisePackageForm";
import { CustomChopOrdersForm } from "../../formComponents/customChopOrders";
import { OrderStores } from "../../../stores/orderStores";

interface CustomCakeFormikHelper extends FormikHelpers<CustomOrderObject> {}
interface CustomPackageFormikHelper extends FormikHelpers<CustomPackageObject> {}
interface CustomChopsFormikHelper extends FormikHelpers<CustomChopsObject> {}

export const CustomOrderPage = () => {
const {signOut} = userStore;
const {user} = useContext(AuthContext)
const {customCakeOrder, customPackageOrder, customChopsOrder} = OrderStores;
const name = user?.firstname || ""


const handleSignout = async() => {
    await signOut()
    document.location.href = '/'
}
    const submit: any = () => "submitted"



    const initialValues: CustomOrderObject = {
        orderName: "",
        description: "",
        productFlavour: "",
        type: "",
        designCovering: "",
        layers: "",
        deliveryDate: "",
        inches: "",
        file: ""
    }
    const packageInitialValues: CustomPackageObject = {
      orderName: "",
      item: [""],
      deliveryDate: "",
      addInfo: "",
    };
    const chopsInitialValues: CustomChopsObject = {
      orderName: "",
      chopType: "",
      numberOfPacks: "",
      deliveryDate: "",
      description: "",
    };

    const cakeOrder = async(values: CustomOrderObject, formikHelpers:CustomCakeFormikHelper) => {
      const accessToken = user.accessToken;
      const { ...customProductOrderDto } = values;
      console.log("customCake", customProductOrderDto);

      try {
        await customCakeOrder(accessToken, customProductOrderDto);
        formikHelpers.resetForm()
      } catch (error) {
        console.log(error)
      }
    }

    const packageOrder = async(values: CustomPackageObject, formikHelpers:CustomPackageFormikHelper) => {
      const accessToken = user.accessToken;
      const {...customPackageOrderDto} = values;
      console.log("package Order", customPackageOrderDto)

      try {
        await customPackageOrder(accessToken, customPackageOrderDto)
        formikHelpers.resetForm()
      } catch (error) {
        console.log(error)
      }
    }

    const chopsOrder = async(values: CustomChopsObject, formikHelpers: CustomChopsFormikHelper) => {
      const accessToken = user.accessToken;
      const {...customChopsOrderDto} = values;
      console.log(customChopsOrderDto)

      try{
        await customChopsOrder(accessToken, customChopsOrderDto);
        formikHelpers.resetForm()
      } catch (error) {
        console.log(error)
      }
    }
   
    
    return (
      <div>
        {/* {user.firstname ? ( */}
        <div className="quickOrderPage-container">
          <QuickOrderPageNav />
          <div className="quickOrderPage-body">
            <div className="quickOrder-header">
              <span>Make your Custom Orders {name}</span>
              <span>
                Cart <BsBasket2Fill />
              </span>
            </div>
            <div className="quickOrder-input">
              <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                  cakeOrder(values, formikHelpers)
                }}
                validationSchema={quickOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickCakeOrder-container">
                    <div>
                      <CustomCakeOrderForm 
                          {...formikProps}
                          toggleCakeOrder = {(values: CustomOrderObject) => {
                            cakeOrder(values, formikProps)
                          }}
                      />
                    </div>
                  </div>
                )}
              </Formik>
              <Formik
                initialValues={packageInitialValues}
                onSubmit={(values: CustomPackageObject, formikHelpers: CustomPackageFormikHelper) => {
                  packageOrder(values, formikHelpers)
                }}
                validationSchema={packageOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickCakeOrder-container">
                    <div>
                      <CustomSurprisePackageForm 
                          {...formikProps}
                          togglePackageOrder={(values: CustomPackageObject) => {
                            packageOrder(values, formikProps)
                          }}
                      />
                    </div>
                  </div>
                )}
              </Formik>
              <Formik
                initialValues={chopsInitialValues}
                onSubmit={(values: CustomChopsObject, formikHelpers: CustomChopsFormikHelper) => {
                  chopsOrder(values, formikHelpers)
                }}
                validationSchema={chopsOrderSchema}
              >
                {(formikProps) => (
                  <div className="quickCakeOrder-container">
                    <div>
                      <CustomChopOrdersForm 
                          {...formikProps}
                          toggleChopsOrder={(values: CustomChopsObject) =>{
                            chopsOrder(values, formikProps)
                          }}
                      />
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
        {/* // ) : (
            //     handleSignout()
            // )} */}
      </div>
    );
}