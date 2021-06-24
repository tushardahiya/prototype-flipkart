import React from "react";
import "./Sidebar.css";

const Sidebar = ({ addToFilter, resetAllFilters }) => {
  const handleChange = (e, type) => {
    console.log(e.target.value);
    addToFilter(e.target.value, type);
  };

  return (
    <div className="sidebar-container">
      <div className="filter-container">
        <label>FILTER BY SIZE</label>
        <select onChange={(e) => handleChange(e, "size")} name="size">
          <option value="none">None</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div className="filter-container">
        <label>FILTER BY BRAND</label>
        <select onChange={(e) => handleChange(e, "brand")} name="brand">
          <option value="none">None</option>
          <option value="nike">NIKE</option>
          <option value="reebok">REEBOK</option>
          <option value="woodland">WOODLAND</option>
          <option value="polo">POLO</option>
        </select>
      </div>
      <div className="filter-container">
        <label>FILTER BY GENDER</label>
        <select onChange={(e) => handleChange(e, "gender")} name="idealfor">
          <option value="none">None</option>
          <option value="Men">men</option>
          <option value="Women">women</option>
        </select>
      </div>
      <div className="filter-container">
        <label>REMOVE ALL FILTERS</label>
        <button onClick={resetAllFilters}>Remove</button>
      </div>
    </div>
  );
};

export default Sidebar;
