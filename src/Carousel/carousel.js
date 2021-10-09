// import React, { useEffect, useState } from 'react';
// // import { Image } from 'semantic-ui-react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { getimages } from '../Apicalls';

// const PhotosCarousel = () => {
//   const [banners, setBanners] = useState([]);

//   const preload = () => {
//     getimages().then((data) => {
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         setBanners(data.data);
//         console.log(data);
//       }
//     });
//   };
// console.log("Images===",banners)
//   useEffect(() => {
//     preload();
//   }, []);

//   return (
//     <Slider {...settings}>
//       {banners && banners.map(banner => (
//         <p style={ImageSize} 
//         key={banner.id}
//         >
//           <img
//             style={imageheight}
//             src={banner.MaintenanceImage}
//             // src={defaultpht}
//             alt
//             fluid
//           />
//           {/* <div className="centered-carousal">
//             <h1>
//               <span style={{ color: 'orange', opacity: 1 }}>
//                 HOME
//               </span>
//               <span>/ SHOP</span>
//             </h1>
//           </div> */}
//         </p>
//        ))} 
//     </Slider>
//   );
// };
// export default PhotosCarousel;

// const settings = {
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 4000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };
// const ImageSize = {
//   textAlign: 'center',  
//   width: '200px',
//   height: window.innerWidth <= 800 ? '' : '10px',
// };
// const imageheight = {
//   textAlign: 'center',
//   height: window.innerWidth <= 800 ? '200px' : '10%',
//   width: '10%',
// };
// // const inlineStyle = {
// //   background: '#fff',
// //   left: '50%',
// //   top: '50%',
// //   position: 'absolute',
// //   padding: '20px',
// //   transform: 'translate(-50%, -50%)',
// // };
