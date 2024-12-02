import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import CryptoJS from "crypto-js";
import Toastify from "toastify-js";


export const clearAllStorage = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.localStorage.clear();
};

export const ClearStorageAndRedirect = () => {
    const location = useLocation();
    clearAllStorage()
    return <Navigate to="signinPage" state={{from: location}} />
}

// middleware for protecting routes
export const checkLoginStatus = () => {
    let isAuthenticated: string | any = (localStorage.getItem("accessToken") || 
        sessionStorage.getItem("accessToken")) as any
    isAuthenticated = isAuthenticated?.trim()

    console.log("authresult", isAuthenticated)
    if (isAuthenticated === null || isAuthenticated === undefined) {
        return false
    } else {
        return true
    }
}

export const ProtectAuthRoute = () => {
    const isAuthenticated = checkLoginStatus()
    console.log(isAuthenticated)
    return (
        <>
            {isAuthenticated === true ? (
                <Outlet />
            ): (<ClearStorageAndRedirect />) }
        </>
    )
}

//fetch coordinates from google api

export const getCoordinates = async (address: string | number | boolean) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;
  
  if (!apiKey) {
    throw new Error("google maps api key is missing");
  }

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );

  const data = await response.json();
  if (data.status === "OK") {
    const { lat, lng } = data.results[0].geometry.location;
    console.log({lat,lng})
    return { lat, lng };
  } else {
    console.error(`Geocoding Api error`, data.status);
    return null;
  }
};

// calculate delivery fee
const EARTH_RADIUS = 6371;// earth's radius in km
const BASE_DISTANCE = 3; //base radius for flat fee
const BASE_FEE = 500; // Base fee for delivery in Naira
const PER_KM_FEE = 100; // fee per km beyond the base distance

const haversineDistance = (
    lat1: number,
    long1: number,
    lat2: number,
    long2: number
): number => {
    const toRad = (angle: number) => (angle * Math.PI) /100;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(long2 - long1);

    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);

    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c; // Distance in km
}

export const calculateDeliveryFee = async (
  customerLat: number,
  customerLon: number,
  studioLat: number,
  studioLon: number
) => {
  const distance = await haversineDistance(
    customerLat,
    customerLon,
    studioLat,
    studioLon
  );

  if (distance <= BASE_DISTANCE) {
    return BASE_FEE;
  } else {
    const extraDistance = distance - BASE_DISTANCE;
    const additionalFee = extraDistance * PER_KM_FEE;
    return BASE_FEE + additionalFee;
  }
};

export const encryptReference = async (reference: string, iv: string) => {
    console.log(reference, iv)
  try{
    const keyHex = CryptoJS.enc.Hex.parse(
      process.env.REACT_APP_FRONTEND_ENCRYPTION_SECRET!
    );
    const ivHex = CryptoJS.enc.Hex.parse(iv);

    const encrypted = CryptoJS.AES.encrypt(reference, keyHex, {
      iv: ivHex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    console.log(encrypted.toString())
    return encrypted.toString();
  } catch (error) {
    console.log(error)
  }
}

export const decryptReference = async (reference: string, iv: string): Promise<any> => {
  console.log(reference, iv)
  
  try{
    const secret = process.env.REACT_APP_ENCRYPTION_SECRET;
    if (!secret) {
      console.log(secret)
      console.error("Encryption secret is not defined");
      return null; // Early return if secret is not defined
    }

    const key = CryptoJS.enc.Hex.parse(secret);
    const ivParsed = CryptoJS.enc.Hex.parse(iv);

    const decrypted = CryptoJS.AES.decrypt(reference, key, {
      iv: ivParsed,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    console.log(decrypted);

    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch(error) {
    console.log(error)
  }
}

export const toastify = {
  signupSuccessful: (text: string) => {
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #28a745, #85d396) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast();
  },
  signupError: (text: string) => {
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #dc3545, #ff6f61) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast();
  },
  signInSuccessful: (text: string) => {
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #28a745, #85d396) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast();
  },
  signinError: (text: string) => {
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #dc3545, #ff6f61) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast();
  },
  addItemToCart: (text: string) =>
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #28a745, #85d396) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast(),

  fillRequired: (text: string) =>
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast(),

  deleteItem: (text: string) =>
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast(),
  log: (text: string) =>
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #01b29b, #96d94d) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        textAlign: "center",
        borderRadius: "1rem",
      },
      duration: 3000,
    }).showToast(),
  paymentSuccessful: (text: string) =>
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast(),

  error: (text: string) =>
    Toastify({
      text: text,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #dc3545, #ff6f61) ",
        width: "15rem",
        position: "fixed",
        right: "2.5rem",
        top: "2rem",
        zIndex: "1000",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
      },
      duration: 3000,
    }).showToast(),
};
