import './footer.css';
import logo1 from '../../Assets/Footer1/logo1.png';
import logo2 from '../../Assets/Footer1/logo2.png';
import logo3 from '../../Assets/Footer1/logo3.JPG';
import logo4 from '../../Assets/Footer1/logo4.JPG';
import logo5 from '../../Assets/Footer1/logo5.JPG';
import logo6 from '../../Assets/Footer1/logo6.JPG';

export default () => {
  return (
    <div className="footer1">
        <img className='logo1' src={logo1} alt="logo" />
        <img className='logo2' src={logo2} alt="" />
        <img className='logo3' src={logo3} alt="logo" />
        <img className='logo4' src={logo4} alt="logo" />
        <img className='logo5' src={logo5} alt="logo" />
        <img className='logo6' src={logo6} alt="logo" />
    </div>
  );
};
  
  
        
   