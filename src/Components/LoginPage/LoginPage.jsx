import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import './Login.css'
import logo1 from "../../Assets/LoginPage/image.png";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectPath, setRedirectPath] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'judge' && password === 'judgepass') {
      setIsLoggedIn(true);
      setRedirectPath('/judge');
    } else if (username === 'lawyer' && password === 'lawyerpass') {
      setIsLoggedIn(true);
      setRedirectPath('/lawyer');
    } else if (username === 'admin' && password === 'adminpass') {
        setIsLoggedIn(true);
        setRedirectPath('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return <Navigate to={redirectPath} replace={true} />;
  }


  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  }
  
  

  return (
    <div className='Login'>
      <div className="LoginPage">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="select-container">
                <label for="state">State:</label>
                <select id="state" name="state" multiple>
                    <option value="AR">Chandigarh</option>
                    <option value="AZ">Chennai</option>
                    <option value="AL">Delhi</option>
                    <option value="AK">Mumbai</option>
                
                </select>
                </div>
                <div className="radio-container">
                {/* <label>Gender:</label> */}
                <div className='RadioButtons_group'>
                    <div className='RadioButtons'>
                        <label for="male">Advocate</label>
                        <input type="radio" id="male" name="gender" value="male" />
                    
                    </div>
                    <div className='RadioButtons'>
                        <label for="female">Judge</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        
                    </div>
                    <div className='RadioButtons'>
                        <label for="other">Admin</label>
                        <input type="radio" id="other" name="gender" value="other" />
                    </div>
                <div/>
                </div>
                
         {/* <button id="qsLoginBtn" color="primary" className="btn-margin">
          Register Now
          </button> */}
          <button type="submit">Login</button>
          </div>
        </form>
        <form onSubmit={handleClick}>
           <div>
           <button id="qsLoginBtn" color="primary" className="btn-margin">
             Register Now
           </button>
           </div>
           </form>
      </div>
      <div className='name'>
        <h1>About e-Filing</h1>
        <p>e-Filing system is a complete end to end solution developed for online filing of plaints, written statements, replies and various applications related to cases. Both Civil and Criminal cases can be filed before any High Court or District Court of the country. It is designed in Bilingual (English and local language) to reach wider group covering advocates/litigants.</p>
        <h2>e-Filing system provides several benefits;</h2>
        <ul>
          <li>Save time, money, travel of advocates and clients</li>
          <li>Obviate the need to physically visit the court</li>
          <li>Reduce the need of meetings between clients and advocates</li>
          <li>Automatic digitization of case records</li>
        </ul>
        <img src={logo1} alt="About eFiling" className="aboutImg"></img>
      </div>
    </div>
  );
};

export default LoginPage;