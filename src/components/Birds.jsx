import React from 'react'
import './style.css'
import Img1 from './photo/Bird1.jpg'
import Img2 from './photo/Bird2.jpg'
import Img3 from './photo/Bird3.jpg'
import Img4 from './photo/Bird4.jpg'

function Birds() {
  return (
    <div>
      <div className='birds'>
        <h2 className='pt-5'>Bird Figure</h2>
      <div className='box'>
        <div className='sub-box'>
            <img src={Img1} alt=''/>
            <p>Metal Owl Bird Showpiece</p>
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
        <div className='sub-box'>
            <img src={Img2} alt=''/>
            <p>Metal Kissing Pair Of Peacock</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 750.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 499.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                      <p class="rating-text">4960 reviews</p>
                    </div>
        </div>  
        <div className='sub-box'>
            <img src={Img3} alt=''/>
            <p>Metal Kissing Pair Of Swan</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 1299.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 799.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <p class="rating-text">5970 reviews</p>
                    </div>
        </div>
        <div className='sub-box'>
            <img src={Img4} alt=''/>
            <p>Brass Eagle Decorative</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 559.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 359.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      
                      <p class="rating-text">4570 reviews</p>
                    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Birds
