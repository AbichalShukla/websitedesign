import React from 'react'
import '../style.css'
import Header from '../Header/Header'
import HeaderList from '../Header/HeaderList'
import Footer from '../FooterPage/Footer'
import { Link } from 'react-router-dom'
import Img1 from '../photo/Bird1.jpg'

function ParticularOrder() {
  return (
    <div>   
      <Header/>   
      <HeaderList/>  
       <div class='main'>
        <div class='sub-main1'>
            <div class="img-box">
                <img src={Img1}></img>
                <div className='icon1'>
                    <p className='mt-2'>Share : 
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </p>
                </div>
            </div>
        </div>
        <div class='sub-main2'>
            <h2>Metal Owl Bird Showpiece DFMS448</h2>
            <div class="box mt-4">
                <h4>Price </h4>
                <h4>Status</h4>
                <h4>Reviews</h4>
                <h4>Quantity</h4>
                <button>Add To Cart</button><br/>
                <button>Buy Now</button>
            </div>
        </div>
      </div>
    <Footer/>  
    </div>
  )
}

export default ParticularOrder
