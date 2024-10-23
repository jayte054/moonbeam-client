import React from "react"
import {useField} from "formik"
import "./customInput.css"

interface CustomInputProps {
    label: string,
    name: string,
    value?: string | number,
    onChange: (e: any) => void,
    type: string,
    placeholder?: string,
    error?: any
}
//: React.Fc
export const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField<any>(props);

  return (
    <div className="customInput">
      <span className="label">
        <label>{label}</label>
      </span>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error} </div>}
    </div>
  );
};