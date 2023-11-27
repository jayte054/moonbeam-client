import { BsBasket2Fill } from "react-icons/bs";
import { Footer } from "../../footer/footer"
import { GalleryPageNavbar } from "../../navbar/galleryPageNavbar"
import "./galleryPage.css"

export const GalleryPage = () => {

    return (
        <div className="quickOrder-container">
            <GalleryPageNavbar />
            <div className="quickOrder-body">
                <div className = "quickOrder-title">
                <span>Gallery </span>
                <span>Cart <BsBasket2Fill /></span>
                </div>
            <div className="quickorder-categories">
                <div className="category-title">
                <h3>Birthday Cakes</h3>
                </div>
                <div className="category-title">
                <h3>Anniversary Cakes</h3>
                </div>
                <div className="category-title">
                <h3>Wedding Cakes</h3>
                </div>
                <div className="category-title">
                <h3>Chops & Pastries</h3>
                </div>
                <div className="category-title">
                <h3>Suprise Packages</h3>
                </div>

            </div>
            </div>
            <Footer />
        </div>
    )
}