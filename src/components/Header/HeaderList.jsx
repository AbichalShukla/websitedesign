import React from 'react'

function HeaderList() {
  return (
    <div>
        
      <div className='header-list'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">                

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    IDOLS
                </a>                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">BUDDHA</a></li>
                    <li><a className="dropdown-item" href="#">GANESH</a></li>
                    <li><a className="dropdown-item" href="#">LAKSHMI</a></li>
                    <li><a className="dropdown-item" href="#">KRISHNA</a></li>
                    <li><a className="dropdown-item" href="#">SHIVA</a></li>
                    <li><a className="dropdown-item" href="#">RAM DARBAR</a></li>
                </ul>
                </li>
                {/* ----------------------------------------------------------- */}

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME DECOR
                </a>                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className='list'>
                    <li><a className="dropdown-item" href="#"><b>SHOWPIECES & FIGURINES</b></a></li>
                    <li><a className="dropdown-item" href="#"><b>WALL DECOR</b></a></li>
                    <li><a className="dropdown-item" href="#"><b>CANDLE & FRAGNANCES</b></a></li>
                    <li><a className="dropdown-item" href="#"><b>LAMP & LIGHTING</b></a></li>                    
                   </div>
                    <br/>
                    <div className='list'>
                    <li><a className="dropdown-item" href="#">Animal Figurines </a></li>
                    <li><a className="dropdown-item" href="#">Wall Clocks </a></li>
                    <li><a className="dropdown-item" href="#">Candles </a></li>
                    <li><a className="dropdown-item" href="#">Table Lamp </a></li>
                    
                    </div>
                    <br/>
                    <div className='list'>
                    <li><a className="dropdown-item" href="#">Bird Figurines </a></li> 
                    <li><a className="dropdown-item" href="#">Key Holder </a></li>
                    <li><a className="dropdown-item" href="#">Candle holders </a></li>                    
                    <li><a className="dropdown-item" href="#">Lighting </a></li>                    
                    </div>
                    <br/>
                    <div className='list'>
                    <li><a className="dropdown-item" href="#">Human Figurines</a></li>
                    <li><a className="dropdown-item" href="#">Home fragrances</a></li>
                    <li><a className="dropdown-item" href="#">Door Knockers & Handles</a></li>
                    </div>
                </ul>
                </li>
                {/* -------------------------------------------------- */}

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">DIYAS</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" href="#">PUJA ARTICLES</a>
                </li>

                {/* ----------------------------------------------------------- */}

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    GIFT
                </a>                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className='dropdown-item' href='#'>Gift By Ocassions</a></li>
                    <li><a className="dropdown-item" href="../Gift/GiftByRelation">Gift By Relationship</a></li>
                    
                </ul>
                </li>
                
                <li className="nav-item">
                <a className="nav-link active" href="#">BLOG</a>
                </li>

            </ul>      
            </div>
        </div>
    </nav>
    </div>
    </div>
  )
}

export default HeaderList
