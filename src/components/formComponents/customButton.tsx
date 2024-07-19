import React from "react"
// import {useField} from "formik"
import "./customButton.css"

export const CustomButton: React.FC<any> = ({onClick, label, ...props}) => {
    // const [field, meta ] = useField<any>(props);
    
    return (
        <div className="customButton">
            <button onClick={onClick} {...props}>{label}</button>
        </div>
      )
}