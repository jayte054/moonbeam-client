import { useEffect } from "react";
import { useState } from "react"
import { AdminPageNavbar } from "../../navbar/adminPageNavBar";
import { AdminProductPage } from "../adminProductPage/adminProductPage";
import { AdminUploadPage } from "../adminUploadPage/adminUploadPage";
import "./adminHomePage.css"

export const AdminHomePage = () => {
    const [uploadPage, setUploadPage] = useState(false)
    const [productPage, setProductPage] = useState(false)

    const toggleUploadPage = () => setUploadPage((prev) => {
        const uploadPage = !prev
        if (uploadPage) {
            setProductPage(false)
        }
        return uploadPage;
    })
    const toggleProductPage = () => setProductPage((prev) => {
        const productPage = !prev
        if (productPage) {
            setUploadPage(false)
        }
        return productPage
    });

    useEffect(() => {
        setUploadPage(true);
    }, [])

    return (
      <div>
        <AdminPageNavbar />
        <div className="adminHomePage-container">
          <h1>Admin Home Page</h1>
          <div className="adminButton-container">
            <button type="button" onClick={toggleUploadPage}>
              Upload Product and Rates Page
            </button>
            <button type="button" onClick={toggleProductPage}>
              View and Update Product and Rates Page
            </button>
          </div>
          {uploadPage && <AdminUploadPage />}
          {productPage && <AdminProductPage />}
        </div>
      </div>
    );
}