import { useContext, useEffect, useState } from "react";
import { LandingPageNavbarMobile } from "../../navbar/landingPageNavbarMobile";
import {
  FaCashRegister,
  FaChevronLeft,
  FaChevronRight,
  FaMoneyBill,
  FaPaypal,
  FaPenNib,
} from "react-icons/fa";
import { RtgContext } from "../../../context/rtgContext/rtgContext";
import { AdminStores } from "../../../stores/adminStores";
import { useNavigate } from "react-router-dom";
import { ReviewObject, rtgProducts } from "../../../types";
import { toastify } from "../../utilsComponent";
import { CircleLoader } from "react-spinners";
import { CustomButton } from "../../formComponents/customButton";
import './heroPageMobile.css';
import { Footer } from "../../footer/footer";
import { rm } from "fs";
import { FaCakeCandles, FaListCheck, FaMoneyBillTransfer } from "react-icons/fa6";

export const HeroPageMobile = () => {
       const [products, setProducts] = useState<rtgProducts[]>([]);
       const [isLoading, setIsLoading] = useState(false);
       const [cakeDescription, setCakeDescription] = useState(false);
       const [chopsDescription, setChopsDescription] = useState(false);
       const [showRtgCakes, setShowRtgCakes] = useState(false)
       const [showRtgChops, setShowRtgChops] = useState(false);
       const [pageIndex, setPageIndex] = useState<{ [key: string]: number }>({
         Cakes: 0,
         Chops: 0,
       });
       const [cakeOrderName, setCakeOrderName] = useState("");
       const [chopOrderName, setChopOrderName] = useState("");
       const [cakeMessage, setCakeMessage] = useState("");
      const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
      const [reviews, setReviews] = useState<ReviewObject[]>([]);
       const [cakeDeliveryDate, setCakeDeliveryDate] = useState("");
       const [chopDeliveryDate, setChopDeliveryDate] = useState("");
       const { rtgProducts } = useContext(RtgContext);
       const {getReviews} = AdminStores
       const navigate = useNavigate();


    const heroPic = "/heroPic.png"
    const heroPic2 = "/heroPic2.png";
    const cash = '/cashBundle.ico'

     const itemsPerPage = 1;

     useEffect(() => {
       const products = async () => {
         const rtgProduct = rtgProducts;
         setProducts(rtgProduct);
       };
       products();
       setShowRtgCakes(() => true)
     }, [rtgProducts]);

     const toggleCakeDescription = () => setCakeDescription((prev) => !prev);
     const toggleChopsDescription = () => setChopsDescription((prev) => !prev);

     const handlePrev = (rtgType: string) => {
       setPageIndex((prevIndex) => ({
         ...prevIndex,
         [rtgType]: Math.max(prevIndex[rtgType] - 1, 0),
       }));
     };

     const handleNext = (rtgType: string) => {
       setPageIndex((prevIndex) => ({
         ...prevIndex,
         [rtgType]: prevIndex[rtgType] + 1,
       }));
     };

     const handleCakeBuy = async () => {
       navigate("/signUpPage");
     };

     const handleChopBuy = async () => {
       navigate("/signinPage")
     };

   const renderRtgByType = (rtgType: string) => {
     const filteredProducts =
       products?.filter((product) => product.rtgType === rtgType) || [];
     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
     const currentPageIndex = pageIndex[rtgType];
     const startIndex = currentPageIndex * itemsPerPage;

     // Slice products based on pagination
     const paginatedProducts = filteredProducts.slice(
       startIndex,
       startIndex + itemsPerPage
     );

     return (
       <div className="rtgMobile-body-cakes">
         <span className="rtg-body-cakes-title">
           {rtgType === "Cakes" ? "Cakes" : "Chops"}
         </span>
         <p></p>
         {paginatedProducts.map((product) => (
           <div className="rtg-cakes-content" key={product.rtgId}>
             <div className="rtg-item-cakes">
               {/* Left Navigation */}
               <div>
                 <FaChevronLeft
                   className={`rtg-nav ${
                     currentPageIndex === 0 ? "disabled" : ""
                   }`}
                   onClick={() => {
                     if (currentPageIndex > 0) handlePrev(rtgType);
                   }}
                 />
               </div>

               {/* Product Image */}
               {isLoading ? (
                 <CircleLoader size={10} />
               ) : (
                 <div>
                   <img
                     src={product.rtgImageUrl}
                     alt={product.rtgName}
                     onClick={() => {
                       if (rtgType === "Cakes") toggleCakeDescription();
                       else if (rtgType === "Chops") toggleChopsDescription();
                     }}
                   />
                 </div>
               )}

               {/* Right Navigation */}
               <div>
                 <FaChevronRight
                   className={`rtg-nav ${
                     currentPageIndex + 1 >= totalPages ? "disabled" : ""
                   }`}
                   onClick={() => {
                     if (currentPageIndex + 1 < totalPages) handleNext(rtgType);
                   }}
                 />
               </div>
             </div>

             {/* Product Details */}
             <p>
               <strong>
                 {product.rtgName}
                 <br /> ₦{product.rtgPrice}
               </strong>
             </p>

             {/* Conditional Cake Description */}
             {rtgType === "Cakes" && cakeDescription && (
               <div className="rtg-content">
                 <span>{product.rtgDescription}</span>
                 <br />
                 <p></p>
                 <span className="rtg-span">Order Name</span>
                 <br />
                 <input
                   type="text"
                   placeholder="order name"
                   value={cakeOrderName}
                   onChange={(e) => setCakeOrderName(e.target.value)}
                   required
                 />
                 <p></p>
                 <span className="rtg-span">Cake Message</span>
                 <br />
                 <input
                   type="text"
                   placeholder="cake message"
                   value={cakeMessage}
                   onChange={(e) => setCakeMessage(e.target.value)}
                   required
                 />
                 <br />
                 <p></p>
                 <span className="rtg-span">Delivery Date</span>
                 <br />
                 <input
                   type="date"
                   value={cakeDeliveryDate}
                   onChange={(e) => setCakeDeliveryDate(e.target.value)}
                   required
                 />
               </div>
             )}

             {/* Add To Cart / Buy Now Button */}
             <CustomButton
               label={cakeDescription ? "Add To Cart" : "Buy Now"}
               type="button"
               style={{
                paddingBottom: '1rem',
                width:'auto',
                height:'4rem',
                backgroundColor: cakeDescription && "#ffc107",
               }}
               onClick={() => {
                 if (cakeDescription === false) {
                   toggleCakeDescription();
                 } else if (
                   cakeOrderName === "" ||
                   cakeDeliveryDate === "" ||
                   cakeMessage === ""
                 ) {
                   toastify.fillRequired(`please fill in required fields`);
                 } else {
                   toggleCakeDescription();
                   handleCakeBuy();
                 }
               }}
             />
           </div>
         ))}
       </div>
     );
   };

   const renderChopsRtgByType = (rtgType: string) => {
     const filteredProducts =
       products?.filter((product) => product.rtgType === rtgType) || [];
     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
     const currentPageIndex = pageIndex[rtgType];
     const startIndex = currentPageIndex * itemsPerPage;

     // Slice products based on pagination
     const paginatedProducts = filteredProducts.slice(
       startIndex,
       startIndex + itemsPerPage
     );

     return (
       <div className="rtgMobile-body-chops">
         <span className="rtg-body-cakes-title">
           {rtgType === "Cakes" ? "Cakes" : "Chops"}
         </span>
         {products &&
           paginatedProducts.map((product) => (
             <div className="rtg-cakes-content" key={product.rtgId}>
               {product.rtgType === rtgType ? (
                 <>
                   <p></p>
                   <div className="rtg-item-cakes">
                     <div>
                       <FaChevronLeft
                         className={`rtg-nav ${
                           currentPageIndex === 0 ? "disabled" : ""
                         }`}
                         onClick={() => {
                           if (currentPageIndex > 0) handlePrev(rtgType);
                         }}
                       />
                     </div>
                     {isLoading ? (
                       <CircleLoader size={8} />
                     ) : (
                       <div>
                         <img
                           src={product.rtgImageUrl}
                           alt={product.rtgName}
                           onClick={() => {
                             toggleChopsDescription();
                           }}
                         />
                       </div>
                     )}
                     <div>
                       <FaChevronRight
                         className={`rtg-nav ${
                           currentPageIndex + 1 >= totalPages ? "disabled" : ""
                         }`}
                         onClick={() => {
                           if (currentPageIndex + 1 < totalPages)
                             handleNext(rtgType);
                         }}
                       />
                     </div>
                   </div>
                   <p>
                     <strong>
                       {" "}
                       {product.rtgName}
                       <br /> ₦{product.rtgPrice}
                     </strong>
                   </p>

                   {chopsDescription && (
                     <div className="rtg-content">
                       <span style={{ marginBottom: "1rem" }}>
                         {product.rtgDescription}
                       </span>
                       <br />
                       <p></p>
                       <span className="rtg-span">Order Name</span>
                       <br />
                       <input
                         type="text"
                         placeholder="order name"
                         value={chopOrderName}
                         onChange={(e) => setChopOrderName(e.target.value)}
                         required
                       />
                       <p></p>
                       <span className="rtg-span">Delivery Date</span>
                       <br />
                       <input
                         type="date"
                         value={chopDeliveryDate}
                         onChange={(e) => setChopDeliveryDate(e.target.value)}
                         required
                       />
                     </div>
                   )}

                   <CustomButton
                     label={chopsDescription ? "Add To Cart" : "Buy Now"}
                     type="button"
                     style={{
                       paddingBottom: "1rem",
                       width: "auto",
                       height: "4rem",
                       backgroundColor: chopsDescription && "#ffc107",
                     }}
                     onClick={() => {
                       if (chopsDescription === false) {
                         toggleChopsDescription();
                       } else if (
                         chopOrderName === "" ||
                         chopDeliveryDate === ""
                       ) {
                         toastify.fillRequired(
                           `please fill in required fields`
                         );
                       } else {
                         handleChopBuy();
                         toggleChopsDescription();
                       }
                     }}
                   />
                 </>
               ) : null}
             </div>
           ))}
       </div>
     );
   };

   useEffect(() => {
     const fetchAcitveReviews = async () => {
       try {
         const fetchReviews = await getReviews();

         const activeReviews = fetchReviews.reviews.filter(
           (review: ReviewObject) => review.isActive === "Active"
         );
         console.log(activeReviews);
         setReviews(() => activeReviews);
       } catch (error) {
         toastify.error("failed to fetch reviews, please refresh the page");
       }
     };
     fetchAcitveReviews();
   }, [getReviews]);

   const cycleReviews = () => {
     setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
   };

   useEffect(() => {
     const intervalId = setInterval(cycleReviews, 6000); // Cycle every 3 seconds
     return () => clearInterval(intervalId); // Cleanup on unmount
   }, [reviews]);

   
    return (
      <>
        <div className="heroPageMobile-container">
          <div className="heroPageMobile-one">
            <div className="heroMobile-image">
              <img src={heroPic} alt="nora selfie" />
            </div>
          </div>
          <div className="heroPageMobile-three">
            <div className="reviewMobile-container">
              {reviews
                ? reviews.map((review, index) => (
                    <div
                      key={review.reviewId}
                      className={`reviewMobile ${
                        index === currentReviewIndex ? "show" : ""
                      }`}
                    >
                      <div className="messageMobile-icon">
                        <span className="reviewMobile-text">
                          "{review.review}"
                        </span>
                        <p></p>
                        <span className="reviewMobile-author">
                          <strong>{review.name}</strong>
                        </span>
                        <p></p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className="rtgMobile-container">
              <div className="rtgMobile-body">
                <span>
                  <button
                    type="button"
                    style={{ borderTopRightRadius: "4rem" }}
                    onClick={() => {
                      setShowRtgCakes(() => true);
                      setShowRtgChops(() => false);
                    }}
                  >
                    Cakes
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    style={{ borderTopLeftRadius: "4rem" }}
                    onClick={() => {
                      setShowRtgChops(() => true);
                      setShowRtgCakes(() => false);
                    }}
                  >
                    Chops
                  </button>
                </span>
                {showRtgCakes && <>{renderRtgByType("Cakes")}</>}
                {showRtgChops && <>{renderChopsRtgByType("Chops")}</>}
              </div>
            </div>
          </div>
          <div className="heroPageMobile-four">
            <h2>how we work </h2>
            <div className="extrasMobile">
              <span>
                <FaListCheck
                  style={{
                    paddingTop: "1rem",
                    fontSize: "3.5rem",
                    color: "#c6b585",
                  }}
                />
                <br />
                fill out an order
              </span>
              <span>
                <FaMoneyBillTransfer
                  style={{
                    paddingTop: "1rem",
                    fontSize: "3.5rem",
                    color: "#73ab39",
                  }}
                />
                <br />
                make seemless payment
              </span>
              <span>
                <FaCakeCandles
                  style={{
                    paddingTop: "1rem",
                    fontSize: "3.5rem",
                    color: "#cdb641",
                  }}
                />
                <br />
                enjoy tasty treats
              </span>
            </div>
          </div>
          <div className="bodyMobile-end">
            <p>'your treat is our delight'</p>
          </div>
        </div>
      </>
    );
}
