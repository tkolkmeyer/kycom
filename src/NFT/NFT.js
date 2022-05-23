// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
// import './NFT.css'
// import Photo from '../img/1by1.png'

// export default function NftPage() {
//   const nftData = [
//     {
//       title: "NFT 1",
//       description: "Description 1"
//     },
//     {
//       title: "NFT 2",
//       description: "Description 2"
//     },
//     {
//       title: "NFT 3",
//       description: "Description 3"
//     },
//     {
//       title: "NFT 4",
//       description: "Description 4"
//     },
//     {
//       title: "NFT 5",
//       description: "Description 5"
//     },
//   ];
//     return (
//       <div className='nftBody'>
//           <Slider
//             classNames={{ slider: "slider sliderContainer"}}
//           >
//             {nftData.map((data, index) => 
//               <div className='rowNft'>
//                 <div className='nftContainer'>
//                   <div className='nftInfo'>

//                     <div className='imageContainer'>
//                       <img  className='nft' src={Photo}></img>
//                     </div>

//                     <div className='subNft'>
//                       <h1>Title</h1>
//                       <p>{data.title}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className='nftDescription'>
//                   <div className='descriptionBorder'>
//                     {data.description}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </Slider>
//       </div>


//     );
// }