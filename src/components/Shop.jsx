import React  from "react";
import './style.css';
import Img1 from './photo/box4.png';
import Img2 from './photo/box5.png';
import Img3 from './photo/box7.png'
import Img4 from './photo/box6.png'
import Img5 from './photo/box8.png'
import Img6 from './photo/box9.png'
import Img7 from './photo/box10.png'
import Img8 from './photo/box11.png'
import Img9 from './photo/box12.png'
import Img10 from './photo/box13.png'
import Img11 from './photo/box14.png'
import Img12 from './photo/box15.png'



const Shop = () =>
{
    return(
        <div>
          <section className="section shop" id="shop" aria-label="shop" data-section>
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Our Bestsellers</h2>

            <a href="#" className="btn-link">
              <span className="span">Shop All Products</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>

          <ul className="has-scrollbar ">

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>
                  <img src={Img1} width="540" height="720" loading="lazy"
                    alt="Facial cleanser" className="img-cover"/>

                  <span className="badge" aria-label="20% off">-20%</span>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <del className="del">$9.00</del>

                    <span className="span">$1.99</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">ENAMALLED DIYAS</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>                <img src={Img2} width="540" height="720" loading="lazy"
                    alt="Bio-shroom Rejuvenating Serum" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$8.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">RATTAN TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250, height: 300}}>
                  <img src={Img4} width="540" height="720" loading="lazy"
                    alt="Coffee Bean Caffeine Eye Cream" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$6.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">DIYA</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>                 <img src={Img3} width="540" height="720" loading="lazy"
                    alt="Facial cleanser" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$5.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">S/3 URLI LEAFS</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>                 <img src={Img5} width="540" height="720" loading="lazy"
                    alt="Coffee Bean Caffeine Eye Cream" className="img-cover"/>

                  <span className="badge" aria-label="20% off">-20%</span>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <del className="del">$9.00</del>

                    <span className="span">$2.90</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">FLORA INLAY TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>                 <img src={Img6} width="540" height="720" loading="lazy"
                    alt="Facial cleanser" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$2.99</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">CYLINDRICAL PATTERN SIDE TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section className="section shop" id="shop" aria-label="shop" data-section>
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Under $25</h2>

            <a href="#" className="btn-link">
              <span className="span">Shop All Products</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>

          <ul className="has-scrollbar">

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>                <img src={Img7} width="540" height="720" loading="lazy"
                    alt="Facial cleanser" className="img-cover"/>

                  <span className="badge" aria-label="20% off">-20%</span>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <del className="del">$9.00</del>

                    <span className="span">$5.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">ANTIQUE BRASS DRINK TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250,height: 300}}>                 <img src={Img8} width="540" height="720" loading="lazy"
                    alt="Bio-shroom Rejuvenating Serum" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$8.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">RIBBED BLACK SIDE TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250 ,height: 300}}>                <img src={Img9} width="540" height="720" loading="lazy"
                    alt="Coffee Bean Caffeine Eye Cream" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$4.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">GOLD CONE TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250, height: 300}}>
                  <img src={Img10} width="540" height="720" loading="lazy"
                    alt="Facial cleanser" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$2.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">SATURN SIDE TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250, height: 300}}>
                  <img src={Img11} width="540" height="720" loading="lazy"
                    alt="Coffee Bean Caffeine Eye Cream" className="img-cover"/>

                  <span className="badge" aria-label="20% off">-20%</span>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <del className="del">$3.00</del>

                    <span className="span">$9.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">MODERN PATTERN SIDE TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">

                <div className="card-banner img-holder" style={{width: 250, height: 300}}>
                  <img src={Img12} width="540" height="720" loading="lazy"
                    alt="Facial cleanser" className="img-cover"/>

                  <div className="card-actions">

                    <button className="action-btn" aria-label="add to cart">
                      <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="add to whishlist">
                      <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="compare">
                      <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                    </button>

                  </div>
                </div>

                <div className="card-content">

                  <div className="price">
                    <span className="span">$9.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">TALL GOLDEN TABLE</a>
                  </h3>

                  <div className="card-rating">

                    <div className="rating-wrapper" aria-label="5 start rating">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <p className="rating-text">5170 reviews</p>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      
        </div>
    )
}

export default Shop;