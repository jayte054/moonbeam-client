import React, {useEffect, useState} from "react";
import {useField, useFormikContext} from "formik";
import "./customSelect.css"

export const CustomSelect = ({label, fetchCities, ...props}: any) => {
        const [field, meta] = useField(props)
        const {setFieldValue} = useFormikContext()
        const [selectedValue, setSelectedVaue] = useState(field.value || "")
        const [customValue, setCustomValue] = useState("")
       

        const handleSelectedValue = (e: any) => {
        e.preventDefault()
        const {value} = e.target
        setSelectedVaue(value)
        if(value !== "other") {
            setFieldValue(props.name, value)
            setCustomValue("")
        } else {
            setFieldValue(props.name, "")
        }
        }

        const handleCustomValue = (e: any) => {
            e.preventDefault()
            const {value} = e.target
            setCustomValue(value);
            setFieldValue(props.name, value)

        }

         useEffect(() => {
           if (selectedValue && selectedValue !== "other") {
             fetchCities(selectedValue);
           }
         }, [selectedValue]);
         
    return (
        <div className="customSelect">
            <span className="label">
                <label>{label}</label>
            </span>  
            <select {...field} 
                    {...props}
                    value={selectedValue}
                    onChange={handleSelectedValue}
                    className= {meta.touched && meta.error ? "input-error": ""}
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
            {meta.touched && meta.error && <div className="error">{meta.error} </div>}
        </div>
    )
}



// export const CustomSelect2 = ({ label, options, ...props }: any) => {
//     const [field, meta] = useField(props);
//     const { setFieldValue } = useFormikContext();

//     const handleSelectedValue = (e: any) => {
//         const { value } = e.target;
//         setFieldValue(props.name, value);
//     };

//     return (
//         <div className="customSelect">
//             <span className="label">
//                 <label>{label}</label>
//             </span>
//             <select
//                 {...field}
//                 {...props}
//                 onChange={handleSelectedValue}
//                 className={meta.touched && meta.error ? "input-error" : ""}
//             >
//                 {options.map((option: any) => (
//                     <option key={option.value} value={option.value}>
//                         {option.label}
//                     </option>
//                 ))}
//             </select>
//             {meta.touched && meta.error && <div className="error">{meta.error}</div>}
//         </div>
//     );
// };
