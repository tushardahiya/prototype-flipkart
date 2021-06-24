import React from "react";
import "./Product.css";

const Product = ({ details }) => {
  return (
    <div className="product-container">
      <div className="title">
        <small>{details.Brand}</small>
        <p>{details.Title}</p>
      </div>

      <img src={details.img} alt="product" />

      <p className="description">{details.Description}</p>
      <div className="product-info">
        <h6>Size : {details.Size} </h6>
        <h6>Sex : {details.Gender}</h6>
        <h6> Price : {details.Price}</h6>
      </div>
    </div>
  );
};

export default Product;
