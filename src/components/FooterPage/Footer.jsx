// import React from 'react'
// import '../style.css';
// import Img1 from "../photo/logo.png";
// import Img2 from "../photo/pay.png";
// import "../script.js";

// function Footer() {
//   return (
//     <div>
//       <footer className="footer" id="footer" data-section>
//     <div className="container">

//       <div className="footer-top">
//       hello

//         <ul className="footer-list">

//           <li>
//             <p className="footer-list-title">Company</p>
//           </li>

//           <li>
//             <p className="footer-list-text">
//               Find a location nearest you. See <a href="#" className="link">Our Stores</a>
//             </p>
//           </li>

//           <li>
//             <p className="footer-list-text bold">(+91) 7379906479</p>
//           </li>

//           <li>
//             <p className="footer-list-text">faizur982@gmail.com</p>
//           </li>

//         </ul>

//         <ul className="footer-list">

//           <li>
//             <p className="footer-list-title">Useful links</p>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">New Products</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Best Sellers</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Bundle & Save</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Online Gift Card</a>
//           </li>

//         </ul>

//         <ul className="footer-list">

//           <li>
//             <p className="footer-list-title">Infomation</p>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Start a Return</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Contact Us</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Shipping FAQ</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Terms & Conditions</a>
//           </li>

//           <li>
//             <a href="/#" className="footer-link">Privacy Policy</a>
//           </li>

//         </ul>

//         <div className="footer-list">

//           <p className="newsletter-title">Good emails.</p>

//           <p className="newsletter-text">
//             Enter your email below to be the first to know about new collections and product launches.
//           </p>

//           <form action="" className="newsletter-form">
//             <input type="email" name="email_address" placeholder="Enter your email address" required
//               className="email-field"/>

//             <button type="submit" className="btn btn-primary">Subscribe</button>
//           </form>

//         </div>

//       </div>

//       <div className="footer-bottom">

//         <div className="wrapper">
//           <p className="copyright">
//             &copy; 2024 codeWithFaizurRahman
//           </p>

//           <ul className="social-list">

//             <li>
//               <a href="/#" className="social-link">
//                 <ion-icon name="logo-twitter"></ion-icon>
//               </a>
//             </li>

//             <li>
//               <a href="/#" className="social-link">
//                 <ion-icon name="logo-facebook"></ion-icon>
//               </a>
//             </li>

//             <li>
//               <a href="/#" className="social-link">
//                 <ion-icon name="logo-instagram"></ion-icon>
//               </a>
//             </li>

//             <li>
//               <a href="/#" className="social-link">
//                 <ion-icon name="logo-youtube"></ion-icon>
//               </a>
//             </li>

//           </ul>
//         </div>

//         <a href="/#" className="logo">
//           <img src={Img1} width="179" height="26" loading="lazy" alt="Glowing"/>
//         </a>

//         <img src={Img2} width="313" height="28" alt="available all payment method" class="w-100" />

//       </div>

//     </div>
//   </footer>
//     </div>
//   )
// }

// export default Footer


// --------------------------FOOTER---------------------------------

import React from 'react'
import '../style.css';
import Img1 from "../photo/logo.png";
import Img2 from "../photo/pay.png";


function Footer() {
  return (
    <div>
  
<div class="footer">
        <div class="part">
          <ul>
            <li><b>About Store</b></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div class="part">
          <ul>
            <li><b>CATEGORIES</b></li>
            <li>All Collections</li>
            <li>Home Decor</li>
            <li>Idols</li>
            <li>Home fragrances</li>
            <li>Diyas</li>
            <li>Puja Articles</li>
            <li>Gift</li>
            <li>diwali</li>
          </ul>
        </div>
        <div class="part">
          <ul>
            <li><b>Help & Policies</b></li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
            <li>Cancellation & Return</li>
            <li>Terms of service</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>Refund policy</li>            
          </ul>
        </div>
        <div class="part">          
          <p className='p'><b>Newsletter</b></p>
          <p>Connect with us to get the latest news & special promotions</p>
          <textarea placeholder="Email address"></textarea>
          <button>SUBSCRIBE</button>
          <p className='p1'>Stay Connected</p>
          <a href='https://www.facebook.com/craftvatikaofficial'><i class="fa-brands fa-facebook "></i></a>
          <a href='https://twitter.com/'><i class="fa-brands fa-twitter"></i></a>
          <a href='https://www.pinterest.com/craftvatika/'><i class="fa-brands fa-pinterest"></i></a>
          <a href='https://www.instagram.com/craftvatika/'><i class="fa-brands fa-youtube"></i></a>
          <a href='https://www.youtube.com/channel/UCrMC0GV5C4WqJ0nvsIXE4Ng'><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>


    </div>
  )
}

export default Footer
