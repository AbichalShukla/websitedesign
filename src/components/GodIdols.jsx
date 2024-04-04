import React from 'react'
import './style.css'
import Img1 from './photo/shiv1.jpg'
import Img2 from './photo/lakshmi.jpg'
import Img3 from './photo/balaji.jpg'
import Img4 from './photo/ram.jpg'


function GodIdols() {
  return (
    <div className='godIdols'>
        <h2 className='pt-5'>GOD IDOLS</h2>
        <p>God Idol for Gift</p>                   
      <div className='box'>
        <div className='sub-box'>
            <img src={Img1} alt=''/>
            <p>Shiva</p>

            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 659.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 399.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <p class="rating-text">4570 reviews</p>
        </div>

        </div>
        <div className='sub-box'>
            <img src={Img2} alt=''/>
            <p>Lakshmi Ganesh</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 559.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 349.00  I N R</i>
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
        <div className='sub-box'>
            <img src={Img3} alt=''/>
            <p>Balaji</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 759.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 449.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <p class="rating-text">4501 reviews</p>
        </div>
        </div>
        <div className='sub-box'>
            <img src={Img4} alt=''/>
            <p>Ram ji</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 859.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 499.00  I N R</i>
        </div>
        <div className="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <p class="rating-text">4874 reviews</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GodIdols
