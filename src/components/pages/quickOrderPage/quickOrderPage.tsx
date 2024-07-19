import {Formik, Form} from "formik"

import {QuickOrderPageNav} from "../../navbar/quickOrder"
import {Footer} from "../../footer/footer"
import {quickOrderSchema} from "../../formComponents/formSchema"
import {QuickCakeOrderForm} from "../../formComponents/quickCakeOrderForm"
import {OrderObject} from "../../../types"

import "./quickOrderPage.css"



export const QuickOrderPage = () => {
    const initialValues: OrderObject = {
        orderName: "",
        description: "",
        productFlavour: "",
        designCovering: "",
        layers: "",
        deliveryDate: "",
        inches: "",
        file: ""
    }
  

    const submit: any = () => "submitted"

    return(
        <div className="quickOrderPage-container">
         <QuickOrderPageNav />
         <div className="quickOrderPage-body">
            <h1>Quick Order</h1>
            <div className="quickOrder-input">
                <Formik initialValues = {initialValues} 
                            onSubmit = {submit}
                            validationSchema={quickOrderSchema}>
                    {(props) => (
                        <div className="quickOrder-container">
                            <div>
                                <QuickCakeOrderForm />
                            </div>
                            <div>
                                <QuickCakeOrderForm />
                            </div>
                            <div>
                                <QuickCakeOrderForm />
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
            <div className="quickOrder-image">

            </div>
         </div>

        <Footer />
        </div>
    )
}