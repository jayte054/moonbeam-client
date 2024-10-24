import React from 'react';
import ReactDOM from 'react-dom/client';
// import {RouterStore} from "mobx-react-router";
// import {createBrowserHistory} from "history"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GalleryProvider } from './context/galleryContext/galleryContext';
import { UserProvider } from './context/authcontext/authContext';
import { ProfileProvider } from './context/profileContext/profileContext';
import {
  PackageProvider,
  VariantRatesProvider,
} from "./context/packageContext/packageContext";
import {CartProvider} from "./context/cartContext/cartContext"
import { CheckoutProvider } from './context/checkoutContext/checkoutContext';
import { RequestProvider } from './context/customRequestContext/customRequestContext';
import { OrderProvider } from './context/orderContext/orderContext';
import { RtgProvider } from './context/rtgContext/rtgContext';

// let stores: any = {}

// stores.routerStore = new RouterStore()
// const browserHistory = createBrowserHistory()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GalleryProvider>
      <UserProvider>
        <RtgProvider>
          <ProfileProvider>
            <PackageProvider>
              <VariantRatesProvider>
                <OrderProvider>
                  <CartProvider>
                    <RequestProvider>
                      <CheckoutProvider>
                        <App />
                      </CheckoutProvider>
                    </RequestProvider>
                  </CartProvider>
                </OrderProvider>
              </VariantRatesProvider>
            </PackageProvider>
          </ProfileProvider>
        </RtgProvider>
      </UserProvider>
    </GalleryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
