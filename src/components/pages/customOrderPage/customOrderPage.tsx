import React, {useContext} from "react";
import { BsBasket2Fill } from "react-icons/bs";
import {Formik, Form} from "formik"
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

export const CustomOrderPage = () => {
const {signOut} = userStore;
const {user} = useContext(AuthContext)
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
      packageOrderName: "",
      deliveryDate: "",
      addInfo: "",
    };
    const chopsInitialValues: CustomChopsObject = {
      orderTitle: "",
      type: "",
      chopPackageType: "",
      pastryPackageType: "",
      designCovering: "",
      numberOfPacks: "",
      deliveryDate: "",
      description: "",
      file: "",
    };
   
    
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
                onSubmit={submit}
                validationSchema={quickOrderSchema}
              >
                {(props) => (
                  <div className="quickCakeOrder-container">
                    <div>
                      <CustomCakeOrderForm />
                    </div>
                  </div>
                )}
              </Formik>
              <Formik
                initialValues={packageInitialValues}
                onSubmit={submit}
                validationSchema={packageOrderSchema}
              >
                {(props) => (
                  <div className="quickCakeOrder-container">
                    <div>
                      <CustomSurprisePackageForm />
                    </div>
                  </div>
                )}
              </Formik>
              <Formik
                initialValues={chopsInitialValues}
                onSubmit={submit}
                validationSchema={chopsOrderSchema}
              >
                {(props) => (
                  <div className="quickCakeOrder-container">
                    <div>
                      <CustomChopOrdersForm />
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