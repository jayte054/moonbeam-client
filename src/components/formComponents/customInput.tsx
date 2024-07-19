import React from "react"
import {useField} from "formik"
import "./customInput.css"

interface CustomInputProps {
    label: string,
}
//: React.Fc
export const CustomInput: React.FC<any> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    console.log(field, "firled")
    console.log(meta, "metad")
    return (
        <div className="customInput">
            <span className="label">
                <label>{label}</label>
            </span>
            <input {...field} {...props} 
                className= {meta.touched && meta.error ? "input-error": ""}
                    />
            {meta.touched && meta.error && <div className="error">{meta.error} </div>}
        </div>
    )
}