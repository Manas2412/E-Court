import React, { useState } from "react";
import "./Header.css";
import logo1 from "../../Assets/Header/DepartmentOfJustice.png";
import logo2 from "../../Assets/Header/G20.png";
import logo3 from "../../Assets/Header/AzadiKaAmritMahotsav.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="main-header">
      <div className="top-banner">
        <div className="left-section">
          <div className="ministry-container">
            <div className="left-class">
              <p>भारत सरकार     विधि और न्याय मंत्रालय</p>
              {/* <p>विधि और न्याय मंत्रालय</p> */}
            </div>
            <div className="right-class">
              <p>Government of India     Ministry of Law & Justice</p>
              {/* <p>Ministry of Law & Justice</p> */}
            </div>
          </div>
          {/* <img src={logo1} alt="Department of Justice" className="logo"/> */}
          {/* <span className="ministry-text">MINISTRY OF LAW AND JUSTICE, GOVERNMENT OF INDIA</span> */}
        </div>
        <div className="right-section">
        <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="query"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
    </nav>

          {/* <button className="search-button">🔍</button> */}
          {/* <button className="profile-button">👤 Login</button> */}
          {isLoggedIn ? (
            <button className="logout-button" onClick={handleLogoutClick}>
              Logout
            </button>
          ) : (
            // Using an anchor tag to open the login page in a new tab
            <a
              href="/login"
              rel="noopener noreferrer"
              className="login-button"
            >
              Login
            </a>
          )}
          {/* <button className="language-button">ENGLISH</button> */}
        </div>
      </div>
      <div className="bottom-banner">
        <img src={logo1} alt="Department of Justice" className="logo" />
        {/* <img src={logo2} alt="G20 Logo" className="g20-logo" /> */}
        <img src={logo3} alt="Azadi Ka Amrit Mahotsav" className="azadi-logo" />
      </div>
      {/* <div className="navbar">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/" className="nav-item">
          About Us
        </a>
        <a href="/" className="nav-item">
          Administration of Justice
        </a>
        <a href="/" className="nav-item">
          National Mission
        </a>
        <a href="/" className="nav-item">
          eCourtsMMP
        </a>
        <a href="/" className="nav-item">
          Access to Justic
        </a>
        <a href="/" className="nav-item">
          Samvidhan@75
        </a>
        <a href="/" className="nav-item">
          Media Corner
        </a>
      </div> */}
      <div className="yellow-line" />
    </div>
  );
}

export default Header;
