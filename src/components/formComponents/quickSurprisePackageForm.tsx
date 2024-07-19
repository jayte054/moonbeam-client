import React, {useState} from "react"
import {Form} from "formik"
import {CustomInput} from "./customInput"
import {CustomSelect} from "./customSelect"
import {CustomDate} from "./customDate"
import {CustomTextArea} from "./customTextArea"
import {CustomFile} from "./customFile"
import {CustomButton} from "./customButton"
import "./quickSurprisePackageForm.css"


export const QuickSurprisePackageForm = () => {
    const surpriseFormImage = <img src="/surpriseForm.png" alt="surprise-package" />
    const [showForm, setShowForm] = useState(false)
    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm)
    }

    return(
        <div className="quickSurprisePackage-container">
            <CustomButton type="button"
                          label= {!showForm ? "Suprise Packages" : "Order Package"}
                          onClick= {toggleForm}
            />
            {showForm ? (
                <Form>
                          <CustomInput 
                             label= "Order Name"
                             name= "orderName"
                             type= "text"
                             placeholder= "Order Name"
                          />   
                          <CustomSelect
                            label= "Flavour"
                            name= "productFlavour"
                            type="text"
                            placeholder="Cake Flavour"
                            > 
                                <option value="">Cake Flavour</option>
                                <option value="chocolateCake">Chocolate Cake</option>
                                <option value="strawberryCake">Strawberry Cake</option>
                                <option value="vanillaCake">Vanilla Cake</option>
                                <option value="redvelvetCake">Red Velvet Cake</option>
                                <option value="carrotCake">Carrot Cake</option>
                                <option value="cheeseCake">Cheese Cake</option>
                                <option value="bananaCake">Banana Cake</option>
                                <option value="appleCake">Apple Cake</option>
                                <option value="lemonCake">Lemon Cake</option>
                                <option value="coffeeCake">Coffee Cake</option>
                                <option value="coconutCake">Coconut Cake</option>
                                <option value="blueberryCake">Blueberry Cake</option>
                          </CustomSelect> 
                           <CustomSelect
                            label= "Type"
                            name= "type"
                            type="text"
                            placeholder="Cake Type"
                            > 
                                <option value="">Cake Type</option>
                                <option value="Traditional">Traditional</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                          </CustomSelect> 
                          <CustomSelect
                            label= "Covering"
                            name= "designCovering"
                            type="text"
                            placeholder="Cake Covering"
                            > 
                                <option value="">Cake Covering</option>
                                <option value="naked">Naked</option>
                                <option value="butterCream">Butter Cream</option>
                                <option value="fundant">Fundant</option>
                          </CustomSelect> 
                          <CustomSelect
                            label= "Layers"
                            name= "layers"
                            type="text"
                            placeholder="Cake Layers"
                            > 
                                <option value="">Cake Layers</option>
                                <option value="1">1</option>
                                <option value="2">2 </option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                          </CustomSelect>
                          <CustomDate
                            label= "Delivery Date"
                            name= "deliveryDate"
                            type="date"
                            placeholder="Delivery Date"
                            /> 
                             <CustomSelect
                            label= "Inches"
                            name= "inches"
                            type="text"
                            placeholder="Cake Inches"
                            > 
                                <option value="">Cake Inches</option>
                                <option value="6">6</option>
                                <option value="8">8 </option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                                <option value="14">14</option>
                                <option value="16">16</option>
                                <option value="18">18</option>
                                <option value="20">20</option>
                          </CustomSelect>
                          <CustomTextArea 
                            label="Description"
                            name="description"
                            type="text"
                            placeholder="please describe or add any other information we would need like decor title"
                          />   
                          <CustomFile 
                            label="File"
                            name="file"
                            type="file"
                            
                          />
                          <button type="submit">Add to Cart</button>
                </Form>    
            ) : (
            <span>
                {surpriseFormImage}
            </span>
            )}

        </div>
    )
}