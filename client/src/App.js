import React, { useState, useEffect } from 'react';
import './main.scss';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';

function App() {

  let options = {
    headers:{
      "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWQzMWUzODQzYTI5M2I4ODc1NjJhOCIsImlhdCI6MTU5NTg0MTU1MSwiZXhwIjoxNTk1OTI3OTUxfQ.7R3-poUxvyISQB0jnc2fWbH-zbhGbEazhczV2dx-vh4"
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/products/", options)
      .then((response) => {
        console.log("response ", response)
      })
  }, [])
  return (
    <div className="container">
      <header>
        <div className="left_area">
          <h3>
            Shopping <span>Cart</span>
          </h3>
        </div>

      </header>

      <ProductFilter />
      <ProductList />
    </div>
  );
}

export default App;
