export default function Lome() {
    return (
        
        <div className='mainHome'>


        {/** mobile nav */}
        
        <input class="menu-btn" id="active" type="checkbox"></input>
        
        
        <div class="wrapper">
          <ul class = "menu">
            <li> <a href="#">NFT</a></li>
            <li> <a href="#">.Wav</a></li>
            <li> <a href="#">Etc.</a></li>
          </ul>
        </div>
        
        
  
        {/** main conent */}
        <section className = 'section1'>
          <div className = "row">
            
            <div className = "col-3-of-4">
              col 3 of 4
            </div>
            
            <div className = "col-1-of-4">
              <div className = "link-container">
                <ul className ="links">
                  <li>
                    <a href="#"> nft</a>
                  </li>
                  <li>
                    <a href="#"> .wav</a>
                  </li>
                  <li>
                    <a href ="#"> etc.</a>
                  </li>
                </ul>
              </div>
            </div>
  
          </div>
        </section>
  
  
  
        <section className= "section2">
          this is section2
          
          <div className = "video">
  
          </div>
        
          
                 
          <div className='footer'>
       
  
            <div className = "link-container-2">
              <ul className ="links">
                <li>
                  <a href="#"> twitter</a>
                </li>
                <li>
                  <a href="#"> youtube</a>
                </li>
                <li>
                  <a href ="#"> instagram </a>
                </li>
              </ul>
            </div>
  
  
          </div>
          
        </section>
  
      </div>
      
    );
}