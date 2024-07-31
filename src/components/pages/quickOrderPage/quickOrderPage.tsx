import {Formik, Form} from "formik"
import { BsBasket2Fill } from "react-icons/bs";

import {QuickOrderPageNav} from "../../navbar/quickOrder"
import {Footer} from "../../footer/footer"
import {quickOrderSchema} from "../../formComponents/formSchema"
import {QuickCakeOrderForm} from "../../formComponents/quickCakeOrderForm"
import {QuickSurprisePackageForm} from "../../formComponents/quickSurprisePackageForm"
import {QuickChopsOrderForm} from "../../formComponents/quickChopsOrder"
import {OrderObject} from "../../../types"

import "./quickOrderPage.css"



export const QuickOrderPage = () => {
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
  

    const submit: any = () => "submitted"

    return(
        <div className="quickOrderPage-container">
         <QuickOrderPageNav />
         <div className="quickOrderPage-body">
            <div className="quickOrder-header">
                <span>Quick Order</span>
                <span>Cart <BsBasket2Fill /></span>
            </div>
            <div className="quickOrder-input">
                <Formik initialValues = {initialValues} 
                            onSubmit = {submit}
                            validationSchema={quickOrderSchema}>
                    {(props) => (
                        <div className="quickCakeOrder-container">
                            <div>
                                <QuickCakeOrderForm />
                            </div>
                            <div>
                                <QuickSurprisePackageForm />
                            </div>
                            <div>
                                <QuickChopsOrderForm />
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