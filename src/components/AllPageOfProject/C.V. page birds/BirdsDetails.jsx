import React from 'react'
import '../C.V. page birds/details.css'
import { Link } from 'react-router-dom'
import Img1 from '../C.V. page birds/photos/b1.jpeg'
import Img2 from '../C.V. page birds/photos/b2.jpeg'
import Img3 from '../C.V. page birds/photos/b3.jpeg'
import Img4 from '../C.V. page birds/photos/b8.jpeg'
import Img5 from '../C.V. page birds/photos/b4.jpeg'
import Img6 from '../C.V. page birds/photos/b5.jpeg'
import Img7 from '../C.V. page birds/photos/b6.jpeg'
import Img8 from '../C.V. page birds/photos/b7.jpeg'
import Img9 from '../C.V. page birds/photos/b8.jpeg'
import Img10 from '../C.V. page birds/photos/b9.jpeg'
import Img11 from '../C.V. page birds/photos/download.jpeg'
import Img from   '../C.V. page birds/photos/download 2.jpeg'
import Img12 from '../C.V. page birds/photos/b11.jpeg'
import Img13 from '../C.V. page birds/photos/b12.jpeg'
import Img14 from '../C.V. page birds/photos/b13.jpeg'
import Img15 from '../C.V. page birds/photos/b14.jpeg'
import Img16 from '../C.V. page birds/photos/b15.jpeg'
import Img17 from '../C.V. page birds/photos/b16.jpeg'
import Img18 from '../C.V. page birds/photos/b17.jpeg'
import Img19 from '../C.V. page birds/photos/b18.jpeg'
import Img20 from '../C.V. page birds/photos/b19.jpeg'
import Img21 from '../C.V. page birds/photos/b20.jpeg'
import Img22 from '../C.V. page birds/photos/b21.jpeg'
import Img23 from '../C.V. page birds/photos/b28.jpeg'
import Img24 from '../C.V. page birds/photos/b22.jpeg'
import Img25 from '../C.V. page birds/photos/b23.jpeg'
import Img26 from '../C.V. page birds/photos/b24.jpeg'
import Img27 from '../C.V. page birds/photos/b25.jpeg'
import Header from '../../Header/Header'
import Footer from '../../FooterPage/Footer'


function BirdsDetails() {
  return (
    <div>
      <Header/>
        <div class="img-nav">
      <ul>
        <li class="filter"><a href=""><i class="fa-solid fa-filter"></i>Filter</a></li>
        <li><Link to="/">Home</Link></li>
        <li><a href="">|</a></li>
        <li><a href="" id="select-opt"> Birds</a></li>
      </ul>
    </div>



    <div class="img-container">
      <div class="img-details">
        
        <div class="details-price TM">
          <h2>PRICE</h2>
        
        <div class="price">
          <input type="checkbox" id="price1" class="pri-detais"/>
        <label  for="price1">Below 499 INR</label>
        </div>

        <div class="price">
          <input type="checkbox" id="price2" class="pri-detais"/>
        <label for="price2">500-999 INR</label>
        </div>

        <div class="price">
          <input type="checkbox" id="price3" class="pri-detais"/>
        <label for="price3">1000-1999 INR</label>
        </div>

       <div class="price">
        <input type="checkbox" id="price4" class="pri-detais"/>
        <label for="price4">Above 2000 INR</label>
       </div>
        </div>


        {/* <!-- --------- --> */}

        <div class="details-size TM">
          <h2>SIZE</h2>
        
        <div class="price">
          <input type="checkbox" id="size1" class="pri-detais"/>
        <label for="size1">0-6 Inches</label>
        </div>

        <div class="price">
          <input type="checkbox" id="size2" class="pri-detais"/>
        <label for="size2">6-9 Inches</label>
        </div>

        <div class="price">
          <input type="checkbox" id="size3" class="pri-detais"/>
        <label for="size3">9-12 Inches</label>
        </div>

       <div class="price">
        <input type="checkbox" id="size4" class="pri-detais"/>
        <label for="size4">1ft- 1.5 ft</label>
       </div>

       <div class="price">
        <input type="checkbox" id="size5" class="pri-detais"/>
        <label for="size5">Above 1.5 ft</label>
       </div>
        </div>
      {/* ----------------------------------------- */}

        <div class="details-material TM">
          <h2>MATERIAL</h2>
        
        <div class="price">
          <input type="checkbox" id="material1" class="pri-detais"/>
        <label for="material1">Brass</label>
        </div>

        <div class="price">
          <input type="checkbox" id="material2" class="pri-detais"/>
        <label for="material2">Polyresin</label>
        </div>

        <div class="price">
          <input type="checkbox" id="material3" class="pri-detais"/>
        <label for="material3">Wooden</label>
        </div>

       <div class="price">
        <input type="checkbox" id="material4" class="pri-detais"/>
        <label for="material4">Metal</label>
       </div>
        </div>

        {/* ---------------------------------------------- */}

        <div class="details-Popular-Products TM">
          <h2>Popular Products</h2>
          <div class="img-product">
            <img src={Img} alt=""/>
          </div>

          <div class="img-para">
            <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
          </div>

          <div class="img-price"> 
           <div class="offer"><p>₹ 7,199.00 INR</p></div> <span><p>₹ 3,600.00 INR</p></span>
          </div>
        
        </div>

       
      </div>
       
      <div class="img-section">
        <div class="ganesh-heading">
          <h3>Birds Online</h3>
        </div>

        <div class="showing-resulte">
          <ul>
            <li><a href=""><i class="fa-solid fa-bars"> </i><i class="fa-solid fa-list-ul"></i></a></li>
            <li><a href=""></a>Showing: 1-60 of 193 Results</li>
            <li><a href="">New to Old</a></li>
          </ul>
        </div>
        
{/* 
        <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><Link to="/DetailPage"><img src={Img7} alt=""/></Link></div>
            <div class="img-para">
              <p>Resin Sparrow Decorative Bird Showpiece Figurine Dfmas315</p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 3,450.00 INR</p></div><p>₹ 1,700.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img2} alt=""/></div>
            <div class="img-para">
              <p>Two Parrot Hanging The Wall To Decorative</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 999.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img3} alt=""/></div>
            <div class="img-para">
              <p>multiple colorfull birds sitting in the branch</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img4} alt=""/></div>
            <div class="img-para">
              <p>Handwork Parrot Wall Hanging Circle </p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 9,199.00 INR</p></div><p>₹ 5,600.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img5} alt=""/></div>
            <div class="img-para">
              <p>Feng Shui Resin Bird Showpiece Of Owl Decorative Figurine Dfmas320</p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 4,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img6} alt=""/></div>
            <div class="img-para">
        <p>Handwork Peacock  Wall Hanging With Oil Lamp Gbw124</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,199.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img7} alt=""/></div>
            <div class="img-para">
              <p> Peacock  Wall Hanging With  Glow Light </p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 6,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img8} alt=""/></div>
            <div class="img-para">
              <p>Metal Parrot Statue (Set Of 2)Dfms372</p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>

          
        </div>






        
        {/* <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img9} alt=""/></div>
            <div class="img-para">
              <p>Feng Shui Resin Bird Showpiece Of Owl Decorative Figurine Dfmas320</p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img10} alt=""/></div>
            <div class="img-para">
              <p>Peacock Bird Design Brass Diya For Home Decor Dfbs420</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 4,199.00 INR</p></div><p>₹ 3,199.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img11} alt=""/></div>
            <div class="img-para">
              <p>Glass Show Piece Sparrow Sitting in Branch</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,199.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img12} alt=""/></div>
            <div class="img-para">
              <p>Metal Sparrow Sitting In The Leaves</p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,199.00 INR</p>
            </div>
          </div>

          
        </div>












        
        {/* <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img13} alt=""/></div>
            <div class="img-para">
              <p>Hanging The Wall Circle In the Sparrow Show Pies</p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,400.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img14} alt=""/></div>
            <div class="img-para">
              <p>Colourfull Sparrow In the Nest With Eggs</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img15} alt=""/></div>
            <div class="img-para">
              <p>Metal Parrot Statue (Set Of 2)Dfms372</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img16} alt=""/></div>
            <div class="img-para">
              <p>Colourfull Bird In the Wall Decorative </p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 9,999.00 INR</p></div><p>₹ 5,600.00 INR</p>
            </div>
          </div>

          
        </div>














        
        {/* <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img17} alt=""/></div>
            <div class="img-para">
              <p>Bird Owls Pair Showpiece Figurine Dfmas399</p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 1,599.00 INR</p></div><p>₹ 1,000.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img18} alt=""/></div>
            <div class="img-para">
              <p>Metal Bird Sparrow Nest Leaf With Tealight Candle Holder TMS114</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,199.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img19} alt=""/></div>
            <div class="img-para">
              <p>Peacock Shaped Brass Golden Diya For Decoration </p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 24,199.00 INR</p></div><p>₹ 12,199.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img20} alt=""/></div>
            <div class="img-para">
              <p>Vintage Round Gold Metal Birds Sculpture Home Statue Decor </p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 12,199.00 INR</p></div><p>₹ 8,199.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img21} alt=""/></div>
            <div class="img-para">
              <p>Interio Crafts Iron Bird Lantern with Bells and Wall Stand, Lantern ...
              </p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 1,999.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img22} alt=""/></div>
            <div class="img-para">
              <p>Metal Kissing Duck Swan Love Couple Bird Pair</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img23} alt=""/></div>
            <div class="img-para">
              <p>Plastic  Kissing Duck Swan Love Couple Bird Pair</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img24} alt=""/></div>
            <div class="img-para">
              <p> Colourfull Kissing Duck Swan Love Couple Bird Pair</p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 14,99.00 INR</p></div><p>₹ 1,00.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div class="image-containers1">

          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img25} alt=""/></div>
            <div class="img-para">
              <p>Wall  Colourfull Kissing Duck Swan Love Couple Bird Pair</p>
            </div>
              <div class="img-row-price"> 
             <div class="offer"><p>₹ 1,199.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img26} alt=""/></div>
            <div class="img-para">
              <p>Golden Eagle </p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 1,399.00 INR</p></div><p>₹ 7,99.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img27} alt=""/></div>
            <div class="img-para">
              <p>Metal Golden Swans Pair Decorative Showpiece</p>
            </div>
             <div class="img-row-price"> 
             <div class="offer"><p>₹ 8,99.00 INR</p></div><p>₹ 4,99.00 INR</p>
            </div>
          </div>



          <div class="img-heading-details">
            <div class="img-row-1"><img src={Img23} alt=""/></div>
            <div class="img-para">
              <p>Handpainted Iron Bird Showpiece</p>
            </div> 
            <div class="img-row-price"> 
             <div class="offer"><p>₹ 2,499.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>

          
        </div>






        
        
        
      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default BirdsDetails
