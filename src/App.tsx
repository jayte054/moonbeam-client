import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/pages/landingPage/landingPage';
import { GalleryPage } from './components/pages/galleryPage/galleryPage';
import { SigninPage } from './components/pages/signinPage/signinPage';
import { SignUpPage } from './components/pages/signupPage/signupPage';
import { Homepage } from './components/pages/homePage/homePage';
import { ProfilePage } from './components/pages/profilePage/profilePage';
import { ProtectAuthRoute } from './components/utilsComponent';
import { UserProvider } from './context/authcontext/authContext';
import { ProfileProvider } from './context/profileContext/profileContext';

function App() {
  return (
    <div>
      <UserProvider>
      <ProfileProvider>  
      <Router>
        <Routes>
          <Route path ="/" element = {<LandingPage />} />
          <Route path = "/signUpPage" element = {<SignUpPage />} />
          <Route path = "/signinPage" element = {<SigninPage />} />
          <Route path = "/galleryPage" element = {<GalleryPage />} />
          <Route element = {<ProtectAuthRoute />} >
          <Route path = "/auth/homepage" element = {<Homepage />}/>
          <Route path = "/auth/profilePage" element = {<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
      </ProfileProvider>
      </UserProvider> 
    </div>
  );
}

export default App;
