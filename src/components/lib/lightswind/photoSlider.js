"use client"
// import React, { useEffect } from 'react'

// import gsap from 'gsap'


// //for speed of slider change the duration value ,more value == slower speed
// const photoSlider = () => {


    
   
//     window.addEventListener('wheel',(e)=>{
// if(e.deltaY > 0){
//     gsap.to('.marquee-item-right', {
//         transform: 'translateX(-100%)',
//         duration: 5,
//         repeat: -1,
//         ease: 'linear'
//     }),
//     gsap.to('.marquee-item-left', {
//         transform: 'translateX(0%)',
//         duration: 5,
//         repeat: -1,
//         ease: 'linear'
//     })
// }
// else{
//     gsap.to('.marquee-item-right', {
//         transform: 'translateX(0%)',
//         duration: 5,
//         repeat: -1,
//         ease: 'linear'
//     }),
//     gsap.to('.marquee-item-left', { 
//         transform: 'translateX(-100%)',
//         duration: 5,
//         repeat: -1,
//                 ease: 'linear'
//     })
// }
//     })
    
//   return (
//     <>
//     <div className="marquee-container h-auto sm:h-auto md:h-auto xl:h-auto   ">
//         <div className="marquee flex flex-col gap-8  !py-10">
//             <div className="marquee-item-right flex gap-8 group">
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[30vw] xl:w-[25vw] object-cover !rounded-xl !ml-[-25px] grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn4.jpeg" alt="photoSlider 1" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn3.jpeg" alt="photoSlider 2" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay.com/assets/img/group_photo/idn6.jpeg" alt="photoSlider 3" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn1.jpeg" alt="photoSlider 4" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn2.jpg" alt="photoSlider 5" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo1.jpg" alt="photoSlider 6" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo5.jpg" alt="photoSlider 7" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo6.jpg" alt="photoSlider 8" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo7.jpg" alt="photoSlider 9" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo8.jpg" alt="photoSlider 10" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl !mr-[-10rem] grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo2.jpg" alt="photoSlider 11" />
//             </div>
//             <div className="marquee-item-left translate-x-[-100%] flex gap-8 group">
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl !ml-[-25px] grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn4.jpeg" alt="photoSlider 1" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn3.jpeg" alt="photoSlider 2" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay.com/assets/img/group_photo/idn6.jpeg" alt="photoSlider 3" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn1.jpeg" alt="photoSlider 4" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay.com/assets/img/group_photo/idn2.jpg" alt="photoSlider 5" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo1.jpg" alt="photoSlider 6" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo5.jpg" alt="photoSlider 7" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo6.jpg" alt="photoSlider 8" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo7.jpg" alt="photoSlider 9" />
//                 <img className='slider-img w-[50vw] sm:w-[40vw] md:w-[22vw] xl:w-[22vw] object-cover !rounded-xl grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out'  src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo8.jpg" alt="photoSlider 10" />
//                 <img className='slider-img w-[70vw] sm:w-[60vw] md:w-[25vw] xl:w-[25vw] object-cover !rounded-xl !mr-[-10rem] grayscale group-hover:grayscale hover:grayscale-0 transition duration-300 ease-in-out' src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo2.jpg" alt="photoSlider 11" />
//             </div>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default photoSlider



import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const images = [
  "https://indhanpay.com/assets/img/group_photo/idn4.jpeg",
  "https://indhanpay.com/assets/img/group_photo/idn3.jpeg",
  "https://indhanpay.com/assets/img/group_photo/idn6.jpeg",
  "https://indhanpay.com/assets/img/group_photo/idn1.jpeg",
  "https://indhanpay.com/assets/img/group_photo/idn2.jpg",
  "https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo1.jpg",
  "https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo5.jpg",
  "https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo6.jpg",
  "https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo7.jpg",
  "https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo8.jpg",
  "https://indhanpay-public.s3.ap-south-1.amazonaws.com/photos/photo2.jpg"
];

const PhotoSlider = () => {
  const marqueeRef = useRef();
  const animRef = useRef();
  const animLeftRef = useRef();

  useEffect(() => {
    // Animate marquee-item-right
      animRef.current = gsap.to('.marquee-item-right', {
        x: '-100%',
        duration: 5,
        repeat: -1,
        ease: 'linear'
      });
      // Animate marquee-item-left
      animLeftRef.current = gsap.to('.marquee-item-left', {
        x: '0%',
        duration: 5,
        repeat: -1,
        ease: 'linear'
      });

    return () => {
      animRef.current && animRef.current.kill();
      animLeftRef.current && animLeftRef.current.kill();
    };
  }, []);

  // Pause/resume on hover
  const handleMouseEnter = () => {
    animRef.current && animRef.current.pause();
    animLeftRef.current && animLeftRef.current.pause();
  };
  const handleMouseLeave = () => {
    animRef.current && animRef.current.resume();
    animLeftRef.current && animLeftRef.current.resume();
  };

  return (
    <div className="marquee-container h-auto  max-w-7xl overflow-hidden !mx-auto group">
      <div className="marquee flex flex-col gap-8 !py-10">
        <div className="marquee-item-right flex gap-8">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`photoSlider ${idx + 1}`}
              className={
                `slider-img w-[70vw] sm:w-[60vw] ` +
                (idx % 2 === 0 ? 'md:w-[25vw] xl:w-[25vw]' : 'md:w-[15vw] xl:w-[15vw]') + (idx%3 === 0 ? ' md:w-[20vw] xl:w-[20vw]' : '') +
                ` object-cover !rounded-xl md:grayscale sm:grayscale xl:grayscale md:group-hover:grayscale sm:group-hover:grayscale xl:group-hover:grayscale scale-100 group-hover:scale-95 md:hover:grayscale-0 sm:hover:grayscale-0 xl:hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out`
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ zIndex: 1 }}
            />
          ))}
        </div>
        <div className="marquee-item-left translate-x-[-100%] flex gap-8">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`photoSlider ${idx + 1}`}
              className={
                `slider-img w-[70vw] sm:w-[60vw] ` +
                (idx % 2 === 0 ? 'md:w-[25vw] xl:w-[25vw]' : 'md:w-[15vw] xl:w-[15vw]') + (idx%3 === 0 ? ' md:w-[20vw] xl:w-[20vw]' : '') +
                ` object-cover !rounded-xl md:grayscale sm:grayscale xl:grayscale md:group-hover:grayscale sm:group-hover:grayscale xl:group-hover:grayscale scale-100 group-hover:scale-95 md:hover:grayscale-0 sm:hover:grayscale-0 xl:hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out`
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ zIndex: 1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;