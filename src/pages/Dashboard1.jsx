

import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection';
import Collection from '../components/Collection';
import GodIdols from '../components/GodIdols';
import Information from '../components/Information';
import Planters from '../components/Planters';
import Birds from '../components/Birds';
import WallArt from '../components/WallArt';
import Lamp from '../components/Lamp';
import Footer from '../components/FooterPage/Footer';


const Dashboard = () =>
{
    return(       
    <div>   
         
            <Header/>
           <HeroSection/>   
           <Collection/>        
           <Planters/>
           <Birds/>
           <WallArt/>
           <GodIdols/>  
           <Lamp/>
           <Information/>
           <Footer/>            
            
    </div>
    )
}

export default Dashboard;