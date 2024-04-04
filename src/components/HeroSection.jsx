import React from 'react';
import './style.css';
import Img1 from './photo/Shiv.jpg'
import Img2 from './photo/Walldecor.jpg'
import Img3 from './photo/candl.jpg'


function HeroSection() {
  return (
    <div>
      {/* <section className="section hero" id="home" aria-label="hero" data-section>
        <div className="container">

          <ul className="has-scrollbar">

            <li className="scrollbar-item">
              <div className="hero-card has-bg-image bg" >

                <div className="card-content">

                  <h1 className="h1 hero-title">
                    Furniture <br/>
                    Collection
                  </h1>

                  <p className="hero-text">
                    A curated assortment of functional and aesthetic furnishings designed to complement and enhance various living or working spaces.                  </p>

                  <p className="price">Starting at $7.99</p>

                  <a href="#" className="btn btn-primary">Shop Now</a>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="hero-card has-bg-image bg1" >

                <div className="card-content">

                  <h1 className="h1 hero-title">
                    Hand Bracelet <br/>
                    Collection
                  </h1>

                  <p className="hero-text">
                    Elegant array of hand bracelets, crafted with diverse materials, designs, and styles for personalized adornment. </p>

                  <p className="price">Starting at $1.49</p>

                  <a href="#" className="btn btn-primary">Shop Now</a>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="hero-card has-bg-image bg2" >

                <div className="card-content">

                  <h1 className="h1 hero-title">
                    Men Colourful <br/>
                    collection
                  </h1>

                  <p className="hero-text">
                    Diverse men's clothing range featuring vivid hues and dynamic patterns for a bold and expressive wardrobe.                  </p>

                  <p className="price">Starting at $1.99</p>

                  <a href="#" className="btn btn-primary">Shop Now</a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section> */}
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default HeroSection
