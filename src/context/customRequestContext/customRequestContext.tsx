import React, { useContext } from "react";
import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { requestStores } from "../../stores/requestStores";
import { RequestObject } from "../../types";
import { AuthContext } from "../authcontext/authContext";

interface RequestProviderProps {
    children: ReactNode
}
interface RequestContextType{
    requestCount: string,
    requestItems: RequestObject[],
    setRequestCount: React.Dispatch<React.SetStateAction<string>>;
    addRequest: (newItem: RequestObject) => void;
}
export const RequestContext = createContext<RequestContextType>({
    requestCount: '',
    requestItems: [],
    setRequestCount: () => {},
    addRequest: () => {}
})

export const RequestProvider = ({children}: RequestProviderProps) => {
    const [requestItems, setRequestItems] = useState<RequestObject[]>([])
    const [requestTotal, setRequestTotal] = useState(0)
    const [requestCount, setRequestCount] = useState("")
    const {user} = useContext(AuthContext)
    const {fetchRequests}: any = requestStores

    useEffect(() => {
        if(user?.accessToken) {
            const requests = async () => {
                const requests = await fetchRequests(user.accessToken)
                setRequestItems(() => requests)
            }
        requests();
        }
    }, [user, fetchRequests])

    // useEffect(() => {
    //     const newTotal = requestItems.reduce((total, requestItem) => total + Number(requestItem.quantity), 0)
    //     setRequestTotal(() => newTotal)
    // }, [requestItems])

    // useEffect(() => {
    //     const totalCount = () => {
    //         const count = requestItems.reduce(
    //             (total, requestItem) => total + Number(requestItem.quantity), 0
    //             );
    //             setRequestCount(() => count.toString())
    //     }
    //     totalCount();
    // }, [requestItems])

    useEffect(() => {
      if (requestItems && Array.isArray(requestItems)) {
        console.log(requestItems.length)
        const _count = requestItems.length;
        setRequestCount(_count.toString());
      } else {
        setRequestCount("0");
      }
    }, [requestItems]);

    const addRequest = (newRequest: RequestObject) => {
        setRequestItems((prevRequests = []) =>  [...prevRequests, newRequest])
    }

    const value = {
        requestItems,
        requestCount,
        setRequestCount,
        setRequestItems,
        addRequest,
    }

    return (
        <RequestContext.Provider value = {value}>{children}</RequestContext.Provider>
    )
}