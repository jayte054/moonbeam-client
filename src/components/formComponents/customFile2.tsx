import React, { useEffect, useRef, useState } from "react"
import {useField} from "formik";
import "./customFile.css"

interface CustomFile2Props {
  label: string,
  name: string,
  type: string,
  error: any,
  preloadedfile?: string | null,
}

export const CustomFile2: React.FC<CustomFile2Props> = ({ label,preloadedfile, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null> (null)
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (preloadedfile) {
      fetch(preloadedfile)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "preloaded.png", { type: blob.type });
          setFile(() => file);
          setFilePreview(() => URL.createObjectURL(file))
          helpers.setValue(() =>file);

          // mimcs a user manually clicking on the choosefile option
          if (fileInputRef.current) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInputRef.current.files = dataTransfer.files;

            const event = new Event("change", { bubbles: true });
            fileInputRef.current.dispatchEvent(event);
          }
        })
        .catch((error) => {
          console.error("error loading preloaded file", error);
        });
    }
  }, [preloadedfile, helpers]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
     const selectedFile: any = event.currentTarget.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
      helpers.setValue(selectedFile); // Use Formik helper to set the file value
    }
  
}

  return (
    <div className="customFile">
      <span className="label">
        <label>{label}</label>
      </span>
      <input
        ref={fileInputRef}
        {...props}
        name={field.name}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}

      />
      
      {filePreview && <img src={filePreview} 
                    // alt={`Selected file`} 
                    style={{
                      width: "10rem", 
                      height: "10rem", 
                      paddingTop: "1rem", 
                      borderRadius: "1rem"
                      }}/>}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
