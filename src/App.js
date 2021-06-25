import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar.js/Navbar";
import Products from "./Components/Products/Products";
import Sidebar from "./Components/Sidebar.js/Sidebar";
import Data from "./data/products.json";

//gives me array of objects with each object being a product
const stringData = JSON.stringify(Data);
const parsedData = JSON.parse(stringData);

function App() {
  const [products] = useState(parsedData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    brand: [],
    size: [],
    gender: [],
  });

  useEffect(() => {
    filterHandler();
  }, [
    JSON.stringify(filters.brand),
    JSON.stringify(filters.gender),
    JSON.stringify(filters.size),
  ]);

  // keeping track of all the changes in the filters
  const addToFiltersHandler = (value, type) => {
    const modifiedFilters = { ...filters };
    if (value === "none") {
      setFilters({
        ...filters,
        [`${type}`]: [],
      });
    } else {
      if (filters[`${type}`].length === 0) {
        const updatedArray = filters[`${type}`].concat(value);
        setFilters({ ...filters, [`${type}`]: updatedArray });
      } else {
        modifiedFilters[`${type}`].splice(0, 1, value);
        setFilters({ ...modifiedFilters });
      }
    }
  };

  const filterHandler = () => {
    let filteredArray = [];
    //iterating over my products
    products.forEach((product) => {
      //now i have one product
      let flag = 1; //flag to see if it passes all filters
      if (filters.brand.length > 0) {
        filters.brand.includes(product.Brand) && flag ? (flag = 1) : (flag = 0);
      }
      if (filters.size.length > 0) {
        filters.size.includes(product.Size) && flag ? (flag = 1) : (flag = 0);
      }
      if (filters.gender.length > 0) {
        filters.gender.includes(product.Gender) && flag
          ? (flag = 1)
          : (flag = 0);
      }
      if (flag === 1) {
        filteredArray.push(product);
      }
    });
    setFilteredProducts(filteredArray);
  };

  const resetFiltersHandler = () => {
    setFilters({
      brand: [],
      size: [],
      gender: [],
    });
    setFilteredProducts(products);
  };

  const handleSortLowToHigh = () => {
    const initProducts = [...filteredProducts];
    initProducts.sort(function (a, b) {
      if (a.Price < b.Price) return -1;
      if (a.Price > b.Price) return 1;
      return 0;
    });
    setFilteredProducts(initProducts);
  };

  const handleSortHighToLow = () => {
    const initProducts = [...filteredProducts];
    initProducts.sort(function (a, b) {
      if (a.Price > b.Price) return -1;
      if (a.Price < b.Price) return 1;
      return 0;
    });
    setFilteredProducts(initProducts);
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar
        addToFilter={addToFiltersHandler}
        resetAllFilters={resetFiltersHandler}
      />
      <main>
        <div className="sort-container">
          <button onClick={handleSortHighToLow}>Sort : High to Low</button>
          <button onClick={handleSortLowToHigh}>Sort : Low to High</button>
        </div>
        {filteredProducts.length === 0 ? (
          <h1>NO PRODUCT FOUND</h1>
        ) : (
          <Products products={filteredProducts} />
        )}
      </main>
    </div>
  );
}

export default App;
