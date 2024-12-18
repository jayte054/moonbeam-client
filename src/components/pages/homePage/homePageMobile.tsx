import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader, ClockLoader, MoonLoader } from "react-spinners";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Footer } from "../../footer/footer";
import { HomePageNavbar } from "../../navbar/homepageNavbar";
import { AuthContext } from "../../../context/authcontext/authContext";
import { userStore } from "../../../stores/userStore";
import "./homePageMobile.css";
import { RtgContext } from "../../../context/rtgContext/rtgContext";
import {
  CartObject,
  RtgOrderDto,
  rtgProducts,
  setCartCountProps,
} from "../../../types";
import { CustomButton } from "../../formComponents/customButton";
import { CartIcon } from "../../cartIcon/cartIcon";
import { CartContext } from "../../../context/cartContext/cartContext";
import { rtgStores } from "../../../stores/rtgStores";
import { AdminAuthContext } from "../../../context/authcontext/adminAuthContext";
import { toastify } from "../../utilsComponent";
import { HomePageNavbarMobile } from "../../navbar/homePageNavbarMobile";

export const HomePageMobile = () => {
  const [products, setProducts] = useState<rtgProducts[]>([]);
  const [cakeDescription, setCakeDescription] = useState(false);
  const [chopsDescription, setChopsDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChopLoading, setIsChopLoading] = useState(false);
  const [showRtgCakes, setShowRtgCakes] = useState(false);
  const [showRtgChops, setShowRtgChops] = useState(false);
  const [showQuick, setShowQuick] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [pageIndex, setPageIndex] = useState<{ [key: string]: number }>({
    Cakes: 0,
    Chops: 0,
  });
  const [cakeOrderName, setCakeOrderName] = useState("");
  const [chopOrderName, setChopOrderName] = useState("");
  const [cakeMessage, setCakeMessage] = useState("");
  const [chopMessage, setChopMessage] = useState("");
  const [cakeDeliveryDate, setCakeDeliveryDate] = useState("");
  const [chopDeliveryDate, setChopDeliveryDate] = useState("");
  const { user } = useContext(AuthContext);
  const { admin } = useContext(AdminAuthContext);
  const { rtgProducts } = useContext(RtgContext);
  const { cartCount, setCartCount, addItemToCart }: setCartCountProps =
    useContext(CartContext);

  const navigate = useNavigate();
  const { signOut } = userStore;
  const { createRtgOrder } = rtgStores;
  const customOrderImage = "/custom-img2.png";
  const quickOrderImage = "/quick-img.png";
  const itemsPerPage = 1;

  useEffect(() => {
    const products = async () => {
      const rtgProduct = rtgProducts;
      console.log(rtgProduct);
      setProducts(rtgProduct);
    };
    products();
    setShowRtgCakes(() => true);
    setShowQuick(() => true);

  }, [rtgProducts]);

  const toggleCakeDescription = () => setCakeDescription((prev) => !prev);
  const toggleChopsDescription = () => setChopsDescription((prev) => !prev);

  const handleSignout = async () => {
    await signOut();
    document.location.href = "/";
  };

  const name = user?.firstname || admin?.firstname || "";

  const navQuickOrder = () => {
    navigate("/auth/quickOrderPage");
  };

  const navCustomOrder = () => {
    navigate("/auth/customOrderPage");
  };

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

  const handleCakeBuy = async (product: rtgProducts) => {
    try {
      setIsLoading(true);
      const rtgOrderDto: RtgOrderDto = {
        orderName: cakeOrderName,
        orderType: product.rtgType,
        cakeMessage: cakeMessage,
        deliveryDate: cakeDeliveryDate,
        price: product.rtgPrice,
        imageUrl: product.rtgImageUrl,
      };
      const item: CartObject = {
        itemId: product.rtgId,
        itemName: cakeOrderName,
        quantity: "1",
        price: product.rtgPrice,
        category: "rtgCakes",
        itemType: product.rtgType,
        deliveryDate: cakeDeliveryDate,
        imageUrl: product.rtgImageUrl,
        userId: user.id,
      };
      await createRtgOrder(user.accessToken, rtgOrderDto);
      await addItemToCart(item);
      setCakeOrderName("");
      setCakeMessage("");
      setCakeDeliveryDate("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toastify.error(`an error occured please try again`);
    }
  };

  const handleChopBuy = async (product: rtgProducts) => {
    try {
      setIsChopLoading(true);
      const rtgOrderDto: RtgOrderDto = {
        orderName: chopOrderName,
        orderType: product.rtgType,
        deliveryDate: chopDeliveryDate,
        price: product.rtgPrice,
        imageUrl: product.rtgImageUrl,
      };
      const item: CartObject = {
        itemId: product.rtgId,
        itemName: chopOrderName,
        quantity: "1",
        price: product.rtgPrice,
        itemType: product.rtgType,
        category: "rtgChops",
        deliveryDate: chopDeliveryDate,
        imageUrl: product.rtgImageUrl,
        userId: user.id,
      };
      await createRtgOrder(user.accessToken, rtgOrderDto);
      await addItemToCart(item);
      setChopOrderName("");
      setChopMessage("");
      setChopDeliveryDate("");
      setIsChopLoading(false);
    } catch (error) {
      setIsChopLoading(false);
      toastify.error(`an error occured please try again`);
    }
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
        {products &&
          paginatedProducts.map((product) => (
            <div className="rtg-cakes-content" key={product.rtgId}>
              {product.rtgType === rtgType ? (
                <>
                  <p></p>
                  <div className="rtg-item-cakes">
                    <div className="rtg-nav">
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
                          if (rtgType === "Cakes") toggleCakeDescription();
                          else if (rtgType === "Chops")
                            toggleChopsDescription();
                        }}
                      />
                    </div>

                    <div className="rtg-nav">
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

                  {rtgType === "Cakes"
                    ? cakeDescription && (
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
                            onChange={(e) =>
                              setCakeDeliveryDate(e.target.value)
                            }
                            required
                          />
                        </div>
                      )
                    : null}

                  <CustomButton
                    label={
                      cakeDescription ? (
                        isLoading ? (
                          <ClockLoader size={13} />
                        ) : (
                          "Add To Cart"
                        )
                      ) : (
                        "Buy Now"
                      )
                    }
                    type="button"
                    style={{
                      paddingBottom: "1rem",
                      width: "auto",
                      height: "4rem",
                      backgroundColor: cakeDescription && "#ffc107",
                    }}
                    onClick={() => {
                      setIsLoading(true);

                      if (!cakeDescription) {
                        toggleCakeDescription();
                        setIsLoading(false);
                        return;
                      }

                      // Validate required fields
                      if (
                        !cakeOrderName.trim() ||
                        !cakeDeliveryDate.trim() ||
                        !cakeMessage.trim()
                      ) {
                        toastify.fillRequired("Please fill in required fields");
                        setIsLoading(false);
                        return;
                      }

                      // Check user authentication
                      if (!user.accessToken) {
                        toastify.error("Failed to add item to cart");
                        setIsLoading(false);
                        return;
                      }
                      setTimeout(() => {
                        try {
                          // Proceed with adding to cart
                          const newCount = Number(cartCount) + 1;
                          setCartCount(newCount.toString());
                          handleCakeBuy(product);
                          toastify.addItemToCart(
                            "Item successfully added to cart"
                          );
                          toggleCakeDescription(); // Collapse description
                        } catch (error) {
                          toastify.error(
                            "An error occurred. Please try again."
                          );
                        } finally {
                          setIsLoading(false); // Ensure loading is turned off
                        }
                      }, 4000);
                    }}
                  />
                </>
              ) : null}
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
                    label={
                      chopsDescription ? (
                        isChopLoading ? (
                          <ClockLoader size={13} />
                        ) : (
                          "Add To Cart"
                        )
                      ) : (
                        "Buy Now"
                      )
                    }
                    type="button"
                    style={{
                      paddingBottom: "1rem",
                      width: "auto",
                      height: "4rem",
                      backgroundColor: chopsDescription && "#ffc107",
                    }}
                    onClick={() => {
                      setIsChopLoading(true);
                      if (chopsDescription === false) {
                        toggleChopsDescription();
                        setIsChopLoading(false);
                      } else if (
                        chopOrderName === "" ||
                        chopDeliveryDate === ""
                      ) {
                        toastify.fillRequired(`please fill in required fields`);
                        setIsChopLoading(false);
                      } else {
                        if (!user.accessToken) {
                          toastify.error("failed to add Item to cart");
                          setIsChopLoading(false);
                          return;
                        }
                        setTimeout(() => {
                          try {
                            const newCount = Number(cartCount) + 1;
                            setCartCount(newCount.toString());
                            handleChopBuy(product);
                            toastify.addItemToCart(
                              `item successfully added to cart`
                            );
                            toggleChopsDescription();
                          } catch (error) {
                            toastify.error(
                              "An error occurred. Please try again."
                            );
                          } finally {
                            setIsChopLoading(false);
                          }
                        }, 4000);
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

  
  return (
    <>
      {/* {user.firstname ? ( */}

      <div>
        <HomePageNavbarMobile />
        <div className="homeMobile-container">
          <div className="headerMobile">
            <h3>Welcome to Moonbeam {name}</h3>
          </div>
          <div className="rtgMobile-container">
            <div className="rtgMobile-header">
              <span>Ready To Go Orders</span>
              <span>
                <>
                  <CartIcon />
                </>
              </span>
            </div>
            <div className="rtgMobile-body">
              <span>
                <button
                  type="button"
                  style={{ borderTopRightRadius: "4rem", marginRight: "2rem" }}
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
          <div className="homeMobile-body1">
            <div className="homeMobile-header">
              <p>Personalised Orders</p>
            </div>
            <div className="homeMobile-body">
              <span>
                <button
                  type="button"
                  style={{ borderTopRightRadius: "4rem", marginRight: "2rem" }}
                  onClick={() => {
                    setShowQuick(() => true);
                    setShowCustom(() => false);
                  }}
                >
                  Quick
                </button>
              </span>
              <span>
                <button
                  type="button"
                  style={{ borderTopLeftRadius: "4rem" }}
                  onClick={() => {
                    setShowCustom(() => true);
                    setShowQuick(() => false);
                  }}
                >
                  Custom
                </button>
              </span>
              {showQuick && (
                <div className="quickMobile-order" onClick={navQuickOrder}>
                  <p>Quick Order</p>
                  <img src={quickOrderImage} alt="quick-order-image" />
                  <br />
                  <div style={{ color: "black", marginTop: "2rem" }}></div>
                </div>
              )}
              {showCustom && (
                <div className="quickMobile-order" onClick={navCustomOrder}>
                  <p> Custom Orders </p>
                  <img src={customOrderImage} alt="custom-order-image" />
                  <div style={{ color: "black", marginTop: "2rem" }}></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* // )
        // : (
        //     handleSignout()
        // )} */}
    </>
  );
 };
