import React from 'react'
import Img1 from '../photo/ring.jpg'
import '../AllPageOfProject/C.V. page birds/details.css'

function GiftByRelation() {
  return (
    <div>
      <div className='gifts'>
        <h2>Gift By Relationship</h2>
        <div className='img'>
            <img src={Img1} alt=''/>
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
      Hello
    </div>
  )
}

export default GiftByRelation
