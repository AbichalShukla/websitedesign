import React from 'react'
import './style.css'
import Img1 from './photo/Flower1.jpg'
import Img2 from './photo/Flower2.jpg'
import Img3 from './photo/Flower3.jpg'
import Img4 from './photo/Flower4.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlantDetails from './AllPageOfProject/C.V. page plants/PlantDetails'

function Planters() {
  return (
    <div>
      <div className='palnters'>
        <h2 className='pt-5'>Planters</h2>
      <div className='box'>
        <div className='sub-box img-holder has-before hover:shine'>
            <img src={Img1} alt=''/>
            <p>Metallic Flower Pot</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 999.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 599.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <p class="rating-text">5170 reviews</p>
                    </div>

                    
        </div>
        <div className='sub-box img-holder has-before hover:shine'>
            <img src={Img2} alt=''/>
            <p>Rajwada Printed Pot</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 999.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 599.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <p class="rating-text">5170 reviews</p>
                    </div>
        </div>  
        <div className='sub-box img-holder has-before hover:shine'>
            <img src={Img3} alt=''/>
            <p>White Ceramic Flower Vase </p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 659.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 399.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                      <p class="rating-text">4570 reviews</p>
                    </div>
        </div>
        <div className='sub-box img-holder has-before hover:shine'>
            <img src={Img4} alt=''/>
            <p>Ceramic Plant container</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 599.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 259.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star-half" aria-hidden="true"></ion-icon>
                      
                      <p class="rating-text ml-4">4111 reviews</p>
                    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Planters
