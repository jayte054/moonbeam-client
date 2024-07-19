import React from "react"
import {useField} from "formik"
import "./customDate.css"

interface CustomInputProps {
    label: string,
    input: string,
}
//: React.Fc
export const CustomDate = ({label, ...props}: any) => {
    const [field, meta] = useField(props)
    console.log(field, "firled")
    console.log(meta, "metad")
    return (
        <div className="customDate">
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