import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const OfferSection = () => {
    return (
         <div className="flex flex-col max-w-7xl md:flex-row items-center justify-between p-8 bg-white min-h-screen">
      
      <div className="w-full md:w-1/2 flex h-[600px] justify-center mb-6 md:mb-0">
        <img
          src="https://i.postimg.cc/8zDR3hmf/pexels-photo-9304003.jpg"
          alt="Adventurers"
          className="max-w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-green-900">We Offer the Best</h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          <Typewriter
            words={[
              "Painting Diaries",
              "Adventurous Hiking & Marathon",
              "Trained Guidence on Cooking",
              "Help to avoid Writing-block",
              "Custom Packages for Video game Streaming",
              "Complete Guidence on Photography Skills"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="mt-4 text-gray-600">
            Whether it's painting, coding, gardening, or playing music—every hobby is a doorway to creativity, peace, and self-growth.
Surround yourself with passion, explore your spark, and let your hobbies become the heartbeat of your happiest moments.
          </p>
      </div>
    </div>
  );
};

export default OfferSection;
