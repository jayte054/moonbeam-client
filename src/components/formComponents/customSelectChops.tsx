// import React, {useState} from "react";
// import {useField, useFormikContext} from "formik";
// import "./customSelect.css"

// export const CustomSelectChops = ({label, ...props}: any) => {
//         const [field, meta] = useField(props)
//         const {setFieldValue} = useFormikContext()
//         const [selectedValue, setSelectedVaue] = useState(field.value || "")
//         const [customValue, setCustomValue] = useState("")
//         console.log(field, "firled")
//         console.log(meta, "metad")

//         const handleSelectedValue = (e: any) => {
//         e.preventDefault()
//         const {value} = e.target
//         setSelectedVaue(value)
//         if(value !== "other") {
//             setFieldValue(props.name, value)
//             setCustomValue("")
//         } else {
//             setFieldValue(props.name, "")
//         }
//         }

//         const handleCustomValue = (e: any) => {
//             e.preventDefault()
//             const {value} = e.target
//             setCustomValue(value);
//             setFieldValue(props.name, value)

//         }
//     return (
//         <div className="customSelect">
//             <span className="label">
//                 <label>{label}</label>
//             </span>  
//             <select {...field} 
//                     {...props}
//                     value={selectedValue}
//                     onChange={handleSelectedValue}
//                     className= {meta.touched && meta.error ? "input-error": ""}
//             >
//                 {props.children}
//             </select> 
//              {selectedValue === "other" && (
//                 <input
//                     type="text"
//                     placeholder={props.placeholder}
//                     value={customValue}
//                     onChange={handleCustomValue}
//                     className="custom-input"
//                 />
//                                 )}
//             {meta.touched && meta.error && <div className="error">{meta.error} </div>}
//         </div>
//     )
// }


import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import "./customSelect.css";

interface CustomSelectChopsProps {
  label: string;
  name: string;
  type?: string;
  value: any;
  error: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export const CustomSelectChops: React.FC<CustomSelectChopsProps> = ({
  label,
  onChange,
  value,
  error,
  ...props
}) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [selectedValue, setSelectedValue] = useState(field.value || "");
  const [customValue, setCustomValue] = useState("");

  const handleSelectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSelectedValue(value);
    if (value !== "other") {
      setFieldValue(props.name, value);
      setCustomValue("");
    } else {
      setFieldValue(props.name, "");
    }

    // Call the handlePackageChange function if provided
    if (onChange) {
      onChange(e);
    }
  };

  const handleCustomValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setCustomValue(value);
    setFieldValue(props.name, value);
  };

  return (
    <div className="customSelect">
      <span className="label">
        <label>{label}</label>
      </span>
      <select
        {...field}
        {...props}
        value={selectedValue}
        onChange={handleSelectedValue}
        className={meta.touched && meta.error ? "input-error" : ""}
      >
        {props.children}
      </select>
      {selectedValue === "other" && (
        <input
          type="text"
          placeholder={props.placeholder}
          value={customValue}
          onChange={handleCustomValue}
          className="custom-input"
        />
      )}
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};


