import { useContext, useEffect, useState } from "react";
import "./heroPage.css";
import { RtgContext } from "../../../context/rtgContext/rtgContext";
import {
  CartObject,
  ReviewObject,
  RtgOrderDto,
  rtgProducts,
  setCartCountProps,
} from "../../../types";
import { useNavigate } from "react-router-dom";
import { FaCashRegister, FaChevronLeft, FaChevronRight, FaMoneyBill, FaPaypal, FaPenNib } from "react-icons/fa";
import { CustomButton } from "../../formComponents/customButton";
import { toastify } from "../../utilsComponent";
import { AdminStores } from "../../../stores/adminStores";
import { FaCakeCandles, FaMoneyBills, FaMoneyBillTransfer } from "react-icons/fa6";

export const HeroPage = () => {
       const [products, setProducts] = useState<rtgProducts[]>([]);
       const [cakeDescription, setCakeDescription] = useState(false);
       const [chopsDescription, setChopsDescription] = useState(false);
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
         console.log(rtgProduct);
         setProducts(rtgProduct);
       };
       products();
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
       <div className="rtg-body-cakes">
         <span className="rtg-body-cakes-title">
           {rtgType === "Cakes" ? "Cakes" : "Chops"}
         </span>
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
                   // handleCakeBuy();
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
        <div className="rtg-body-chops">
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
                      <div>
                        <img
                          src={product.rtgImageUrl}
                          alt={product.rtgName}
                          onClick={() => {
                            toggleChopsDescription();
                          }}
                        />
                      </div>
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
                          // handleChopBuy();
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
        try{
            const fetchReviews = await getReviews();
            
            const activeReviews = fetchReviews.reviews.filter((review: ReviewObject) => review.isActive === 'Active');
            console.log(activeReviews)
            setReviews(() => activeReviews)
        } catch (error) {
            toastify.error('failed to fetch reviews, please refresh the page')
        }
    };
        fetchAcitveReviews();
    }, [getReviews])


      const cycleReviews = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      };

      useEffect(() => {
        const intervalId = setInterval(cycleReviews, 6000); // Cycle every 3 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, [reviews]);

    return (
      <div>
        <div className="heroPage-container">
          <div className="heroPage-one">
            <div className="hero-image">
              <img src={heroPic} alt="nora selfie" />
              <img src={heroPic2} alt="nora selfie" />
            </div>
            <div className="heroPage-three">
              <div className="rtg-container">
                <div className="rtg-body">
                  <>{renderRtgByType("Cakes")}</>
                  <div className="review-container">
                    {reviews
                      ? reviews.map((review, index) => (
                          <div
                            key={review.reviewId}
                            className={`review ${
                              index === currentReviewIndex ? "show" : ""
                            }`}
                          >
                            <div className="message-icon">
                              <span className="review-text">
                                "{review.review}"
                              </span>
                              <p></p>
                              <span className="review-author">
                                <strong>{review.name}</strong>
                              </span>
                              <p></p>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                  <>{renderChopsRtgByType("Chops")}</>
                </div>
              </div>
            </div>
            <div className="extras">
              <span>
                fill out an order
                <br />
                <FaPenNib
                  style={{
                    paddingTop: "1rem",
                    fontSize: "3.5rem",
                    color: "#c6b585",
                  }}
                />
              </span>
              <span>
                make seemless payment
                <br />
                <FaMoneyBillTransfer
                  style={{
                    paddingTop: "1rem",
                    fontSize: "3.5rem",
                    color: "#73ab39",
                  }}
                />
              </span>
              <span>
                enjoy tasty treats
                <br />
                <FaCakeCandles
                  style={{
                    paddingTop: "1rem",
                    fontSize: "3.5rem",
                    color: "#cdb641",
                  }}
                />
              </span>
            </div>
            <div className="body-end">
              <p>'your treat is our delight'</p>
            </div>
          </div>
        </div>
      </div>
    );
}