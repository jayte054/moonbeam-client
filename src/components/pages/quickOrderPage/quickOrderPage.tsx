import {Formik, Form} from "formik"
import { BsBasket2Fill } from "react-icons/bs";

import {QuickOrderPageNav} from "../../navbar/quickOrder"
import {Footer} from "../../footer/footer"
import {chopsOrderSchema, foilOrderSchema, packageOrderSchema, parfaitOrderSchema, quickOrderSchema} from "../../formComponents/formSchema"
import {QuickCakeOrderForm} from "../../formComponents/quickCakeOrderForm"
import {QuickSurprisePackageForm} from "../../formComponents/quickSurprisePackageForm"
import {QuickChopsOrderForm} from "../../formComponents/quickChopsOrder"
import {chopsObject, foilObject, OrderObject, packageObject, parfaitObject} from "../../../types"

import "./quickOrderPage.css"
import { CustomSelect } from "../../formComponents/customSelect";
import { CustomButton } from "../../formComponents/customButton";
import { FoilCakeForm } from "../../formComponents/foilCakeForm";
import { CakeParfaitForm } from "../../formComponents/cakeParfaitForm";
import { useContext, useEffect, useState } from "react";
import { CakeVariantRatesContext } from "../../../context/orderContext/orderContext";



export const QuickOrderPage = () => {
    const [foilCakePrice, setFoilCakePrice] = useState<string>('');
    const [cakeParfaitPrice, setCakeParfaitPrice] = useState<string>("");
    const {foilCake, cakeParfait} = useContext(CakeVariantRatesContext);

    useEffect(() => {
        const getRates = () => {
            setFoilCakePrice(foilCake)
            setCakeParfaitPrice(cakeParfait)
        }
        getRates()
    }, [foilCake, cakeParfait, foilCakePrice, cakeParfaitPrice])

    const initialValues: OrderObject = {
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
      designCovering: "",
      numberOfPacks: "",
      deliveryDate: "",
      description: "",
      file: "",
    };
    const foilInitialValues: foilObject = {
      orderName: "",
      quantity: "",
      description: "",
      productFlavour: "",
    };
    const parfaitInitialValues: parfaitObject = {
      orderName: "",
      quantity: "",
      description: "",
    };
  

    const submit: any = () => "submitted"

    return (
      <div className="quickOrderPage-container">
        <QuickOrderPageNav />
        <div className="quickOrderPage-body">
          <div className="quickOrder-header">
            <span>Quick Order</span>
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
                    <QuickCakeOrderForm />
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
                    <QuickSurprisePackageForm />
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
                    <QuickChopsOrderForm />
                  </div>
                </div>
              )}
            </Formik>
          </div>
          <div className="quickOrder-variants">
            <div className="quickOrder-foilCakes">
              <Formik
                initialValues={foilInitialValues}
                onSubmit={submit}
                validationSchema={foilOrderSchema}
              >
                {(props) => (
                  <div className="quickOrder-foilCakes">
                    <FoilCakeForm />
                  </div>
                )}
              </Formik>

              <div>
                <span>Price: ₦{foilCakePrice}</span>
              </div>
            </div>
            <div className="quickOrder-cakeParfait">
              <Formik
                initialValues={parfaitInitialValues}
                onSubmit={submit}
                validationSchema={parfaitOrderSchema}
              >
                {(props) => (
                  <div className="quickOrder-foilCakes">
                    <CakeParfaitForm />
                  </div>
                )}
              </Formik>

              <div>
                <span>Price: ₦{cakeParfaitPrice}</span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
}