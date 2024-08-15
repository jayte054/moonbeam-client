import React from "react"
// import {useField} from "formik"
import "./addToCartButton.css"

export const AddToCartButton: React.FC<any> = ({onClick, label, ...props}) => {
    // const [field, meta ] = useField<any>(props);
    
    return (
        <div className="addToCartButton">
            <button onClick={onClick} {...props}>{label}</button>
        </div>
      )
}