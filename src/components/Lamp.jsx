import React from 'react'
import './style.css'
import Img1 from './photo/lamp1.jpg'
import Img2 from './photo/lamp2.jpg'
import Img3 from './photo/lamp3.jpg'
import Img4 from './photo/lamp4.jpg'

function Lamp() {
  return (
    <div>
      <div className='lamp'>
        <h2 className='pt-5'>Lamp Collection</h2>
      <div className='box'>
        <div className='sub-box'>
            <img src={Img1} alt=''/>
            <p>Wooden Table Lamp</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 459.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 299.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <p class="rating-text">3570 reviews</p>
        </div>
        </div>
        <div className='sub-box'>
            <img src={Img2} alt=''/>
            <p>Crystal Chunks Lamp </p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 759.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 499.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <p class="rating-text">4575 reviews</p>
        </div>
        </div>  
        <div className='sub-box'>
            <img src={Img3} alt=''/>
            <p>Akhand Diya Decorative Brass Crystal Oil Lamp</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 999.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 599.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <p class="rating-text">4870 reviews</p>
        </div>
        </div>
        <div className='sub-box'>
            <img src={Img4} alt=''/>
            <p>Decorative Lamp</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 359.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 249.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <p class="rating-text">4170 reviews</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Lamp
