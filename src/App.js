import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js/Navbar";
import Products from "./Components/Products/Products";
import Sidebar from "./Components/Sidebar.js/Sidebar";
import Data from "./data/products.json";

//gives me array of objects with each object being a product
const string = JSON.stringify(Data);
const data = JSON.parse(string);
console.log(data);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main>
        <div>details and sorting</div>
        <Products />
      </main>
    </div>
  );
}

export default App;
