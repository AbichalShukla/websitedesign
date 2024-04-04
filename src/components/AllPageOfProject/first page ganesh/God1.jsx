import React from 'react'
import './details.css'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Img1 from '../first page ganesh/photo/ganesh/ganesh.jpg'
import Img2 from '../first page ganesh/photo/ganesh/g1.jpg'
import Img3 from '../first page ganesh/photo/ganesh/r4g1.jpeg'
import Img4 from '../first page ganesh/photo/ganesh/r4g2.jpeg'
import Img5 from '../first page ganesh/photo/ganesh/r4g3.jpeg'
import Img6 from '../first page ganesh/photo/ganesh/r4g4.jpeg'
import Img7 from '../first page ganesh/photo/ganesh/r5g1.jpeg'
import Img8 from '../first page ganesh/photo/ganesh/r5g2.jpeg'
import Img9 from '../first page ganesh/photo/ganesh/r5g3.jpeg'
import Img10 from '../first page ganesh/photo/ganesh/r5g4.jpeg'


function God1() {
  return (
    <div>
      <Header/>
       <div class="img-nav">
        <ul>
          <li class="filter"><a href=""><i class="fa-solid fa-filter"></i>Filter</a></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="">|</a></li>
          <li><Link to="/god" id="select-opt"> Ganesha</Link></li>
          <li><a href="">|</a></li>
          <li><a href="" id="select-opt"> Lord Ganesha Brass Idol GBS251</a></li>
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
            <h1 id="name-heading">Lord Ganesha Brass Idol GBS251</h1>
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
          <div class="img-row-1"><a href="details.html"><img src={Img2} alt=""/></a></div>
          <div class="img-para">
            <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
          </div>
            <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>


        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img3} alt=""/></div>
          <div class="img-para">
            <p>Lord Ganesha Brass Idol For Daily Worship Gbs244</p>
          </div>
           <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>



        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img4} alt=""/></div>
          <div class="img-para">
            <p>Ganesha Sitting On Throne Resin Statue Kc299</p>
          </div>
           <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>



        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img5} alt=""/></div>
          <div class="img-para">
            <p>Brass Ganpati Idols Statue For Home Pooja Gbs242</p>
          </div> 
          <div class="img-row-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>


        <div class="img-heading-details">
          <div class="img-row-1"><img src={Img6} alt=""/></div>
          <div class="img-para">
            <p>Brass Ganesha Idol On Wooden Base With Hanging Bells Gbs241</p>
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
      <p>Metal Ganesha Figurine On Om Wall Hanging Gmw121</p>
    </div>
     <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>



  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img8} alt=""/></div>
    <div class="img-para">
      <p>Brass Leaf Ganesh Decorative Wall Hanging Gmw111</p>
    </div>
     <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>



  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img9} alt=""/></div>
    <div class="img-para">
      <p>Golden Ganesha Brass Idol Murti For Temple Gbs237</p>
    </div> 
    <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>


  <div class="img-heading-details">
    <div class="img-row-1-recommended"><img src={Img10} alt=""/></div>
    <div class="img-para">
      <p>Golden Lord Taj Ganesha Brass Puja Statue Gbs207</p>
    </div> 
    <div class="img-row-price"> 
     <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>

  
</div>

    </div>
  )
}

export default God1
