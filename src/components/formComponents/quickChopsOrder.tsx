import React, {useState} from "react"
import {Form} from "formik"
import {CustomInput} from "./customInput"
import {CustomSelect} from "./customSelect"
import {CustomDate} from "./customDate"
import {CustomTextArea} from "./customTextArea"
import {CustomFile} from "./customFile"
import {CustomButton} from "./customButton"
import "./quickChopsOrder.css"

export const QuickChopsOrderForm = () => {
    const chopsFormImage = <img src="/chopsform.png" alt="chops image" />
    const [showChopsForm, setShowChopsForm] = useState(false)
    const [showPastryForm, setShowPastryForm] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    

    const toggleChopsForm = () => {
        setShowChopsForm((prevShowForm) => !prevShowForm)
    }

    const togglePastryForm = () => {
        setShowPastryForm((prevShowForm) => !prevShowForm)
    }

    const togglePage = () => {
        setShowCategory((prev) => !prev)
    }

    

    return(
        <div className="quickOrderChops-container">
            <CustomButton type="button"
                          label={!showCategory ? "Chops / Pastries": "Order chops/pastries"}
                          onClick={togglePage}
            />
            {showCategory ? (
                <>
                <CustomButton type="button"
                          label="Chops"
                          onClick={toggleChopsForm}
                />
                {showChopsForm && (
                <Form>
                    <CustomInput 
                             label= "Order Name"
                             name= "orderTitle"
                             type= "text"
                             placeholder= "Order Name"
                          />   
                          <CustomSelect
                            label= "Type"
                            name= "type"
                            type="text"
                            placeholder="Chop Type"
                            > 
                                <option value="">Chop Type</option>
                                <option value="Chops_Pastries">Chops / Pastries</option>
                          </CustomSelect> 
                         
                          <CustomSelect
                            label= "Chops Package"
                            name= "chopPackageType"
                            type="text"
                            placeholder="Package Type"
                            > 
                                <option value="">Chop/pastry Package</option>
                                <option value="samosa">Samosa</option>
                                <option value="springroll">Springroll</option>
                                <option value="puff">Puff</option>
                                <option value="pepperedMeat">Peppered Meat</option>
                                <option value="samosa_spingroll">Samosa & Spingroll</option>
                                <option value="puff_pepperedMeat">Puff & PepperedMeat</option>
                                <option value="samosa_pepperedMeat">Samosa & PepperedMeat</option>
                                <option value="springroll_pepperedMeat">Springroll &PepperedMeat</option>
                                
                          </CustomSelect>
                          
                          <CustomSelect
                            label= "Number Of Packs"
                            name= "numberOfPacks"
                            type="text"
                            placeholder="no of Packs"
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
                            label= "Delivery Date"
                            name= "deliveryDate"
                            type="date"
                            placeholder="Delivery Date"
                            /> 
                             
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
                </Form>)}
                <CustomButton type="button"
                          label="Pastry"
                          onClick={togglePastryForm}
                />
                {showPastryForm && (
                <Form>
                    <CustomInput 
                             label= "Order Name"
                             name= "orderTitle"
                             type= "text"
                             placeholder= "Order Name"
                          />   
                          <CustomSelect
                            label= "Type"
                            name= "type"
                            type="text"
                            placeholder="Chop Type"
                            > 
                                <option value="">Chop Type</option>
                                <option value="Chops_Pastries">Chops / Pastries</option>
                          </CustomSelect> 
                        
                          <CustomSelect
                            label= "Pastry Package"
                            name= "pastryPackageType"
                            type="text"
                            placeholder="Pastry Package"
                            > 
                                <option value="">Pastry Package</option>
                                <option value="meatPie">MeatPie</option>
                                <option value="donuts">donuts</option>
                                <option value="cinamonRolls">Cinamon Rolls</option>
                                <option value="pancakes">Pancakes</option>
                                <option value="corndogs">Corndogs</option>
                                <option value="waffels">Waffels</option>
                                <option value="meatPie_donuts">MeatPie & Donuts</option>
                                <option value="pancakes_corndogs_waffels">Pancake, corndogs & waffels</option>
                          </CustomSelect> 
                          <CustomSelect
                            label= "Covering"
                            name= "designCovering"
                            type="text"
                            placeholder="Pastry Covering"
                            > 
                                <option value="">Pastry Covering</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                          </CustomSelect> 
                          <CustomSelect
                            label= "Number Of Packs"
                            name= "numberOfPacks"
                            type="text"
                            placeholder="no of Packs"
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
                            label= "Delivery Date"
                            name= "deliveryDate"
                            type="date"
                            placeholder="Delivery Date"
                            /> 
                             
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
                </Form>)}
                </>
            ):(
                <span>
                    {chopsFormImage}
                </span>
            )}
        </div>
    )
}