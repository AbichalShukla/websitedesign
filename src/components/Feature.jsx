import React from 'react'
import './style.css';
import Img1 from './photo/feature-1.jpg'
import Img2 from './photo/feature-2.jpg'
import Img3 from './photo/feature-3.jpg'

function Feature() {
  return (
    <div>
      <section className="section feature" aria-label="feature" data-section>
        <div className="container">

          <h2 className="h2-large section-title">Why Shop with Indecrafts?</h2>

          <ul className="flex-list">

            <li className="flex-item">
              <div className="feature-card">

                <img src={Img1} width="204" height="236" loading="lazy" alt="Guaranteed PURE"
                  className="card-icon"/>

                <h3 className="h3 card-title">Guaranteed PURE</h3>

                <p className="card-text">
                  All Grace formulations adhere to strict purity standards and will never contain harsh or toxic
                  ingredients
                </p>

              </div>
            </li>

            <li className="flex-item">
              <div className="feature-card">

                <img src={Img2} width="204" height="236" loading="lazy"
                  alt="Completely Cruelty-Free" className="card-icon"/>

                <h3 className="h3 card-title">Completely Cruelty-Free</h3>

                <p className="card-text">
                  All Grace formulations adhere to strict purity standards and will never contain harsh or toxic
                  ingredients
                </p>

              </div>
            </li>

            <li className="flex-item">
              <div className="feature-card">

                <img src={Img3} width="204" height="236" loading="lazy"
                  alt="Ingredient Sourcing" className="card-icon"/>

                <h3 className="h3 card-title">Ingredient Sourcing</h3>

                <p className="card-text">
                  All Grace formulations adhere to strict purity standards and will never contain harsh or toxic
                  ingredients
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}

export default Feature
