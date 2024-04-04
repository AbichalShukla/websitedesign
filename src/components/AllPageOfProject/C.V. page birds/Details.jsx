import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Img1 from '../C.V. page birds/photos/b6.jpeg'
import Img2 from '../C.V. page birds/photos/b1.jpeg'
import Img3 from '../C.V. page birds/photos/b2.jpeg'
import Img4 from '../C.V. page birds/photos/b3.jpeg'
import Img5 from '../C.V. page birds/photos/b5.jpeg'
import Img6 from '../C.V. page birds/photos/b6.jpeg'
import Img7 from '../C.V. page birds/photos/b7.jpeg'
import Img8 from '../C.V. page birds/photos/b8.jpeg'
import Img9 from '../C.V. page birds/photos/b9.jpeg'
import Img10 from '../C.V. page birds/photos/b10.jpeg'
import Header from '../../Header/Header'
import Footer from '../../FooterPage/Footer'




function Details() {
  return (
    <div>
      <Header/>
            <div class="img-nav">
        <ul>
          <li class="filter"><a href=""><i class="fa-solid fa-filter"></i>Filter</a></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="">|</a></li>
          <li><Link to="/bird" id="select-opt"> Birds</Link></li>
          <li><a href="">|</a></li>
          <li><a href="" id="select-opt"> Birds </a></li>
        </ul>
      </div>
  


      {/* <!-- ================ img details ============== --> */}

      <div class="img-container">
        {/* <!-- ============img=========== --> */}
        <div class="image">
            <img src={Img1} alt=""/>
        </div>
{/* <!-- =============img details============= --> */}
        <div class="img-details">
            <p id="craft">CraftVatika</p>
            <h1 id="name-heading">Handwork Peacock Wall Hanging With Oil Lamp</h1>
            <div class="stock">
                <p id="stock">In Stock</p> <span id="sku">SKU: GBS251</span>
            </div>
            <p id="sold"> <b>5</b> sold in last <b>7</b> hours</p>
        

        <div class="price">
            <ul>
                <li id="fire"><i class="fa-solid fa-fire"></i></li>
                <li id="p1">₹ 4,800.00 INR</li>
                <li id="p2">₹ 9,500.00 INR</li>
                <li>|</li>
                <li id="p3">Save ₹ 4,700.00 INR</li>
                <li id="p4">(49% off)</li>
            </ul>
        </div>
        <p id="ship-para">Shipping calculated at checkout.</p>

        <p id="wish"><i class="fa-regular fa-heart"></i>Add to Wishlist <i class="fa-regular fa-envelope"></i> Enquiry</p>

        <div className='btn'>
        <input type='number' min="1" max="10" placeholder="0"></input><Link to="/cart"><button>Add To Cart</button></Link>
        </div>
        <Link to="/buy"><button className='btn1'>Buy Now</button></Link>
    </div>
      </div>

      <div class="share">
        <p>Share :</p>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>

      <div class="btn-review">
        <button class="review-btn" id="product">Product Details</button>
        <button class="review-btn">Reviews</button>
        <button class="review-btn">Shopping & Returns</button>
      </div>
  
      <div class="product-highlight">
        <p>👉 Product Dimensions - L x W x H (9.1 x 6 x 12.7)cm</p>
        <p>👉 Product Weight : 1.2 Kg</p>
        <p>👉 Ganesh Ganesha Ganpati Ganapathi Idol Statue God Bring prosperity and happiness to your home & Office.</p>
        <p>👉 Best For Car dashboard, Return gifts, Diwali gifts, Ganesh Chaturthi, Baby shower, house warming, Home decor, Festivals.</p>
        <p>👉 This work of art will be a true focal point wherever it’s displayed. Bring this classy eye-catching master showpiece to your home to make your interior more beautiful.</p>
        <p>👉 Each direction of Ganesha’s trunk signifies a different effect and meaning. The trunk facing in the left direction is the most preferred direction for the home which is believed to bring positive energies.</p>
      </div>







      {/* <!-- ============== Related Products ================ --> */}






          <p class="related">Related Products</p>
      <div class="image-containers1">



        <div class="img-heading-details">
          <div class="img-row-1"><a href="details.html"><img src={Img2} alt="" /></a></div>
          <div class="img-para">
            <p>Resin Sparrow Decorative Bird Showpiece Figurine Dfmas315</p>
          </div>
            <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>


        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img3} alt=""/></div>
          <div class="img-para">
            <p>Two Parrot Hanging The Wall To Decorative</p>
          </div>
           <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>



        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img4} alt=""/></div>
          <div class="img-para">
            <p>multiple colorfull birds sitting in the branch</p>
          </div>
           <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>



        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img5} alt=""/></div>
          <div class="img-para">
            <p>Feng Shui Resin Bird Showpiece Of Owl Decorative Figurine Dfmas320</p>
          </div> 
          <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>


        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img6} alt=""/></div>
          <div class="img-para">
            <p>Handwork Peacock  Wall Hanging With Oil Lamp Gbw124</p>
          </div> 
          <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>

        
      </div>


{/* <!-- ============== Recommended Products ========== --> */}



<p class="related">Recommended Products</p>
<div class="image-containers1">


  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img7} alt=""/></div>
    <div class="img-para">
      <p>Metal Parrot Statue (Set Of 2)Dfms372</p>
    </div>
     <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>



  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img8} alt=""/></div>
    <div class="img-para">
      <p>Peacock Bird Design Brass Diya For Home Decor Dfbs420</p>
    </div>
     <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>



  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img9} alt=""/></div>
    <div class="img-para">
      <p>Peacock Bird Design Brass Diya For Home Decor Dfbs420</p>
    </div> 
    <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>


  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img10} alt=""/></div>
    <div class="img-para">
      <p>Peacock Bird Design Brass Diya For Home Decor Dfbs420</p>
    </div> 
    <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>

  
</div>






<Footer/>
    </div>
  )
}

export default Details
