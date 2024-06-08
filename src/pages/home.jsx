import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import maingBg from "../components/assets/mainbg.jpg";
import axios from "axios";
import "./home.css"

function home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div >
      <div>
        <Navbar/>
        <img src={maingBg} height="250px" width="100%"/>
      </div>
      <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
      </ul>
      </div>c
    </div>
  );
}

export default home;
