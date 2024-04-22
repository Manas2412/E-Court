import './index.css';
import AboutUs from '../AboutUs/index.jsx'
import Website from '../Website/Website.jsx'
import WhyChooseUs from '../WhyChooseUs/index.jsx'
import logo from '../../Assets/LandingPage/landingpage1.JPG'
import logo1 from '../../Assets/LandingPage/Group.png'

export default () => {
    return (
        <div className='LandingPage' id='landingpage'>
            <div className='image'>
            <img className='LandingPage_logo' src={logo} alt="logo" />
            <img className='right' src={logo1} alt="logo" />
            <h2>Upload Pleadings, File Cases <br /> Online and Virtual Case <br /> Hearings</h2>
            <h1>Your one step platform <br />for online case hearings</h1>
            </div>
            <AboutUs />
            <Website />
            <WhyChooseUs /> 
        </div>
        
    )
};