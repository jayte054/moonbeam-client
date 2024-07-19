import React from "react"
import {useField} from "formik"
import "./customTextArea.css"

interface CustomInputProps {
    label: string,
    input: string,
}
//: React.Fc
export const CustomTextArea = ({label, ...props}: any) => {
    const [field, meta] = useField(props)
    console.log(field, "firled")
    console.log(meta, "metad")
    return (
        <div className="customTextArea">
            <span className="label">
                <label>{label}</label>
            </span>
            <textarea {...field} {...props} 
                    className= {meta.touched && meta.error ? "input-error": ""}
                    />
            {meta.touched && meta.error && <div className="error">{meta.error} </div>}
        </div>
    )
}