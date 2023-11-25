import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/pages/landingPage/landingPage';
import { QuickOrderPage } from './components/pages/quickOrderPage/quickOrderPage';
import { SigninPage } from './components/pages/signinPage/signinPage';
import { SignUpPage } from './components/pages/signupPage/signupPage';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path ="/" element = {<LandingPage />} />
          <Route path = "/signUpPage" element = {<SignUpPage />} />
          <Route path = "/signinPage" element = {<SigninPage />} />
          <Route path = "/quickOrderPage" element = {<QuickOrderPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
