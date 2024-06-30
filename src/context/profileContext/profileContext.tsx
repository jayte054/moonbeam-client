import {useEffect, useState, createContext, useMemo} from "react"
import {profileStore} from "../../stores/profileStores"

export const ProfileContext = createContext<any>(null)

export const ProfileProvider = ({children}: any) => {
    const [profile, setProfile] = useState({
        id: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        profilePicture: ""
    })
    const {getProfile} = profileStore

    const updateProfile = (profileData: any) => {
        setProfile(profileData)
    }

    const contextValue = useMemo(() => ({profile, updateProfile}), [profile])
    const value = {profile, updateProfile}
    return (
        <ProfileContext.Provider value = {value}>{children}</ProfileContext.Provider>
    )
}