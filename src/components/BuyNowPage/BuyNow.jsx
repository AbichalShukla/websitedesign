import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../FooterPage/Footer';

function BuyNow() {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleBuyNowClick = () => {
    // Logic for initiating the purchase, e.g., redirecting to a checkout page, or sending a request to a backend server.
    console.log(`Buying ${quantity} item(s)`);
  };

  return (
    <div>
        <Header/>
            <div className='buyNow'>
                <h1>Product Name</h1>
                <p>Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Price: $19.99</p>
                <center>
                <label >
                    Quantity:
                    <input 
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    />
                </label>
                
                <button onClick={handleBuyNowClick}>Buy Now</button></center>
            </div>
      <Footer/>
    </div>
  );
}

export default BuyNow;
