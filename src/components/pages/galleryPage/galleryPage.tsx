// import { useContext, useEffect, useState } from "react";
// import { BsBasket2Fill } from "react-icons/bs";
// import { GalleryContext } from "../../../context/galleryContext/galleryContext";
// import { Footer } from "../../footer/footer"
// import { GalleryPageNavbar } from "../../navbar/galleryPageNavbar"
// import "./galleryPage.css"

// export const GalleryPage = () => {
//     const [products, setProducts] = useState<any[]>([])
//     const {galleryMap} = useContext<any>(GalleryContext)

//     useEffect(() => {
//         const getProducts = () => {
//             return (
//                 setProducts(galleryMap)
//             )
//         }
//         console.log(products)
//         getProducts()
//     }, [galleryMap, products])

//     return (
//         <div className="quickOrder-container">
//             <GalleryPageNavbar />
//             <div className="quickOrder-body">
//                 <div className = "quickOrder-title">
//                 <span>Gallery </span>
//                 <span>Cart <BsBasket2Fill /></span>
//                 </div>
//             <div className="quickorder-categories">
//                 <div className="category-title">
//                 <h3>Birthday Cakes</h3>
//                 </div>
//                 <div className="category-type">
//                 {products.filter((_: any, idx: any) => idx < 4)
//                          .map((product: any) => (
//                             <div key={product.productId} >
//                                 {product.type === "birthday" ? (
//                                     <div className="category-item">
//                                         <img src={product.imageUrl} alt={product.description} /><br />
//                                         <span>{product.description}</span><br />
//                                         <button type= "button">Add to Cart</button>
//                                     </div>
//                                 ) : null}
//                             </div>
//                         ))}
//                 </div>
//                 <div className="category-title">
//                 <h3>Anniversary Cakes</h3>
//                 </div>
//                 <div className="category-type">
//                     {products
//                     .filter((_: any, idx: any) => idx < 4)
//                              .map((product: any) => (
//                                     <div key={product.productId}>
//                                         {product.type === "anniversary" ? (
//                                             <div className="category-item">
//                                                 <img src={product.imageUrl} alt={product.description} /><br />
//                                                 <span>{product.description}</span><br />
//                                                 <button type= "button">Add to Cart</button>
//                                             </div>
//                                         ): null}
//                                     </div>
//                     ))}
//                 </div>
//                 <div className="category-title">
//                 <h3>Wedding Cakes</h3>
//                 </div>
//                 <div className="category-type">
//                     {products.filter((_: any, idx: any) => idx < 4).map((product: any) => (
//                         <div key={product.productId}>
//                             {product.type === "wedding" ? (
//                                 <div className="category-item">
//                                     <img src={product.imageUrl} alt={product.description} /><br />
//                                     <span>{product.description}</span><br />
//                                     <button type= "button">Add to Cart</button>
//                                 </div>
//                             ): null}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="category-title">
//                 <h3>Chops & Pastries</h3>
//                 </div>
//                 <div className="category-title">
//                 <h3>Suprise Packages</h3>
//                 </div>

//             </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

import { useContext, useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { GalleryContext } from "../../../context/galleryContext/galleryContext";
import { Footer } from "../../footer/footer"
import { GalleryPageNavbar } from "../../navbar/galleryPageNavbar"
import "./galleryPage.css"

export const GalleryPage = () => {
    const [products, setProducts] = useState<any[]>([])
    const { galleryMap } = useContext<any>(GalleryContext)

    useEffect(() => {
        const getProducts = () => {
            setProducts(galleryMap)
        }
        getProducts()
    }, [galleryMap])

    // Function to render products based on type
    const renderProductsByType = (productType: string) => {
        return (
            products
                .filter((product: any) => product.type === productType)
                .slice(0, 4)
                .map((product: any) => (
                    <div key={product.productId}>
                        <div className="category-item">
                            <img src={product.imageUrl} 
                                 alt={product.description} 
                                 className="item"
                                 /><br />
                            <span>{product.description}</span><br />
                            {/* <button type="button">Add to Cart</button> */}
                        </div>
                    </div>
                ))
        );
    }

    return (
        <div className="quickOrder-container">
            <GalleryPageNavbar />
            <div className="quickOrder-body">
                <div className="quickOrder-title">
                    <span>Gallery </span>
                    <span>Cart <BsBasket2Fill /></span>
                </div>
                <div className="quickorder-categories">
                    <div className="category-title">
                        <h3>Birthday Cakes</h3>
                    </div>
                    <div className="category-type">
                        {renderProductsByType("birthday")}
                    </div>
                    <div className="category-title">
                        <h3>Anniversary Cakes</h3>
                    </div>
                    <div className="category-type">
                        {renderProductsByType("anniversary")}
                    </div>
                    <div className="category-title">
                        <h3>Wedding Cakes</h3>
                    </div>
                    <div className="category-type">
                        {renderProductsByType("wedding")}
                    </div>
                    <div className="category-title">
                        <h3>Chops / Pastries</h3>
                    </div>
                    <div className="category-type">
                    {renderProductsByType("chops / pastries")}
                    </div>
                    <div className="category-title">
                        <h3>Surprise Packages</h3>
                    </div>
                    <div className="category-type">
                        {renderProductsByType("suprise package")}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
