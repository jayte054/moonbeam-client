import React, {useContext, useEffect, useState} from "react"
import {ErrorMessage, Form, FormikProps} from "formik"
import {CustomInput} from "./customInput"
import {CustomDate} from "./customDate"
import {CustomTextArea} from "./customTextArea"
import {CustomButton} from "./customButton"
import {AddToCartButton} from "./addToCartButton"
import "./quickSurprisePackageForm.css"
import { SurprisePackageContext } from "../../context/orderContext/orderContext"
import { packageObject, setCartCountProps } from "../../types"
import { CartContext } from "../../context/cartContext/cartContext"

interface bronzePackage {
  packageId: string;  
  packageName: string  
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  description: string;
  imageUrl: string;
  price: string;

}
interface _package {
    bronzePackage: bronzePackage[],
    silverPackage: any,
    goldPackage: any,
    diamondPackage: any,
}

interface QuickSurprisePackageFormProps extends FormikProps<packageObject> {
  toggleBronzeOrder: () => void;
  toggleSilverOrder: () => void;
  toggleGoldOrder: () => void;
  toggleDiamondOrder: () => void;
}

export const QuickSurprisePackageForm: React.FC<QuickSurprisePackageFormProps> = (props) => {
    const surpriseFormImage = <img src="/surpriseForm.png" alt="surprise-package" />
    const [showPackages, setShowPackages] = useState(false)
    const [showBronzeForm, setShowBronzeForm] = useState(false)
    const [showSilverForm, setShowSilverForm] = useState(false);
    const [showGoldForm, setShowGoldForm] = useState(false);
    const [showDiamondForm, setShowDiamondForm] = useState(false);
    // const [packages, setPackages] = useState<_package[]>([])
    const [bronzePackage, setBronzePackage] = useState<bronzePackage | null>(null);
    const [silverPackage, setSilverPackage] = useState<bronzePackage | null>(null)
    const [goldPackage, setGoldPackage] = useState<bronzePackage | null>(null);
    const [diamondPackage, setDiamondPackage] = useState<bronzePackage | null>(null);
    const {packageMap} = useContext<any>(SurprisePackageContext)
    const {values, handleChange, touched, errors} = props;
    const {cartCount, setCartCount}: setCartCountProps = useContext(CartContext)

    useEffect(() => {
        const getPackages = () => {
        setBronzePackage(() => packageMap.bronzePackage || []);
        setSilverPackage(() => packageMap.silverPackage || []);
        setGoldPackage(() => packageMap.goldPackage || []);
        setDiamondPackage(() => packageMap.diamondPackage || []);
        }
        console.log(goldPackage);
        getPackages()
    }, [packageMap, bronzePackage, silverPackage, goldPackage, diamondPackage])

    const togglePackage = () => {
        setShowPackages((prev) => !prev);
    }

    const toggleBronzeForm = () => {
        setShowBronzeForm((prevShowForm) => !prevShowForm);
        props.toggleBronzeOrder()
        
    }

    const toggleSilverForm= () => {
        setShowSilverForm((prev) => !prev);
        props.toggleSilverOrder()
        
    }

    const toggleGoldForm = () => {
        setShowGoldForm((prev) => !prev);
        props.toggleGoldOrder()
        
    }

    const toggleDiamondForm = () => {
        setShowDiamondForm((prev) => !prev);
        props.toggleDiamondOrder()
        
    }

    const renderForm = () => (
          <Form>
            <CustomInput
              label="Order Name"
              name="packageOrderName"
              value={values.packageOrderName}
              onChange={handleChange}
              type="text"
              placeholder="Order Name"
              error={touched.packageOrderName && errors.packageOrderName}
            />
            <CustomDate
              label="Delivery Date"
              name="deliveryDate"
              value={values.deliveryDate}
              onChange={handleChange}
              type="date"
              placeholder="Delivery Date"
              error={touched.deliveryDate && errors.deliveryDate}
            />
            <CustomTextArea
              label="Additional Info"
              name="addInfo"
              value={values.addInfo}
              onChange={handleChange}
              type="text"
              placeholder="please include any other additional information like delivery address"
              error={touched.addInfo && errors.addInfo}
            />
             <AddToCartButton 
                            type="submit"
                            label="Add To Cart"
                            onClick={() => {
                              const newCount = Number(cartCount) + 1;
                              setCartCount(newCount);
                            }}
                          />  
          </Form>
        );
    

    return (
      <div className="quickSurprisePackage-container">
        <CustomButton
          type="button"
          label={!showPackages ? "Packages" : "Package Category"}
          onClick={togglePackage}
        />
        {showPackages ? (
          <>
            <CustomButton
              type="button"
              label="Bronze Package"
              onClick={toggleBronzeForm}
              disabled={showSilverForm || showGoldForm || showDiamondForm}
            />

            {showBronzeForm && (
              <>
                {bronzePackage ? (
                  <div key={bronzePackage.packageId} className="bronzePackage">
                    <img
                      src={bronzePackage.imageUrl}
                      alt={bronzePackage.description}
                    />
                    <h3>
                      {bronzePackage.description} ................
                      <span> ₦{bronzePackage.price} </span>
                    </h3>
                  </div>
                ) : (
                  <p>No Bronze package</p>
                )}
                {renderForm()}
              </>
            )}
            <CustomButton
              type="button"
              label="Silver Package"
              onClick={toggleSilverForm}
              disabled={showBronzeForm || showGoldForm || showDiamondForm}
            />
            {showSilverForm && (
              <>
                {silverPackage ? (
                  <div key={silverPackage?.packageId} className="silverPackage">
                    <img
                      src={silverPackage?.imageUrl}
                      alt={silverPackage.description}
                    />
                    <h3>
                      {silverPackage.description} ................
                      <span> ₦{silverPackage.price} </span>
                    </h3>
                  </div>
                ) : (
                  <p>No Silver Package</p>
                )}
                {renderForm()}
              </>
            )}
            <CustomButton
              type="button"
              label="Gold Package"
              onClick={toggleGoldForm}
              disabled={showBronzeForm || showSilverForm || showDiamondForm}
            />
            {showGoldForm && (
              <>
                {goldPackage ? (
                  <div key={goldPackage.packageId} className="goldPackage">
                    <img
                      src={goldPackage.imageUrl}
                      alt={goldPackage.description}
                    />
                    <h3>
                      {goldPackage.description} ................
                      <span> ₦{goldPackage.price} </span>
                    </h3>
                  </div>
                ) : (
                  <p>No Gold Package</p>
                )}
                {renderForm()}
              </>
            )}
            <CustomButton
              type="button"
              label="Diamond Package"
              onClick={toggleDiamondForm}
              disabled={showSilverForm || showGoldForm || showBronzeForm}
            />
            {showDiamondForm && (
              <>
                {diamondPackage ? (
                  <div
                    key={diamondPackage.packageId}
                    className="diamondPackage"
                  >
                    <img
                      src={diamondPackage.imageUrl}
                      alt={diamondPackage.description}
                    />
                    <h3>
                      {diamondPackage.description} ................
                      <span> ₦{diamondPackage.price} </span>
                    </h3>
                  </div>
                ) : (
                  <p>No Diamond Package</p>
                )}
                {renderForm()}
              </>
            )}
          </>
        ) : (
          <span>{surpriseFormImage}</span>
        )}
      </div>
    );
}