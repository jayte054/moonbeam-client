import { useContext, useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GalleryContext } from "../../../context/galleryContext/galleryContext";
import { Footer } from "../../footer/footer"
import { GalleryPageNav } from "../../navbar/galleryPageNav"
import "./galleryPage.css"

export const GalleryPageAuth = () => {
    const [products, setProducts] = useState<any[]>([])
     const [pageIndex, setPageIndex] = useState<{ [key: string]: number }>({
       birthday: 0,
       anniversary: 0,
       wedding: 0,
       "chops / pastries": 0,
       "suprise package": 0,
     });
    const { galleryMap } = useContext<any>(GalleryContext)
    const itemsPerPage = 4;


    useEffect(() => {
        const getProducts = () => {
            setProducts(galleryMap)
        }
        getProducts()
    }, [galleryMap])

        const handleNext = (productType: string) => {
          setPageIndex((prevIndex) => ({
            ...prevIndex,
            [productType]: prevIndex[productType] + 1,
          }));
        };

        const handlePrev = (productType: string) => {
          setPageIndex((prevIndex) => ({
            ...prevIndex,
            [productType]: Math.max(prevIndex[productType] - 1, 0),
          }));
        };

    // Function to render products based on type
   const renderProductsByType = (productType: string) => {
          const filteredProducts = products?.filter(
            (product: any) => product.type === productType
          );
          const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
          console.log(filteredProducts.length);
          const currentPageIndex = pageIndex[productType];
          const startIndex = currentPageIndex * itemsPerPage;

          // Slice products based on pagination
          const _products = filteredProducts.slice(
            startIndex,
            startIndex + itemsPerPage
          );

     return (
       <>
         <div className="category-type">
           <FaChevronLeft
             className={`span-nav ${currentPageIndex === 0 ? "disabled" : ""}`}
             onClick={() => {
               if (currentPageIndex > 0) handlePrev(productType);
             }}
           />
           {_products
             .map((product: any) => (
               <div key={product.productId} className="category-item">
                 <img
                   src={product.imageUrl}
                   alt={product.description}
                   className="item"
                 />
                 <span>{product.description}</span>
                 <br />
               </div>
             ))}
           <FaChevronRight
             className={`span-nav ${
               currentPageIndex + 1 >= totalPages ? "disabled" : ""
             }`}
             onClick={() => {
               if (currentPageIndex + 1 < totalPages) handleNext(productType);
             }}
           />
         </div>
       </>
     );
   };

    return (
      <div className="quickOrder-container">
        <GalleryPageNav />
        <div className="quickOrder-body">
          <div className="gallery-header">
            <span className="page-title"> Testimonial's Gallery </span>
          </div>
          <div className="quickorder-categories">
            <div className="category-title">
              <span>Birthday Cakes</span>
            </div>
            {renderProductsByType("birthday")}
            <div className="category-title">
              <span>Anniversary Cakes</span>
            </div>
            {renderProductsByType("anniversary")}
            <div className="category-title">
              <span>Wedding Cakes</span>
            </div>
            {renderProductsByType("wedding")}
            <div className="category-title">
              <span>Chops / Pastries</span>
            </div>
            {renderProductsByType("chops / pastries")}
            <div className="category-title">
              <span>Surprise Packages</span>
            </div>
            {renderProductsByType("suprise package")}
          </div>
        </div>
        <Footer />
      </div>
    );
}
