import React from "react";
import {useField} from "formik";
import "./customSelect.css"

export const CustomSelect = ({label, ...props}: any) => {
        const [field, meta] = useField(props)
        console.log(field, "firled")
        console.log(meta, "metad")
    return (
        <div className="customSelect">
            <span className="label">
                <label>{label}</label>
            </span>  
            <select {...field} {...props}
                className= {meta.touched && meta.error ? "input-error": ""}
            /> 
            {meta.touched && meta.error && <div className="error">{meta.error} </div>}
        </div>
    )
}