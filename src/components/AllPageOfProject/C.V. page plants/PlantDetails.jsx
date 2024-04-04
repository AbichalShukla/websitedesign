import React from 'react'
import '../C.V. page plants/style.css'
import Img1  from  '../C.V. page plants/photos/detailsPlants.png'
import Img2  from  '../C.V. page plants/photos/download (5).jpeg'
import Img3  from  '../C.V. page plants/photos/img2.jpeg'
import Img4  from  '../C.V. page plants/photos/img3.jpeg'
import Img5  from  '../C.V. page plants/photos/img4.jpeg'
import Img6  from  '../C.V. page plants/photos/img5.jpeg'
import Img7  from  '../C.V. page plants/photos/img6.jpeg'
import Img8  from  '../C.V. page plants/photos/img7.jpeg'
import Img9  from  '../C.V. page plants/photos/img8.jpeg'
import Img10 from  '../C.V. page plants/photos/img9.jpeg'
import Img11 from  '../C.V. page plants/photos/img10.jpeg'
import Img12 from  '../C.V. page plants/photos/img11.jpeg'
import Img13 from  '../C.V. page plants/photos/img12.jpeg'
import Img14 from  '../C.V. page plants/photos/img13.jpeg'
import Img15 from  '../C.V. page plants/photos/img14.jpeg'
import Img16 from  '../C.V. page plants/photos/img15.jpeg'
import Img17 from  '../C.V. page plants/photos/img16.jpeg'
import Img18 from  '../C.V. page plants/photos/img17.jpeg'
import Img19 from  '../C.V. page plants/photos/img18.jpeg'
import Img20 from  '../C.V. page plants/photos/img19.jpeg'
import Img21 from  '../C.V. page plants/photos/img20.jpeg'
import Img22 from  '../C.V. page plants/photos/img21.jpeg'
import Img23 from  '../C.V. page plants/photos/img22.jpeg'
import Img24 from  '../C.V. page plants/photos/img23.jpeg'
import Img25 from  '../C.V. page plants/photos/img24.jpeg'
import Img26 from  '../C.V. page plants/photos/img25.jpeg'
import Img27 from  '../C.V. page plants/photos/img26.jpeg'
import Img28 from  '../C.V. page plants/photos/img28.jpeg'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../FooterPage/Footer'



function PlantDetails() {
  return (
    <div>
      <Header/>
      <div>
      <div className="img-nav">
      <ul>
        <li className="filter"><a href=""><i className="fa-solid fa-filter"></i>Filter</a></li>
        <li><Link to="/">Home</Link></li>
        <li><a href="">|</a></li>
        <li><a href="" id="select-opt"> Planters</a></li>
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
            <img className='Img1' src={Img1} alt=""/>
          </div>

          <div className="img-para">
            <p>Metal Peacock On Leaves Mounted Wall Hanging Showpiece Dfmw318</p>
          </div>

          <div className="img-price"> 
           <div className="offer"><p>₹ 7,199.00 INR</p></div> <span><p>₹ 3,600.00 INR</p></span>
          </div>
        
        </div>

       
      </div>
       
      <div className="img-section">
        <div className="ganesh-heading">
          <h3>Planters Online</h3>
        </div>

        <div className="showing-resulte">
          <ul>
            <li><a href="" className='anc'><i className="fa-solid fa-bars"> </i><i className="fa-solid fa-list-ul"></i></a></li>
            <li><a href="" className='anc1'></a>Showing: 1-60 of 193 Results</li>
            <li><a href="" className='anc2'>New to Old</a></li>
          </ul>
        </div>
        

        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><Link to='/detailOfPlant'><img src={Img2} alt=""/></Link></div>
            <div className="img-para">
              <p>Metal 3D Abstract Flower Mounted Wall Hanging Showpiece Dfmw325</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,450.00 INR</p></div><p>₹ 1,700.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img3}alt=""/></div>
            <div className="img-para">
              <p>Metal Green Tree Of Wisdom And Life Mounted Wall Hanging Showpiece Dfmw324</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 999.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img4} alt=""/></div>
            <div className="img-para">
              <p>Metal Peacock On Leaves Mounted Wall Hanging Showpiece Dfmw318</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img5} alt=""/></div>
            <div className="img-para">
              <p>Metal flower Ring wall hanging DFMW412</p>
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
              <p>Metal flower Ring wall hanging DFMW412</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img7} alt=""/></div>
            <div className="img-para">
        <p>Metal 3D Butterflies With Led Lights Mounted Wall Hanging Showpiece Dfmw317</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 7,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img8} alt=""/></div>
            <div className="img-para">
              <p>Metal Betel Leaf Tree With Led Light Mounted Wall Hanging Showpiece Dfmw302</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img9} alt=""/></div>
            <div className="img-para">
              <p>Metal Multicolor Tree Birds Sitting On Branches Wall Art Decor Showpiece Dfmw295</p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>

          
        </div>






        
        {/* <!-- =============== image box ================ --> */}
        
        <div className="image-containers1">

          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img10} alt=""/></div>
            <div className="img-para">
              <p>Metal Multicolor Tree Of Life Wall Hanging Showpiece Dfmw199</p>
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
              <p>Metal Leafs Wall Mounted Hanging Showpiece Dfmw386</p>
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
              <p>Metal Butterfly With Led Lights Back Mounted Wall Hanging Showpiece Dfmw227</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,400.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img15} alt=""/></div>
            <div className="img-para">
              <p>Iron Multicolor 3D Umbrella Wall Hanging Decor Showpiece</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 2,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img16} alt=""/></div>
            <div className="img-para">
              <p>Iron Multicolor 3D Butterfly Led Light Wall Decor Hanging Showpiece (Dfmw317)</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 5,199.00 INR</p></div><p>₹ 3,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img17} alt=""/></div>
            <div className="img-para">
              <p>Metal Flowers Shaped 3D Modern Wall Hanging Showpiece Dfmw149</p>
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
              <p>Metal 3D Leafs With Led Lights Back Mounted Wall Hanging Showpiece Dfmw226</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,599.00 INR</p></div><p>₹ 1,000.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img19} alt=""/></div>
            <div className="img-para">
              <p>Metal Multicolor Cut Leaf Mounted Wall Hanging Showpiece Dfmw288</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 3,199.00 INR</p></div><p>₹ 1,199.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img20} alt=""/></div>
            <div className="img-para">
              <p>Metal 3D Multicolor Leafs Mounted Wall Hanging Showpiece Dfmw282</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 24,199.00 INR</p></div><p>₹ 12,199.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img21} alt=""/></div>
            <div className="img-para">
              <p> 3D Butterfly Led Light Wall Decor Hanging Showpiece (Dfmw317)</p>
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
              <p>Round Metal Wall Decor </p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,999.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img23} alt=""/></div>
            <div className="img-para">
              <p>Tree Of Life Metal Wall Art Decor Showpiece Dfmw371</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,199.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img24} alt=""/></div>
            <div className="img-para">
              <p>Leaves in Butterfly in Wall Decor</p>
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
              <p> Brass Hanging The wall Metal Wall Decor Butterfly</p>
            </div>
              <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,199.00 INR</p></div><p>₹ 9,99.00 INR</p>
            </div>
          </div>


          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img27} alt=""/></div>
            <div className="img-para">
              <p>Mandap enterprises Iron Tino with stand, For Decoration</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 1,399.00 INR</p></div><p>₹ 1,399.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img28} alt=""/></div>
            <div className="img-para">
              <p>Stand Umbrella Candle In decorative</p>
            </div>
             <div className="img-row-price"> 
             <div className="offer"><p>₹ 8,99.00 INR</p></div><p>₹ 4,99.00 INR</p>
            </div>
          </div>



          <div className="img-heading-details">
            <div className="img-row-1"><img src={Img26} alt=""/></div>
            <div className="img-para">
              <p>Light wall Diyas In decorative In Hanging The Wall </p>
            </div> 
            <div className="img-row-price"> 
             <div className="offer"><p>₹ 2,499.00 INR</p></div><p>₹ 1,600.00 INR</p>
            </div>
          </div>          
        </div>  
        
        
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default PlantDetails
    








    
















