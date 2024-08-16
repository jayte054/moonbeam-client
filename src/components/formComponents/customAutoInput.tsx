import { useField } from "formik";
import { useState } from "react";
import { CustomInput } from "./customInput";
interface CustomAutoInputProps {
  label: string;
  name: string;
}

export const CustomAutoInput = ({ label, ...props }: CustomAutoInputProps) => {
  const [inputField, setInputField] = useState([{ item: "" }]);
  const [field, meta] = useField(props);

  const addFields = () => {
    setInputField([...inputField, { item: "" }]);
  };
   const removeFields: any = (index: number) => {
     if (index === inputField.length - 1) {
       return;
     }
     let data = [...inputField];
     data.splice(index, 1);
     setInputField(data);
   };

  return (
    <div>
      {inputField.map((input, index) => {
        const itemName = input.item || ""; // Use a unique name for each input field
        return (
          <div key={index}>
            <CustomInput
              label={label}
              name={`${props.name}[${index}].item`}
              type="text"
              placeholder="item"
            />
          </div>
        );
      })}
      <button className="add-button" type="button" onClick={addFields}>
        Add Item
      </button>
      <button className="add-button" type="button" onClick={removeFields}>
        Remove Item
      </button>
    </div>
  );
};
