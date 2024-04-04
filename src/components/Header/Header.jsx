import React from 'react';
import '../style.css';
import Img1 from "../photo/logo2.png";
import HeaderList from './HeaderList';
import './style.css'
import { Link } from 'react-router-dom';

const Header = () =>
{
    return (        
      <div>  
 

      <div className='header1'>
          <div >
            <i class="fa-solid fa-phone"></i>  +91 6393413281           
          </div>
          <div >
            <i class="fa-regular fa-envelope fs-10"></i>abichalshukla9963@gmail.com           
          </div>
          <div className='icon'>
          <p className='mt-2'>Follow Us : 
          <a href='https://www.facebook.com/craftvatikaofficial'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://twitter.com/'><i class="fa-brands fa-twitter"></i></a>
          <a href='https://www.pinterest.com/craftvatika/'><i class="fa-brands fa-pinterest"></i></a>
          <a href='https://www.instagram.com/craftvatika/'><i class="fa-brands fa-youtube"></i></a>
          <a href='www.linkedin.com/in/abichal-shukla-8096b2232'><i class="linkden "></i></a>     

          </p>
          </div>
      </div>
      <div className='header2 bg-light'>
          <img src={Img1} style={{height:80, width:180}} className='ml-5'></img>
          <p>WELCOME TO OUR STORE</p>
          <div className='icon'>        

            <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-magnifying-glass"></i>


{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="exampleModalLabel">What are you looking for?</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="search-box">
      
        <input type="text" placeholder="Search..."/>
        <i  class="fa-solid fa-magnifying-glass"></i>
        </div>
       </div>
      
    </div>
  </div>
</div>
          <Link to="/user"><i class="fa-solid fa-user"></i></Link>          
          <i class="fa-regular fa-heart"></i>
          <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
          </div>
      </div>             
           <HeaderList/>
         
      </div>      
    )   
}

export default Header;