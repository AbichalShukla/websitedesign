import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Img1 from '../first page ganesh/photo/p-product.png'
import Img2 from '../first page ganesh/photo/ganesh/i21.jpeg'
import Img3 from '../first page ganesh/photo/ganesh/g1.jpg'
import Img4 from '../first page ganesh/photo/ganesh/g3.jpg'
import Img5 from '../first page ganesh/photo/ganesh/g4.jpg'
import Img6 from '../first page ganesh/photo/ganesh/r3g2.jpeg'
import Img7 from '../first page ganesh/photo/ganesh/r3g.jpeg'
import Img8 from '../first page ganesh/photo/ganesh/g2.jpeg'
import Img9 from '../first page ganesh/photo/ganesh/r4g1.jpeg' 
import Img10 from '../first page ganesh/photo/ganesh/r4g2.jpeg'
import Img11 from '../first page ganesh/photo/ganesh/r4g3.jpeg'
import Img12 from '../first page ganesh/photo/ganesh/r4g4.jpeg'
import Img13 from '../first page ganesh/photo/ganesh/r5g1.jpeg'
import Img14 from '../first page ganesh/photo/ganesh/r5g2.jpeg'
import Img15 from '../first page ganesh/photo/ganesh/r5g3.jpeg'
import Img16 from '../first page ganesh/photo/ganesh/r5g4.jpeg'
import Img17 from '../first page ganesh/photo/ganesh/r6g1.jpeg'
import Img18 from '../first page ganesh/photo/ganesh/r6g4.jpeg'
import Img19 from '../first page ganesh/photo/ganesh/r6g4.jpeg'
import Img20 from '../first page ganesh/photo/ganesh/r6g4.jpeg'
import Img21 from '../first page ganesh/photo/ganesh/r7g1.jpeg'
import Img22 from '../first page ganesh/photo/ganesh/r7g2.jpeg'
import Img23 from '../first page ganesh/photo/ganesh/r7g3.jpeg'
import Img24 from '../first page ganesh/photo/ganesh/r7g4.jpeg'
import Footer from '../../FooterPage/Footer';



function God() {
  return (
    <div>
      <Header/>
      <div className="img-nav">
      <ul>
        <li className="filter"><a href=""><i className="fa-solid fa-filter"></i>Filter</a></li>
        <li><Link to="/">Home</Link></li>
        <li><a href="">|</a></li>
        <li><a href="" id="select-opt"> Ganesha</a></li>
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
        {/* <!-- --------- --> */}

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
        {/* <!-- ---------- --> */}
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

        {/* <!-- ----------- --> */}

        <div className="details-Popular-Products TM">
          <h2>Popular Products</h2>
          <div className="img-product">
            <img src={Img1} alt=""/>
          </div>

          <div className="img-para">
            <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
          </div>

          <div className="img-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div> <span><p>₹ 3,600.00 INR</p></span>
          </div>
        
        </div>

       
      </div>
       
      <div className="img-section">
        <div className="ganesh-heading">
          <h3>Ganesh Idols Online</h3>
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
            <div className="img-row-1"><Link to="/detailsOfGod"><img src={Img2} alt=""/></Link></div>
            <div className="img-para">
              <p>Lord Ganesh Sitting Brass Idol, Gts203</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,450.00 INR</p></div><p>₹ 1,700.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img3} alt=""/></div>
            <div className="img-para">
              <p>Lord Ganesha Metal Wall Hanging GMW122</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 999.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img4} alt=""/></div>
            <div className="img-para">
              <p>Resin Ganesh Idol On Swan Boat With Tealight Holder Gmas260</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img5} alt=""/></div>
            <div className="img-para">
              <p>Handwork Ganesha Wall Hanging With Oil Lamp Gbw124</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 9,199.00 INR</p></div><p>₹ 5,600.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img3} alt=""/></div>
            <div className="img-para">
              <p>Brass Ganpati Idols Statue For Home Pooja Gbs242</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 4,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img5} alt=""/></div>
            <div className="img-para">
        <p>Handwork Ganesha Wall Hanging With Oil Lamp Gbw124</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img4}alt=""/></div>
            <div className="img-para">
              <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 6,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img6} alt=""/></div>
            <div className="img-para">
              <p>Lord Ganesha Standing Position Brass Idol Gbs246</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>

          
        </div>






        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img7} alt=""/></div>
            <div className="img-para">
              <p>Decorative Long Ear Brass Ganesha Idol, Gts194</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img8} alt=""/></div>
            <div className="img-para">
              <p>Brass Blessing Buddha Idol Under sitting brass</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 8,199.00 INR</p></div><p>₹ 4,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img4} alt=""/></div>
            <div className="img-para">
              <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img5} alt=""/></div>
            <div className="img-para">
              <p>Brass Blessing Buddha Idol Under Tree Statue Bbs311</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>

          
        </div>












        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img9} alt=""/></div>
            <div className="img-para">
              <p>Lord Ganesha Brass Idol For Daily Worship Gbs244</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,400.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img10} alt=""/></div>
            <div className="img-para">
              <p>Ganesha Sitting On Throne Resin Statue Kc299</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img11} alt=""/></div>
            <div className="img-para">
              <p>Brass Ganpati Idols Statue For Home Pooja Gbs242</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img12} alt=""/></div>
            <div className="img-para">
              <p>Brass Ganesha Idol On Wooden Base With Hanging Bells Gbs241</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 9,999.00 INR</p></div><p>₹ 5,600.00 INR</p>
            </div>
          </div>

          
        </div>














        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img13} alt=""/></div>
            <div className="img-para">
              <p>Metal Ganesha Figurine On Om Wall Hanging Gmw121</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,599.00 INR</p></div><p>₹ 1,000.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img14} alt=""/></div>
            <div className="img-para">
              <p>Brass Leaf Ganesh Decorative Wall Hanging Gmw111</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,199.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img15} alt=""/></div>
            <div className="img-para">
              <p>Golden Ganesha Brass Idol Murti For Temple Gbs237</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 24,199.00 INR</p></div><p>₹ 12,199.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img16} alt=""/></div>
            <div className="img-para">
              <p>Golden Lord Taj Ganesha Brass Puja Statue Gbs207</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 12,199.00 INR</p></div><p>₹ 8,199.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img17} alt=""/></div>
            <div className="img-para">
              <p>God Ganesha Mirchi Sculpture Brass Decorative Figurine Gts168</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,999.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img18} alt=""/></div>
            <div className="img-para">
              <p>Ganpati Wearing Pagdi(Turban) Brass Car Dashboard Statue Gts167</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img19} alt=""/></div>
            <div className="img-para">
              <p>Gold Platted Ganesha In Lying Sculpture Resin Figurine Gmas240</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img20} alt=""/></div>
            <div className="img-para">
              <p>Lord Ganpati Playing Musical Instruments Figurine (Set Of 3) Gmas217-3</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 14,99.00 INR</p></div><p>₹ 1,00.00 INR</p>
            </div>
          </div>

          
        </div>







        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img21} alt=""/></div>
            <div className="img-para">
              <p>Ceramic Gold Platted Ganesha Idol Car Dashboard Statue Gmas235</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,199.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img22} alt=""/></div>
            <div className="img-para">
              <p>Long Ears Ganesha Statue With Meenakari Painted Work Gmas201</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,399.00 INR</p></div><p>₹ 7,99.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img23} alt=""/></div>
            <div className="img-para">
              <p>Lord Ganpati Small Poly-Marble Car Dashboard Decor Idol Gmas126</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 8,99.00 INR</p></div><p>₹ 4,99.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img24} alt=""/></div>
            <div className="img-para">
              <p>Decorative Ganesha Wooden Base Diya With Bells Showpiece Gbw123</p>
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

export default God
