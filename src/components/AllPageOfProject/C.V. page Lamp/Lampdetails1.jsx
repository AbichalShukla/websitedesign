import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Img1 from '../C.V. page Lamp/photos/led triangle wind lamp flameless.jpeg'
import Img2 from'../C.V. page Lamp/photos/limgr1.jpeg'
import Img3 from'../C.V. page Lamp/photos/limgr2.jpeg'
import Img4 from'../C.V. page Lamp/photos/limgr3.jpeg'
import Img5 from'../C.V. page Lamp/photos/limgr4.jpeg'
import Img6 from'../C.V. page Lamp/photos/limgr5.jpeg'
import Img7 from'../C.V. page Lamp/photos/limgr6.jpeg'
import Img8 from'../C.V. page Lamp/photos/rglr.jpeg'
import Img9 from'../C.V. page Lamp/photos/limgr8.jpeg'
import Img10 from'../C.V. page Lamp/photos/limgr9.jpeg'
import Img11 from'../C.V. page Lamp/photos/limgr10.jpeg'
import Img12 from'../C.V. page Lamp/photos/limgr11.jpeg'
import Img13 from'../C.V. page Lamp/photos/candle making paper lantern.jpeg'
import Img14 from'../C.V. page Lamp/photos/lantern of maya temple.jpeg'
import Img15 from'../C.V. page Lamp/photos/wood tree craft denali.jpeg'
import Img16 from'../C.V. page Lamp/photos/lamp1.jpeg'
import Img17 from'../C.V. page Lamp/photos/inch curved wooden table lamp.jpeg'
import Img18 from'../C.V. page Lamp/photos/craft wooden lamp.jpeg'
import Img19 from'../C.V. page Lamp/photos/diwali decoration img1.jpeg'
import Img20 from'../C.V. page Lamp/photos/l3.jpeg'
import Img21 from'../C.V. page Lamp/photos/l4.jpeg'
import Img22 from'../C.V. page Lamp/photos/l5.jpeg'
import Img23 from'../C.V. page Lamp/photos/l6.jpeg'
import Img24 from'../C.V. page Lamp/photos/lamp7.jpeg'
import Img25 from'../C.V. page Lamp/photos/l8.jpeg'
import Img26 from'../C.V. page Lamp/photos/crystal table lamp.jpeg'
import Img27 from'../C.V. page Lamp/photos/floor lamp decoration.jpeg'
import Img28 from'../C.V. page Lamp/photos/table lamp.jpeg'
import Img29 from'../C.V. page Lamp/photos/bamboo tea light holder.jpeg'
import Header from '../../Header/Header';
import Footer from '../../FooterPage/Footer';

function Lampdetails1() {
  return (
    <div>
      
      

{/* -----------------------------------------------MIDDLE--------------------------- */}

    <Header/>

    <div className="img-nav">
      <ul>
        <li className="filter"><a href=""><i className="fa-solid fa-filter"></i>Filter</a></li>
        <li><Link to="/">Home</Link></li>
        <li><a href="">|</a></li>
        <li><a href="" id="select-opt"> Lamp & Lights</a></li>
      </ul>
    </div>



    <div className="img-container">
      <div className="img-details">
        
        <div className="details-price TM">
          <h2>PRICE</h2>
        
        <div className="price">
          <input type="checkbox" id="price1" className="pri-detais"/>
        <label  for="price1">Below 499 INR</label>
        </div>

        <div className="price">
          <input type="checkbox" id="price2" className="pri-detais"/>
        <label for="price2">500-999 INR</label>
        </div>

        <div className="price">
          <input type="checkbox" id="price3" className="pri-detais"/>
        <label for="price3">1000-1999 INR</label>
        </div>

       <div className="price">
        <input type="checkbox" id="price4" className="pri-detais"/>
        <label for="price4">Above 2000 INR</label>
       </div>
        </div>
     

        <div className="details-size TM">
          <h2>SIZE</h2>
        
        <div className="price">
          <input type="checkbox" id="size1" className="pri-detais"/>
        <label for="size1">0-6 Inches</label>
        </div>

        <div className="price">
          <input type="checkbox" id="size2" className="pri-detais"/>
        <label for="size2">6-9 Inches</label>
        </div>

        <div className="price">
          <input type="checkbox" id="size3" className="pri-detais"/>
        <label for="size3">9-12 Inches</label>
        </div>

       <div className="price">
        <input type="checkbox" id="size4" className="pri-detais"/>
        <label for="size4">1ft- 1.5 ft</label>
       </div>

       <div className="price">
        <input type="checkbox" id="size5" className="pri-detais"/>
        <label for="size5">Above 1.5 ft</label>
       </div>
        </div>
       
       


        <div className="details-material TM">
          <h2>MATERIAL</h2>
        
        <div className="price">
          <input type="checkbox" id="material1" className="pri-detais"/>
        <label for="material1">Brass</label>
        </div>

        <div className="price">
          <input type="checkbox" id="material2" className="pri-detais"/>
        <label for="material2">Polyresin</label>
        </div>

        <div className="price">
          <input type="checkbox" id="material3" className="pri-detais"/>
        <label for="material3">Wooden</label>
        </div>

       <div className="price">
        <input type="checkbox" id="material4" className="pri-detais"/>
        <label for="material4">Metal</label>
       </div>
        </div>

        

        <div className="details-Popular-Products TM">
          <h2>Popular Products</h2>
          <div className="img-product">
            <img src={Img1} alt=""/>
          </div>

          <div className="img-para">
            <p>Led Triangle Wind Lamp FlameLess</p>
          </div>

          <div className="img-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div> <span><p>₹ 3,600.00 INR</p></span>
          </div>
        
        </div>

       
      </div>
       
      <div className="img-section">
        <div className="ganesh-heading">
          <h3>Lamp & Lights Online</h3>
        </div>

        <div className="showing-resulte">
          <ul>
            <li><a href=""><i className="fa-solid fa-bars"> </i><i className="fa-solid fa-list-ul"></i></a></li>
            <li><a href=""></a>Showing: 1-60 of 193 Results</li>
            <li><a href="">New to Old</a></li>
          </ul>
        </div>
        

        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><Link to="/LampAllDetail"><img src={Img2} alt="" /></Link></div>
            <div className="img-para">
              <p>Metal 3D Abstract Flower Mounted Wall Hanging Showpiece Dfmw325</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,450.00 INR</p></div><p>₹ 1,700.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img3} alt=""/></div>
            <div className="img-para">
              <p>16 Stars 138 Led String Light For Home Decor</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 999.00 INR</p></div><p>₹ 600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img4} alt=""/></div>
            <div className="img-para">
              <p>Bottle Cork Led String Lights For Party Decoration</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img5} alt=""/></div>
            <div className="img-para">
              <p>Decorative Battery Operated 30 Led Silver String Lights</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 9,199.00 INR</p></div><p>₹ 5,600.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img6} alt=""/></div>
            <div className="img-para">
              <p>Natural Himalayan Rock Salt Lamp Original Pink Crystal - Air Purifier With Wooden Base Lamp</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img7} alt=""/></div>
            <div className="img-para">
        <p>Brass Akhand Diya For Puja Crystal Oil Lamp Diyas</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img8} alt=""/></div>
            <div className="img-para">
              <p>Brass Crystal Akhand Diya DFBS473</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img9}alt=""/></div>
            <div className="img-para">
              <p>Himalayan Decorative Pink Rock Salt Aroma Lamp Dicr101</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>

          
        </div>






        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img10}alt=""/></div>
            <div className="img-para">
              <p>Room Table Lamp In Wooden Triangle Shaped Frame Lamp</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img11} alt=""/></div>
            <div className="img-para">
              <p>Metal Tree Of Knowledge And Life Mounted Wall Art Decor Showpiece Dfmw270</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 8,199.00 INR</p></div><p>₹ 4,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img12} alt=""/></div>
            <div className="img-para">
              <p>Metal Brown & Golden Wish Tree With Led Light Wall Hanging Showpiece Dfmw271</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img13} alt=""/></div>
            <div className="img-para">
              <p>Candle Making Paper Lantern Decoration</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>

          
        </div>












        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img14} alt=""/></div>
            <div className="img-para">
              <p>Lantern Of Maya Temple</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,400.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img15} alt=""/></div>
            <div className="img-para">
              <p>Wood Craft Denali decorative </p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img16} alt=""/></div>
            <div className="img-para">
              <p>Wooden Table Lamp Elephant Madhubani Handpainted Base Decorative Lights For</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img17} alt=""/></div>
            <div className="img-para">
              <p>Inch Curved Wooden Table Lamp </p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 9,999.00 INR</p></div><p>₹ 5,600.00 INR</p>
            </div>
          </div>

          
        </div>














        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img18} alt=""/></div>
            <div className="img-para">
              <p>Craft Wooden Table Lamp Decorative </p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,599.00 INR</p></div><p>₹ 1,000.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img19} alt=""/></div>
            <div className="img-para">
              <p>Diwali decoration Light</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,199.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img20} alt=""/></div>
            <div className="img-para">
              <p>Nine ideas how to welcome the Christmas spirit | Interior Design</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 24,199.00 INR</p></div><p>₹ 12,199.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img21} alt=""/></div>
            <div className="img-para">
              <p> Battery Operated Scented Candles With Timer Fashion Small Size</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 12,199.00 INR</p></div><p>₹ 8,199.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img22} alt=""/></div>
            <div className="img-para">
              <p>Round Metal Wall Hanging  Decor Lamp </p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,999.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img23} alt=""/></div>
            <div className="img-para">
              <p>Home Kitchen Designer Tea light </p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img24} alt=""/></div>
            <div className="img-para">
              <p>Brass Akhand Diya For Diwali Dcoration </p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,199.00 INR</p></div><p>₹ 7,00.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img25} alt=""/></div>
            <div className="img-para">
              <p>Hanging The wall Metal Wall Decor Butterfly</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 14,99.00 INR</p></div><p>₹ 1,00.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img26} alt=""/></div>
            <div className="img-para">
              <p> Cristal Table Lamp </p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,199.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img27} alt=""/></div>
            <div className="img-para">
              <p>Floor Lamp Decoration </p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,399.00 INR</p></div><p>₹ 7,99.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img28} alt=""/></div>
            <div className="img-para">
              <p>Table Lamp </p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 8,99.00 INR</p></div><p>₹ 4,99.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img29} alt=""/></div>
            <div className="img-para">
              <p>Bamboo Tea Light Holder  </p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,499.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>

          
        </div>






        
        
        
      </div>
    </div>








    <Footer/>
    </div>
  )
}

export default Lampdetails1
