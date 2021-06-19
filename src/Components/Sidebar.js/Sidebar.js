import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ byBrand, bySex, bySize, resetAllFilters }) => {
  const handleChange = (e, type) => {
    if (type === "size") {
      bySize(e.target.value);
    } else if (type === "brand") {
      byBrand(e.target.value);
    } else if (type === "sex") {
      bySex(e.target.value);
    }
  };

  return (
    <div className="sidebar-container">
      <div className="filter-container">
        <label>FILTER BY SIZE</label>
        <select onChange={(e) => handleChange(e, "size")} name="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div className="filter-container">
        <label>FILTER BY BRAND</label>
        <select onChange={(e) => handleChange(e, "brand")} name="brand">
          <option value="nike">NIKE</option>
          <option value="reebok">REEBOK</option>
          <option value="woodland">WOODLAND</option>
          <option value="polo">POLO</option>
        </select>
      </div>
      <div className="filter-container">
        <label>FILTER BY Sex</label>
        <select onChange={(e) => handleChange(e, "sex")} name="idealfor">
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
