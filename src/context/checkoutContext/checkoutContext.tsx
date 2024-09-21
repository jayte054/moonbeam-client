import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { checkoutStores } from "../../stores/checkoutStores"
import { AddressObject } from "../../types"
import { AuthContext } from "../authcontext/authContext"
import { CartContext } from "../cartContext/cartContext"

interface CheckoutProviderProps {
    children: ReactNode,
}

interface CheckoutContextInterface {
    defaultAddress: AddressObject | null | any,
    setDefaultAddress: (address: AddressObject) => void
}

export const CheckoutContext= createContext<CheckoutContextInterface>({
    defaultAddress: null,
    setDefaultAddress: () => {}
})

export const CheckoutProvider = ({children}: CheckoutProviderProps) => {
    const [defaultAddress, setDefaultAddress] = useState<AddressObject>()
    const {user} = useContext(AuthContext)
    const {cartItems} = useContext(CartContext)
    const {getDefaultAddress} = checkoutStores

    const accessToken = user.accessToken


    useEffect(() => {
        if (user && user.accessToken && cartItems) {
            const defaultAddress = async () => {
                const address = await getDefaultAddress(accessToken)
                setDefaultAddress(() => address)
            }
            defaultAddress()
        }   
    }, [user, accessToken, cartItems, getDefaultAddress])

    const value = {
        defaultAddress,
        setDefaultAddress
    } 

    return (
        <CheckoutContext.Provider value = {value}>{children}</CheckoutContext.Provider>
    )
}