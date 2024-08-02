import React, {useContext, useEffect, useState} from "react"
import {Form} from "formik"
import {CustomInput} from "./customInput"
import {CustomDate} from "./customDate"
import {CustomTextArea} from "./customTextArea"
import {CustomButton} from "./customButton"
import "./quickSurprisePackageForm.css"
import { SurprisePackageContext } from "../../context/orderContext/orderContext"
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

export const QuickSurprisePackageForm = () => {
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

    useEffect(() => {
        const getPackages = () => {
        setBronzePackage(packageMap.bronzePackage || []);
        setSilverPackage(packageMap.silverPackage || []);
        setGoldPackage(packageMap.goldPackage || []);
        setDiamondPackage(packageMap.diamondPackage || []);
        }
        console.log(goldPackage);
        getPackages()
    }, [packageMap, bronzePackage])

    const togglePackage = () => {
        setShowPackages((prev) => !prev);
    }

    const toggleBronzeForm = () => {
        setShowBronzeForm((prevShowForm) => !prevShowForm);
    }

    const toggleSilverForm= () => {
        setShowSilverForm((prev) => !prev);
    }

    const toggleGoldForm = () => {
        setShowGoldForm((prev) => !prev);
    }

    const toggleDiamondForm = () => {
        setShowDiamondForm((prev) => !prev);
    }

    const renderForm = () => (
          <Form>
            <CustomInput
              label="Order Name"
              name="packageOrderName"
              type="text"
              placeholder="Order Name"
            />
            <CustomDate
              label="Delivery Date"
              name="deliveryDate"
              type="date"
              placeholder="Delivery Date"
            />
            <CustomTextArea
              label="Additional Info"
              name="addInfo"
              type="text"
              placeholder="please include any other additional information like delivery address"
            />
            <button type="submit">Add to Cart</button>
          </Form>
        );
    

    return (
      <div className="quickSurprisePackage-container">
        <CustomButton
          type="button"
          label={!showPackages ? "Surprise Packages" : "Order Package"}
          onClick={togglePackage}
        />
        {showPackages ? (
          <>
            <CustomButton
              type="button"
              label="Bronze Package"
              onClick={toggleBronzeForm}
            />

            {showBronzeForm && (
              <>
                {bronzePackage ? (
                  <div key={bronzePackage.packageId}>
                    <img
                      src={bronzePackage.imageUrl}
                      alt={bronzePackage.description}
                    />
                    <h3>
                      {bronzePackage.description} ................ NGN
                      {bronzePackage.price}
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
            />
            {showSilverForm && (
              <>
                {silverPackage ? (
                  <div key={silverPackage?.packageId}>
                    <img
                      src={silverPackage?.imageUrl}
                      alt={silverPackage.description}
                    />
                    <h3>
                      {silverPackage.description} ................ NGN
                      {silverPackage.price}
                    </h3>
                  </div>
                ): (
                    <p>No Silver Package</p>
                )}
                {renderForm()}
              </>
            )}
            <CustomButton
              type="button"
              label="Gold Package"
              onClick={toggleGoldForm}
            />
            {showGoldForm && (
                <>
                {goldPackage ? (
                    <div key={goldPackage.packageId}>
                        <img src={goldPackage.imageUrl}
                             alt={goldPackage.description}
                        />
                        <h3>
                            {goldPackage.description} ................ NGN
                            {goldPackage.price}
                        </h3>
                    </div>
                ): (
                    <p>No Gold Package</p>
                )}
                {renderForm()}
                </>
            )}
            <CustomButton
              type="button"
              label="Diamond Package"
              onClick={toggleDiamondForm}
            />
            {showDiamondForm && (
                <>
                    {diamondPackage ? (
                        <div key={diamondPackage.packageId}>
                            <img src={diamondPackage.imageUrl}
                                 alt={diamondPackage.description}
                            />
                            <h3>
                                {diamondPackage.description} ................ NGN
                                {diamondPackage.price}
                            </h3>
                        </div>
                    ):(
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