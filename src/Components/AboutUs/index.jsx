import './index.css';
import logo from '../../Assets/AboutUs/About Us.png'
import logo1 from '../../Assets/AboutUs/rec1.png'
import logo2 from '../../Assets/AboutUs/about us-benifits.png'


export default () => {
    return (
        <div className='AboutUs' id='aboutus'>
            <img className='About' src={logo} alt="logo" />
            <img className='About1' src={logo1} alt="logo" />
            <img className='About2' src={logo2} alt="logo" />
            
            
        </div>
    )
};