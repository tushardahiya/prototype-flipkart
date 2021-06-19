import React from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.Id} details={product} />
      ))}
    </div>
  );
};

export default Products;
