import React from "react";
import "./Product.css";

const Product = ({ details }) => {
  return (
    <div className="product-container">
      <img src={details.img} alt="product" />
      <p className="description">{details.Description}</p>
      <div className="title">
        <small>Brand : {details.Brand}</small>
        <small>Type : {details.Title}</small>
      </div>
      <div className="product-info">
        <h6>Size : {details.Size} </h6>
        <h6>Sex : {details.Gender}</h6>
      </div>
      <div className="price-container">
        <p> Price : {details.Price}</p>
      </div>
    </div>
  );
};

export default Product;
