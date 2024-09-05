import React from "react"
import {useField} from "formik";
import "./customFile.css"

export const CustomFile: React.FC<any> = ({label, ...props}) => {
const [field, meta, helpers] = useField(props)

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    helpers.setValue(file); // Use Formik helper to set the file value
  };

    return (
      <div className="customFile">
        <span className="label">
          <label>{label}</label>
        </span>
        <input
          {...props}
          name={field.name}
          type="file"
          onChange={handleFileChange}
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
}
