import React from "react"
// import {useField} from "formik"
import "./customButton2.css"

export const CustomButton2: React.FC<any> = ({onClick, label, ...props}) => {
    // const [field, meta ] = useField<any>(props);
    
    return (
        <div className="customButton2">
            <button onClick={onClick} {...props}>{label}</button>
        </div>
      )
}