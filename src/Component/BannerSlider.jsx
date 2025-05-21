import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BannerSlider = () => {
  return (
    <div
      className="w-full h-[600px] px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/xTLrBYWC/white-abstract-background-23-2148810113.jpg')", 
      }}
    >
        <h2 className="text-4xl font-bold mb-10 text-blue-950 text-center animate-pulse ">
          Explore Popular Groups !!!
        </h2>
        

        <Swiper
        className="h-[400px]"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
         }}
        >
          <SwiperSlide>
            <div className="relative overflow-hidden h-[400px] rounded-xl shadow-xl">
              <img
                src="https://i.postimg.cc/rpWyw1GL/654935.jpg"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
               <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded-lg animate-bounce">
              <p className="text-2xl font-bold">Join the top-rated Marathon group now!</p>
              </div>
            
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-xl h-[400px] shadow-xl">
              <img
                src="https://i.postimg.cc/ncgt9shV/pngtree-person-cooking-at-the-kitchen-counter-picture-image-2625819.png"
                alt="E-learning"
                className="w-full h-full object-cover"
              />
               <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded-lg animate-bounce">
              <p className="text-2xl font-bold">Join the top-rated Cooking Crafters group now!</p>
              </div>
            </div>
          </SwiperSlide>

         
          <SwiperSlide>
            <div className="relative overflow-hidden h-[400px] rounded-xl shadow-xl">
              <img
                src="https://i.postimg.cc/v8hTHKg3/pexels-photo-6607756.jpg"
                alt="Mobile App Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded-lg animate-bounce">
              <p className="text-2xl font-bold">Join the top-rated Painting Learning group now!</p>
              </div>
            </div>
          </SwiperSlide>

        
          <SwiperSlide>
            <div className="relative overflow-hidden h-[400px] rounded-xl shadow-xl">
              <img
                src="https://i.postimg.cc/P5Ms3SMJ/pexels-photo-7849764.jpg"
                alt="Live Streaming Methods"
                className="w-full h-full object-cover"
              />
               <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded-lg animate-bounce">
              <p className="text-2xl font-bold">Join the top-rated Video Game Streaming now!</p>
              </div>
            </div>
          </SwiperSlide>

         
          <SwiperSlide>
            <div className="relative overflow-hidden h-[400px] rounded-xl shadow-xl">
              <img
                src="https://i.postimg.cc/9QFQ3Qgb/pexels-photo-694740.jpg"
                alt="Online Lessons"
                className="w-full h-full object-cover"
              />
             <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded-lg animate-bounce">
              <p className="text-2xl font-bold">Join the top-rated Book-Wormers group now!</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      
    </div>
  );
};

export default BannerSlider;

