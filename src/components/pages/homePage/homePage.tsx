import {useContext, useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import { Footer } from "../../footer/footer"
import { HomePageNavbar } from "../../navbar/homepageNavbar"
import {AuthContext} from "../../../context/authcontext/authContext"
import { userStore } from "../../../stores/userStore";
import "./homePage.css"
import { RtgContext } from "../../../context/rtgContext/rtgContext";
import { CartObject, RtgOrderDto, rtgProducts, setCartCountProps } from "../../../types";
import { CustomButton } from "../../formComponents/customButton";
import { CartIcon } from "../../cartIcon/cartIcon";
import { CartContext } from "../../../context/cartContext/cartContext";
import { CustomInput } from "../../formComponents/customInput";
import { rtgStores } from "../../../stores/rtgStores";
import { AdminAuthContext } from "../../../context/authcontext/adminAuthContext";

export const Homepage = () => {
    const [products, setProducts] = useState<rtgProducts[]>([])
    const [cakeDescription, setCakeDescription] = useState(false)
    const [chopsDescription, setChopsDescription] = useState(false);
    const [pageIndex, setPageIndex] = useState<{[key:string]: number}>({
        Cakes: 0,
        Chops: 0
    })
    const [cakeOrderName, setCakeOrderName] = useState("")
    const [chopOrderName, setChopOrderName] = useState("");
    const [cakeMessage, setCakeMessage] = useState("")
    const [chopMessage, setChopMessage] = useState("");
    const [cakeDeliveryDate, setCakeDeliveryDate] = useState("")
    const [chopDeliveryDate, setChopDeliveryDate] = useState("");
    const { user } = useContext(AuthContext);
    const { admin } = useContext(AdminAuthContext);
    const {rtgProducts} = useContext(RtgContext)
    const { cartCount, setCartCount, addItemToCart,  }: setCartCountProps =
      useContext(CartContext);

    const navigate = useNavigate()
    const {signOut} = userStore;
    const { createRtgOrder } = rtgStores;
    const customOrderImage = "/custom-img2.png"
    const quickOrderImage = "/quick-img.png"
    const itemsPerPage = 1
   

    useEffect(() => {
        const products = async() => {
            const rtgProduct =  rtgProducts
            console.log(rtgProduct)
            setProducts(rtgProduct)
        }
        products()
    },[rtgProducts])

    const toggleCakeDescription = () => setCakeDescription((prev) => !prev);
    const toggleChopsDescription = () => setChopsDescription((prev) => !prev);

     const handleSignout = async () => {
        await signOut()
        document.location.href = "/"
    }

    const name = user?.firstname  || admin?.firstname || ""


    const navQuickOrder = () => {
        navigate("/auth/quickOrderPage")
    }

    const navCustomOrder = () => {
        navigate("/auth/customOrderPage")
    }

    const handlePrev = (rtgType: string) => {
        setPageIndex((prevIndex) => ({
            ...prevIndex,
            [rtgType]: Math.max(prevIndex[rtgType] - 1, 0)
        }))
    }

    const handleNext = (rtgType: string) => {
        setPageIndex((prevIndex) => ({
            ...prevIndex,
            [rtgType]: prevIndex[rtgType] + 1
        }))
    }

    const handleCakeBuy = async (product: rtgProducts) => {
        console.log(product)
      const rtgOrderDto: RtgOrderDto = {
        orderName: cakeOrderName + "'s " + product.rtgName,
        orderType: product.rtgType,
        cakeMessage: cakeMessage,
        deliveryDate: cakeDeliveryDate,
        price: product.rtgPrice,
        imageUrl: product.rtgImageUrl,
      };
      const item: CartObject = {
        itemId: product.rtgId,
        itemName: cakeOrderName + "'s " + product.rtgName,
        quantity: "1",
        price: product.rtgPrice,
        category: 'rtgCakes',
        itemType: product.rtgType,
        deliveryDate: cakeDeliveryDate,
        imageUrl: product.rtgImageUrl,
        userId: user.id,
      };
      await createRtgOrder(user.accessToken, rtgOrderDto)
      await addItemToCart(item)
      setCakeOrderName("")
      setCakeMessage("")
      setCakeDeliveryDate("")
    };

    const handleChopBuy = async (product: rtgProducts) => {
      const rtgOrderDto: RtgOrderDto = {
        orderName: chopOrderName + "'s " + product.rtgName,
        orderType: product.rtgType,
        deliveryDate: chopDeliveryDate,
        price: product.rtgPrice,
        imageUrl: product.rtgImageUrl,
      };
      const item: CartObject = {
        itemId: product.rtgId,
        itemName: cakeOrderName + "'s " + product.rtgName,
        quantity: "1",
        price: product.rtgPrice,
        itemType: product.rtgType,
        category: 'rtgChops',
        deliveryDate: chopDeliveryDate,
        imageUrl: product.rtgImageUrl,
        userId: user.id,
      };
      await createRtgOrder(user.accessToken, rtgOrderDto);
      await addItemToCart(item);
        setChopOrderName("");
        setChopMessage("");
        setChopDeliveryDate("");
    };

    const renderRtgByType = (rtgType: string) => {
        const startIndex = pageIndex[rtgType] * itemsPerPage;

        return (
          <div className="rtg-body-cakes">
            <span className="rtg-body-cakes-title">
              {rtgType === "Cakes" ? "Cakes" : "Chops"}
            </span>
            {products &&
              products
                .filter((product) => product.rtgType === rtgType)
                .slice(startIndex, startIndex + itemsPerPage)
                .map((product) => (
                  <div className="rtg-cakes-content" key={product.rtgId}>
                    {product.rtgType === rtgType ? (
                      <>
                        <p></p>
                        <div className="rtg-item-cakes">
                          <div>
                            <FaChevronLeft
                              className="rtg-nav"
                              onClick={() => handlePrev(product.rtgType)}
                            />
                          </div>
                          <div>
                            <img
                              src={product.rtgImageUrl}
                              alt={product.rtgName}
                              onClick={() => {
                                if (rtgType === "Cakes")
                                  toggleCakeDescription();
                                else if (rtgType === "Chops")
                                  toggleChopsDescription();
                              }}
                            />
                          </div>
                          <div>
                            <FaChevronRight
                              className="rtg-nav"
                              onClick={() => handleNext(product.rtgType)}
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
                                  onChange={(e) =>
                                    setCakeOrderName(e.target.value)
                                  }
                                  required
                                />
                                <p></p>
                                <span className="rtg-span">Cake Message</span>
                                <br />
                                <input
                                  type="text"
                                  placeholder="cake message"
                                  value={cakeMessage}
                                  onChange={(e) =>
                                    setCakeMessage(e.target.value)
                                  }
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
                          label="Buy Now"
                          type="button"
                          onClick={() => {
                            const newCount = Number(cartCount) + 1;
                            setCartCount(newCount.toString());
                            handleCakeBuy(product)
                          }}
                        />
                      </>
                    ) : null}
                  </div>
                ))}
          </div>
        );
    }

     const renderChopsRtgByType = (rtgType: string) => {
       const startIndex = pageIndex[rtgType] * itemsPerPage;

       return (
         <div className="rtg-body-cakes">
           <span className="rtg-body-cakes-title">
             {rtgType === "Cakes" ? "Cakes" : "Chops"}
           </span>
           {products &&
             products
               .filter((product) => product.rtgType === rtgType)
               .slice(startIndex, startIndex + itemsPerPage)
               .map((product) => (
                 <div className="rtg-cakes-content" key={product.rtgId}>
                   {product.rtgType === rtgType ? (
                     <>
                       <p></p>
                       <div className="rtg-item-cakes">
                         <div>
                           <FaChevronLeft
                             className="rtg-nav"
                             onClick={() => handlePrev(product.rtgType)}
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
                             className="rtg-nav"
                             onClick={() => handleNext(product.rtgType)}
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
                         label="Buy Now"
                         type="button"
                         onClick={() => {
                           const newCount = Number(cartCount) + 1;
                           setCartCount(newCount.toString());
                           handleChopBuy(product)
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
          <HomePageNavbar />
          <div className="home-container">
            <div className="header">
              <h1>Welcome to Moonbeam {name}</h1>
            </div>
            <div className="rtg-container">
              <div className="rtg-header">
                <span>Ready To Go Orders</span>
                <span>
                  <CartIcon />
                </span>
              </div>

              <div className="rtg-body">
                <>{renderRtgByType("Cakes")}</>

                <>{renderChopsRtgByType("Chops")}</>
              </div>
            </div>
            <div className="home-body1">
              <div className="home-header">
                <p>Personalised Orders</p>
              </div>
              <p></p>
              <div className="home-body">
                <div className="quick-order" onClick={navQuickOrder}>
                  <p>Quick Order</p>
                  <img src={quickOrderImage} alt="quick-order-image" />
                  <br />
                  <div style={{ color: "black", marginTop: "2rem" }}>
                    <span>Make your Quick Orders</span>
                  </div>
                </div>
                <div className="quick-order" onClick={navCustomOrder}>
                  <p> Custom Orders </p>
                  <img src={customOrderImage} alt="custom-order-image" />
                  <div style={{ color: "black", marginTop: "2rem" }}>
                    <span>Make your Custom Orders</span>
                  </div>
                </div>
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
}