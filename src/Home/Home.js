import './Home.css';


export default function Home() {
    
  return (
        
        <div className='mainHome'>


        {/** mobile nav */}
        
        
        
  
        {/** main conent */}

        <a href="#section1"><button class="home__button--scrollSectionOne"></button></a>
        <a href="#section2"><button class="home__button--scrollSectionTwo"></button></a>

        <section className = 'section1' id="section1">
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
  
  
  
        <section className= "section2" id="section2">
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