import { useState } from "react"
import { Footer } from "../../footer/footer"
import { ProfilePageNavbar } from "../../navbar/profilePageNavbar"
import "./profilePage.css"

export const ProfilePage = () => {
    const [address, setAddress] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("")

    return (
        <div>
            <ProfilePageNavbar />
            <div className="profile-container">
            <div className="profile-save">
            <h3> Complete your profile with the details below </h3>
            <span> Address </span> 
            <input className="profile-input"
                   type="text"
                   placeholder="address"
                   value={address}
                   onChange={e => setAddress(e.target.value)}
                   required
            />
            <span> Date of Birth</span>
            <input className="profile-input"
                   type="text"
                   placeholder="date of birth"
                   value={dateOfBirth}
                   onChange={e => setDateOfBirth(e.target.value)}
                   required
            />
            <span>Profile Picture</span>
            <input type="file" />
            <button className="profile-button"
                    type="button">
                        Complete Profile
            </button>
            </div>
            <div className="profile-img">
                <img src="/profilePic.png" alt="profilePic" />
            </div>
            <div className="profile-retrieve">
                <h3> View profile Details </h3>
                <span>FirstName</span>
                <input className="profile-input"
                       type="text"
                       placeholder="firstname" 
                />
                <span>LastName</span>
                <input className="profile-input"
                       type="text"
                       placeholder="lastname"
                />
                <span>Phone Number</span>
                <input className="profile-input"
                       type="text"
                       placeholder="phone Number"
                />
                <span> Address </span> 
                <input className="profile-input"
                       type="text"
                       placeholder="address"
                    //    value={address}
                    //    onChange={e => setAddress(e.target.value)}
                    //    required
                />
                <span> Date of Birth</span>
                <input className="profile-input"
                       type="text"
                       placeholder="date of birth"
                    //    value={dateOfBirth}
                    //    onChange={e => setDateOfBirth(e.target.value)}
                    //    required
                />
                <span>Profile Picture</span>
                <input type="file" />
                <button className="profile-button"
                        type="button">
                            Fetch Profile
                </button>
            </div>
            </div>
            <Footer />
        </div>
    )
}