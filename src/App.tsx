import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/pages/landingPage/landingPage';
import { GalleryPage } from './components/pages/galleryPage/galleryPage';
import { GalleryPageAuth } from './components/pages/galleryPage/galleryPageAuth';
import { SigninPage } from './components/pages/signinPage/signinPage';
import { SignUpPage } from './components/pages/signupPage/signupPage';
import { Homepage } from './components/pages/homePage/homePage';
import { ProfilePage } from './components/pages/profilePage/profilePage';
import { QuickOrderPage } from './components/pages/quickOrderPage/quickOrderPage';
import { CustomOrderPage } from './components/pages/customOrderPage/customOrderPage';
import { ProtectAuthRoute } from './components/utilsComponent';
import { UserProvider } from './context/authcontext/authContext';
import { ProfileProvider } from './context/profileContext/profileContext';
import {
  PackageProvider,
  VariantRatesProvider,
} from "./context/packageContext/packageContext";
import { CartItemsPage } from "./components/pages/cartItemsPage/cartItemsPage";
import {CartProvider} from "./context/cartContext/cartContext"
import {CheckoutPage} from "./components/pages/checkoutPage/checkoutPage";
import { CheckoutProvider } from './context/checkoutContext/checkoutContext';
import { AddressBook } from './components/pages/addressBook/addressBook';
import { StudioAddressBook } from './components/pages/addressBook/studioAddressBook';
import { OrdersPage } from './components/pages/OrdersPage/ordersPage';
import { RequestProvider } from './context/customRequestContext/customRequestContext';
import { RequestItemsPage } from './components/pages/requestItemsPage/requestItemsPage';
import { OrderProvider } from './context/orderContext/orderContext';
import { RtgProvider } from './context/rtgContext/rtgContext';
import { AdminSignUpPage } from './components/pages/signupPage/adminsignUpPage';
import { AdminSigninPage } from './components/pages/signinPage/adminSignInPage';
import { AdminProvider } from './context/authcontext/adminAuthContext';
import { AdminHomePage } from './components/pages/adminPages/adminHomePage/adminHomePage';
import { AdminCredentials } from './components/pages/adminPages/adminCredentialsPage/adminCredentials';
import { AdminCustomersPage } from './components/pages/adminPages/adminCustomersPage/adminCustomersPage';
import { AdminSalesPage } from './components/pages/adminPages/adminSalesPage/adminSalesPage';
import { AdminOrdersPage } from './components/pages/adminPages/adminOrdersPage/adminOrdersPage';
import { AdminReviewsPage } from './components/pages/adminPages/adminReviewsPage/adminReviewsPage';
import { ReviewsPage } from './components/pages/reviewsPage/reviewsPage';
import { GalleryPageIndex } from './components/pages/galleryPage';
import { SignupPageMobileIndex } from './components/pages/signupPage';
import { SigninPageIndex } from './components/pages/signinPage';
import { HomePageIndex } from './components/pages/homePage';
import { QuickOrderPageIndex } from './components/pages/quickOrderPage';
import { CartItemsPageIndex } from './components/pages/cartItemsPage';
import { CheckoutPageIndex } from './components/pages/checkoutPage';


function App() {
  return (
    <div>
      <AdminProvider>
        <UserProvider>
          <RtgProvider>
            <ProfileProvider>
              <PackageProvider>
                <VariantRatesProvider>
                  <OrderProvider>
                    <CartProvider>
                      <RequestProvider>
                        <CheckoutProvider>
                          <Router>
                            <Routes>
                              <Route path="/" element={<LandingPage />} />
                              <Route
                                path="/signUpPage"
                                element={<SignupPageMobileIndex />}
                              />
                              <Route
                                path="/adminSignUpPage"
                                element={<AdminSignUpPage />}
                              />
                              <Route
                                path="/signinPage"
                                element={<SigninPageIndex />}
                              />
                              <Route
                                path="/adminSigninPage"
                                element={<AdminSigninPage />}
                              />
                              <Route
                                path="/galleryPage"
                                element={<GalleryPageIndex />}
                              />
                              <Route
                                path="/reviewPage"
                                element={<ReviewsPage />}
                              />
                              <Route element={<ProtectAuthRoute />}>
                                <Route
                                  path="/auth/homepage"
                                  element={<HomePageIndex />}
                                />
                                <Route
                                  path="/auth/profilePage"
                                  element={<ProfilePage />}
                                />
                                <Route
                                  path="/auth/galleryPage"
                                  element={<GalleryPageAuth />}
                                />
                                <Route
                                  path="/auth/quickOrderPage"
                                  element={<QuickOrderPageIndex />}
                                />
                                <Route
                                  path="/auth/customOrderPage"
                                  element={<CustomOrderPage />}
                                />
                                <Route
                                  path="/auth/cartItemsPage"
                                  element={<CartItemsPageIndex />}
                                />
                                <Route
                                  path="/auth/checkoutPage"
                                  element={<CheckoutPageIndex />}
                                />
                                <Route
                                  path="/auth/addressBook"
                                  element={<AddressBook />}
                                />
                                <Route
                                  path="/auth/studioAddressBook"
                                  element={<StudioAddressBook />}
                                />
                                <Route
                                  path="/auth/ordersPage"
                                  element={<OrdersPage />}
                                />
                                <Route
                                  path="/auth/requestPage"
                                  element={<RequestItemsPage />}
                                />
                                <Route
                                  path="/auth/adminHomePage"
                                  element={<AdminHomePage />}
                                />
                                <Route
                                  path="/auth/admin/credentials"
                                  element={<AdminCredentials />}
                                />
                                <Route
                                  path="/auth/adminCustomersPage"
                                  element={<AdminCustomersPage />}
                                />
                                <Route
                                  path="/auth/adminOrdersPage"
                                  element={<AdminOrdersPage />}
                                />
                                <Route
                                  path="/auth/adminSalesPage"
                                  element={<AdminSalesPage />}
                                />
                                <Route
                                  path="/auth/adminReviewsPage"
                                  element={<AdminReviewsPage />}
                                />
                              </Route>
                            </Routes>
                          </Router>
                        </CheckoutProvider>
                      </RequestProvider>
                    </CartProvider>
                  </OrderProvider>
                </VariantRatesProvider>
              </PackageProvider>
            </ProfileProvider>
          </RtgProvider>
        </UserProvider>
      </AdminProvider>
    </div>
  );
}

export default App;
