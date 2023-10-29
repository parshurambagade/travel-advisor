import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.scss";
import SearchBar from './SearchBar';

const Header = ( {setCoordinates}) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Travel Advisor</h2>
      </div>

      <div className="searchbar">
        <SearchBar setCoordinates={setCoordinates} />
      </div>
      
      <div className="nav-buttons">
        {isAuthenticated ? <button className="logout-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> : <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>}
      
      
      </div>
    </div>
  );
};

export default Header;
