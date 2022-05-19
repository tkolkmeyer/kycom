
import './App.css';
import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink } from 'react-router-dom';
import Home from "./Home/home.js";
import NftPage from './NFT/NFT.js';
import Wav from './Wav/Wav.js';
import Etc from './Etc/etc';



const About = () => <div className="card about">About</div>;
const Contact = () => <div className="card contact">Contact</div>;

const App = () => (
  <>

    {/** mobile nav */}
        
    <input class="menu-btn" id="active" type="checkbox"></input>
        
        
        <div class="wrapper">
          <ul class = "menu">
            <NavLink to="/" end> <li> Home </li> </NavLink>
            <NavLink to="nftPage" end> <li> NFT </li> </NavLink>
            <NavLink to="wav" end> <li> .Wav </li> </NavLink>
            <NavLink to="etc" end> <li> Etc </li> </NavLink>
          </ul>
        </div>
        
        
  
        {/** main conent */}

    <SlideRoutes>
      <Route path="/" element={<Home />} />
      <Route path="nftPage" element={<NftPage />} />
      <Route path="wav" element={<Wav />} />
      <Route path="etc" element={<Etc />} />
      
    </SlideRoutes>
  </>
);

export default App;