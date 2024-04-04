import React from 'react'
import './details.css'
import { Link } from 'react-router-dom';
import Img1 from '../C.V. page wall/photos/w8.jpeg'
import Img2 from '../C.V. page wall/photos/w15.jpeg'
import Img3 from '../C.V. page wall/photos/w16.jpeg'
import Img4 from '../C.V. page wall/photos/w17.jpeg'
import Img5 from '../C.V. page wall/photos/w18.jpeg'
import Img6 from '../C.V. page wall/photos/w19.jpeg'
import Img7 from '../C.V. page wall/photos/w20.jpeg'
import Img8 from '../C.V. page wall/photos/w21.jpeg'
import Img9 from '../C.V. page wall/photos/w22.jpeg'
import Img10 from '../C.V. page wall/photos/w23.jpeg'
import Header from '../../Header/Header'
import Footer from '../../FooterPage/Footer'

function WallArt1() {
  return (
    <div>
      <Header/>
      <div className="img-nav">
        <ul>
          <li className="filter"><a href=""><i className="fa-solid fa-filter"></i>Filter</a></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="">|</a></li>
          <li><Link to="/wallArt" id="select-opt"> Walls</Link></li>
          <li><a href="">|</a></li>
          <li><a href="" id="select-opt"> Walls Decotation</a></li>
        </ul>
      </div>
  


      {/* <!-- ================ img details ============== --> */}

      <div className="img-container">
        {/* <!-- ============img=========== --> */}
        <div className="image">
            <img src={Img1} alt=""/>
        </div>
{/* <!-- =============img details============= --> */}
        <div className="img-details">
            <p id="craft">CraftVatika</p>
            <h1 id="name-heading">Metal Multicolor Tree Birds Sitting On Branches Wall Art Decor Showpiece Dfmw295</h1>
            <div className="stock">
                <p id="stock">In Stock</p> <span id="sku">SKU: GBS251</span>
            </div>
            <p id="sold"> <b>5</b> sold in last <b>7</b> hours</p>
        

        <div className="price">
            <ul>
                <li id="fire"><i className="fa-solid fa-fire"></i></li>
                <li id="p1">₹ 4,800.00 INR</li>
                <li id="p2">₹ 9,500.00 INR</li>
                <li>|</li>
                <li id="p3">Save ₹ 4,700.00 INR</li>
                <li id="p4">(49% off)</li>
            </ul>
        </div>
        <p id="ship-para">Shipping calculated at checkout.</p>

        <p id="wish"><i className="fa-regular fa-heart"></i>Add to Wishlist <i className="fa-regular fa-envelope"></i> Enquiry</p>

        <div className='btn'>
        <input type='number' min="1" max="10" placeholder="0"></input><Link to="/cart"><button>Add To Cart</button></Link>
        </div>
        <Link to="/buy"><button className='btn1'>Buy Now</button></Link>
    </div>
      </div>

      <div className="share">
        <p>Share :</p>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>

      <div className="btn-review">
        <button className="review-btn" id="product">Product Details</button>
        <button className="review-btn">Reviews</button>
        <button className="review-btn">Shopping & Returns</button>
      </div>
  
      <div className="product-highlight">
        <p>👉 Product Dimensions - L x W x H (9.1 x 6 x 12.7)cm</p>
        <p>👉 Product Weight : 1.2 Kg</p>
        <p>👉 Ganesh Ganesha Ganpati Ganapathi Idol Statue God Bring prosperity and happiness to your home & Office.</p>
        <p>👉 Best For Car dashboard, Return gifts, Diwali gifts, Ganesh Chaturthi, Baby shower, house warming, Home decor, Festivals.</p>
        <p>👉 This work of art will be a true focal point wherever it’s displayed. Bring this classy eye-catching master showpiece to your home to make your interior more beautiful.</p>
        <p>👉 Each direction of Ganesha’s trunk signifies a different effect and meaning. The trunk facing in the left direction is the most preferred direction for the home which is believed to bring positive energies.</p>
      </div>







      {/* <!-- ============== Related Products ================ --> */}






          <p className="related">Related Products</p>
      <div className="image-containers1">



        <div className="img-heading-details">
          <div className="img-row-1"><a href="details.html"><img src={Img2} alt=""/></a></div>
          <div className="img-para">
            <p>Iron Multicolor 3D Butterfly Led Light Wall Decor Hanging Showpiece (Dfmw317)</p>
          </div>
            <div className="img-row-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>


        <div className="img-heading-details">
          <div className="img-row-1"><img src={Img3} alt=""/></div>
          <div className="img-para">
            <p>Metal Flowers Shaped 3D Modern Wall Hanging Showpiece Dfmw149</p>
          </div>
           <div className="img-row-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>



        <div className="img-heading-details">
          <div className="img-row-1"><img src={Img4} alt=""/></div>
          <div className="img-para">
            <p>Metal 3D Leafs With Led Lights Back Mounted Wall Hanging Showpiece Dfmw226</p>
          </div>
           <div className="img-row-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>



        <div className="img-heading-details">
          <div className="img-row-1"><img src={Img5} alt=""/></div>
          <div className="img-para">
            <p>Metal Multicolor Cut Leaf Mounted Wall Hanging Showpiece Dfmw288</p>
          </div> 
          <div className="img-row-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>


        <div className="img-heading-details">
          <div className="img-row-1"><img src={Img6} alt=""/></div>
          <div className="img-para">
            <p>Metal 3D Multicolor Leafs Mounted Wall Hanging Showpiece Dfmw282</p>
          </div> 
          <div className="img-row-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
          </div>
        </div>

        
      </div>


{/* <!-- ============== Recommended Products ========== --> */}



<p className="related">Recommended Products</p>
<div className="image-containers1">


  <div className="img-heading-details">
    <div className="img-row-1-recommended"><img src={Img7} alt=""/></div>
    <div className="img-para">
      <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
    </div>
     <div className="img-row-price"> 
     <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>



  <div className="img-heading-details">
    <div className="img-row-1-recommended"><img src={Img8} alt=""/></div>
    <div className="img-para">
      <p> 3D Butterfly Led Light Wall Decor Hanging Showpiece (Dfmw317)</p>
    </div>
     <div className="img-row-price"> 
     <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>



  <div className="img-heading-details">
    <div className="img-row-1-recommended"><img src={Img9} alt=""/></div>
    <div className="img-para">
      <p>Tree Of Life Metal Wall Art Decor Showpiece Dfmw371</p>
    </div> 
    <div className="img-row-price"> 
     <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>


  <div className="img-heading-details">
    <div className="img-row-1-recommended"><img src={Img10} alt=""/></div>
    <div className="img-para">
      <p>Leaves in Butterfly in Wall Decor</p>
    </div> 
    <div className="img-row-price"> 
     <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
    </div>
  </div>

  
</div>
<Footer/>
    </div>
  )
}

export default WallArt1
