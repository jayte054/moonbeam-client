import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/pages/landingPage/landingPage';
import { GalleryPage } from './components/pages/galleryPage/galleryPage';
import { GalleryPageAuth } from './components/pages/galleryPage/galleryPageAuth';
import { SigninPage } from './components/pages/signinPage/signinPage';
import { SignUpPage } from './components/pages/signupPage/signupPage';
import { Homepage } from './components/pages/homePage/homePage';
import { ProfilePage } from './components/pages/profilePage/profilePage';
import { QuickOrderPage } from './components/pages/quickOrderPage/quickOrderPage';
import { CustomOrderPage } from './components/pages/customOrderPage/customOrderPage';
import { ProtectAuthRoute } from './components/utilsComponent';
import { UserProvider } from './context/authcontext/authContext';
import { ProfileProvider } from './context/profileContext/profileContext';
import {
  PackageProvider,
  VariantRatesProvider,
} from "./context/orderContext/orderContext";

function App() {
  return (
    <div>
      <UserProvider>
        <ProfileProvider>
          <PackageProvider>
            <VariantRatesProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signUpPage" element={<SignUpPage />} />
                <Route path="/signinPage" element={<SigninPage />} />
                <Route path="/galleryPage" element={<GalleryPage />} />
                <Route element={<ProtectAuthRoute />}>
                  <Route path="/auth/homepage" element={<Homepage />} />
                  <Route path="/auth/profilePage" element={<ProfilePage />} />
                  <Route
                    path="/auth/galleryPage"
                    element={<GalleryPageAuth />}
                  />
                  <Route
                    path="/auth/quickOrderPage"
                    element={<QuickOrderPage />}
                  />
                  <Route 
                    path="/auth/customOrderPage"
                    element={<CustomOrderPage />}
                  />
                </Route>
              </Routes>
            </Router>
            </VariantRatesProvider>
          </PackageProvider>
        </ProfileProvider>
      </UserProvider>
    </div>
  );
}

export default App;
