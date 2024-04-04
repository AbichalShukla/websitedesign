import React from "react";
import './style.css';
import Img1 from './photo/planter.jpg'
import Img2 from './photo/bird.jpg'
import Img3 from './photo/wall1.jpg'
import Img4 from './photo/godIdols.jpg'
import Img5 from './photo/lamp.jpg'
import { Link } from 'react-router-dom';
import BirdsDetails from "./AllPageOfProject/C.V. page birds/BirdsDetails";
import Lampdetails from "./AllPageOfProject/C.V. page Lamp/Lampdetails";



function Collection()
{
    return(
        <div>   
          

      <div className="collectionList">
        <h1>Our Collection</h1>
        <div className="AllImage"> 
          <div className="img">
           <Link to='/plants'><img src={Img1} alt=""/></Link>
            <p >Planters</p>
            
            
          </div>
          <div className="img">
          <Link to='/bird'><img src={Img2} alt=""/></Link>
            <p >Bird Figure</p>
          </div>
          <div className="img">
            <Link to='/wallArt'><img src={Img3} alt=""/></Link>
            <p>Wall Art</p>
          </div>
          <div className="img">
            <Link to='/god'><img src={Img4} alt=""/></Link>
            <p>God Idols</p>
          </div>
          <div className="img">
            <Link to="/lamp"><img src={Img5} alt=""/></Link>
            <p>Lamp</p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Collection;