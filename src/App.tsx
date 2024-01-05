import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/pages/landingPage/landingPage';
import { GalleryPage } from './components/pages/galleryPage/galleryPage';
import { SigninPage } from './components/pages/signinPage/signinPage';
import { SignUpPage } from './components/pages/signupPage/signupPage';
import { Homepage } from './components/pages/homePage/homePage';
import { ProfilePage } from './components/pages/profilePage/profilePage';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path ="/" element = {<LandingPage />} />
          <Route path = "/signUpPage" element = {<SignUpPage />} />
          <Route path = "/signinPage" element = {<SigninPage />} />
          <Route path = "/galleryPage" element = {<GalleryPage />} />
          <Route path = "/auth/homepage" element = {<Homepage />}/>
          <Route path = "/auth/profilePage" element = {<ProfilePage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
