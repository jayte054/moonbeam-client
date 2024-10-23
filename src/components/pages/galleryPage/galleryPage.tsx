import { useContext, useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { GalleryContext } from "../../../context/galleryContext/galleryContext";
import { Footer } from "../../footer/footer"
import { GalleryPageNavbar } from "../../navbar/galleryPageNavbar"
import "./galleryPage.css"
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";

export const GalleryPage = () => {
    const [products, setProducts] = useState<any[]>([])
    const [pageIndex, setPageIndex] = useState<{[key: string]: number}>({
        birthday: 0,
        anniversary: 0,
        wedding: 0,
        "chops / pastries": 0,
        "suprise package": 0
    })
    const { galleryMap } = useContext<any>(GalleryContext)
    const nextArrow = <FaArrowRight />;
    const prevArrow = <FaArrowLeft />;
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
            [productType]: prevIndex[productType] + 1
        }))
    }

    const handlePrev = (productType: string) => {
        setPageIndex((prevIndex) => ({
            ...prevIndex,
            [productType]: Math.max(prevIndex[productType] - 1, 0),
        }))
    }

    // Function to render products based on type
    const renderProductsByType = (productType: string) => {
        const startIndex = pageIndex[productType] * itemsPerPage;
       

        return (
          <>
            <div className="pagination-nav">
              <span className="arrow" onClick={() => handlePrev(productType)}>
                <FaArrowLeft className="span-nav" />
              </span>
              <span className="arrow" onClick={() => handleNext(productType)}>
                <FaArrowRight className="span-nav" />
              </span>
            </div>
            <div className="category-type">
              {products
                .filter((product: any) => product.type === productType)
                .slice(startIndex, startIndex + itemsPerPage)
                .map((product: any) => (
                  <div key={product.productId}>
                    <div className="category-item">
                      <img
                        src={product.imageUrl}
                        alt={product.description}
                        className="item"
                      />
                      <br />
                      <span>{product.description}</span>
                      <br />
                    </div>
                  </div>
                ))}
            </div>
          </>
        );
    }

    return (
      <div className="quickOrder-container">
        <GalleryPageNavbar />
        <div className="quickOrder-body">
          <div className="gallery-header">
            <span>Gallery </span>
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
