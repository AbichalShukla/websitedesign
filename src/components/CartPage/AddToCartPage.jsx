// AddToCartPage.js
import React, { useState } from 'react';
import Header from '../Header/Header';
import HeaderList from '../Header/HeaderList';
import Footer from '../FooterPage/Footer';

const AddToCartPage = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic to add item to cart
    const newItem = {
      id: 1, // Unique identifier for the product
      name: 'Product Name', // Product name
      price: 10, // Product price
      quantity: quantity // Quantity selected by user
    };

    setCart([...cart, newItem]);
  };

  return (
    <div>
        <Header/>
        
      <div className='addToCart '>
      <h1>Add to Cart Page</h1>
      <div className='input '>
        <h2 className='mb-5'>Product Name</h2>
        
        <input 
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div>
        
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rs {item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AddToCartPage;
