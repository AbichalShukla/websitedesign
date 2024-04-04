import React from 'react'
import './style.css'
import Img1 from './photo/Wall2.jpg'
import Img2 from './photo/wall3.jpg'
import Img3 from './photo/wall4.jpg'
import Img4 from './photo/wall5.jpg'

function WallArt() {
  return (
    <div>
      <div className='wallArt'>
        <h2 className='pt-5'>Wall Art</h2>
      <div className='box'>
        <div className='sub-box'>
            <img src={Img1} alt=''/>
            <p>Aluminum Wall Hanging Of Goddess Durga Maa Face</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 1499.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 999.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <p class="rating-text">6570 reviews</p>
                    </div>
        </div>
        <div className='sub-box'>
            <img src={Img2} alt=''/>
            <p>Metal Invisible Book Shelves Wall Mount </p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 399.00</i> &nbsp;&nbsp;
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
            <img src={Img3} alt=''/>
            <p>Hanging Bandarwal</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 559.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 359.00  I N R</i>
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
            <img src={Img4} alt=''/>
            <p>Handmade Brass Wall Bracket Hook</p>
            <div className='price'>
            <i class="fa-solid fa-indian-rupee-sign"> 559.00</i> &nbsp;&nbsp;
            <i class="fa-solid fa-indian-rupee-sign"> 299.00  I N R</i>
            </div>

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      
                      <p class="rating-text">3220 reviews</p>
                    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WallArt
