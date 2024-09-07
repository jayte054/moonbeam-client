import { useField } from "formik";
import React, { useState } from "react";
import { CustomInput } from "./customInput";
interface CustomAutoInputProps {
  label: string;
  name: string;
  // value: string;
  // onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  // error? : any
}

export const CustomAutoInput = ({ label, ...props }: CustomAutoInputProps) => {
  const [inputField, setInputField] = useState<string[]>([""]);
  // const [inputField, setInputField] = useState([{ item: "" }]);
  const [field, meta, helpers] = useField(props);

  const addFields = () => {
    setInputField([...inputField, "" ]);
    helpers.setValue([...inputField, ""])
    // setInputField([...inputField, { item: "" }]);
  };

   const removeFields: any = (index: number) => {
     if (inputField.length <= 1) return;
     
     const updatedFields = inputField.filter((_, i) => i !== index);
    setInputField(updatedFields);
    helpers.setValue(updatedFields);
   };

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updateFields = inputField.map((item, i) => i === index ? e.target.value : item)
    setInputField(() => updateFields)
    helpers.setValue(updateFields)
   }

  return (
    <div>
      {inputField.map((item, index) => {
        return (
          <div key={index}>
            <CustomInput
              label={label}
              name={`${props.name}[${index}]`}
              value={item}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index)
              }
              type="text"
              placeholder="item"
            />
            <button className="add-button" type="button" onClick={addFields}>
              Add Item
            </button>
            <button
              className="add-button"
              type="button"
              onClick={() => removeFields(index)}
              disabled={inputField.length <= 1}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      
    </div>
  );
};

// import { useField, FieldArray, FieldArrayRenderProps } from "formik";
// import { useState } from "react";
// import { CustomInput } from "./customInput";

// interface CustomAutoInputProps {
//   label: string;
//   name: string;
// }

// export const CustomAutoInput = ({ label, name }: CustomAutoInputProps) => {
//   const [field, meta] = useField(name);

//   return (
//     <FieldArray name={name}>
//       {({ push, remove }: FieldArrayRenderProps) => (
//         <div>
//           {field.value.map((_: string, index: number) => (
//             <div key={index}>
//               <CustomInput
//                 label={label}
//                 name={`${name}[${index}].item`}
//                 type="text"
//                 placeholder="item"
//               />
//               <button
//                 type="button"
//                 onClick={() => remove(index)} // Pass index to remove specific field
//               >
//                 Remove Item
//               </button>
//             </div>
//           ))}
//           <button
//             className="add-button"
//             type="button"
//             onClick={() => push("")} // Add a new field
//           >
//             Add Item
//           </button>
//         </div>
//       )}
//     </FieldArray>
//   );
// };

