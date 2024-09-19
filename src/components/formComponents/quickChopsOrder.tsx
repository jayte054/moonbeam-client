import React, {useContext, useState} from "react"
import {Form, FormikHelpers, FormikProps} from "formik"
import {CustomInput} from "./customInput"
import {CustomSelect} from "./customSelect"
import {CustomDate} from "./customDate"
import {CustomTextArea} from "./customTextArea"
import {CustomFile2} from "./customFile2"
import {CustomButton} from "./customButton"
import {AddToCartButton} from "./addToCartButton"
import "./quickChopsOrder.css"
import { CustomSelectChops } from "./customSelectChops"
import { chopsObject, setCartCountProps } from "../../types"
import { CartContext } from "../../context/cartContext/cartContext"

interface QuickChopsOrderFormProps extends FormikProps<chopsObject> {
  toggleChopOrder: (values: chopsObject, formikHelpers: any) => void;
  // toggleChopOrder: any;
}

export const QuickChopsOrderForm: React.FC<QuickChopsOrderFormProps> = (props) => {
    const chopsFormImage = <img src="/chopsform.png" alt="chops image" />
    const [showChopsForm, setShowChopsForm] = useState(false)
    const [showPastryForm, setShowPastryForm] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [selectImage, setSelectImage] = useState<string | null>(null)
    const {values, handleChange, handleSubmit,setFieldValue, touched, errors} = props
    const {setCartCount, cartCount}: setCartCountProps = useContext(CartContext)

    const preLoadedImages: { [key: string]: string } = {
      samosa: "/samosa.png",
      springroll: "/springroll.png",
      puff: "/puff.png",
      pepperedMeat: "/pepperedMeat.png",
      samosa_springroll: "/samosa_springroll.png",
      puff_pepperedMeat: "/puff_pepperedMeat.png",
      samosa_pepperedMeat: "/samosa_pepperedMeat.png",
      springroll_pepperedMeat: "/springroll_pepperedMeat.png",
   
    };

    const pastryPreLoadedImages: { [key: string]: string } = {
      meatPie: "/meatpie.png",
      donuts: "/donuts.png",
      cinamonRolls: "/cinamonRolls.png",
      corndogs: "/corndogs.png",
      waffels: "/waffels.png",
      pancakes: "/pancakes.png",
      meatPie_donuts: "/meatPie_donuts.png",
      pancakes_corndogs_waffels: "/pancakes_cordog_waffels.png",
    };

   
    const togglePage = () => {
      setShowCategory((prev) => !prev);
    };   

    const toggleChops =() => {
      setShowChopsForm((prev) => !prev)
    }

    const togglePastryForm = () => {
        setShowPastryForm((prevShowForm) => !prevShowForm)
    }

    
     const handlePackageChange = (
       event: React.ChangeEvent<HTMLSelectElement>
     ) => {
       const selectedPackage = event.target.value;
       const image = preLoadedImages[selectedPackage] || null;
       setSelectImage(image);
     };

     const handlePastryPackageChange = (
       event: React.ChangeEvent<HTMLSelectElement>
     ) => {
       const selectedPackage = event.target.value;
       const image = pastryPreLoadedImages[selectedPackage] || null;
       setSelectImage(image);
     };

     const handleChopsFormSubmit = async (formikHelpers: any) => {
       props.toggleChopOrder(values, formikHelpers); // Toggles the form 
       const newCount = Number(cartCount) + Number(values.numberOfPacks)
       setCartCount(newCount)
     };
     
    const renderChopsForm = () => (
      <Form onSubmit={handleSubmit}>
        <CustomInput
          label="Order Title"
          name="orderTitle"
          value={values.orderTitle}
          onChange={handleChange}
          type="text"
          placeholder="Order Name"
          error={touched.orderTitle && errors.orderTitle}
        />
        <CustomSelect
          label="Type"
          name="type"
          value={values.type}
          onChange={handleChange}
          type="text"
          placeholder="Chop Type"
          error={touched.type && errors.type}
        >
          <option value="">Chop Type</option>
          <option value="Chops_Pastries">Chops / Pastries</option>
        </CustomSelect>

        <CustomSelectChops
          label="Chops Package"
          name="chopPackageType"
          value={values.chopPackageType}
          type="text"
          placeholder="Package Type"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handlePackageChange(e)
          }
          error={touched.chopPackageType && errors.chopPackageType}
        >
          <option value="">Chop/pastry Package</option>
          <option value="samosa">Samosa</option>
          <option value="springroll">Springroll</option>
          <option value="puff">Puff</option>
          <option value="pepperedMeat">Peppered Meat</option>
          <option value="samosa_springroll">Samosa & Spingroll</option>
          <option value="puff_pepperedMeat">Puff & PepperedMeat</option>
          <option value="samosa_pepperedMeat">Samosa & PepperedMeat</option>
          <option value="springroll_pepperedMeat">
            Springroll &PepperedMeat
          </option>
        </CustomSelectChops>
         <CustomSelect
          label="Covering"
          name="covering"
          value={values.covering}
          onChange={handleChange}
          type="text"
          placeholder="Chops Covering"
          error={touched.covering && errors.covering}
        >
          <option value="">Chops Covering</option>
          <option value="true">True</option>
          <option value="false">False</option>
          </CustomSelect>
        <CustomSelect
          label="Number Of Packs"
          name="numberOfPacks"
          value={values.numberOfPacks}
          onChange={handleChange}
          type="text"
          placeholder="no of Packs"
          error={touched.numberOfPacks && errors.numberOfPacks}
        >
          <option value="">Number Of Packs</option>
          <option value="1">1</option>
          <option value="2">2 </option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="other">other</option>
        </CustomSelect>
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
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          type="text"
          placeholder="please describe or add any other information we would need like decor title"
          error={touched.description && errors.description}
        />
        <CustomFile2
          label="File"
          name="file"
          type="file"
          preloadedfile={selectImage}
          error={touched.file && errors.file}
        />
        <AddToCartButton 
            type="submit" 
            label="Add To Cart" 
            onClick={handleChopsFormSubmit}
        />
      </Form>
    );

    const renderPastryForm = () => (
      <Form>
        <CustomInput
          label="Order Title"
          name="orderTitle"
          value={values.orderTitle}
          onChange={handleChange}
          type="text"
          placeholder="Order Name"
          error={touched.orderTitle && errors.orderTitle}
        />
        <CustomSelect
          label="Type"
          name="type"
          value={values.type}
          onChange={handleChange}
          type="text"
          placeholder="Chop Type"
          error={touched.type && errors.type}
        >
          <option value="">Chop Type</option>
          <option value="Chops_Pastries">Chops / Pastries</option>
        </CustomSelect>

        <CustomSelectChops
          label="Pastry Package"
          name="pastryPackageType"
          value={values.pastryPackageType}
          type="text"
          placeholder="Pastry Package"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handlePastryPackageChange(e)
          }
          error={touched.pastryPackageType && errors.pastryPackageType}
        >
          <option value="">Pastry Package</option>
          <option value="meatPie">MeatPie</option>
          <option value="donuts">donuts</option>
          <option value="cinamonRolls">Cinamon Rolls</option>
          <option value="pancakes">Pancakes</option>
          <option value="corndogs">Corndogs</option>
          <option value="waffels">Waffels</option>
          <option value="meatPie_donuts">MeatPie & Donuts</option>
          <option value="pancakes_corndogs_waffels">
            Pancake, corndogs & waffels
          </option>
        </CustomSelectChops>
        <CustomSelect
          label="Covering"
          name="covering"
          value={values.covering}
          onChange={handleChange}
          type="text"
          placeholder="Pastry Covering"
          error={touched.covering && errors.covering}
        >
          <option value="">Pastry Covering</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </CustomSelect>
        <CustomSelect
          label="Number Of Packs"
          name="numberOfPacks"
          value={values.numberOfPacks}
          onChange={handleChange}
          type="text"
          placeholder="no of Packs"
          error={touched.numberOfPacks && errors.numberOfPacks}
        >
          <option value="">Number Of Packs</option>
          <option value="1">1</option>
          <option value="2">2 </option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="other">other</option>
        </CustomSelect>
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
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          type="text"
          placeholder="please describe or add any other information we would need like decor title"
          error={touched.description && errors.description}
        />
        <CustomFile2
          label="File"
          name="file"
          type="file"
          preloadedfile={selectImage}
          error={touched.file && errors.file}
        />
        <AddToCartButton
          type="submit"
          label="Add To Cart"
          onClick={handleChopsFormSubmit}
        />
      </Form>
    );


    return (
      <div className="quickOrderChops-container">
        <CustomButton
          type="button"
          label={!showCategory ? "Chops / Pastries" : "chops/pastries category"}
          onClick={togglePage}
        />
        {showCategory ? (
          <>
            <CustomButton
              type="button"
              label="Chops"
              onClick={toggleChops}
              disabled={showPastryForm}
            />
            {showChopsForm && (
              renderChopsForm()
            )}
            <CustomButton
              type="button"
              label="Pastry"
              onClick={togglePastryForm}
              disabled={showChopsForm}
            />
            {showPastryForm && (
              renderPastryForm()
            )}
          </>
        ) : (
          <span>{chopsFormImage}</span>
        )}
      </div>
    );
}