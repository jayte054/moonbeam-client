import { useContext, useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { rtgStores } from "../../stores/rtgStores";
import { rtgProducts } from "../../types";
import { AuthContext } from "../authcontext/authContext";

interface RtgContextType {
  rtgProducts: rtgProducts[];
}

interface RtgProviderProps {
    children: ReactNode;
}

export const RtgContext = createContext<RtgContextType>({
    rtgProducts: []
});

export const RtgProvider = ({children}: RtgProviderProps) => {
    const [rtgProducts, setRtgProducts] = useState<rtgProducts[]>([])
    const {user} = useContext(AuthContext)
    const {getRtgProducts} = rtgStores

    useEffect(() => {
        const products = async() => {
            // if (user.accessToken) {
                const rtgProducts = await getRtgProducts();
                setRtgProducts(() => rtgProducts)
            // }
        }
        products()
    }, [getRtgProducts])

    const value = {rtgProducts}
    return (
        <RtgContext.Provider value = {value}>{children}</RtgContext.Provider>
    )
}

