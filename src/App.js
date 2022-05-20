
import './App.css';
import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink } from 'react-router-dom';
import Home from "./Home/home.js";
import NftPage from './NFT/NFT.js';
import Wav from './Wav/Wav.js';
import Etc from './Etc/etc';

const App  = () => {

  
  

  return(
    <>

      {/** mobile nav */}
          
      <input class="menu-btn" id="active" type="checkbox"  ></input>
          
          
        <div class="wrapper">
          <ul class = "menu">
            <NavLink to="/" end> <li class="menuItem"> Home </li> </NavLink>
            <NavLink to="nftPage" end> <li class="menuItem"> NFT </li> </NavLink>
            <NavLink to="wav" end> <li class="menuItem"> .Wav </li> </NavLink>
            <NavLink to="etc" end> <li class="menuItem"> Etc </li> </NavLink>
          </ul>
        </div>
    

      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="nftPage" element={<NftPage />} />
        <Route path="wav" element={<Wav />} />
        <Route path="etc" element={<Etc />} />
      </SlideRoutes>
    
    </>
  );
};

export default App;


