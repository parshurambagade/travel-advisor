import React from "react";
import "./header.scss";

const Header = ({ type, setType }) => {
  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setType({ type: selectedType, title: selectedType });
    console.log(selectedType);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2>Travel Advisor</h2>
      </div>
      <div className="nav-dropdown">
        <label htmlFor="filters">Filter:</label>
        <select name="filters" id="filters" onChange={handleTypeChange}>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
