import { Navigate, Outlet, useLocation } from "react-router-dom"

export const clearAllStorage = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.localStorage.clear();
}

export const ClearStorageAndRedirect = () => {
    const location = useLocation();
    clearAllStorage()
    return <Navigate to="signinPage" state={{from: location}} />
}

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