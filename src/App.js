import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Footer1 from './Components/Footer1/footer.jsx'
import Footer2 from './Components/Footer2/footer2.jsx'
import Header from './Components/Header/Header.jsx'
import LandingPage from './Components/LandingPage/index.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import Lawyer from './Components/Lawyer/index.jsx';
import Judge from './Components/Judge/index.jsx';
import Admin from './Components/Admin/index.jsx';
import SignUP from './Components/SignUp/index.jsx';



function App() {
  return(
  <Router>
  <Header />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/lawyer" element={<Lawyer />} />
    <Route path="/judge" element={<Judge />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/signup" element={<SignUP />} />
   
  </Routes>
  <Footer1 />
  <Footer2 />
</Router>
);
}

export default App;
