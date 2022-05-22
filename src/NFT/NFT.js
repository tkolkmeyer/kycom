import './NFT.css'
import Photo from '../img/1by1.png'

export default function NftPage() {
    return (
      
    
      <div className='nftBody'>
        <div className='rowNft'>
          <div className='nftContainer'>
            <div className='nftInfo'> 
              
              <div className='imageContainer'>
                <img  className='nft' src={Photo}></img>
              </div>

              <div className='subNft'>
                <h1>Title</h1>
                <p>"this is the description off the item"</p>
              </div>            
            </div>
          </div>

          <div className='nftDescription'>
            <div className='descriptionBorder'>

              
            </div>     
          </div>
        </div>
      </div>

     
    );
}