import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SearchPage from '../components/Search/SearchPage';
import ParticularOrder from '../components/Products/ParticularOrder';
import Login from '../components/LoginReg/Login';
import Signup from '../components/LoginReg/Signup';
import AddToCartPage from '../components/CartPage/AddToCartPage';
import BuyNow from '../components/BuyNowPage/BuyNow';
import GiftByRelation from '../components/Gift/GiftByRelation';
import Dashboard1 from './Dashboard1';
import Lampdetails from '../components/AllPageOfProject/C.V. page Lamp/Lampdetails';
import Lampdetails1 from '../components/AllPageOfProject/C.V. page Lamp/Lampdetails1';
import Collection from '../components/Collection';
import PlantDetails from '../components/AllPageOfProject/C.V. page plants/PlantDetails';
import Plantdetails1 from '../components/AllPageOfProject/C.V. page plants/Plantdetails1';
import BirdsDetails from '../components/AllPageOfProject/C.V. page birds/BirdsDetails';
import WallArt from '../components/AllPageOfProject/C.V. page wall/WallArt';
import WallArt1 from '../components/AllPageOfProject/C.V. page wall/WallArt1';
import God from '../components/AllPageOfProject/first page ganesh/God';
import God1 from '../components/AllPageOfProject/first page ganesh/God1';
import Details from '../components/AllPageOfProject/C.V. page birds/Details'
import SearchPage from '../components/SearchPage';



function Home() {
  return (
    <div>
    
       <BrowserRouter>
            <Routes>               
                <Route path='/' element={<Dashboard1></Dashboard1>}></Route>
                <Route path='' element={<Collection/>}></Route>  
                <Route path='/search' element={<SearchPage/>}></Route>        
              
                <Route path='' element={<ParticularOrder/>}></Route>
                <Route path='/user' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/cart' element={<AddToCartPage/>}></Route>
                <Route path='/buy' element={<BuyNow/>}></Route>
                <Route path='/#' element={<GiftByRelation/>}></Route>
                <Route path='/lampDetails' element={<Lampdetails/>}></Route>
                <Route path='/plants' element={<PlantDetails></PlantDetails>}></Route>
                <Route path='/detailOfPlant' element={<Plantdetails1/>}></Route>
                <Route path='/lamp' element={<Lampdetails1/>}></Route>
                <Route path='/LampAllDetail' element={<Lampdetails/>}></Route>
                <Route path='/bird' element={<BirdsDetails/>}></Route>
                <Route path='/DetailPage' element={<Details/>}></Route>
                <Route path='/wallArt' element={<WallArt/>}></Route>
                <Route path='/AllDetailsOfWall' element={<WallArt1/>}></Route>
                <Route path='/god' element={<God/>}></Route>
                <Route path='/detailsOfGod' element={<God1/>}></Route>
                <Route path='/plant1' element={<PlantDetails/>}></Route>               
            </Routes>      
        </BrowserRouter>  

        
    </div>
  )
}

export default Home
