import React, { ChangeEvent, useState, useContext } from "react"
import {FaImage} from "react-icons/fa"
import { profileStore } from "../../../stores/profileStores"
import { Footer } from "../../footer/footer"
import { ProfilePageNavbar } from "../../navbar/profilePageNavbar"
import "./profilePage.css"
import {ProfileContext} from "../../../context/profileContext/profileContext"
import {AuthContext} from "../../../context/authcontext/authContext"

export const ProfilePage = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState<string>("");
    const [updateAddress, setUpdateAddress] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [updateDateOfBirth, setUpdateDateOfBirth] = useState<string>("")
    const [imageUrl, setImageUrl] = useState("")
    const [file, setFile] = useState<File | any>()
    const {updateProfile} = useContext(ProfileContext)
    const user = useContext(AuthContext)

    console.log(user.user.accessToken)
    const {accessToken} = user.user


    const {createProfile, getProfile} = profileStore;

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if(event.target.files && event.target.files.length > 0) {
            const selectedFile = await event.target.files[0];
            setFile(selectedFile);
        }
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(!file) {
            console.log("no file selected")
        }
        try{
            await createProfile(address, dateOfBirth, file)
        } catch (error) {
            console.log(error)
        }    

    }

    const fetchProfile = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log("profiledata", accessToken)
        const user = accessToken
        try{
            const profileData = await getProfile(user)
            updateProfile(profileData)
            console.log("profile fetched successfully", profileData)
            setFirstname(profileData.firstname)
            setLastname(profileData.lastname)
            setPhoneNumber(profileData.phoneNumber)
            setAddress(profileData.address)
            const formatDate = new Date(profileData.dateOfBirth).toLocaleDateString()
            setDateOfBirth(formatDate)
            setImageUrl(profileData.imageUrl)
            
        }catch(error){
            throw new Error("failed to fetch profile")
        }
    }

    return (
        <div>
            <ProfilePageNavbar />
            <div className="profile-container">
                <div className="profile-retrieve">
                    <h3> View profile Details </h3>
                        <span>FirstName</span>
                            <input className="profile-input"
                                type="text"
                                placeholder="firstname"
                                value={firstname}
                                //    onChange={e => setFirstname}

                            />
                        <span>LastName</span>
                            <input className="profile-input"
                                type="text"
                                placeholder="lastname"
                                value={lastname}
                            />
                        <span>Phone Number</span>
                            <input className="profile-input"
                                type="text"
                                placeholder="phone Number"
                                value = {phoneNumber}
                            />
                        <span> Address </span> 
                            <input className="profile-input"
                                type="text"
                                placeholder="address"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                //    required
                            />
                        <span> Date of Birth</span>
                            <input className="profile-input"
                                type="text"
                                placeholder="date of birth"
                                value={dateOfBirth}
                                onChange={e => setDateOfBirth(e.target.value)}
                                //    required
                            />
                        <div className="profile-pic">
                        {imageUrl ?<img src={imageUrl} alt="profile pic" className="profile-image" />
                        : <FaImage className="profile-image"/>
                            }
                        </div>
                    <button className="profile-button"
                            type="button"
                            onClick={fetchProfile}
                            >
                                Fetch Profile
                    </button>
            </div>
             <div className="profile-img">
                <img src="/profilePic.png" alt="profilePic" className="profile-pic"/>
            </div>
             <div className="profile-save">
                        <h3> Complete your profile with the details below </h3>
                            <span> Address </span> 
                                <input className="profile-input"
                                    type="text"
                                    placeholder="address"
                                    value={updateAddress}
                                    onChange={e => setUpdateAddress(e.target.value)}
                                    required
                                />
                            <span> Date of Birth</span>
                                <input className="profile-input"
                                    type="text"
                                    placeholder="date of birth"
                                    value={updateDateOfBirth}
                                    onChange={e => setUpdateDateOfBirth(e.target.value)}
                                    required
                                />
                            <span>Profile Picture</span>
                                <input type="file" onChange = {(event) => handleChange(event)}/>
                                    <button className="profile-button"
                                            type="button"
                                            onClick={(e) => handleSubmit(e)}>
                                                Complete Profile
                                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}