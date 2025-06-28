import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '../assets/ahmad.png';

function Hero() {
  return (
    <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-20 text-[#F8FAFC] min-h-[80%]">
      
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-4">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Said Ahmad</h1>
        
        <h2 className="text-xl md:text-2xl text-blue-300">
          <Typewriter
            words={['React Developer', 'UI Animator', 'WordPress Developer', 'Frontend Engineer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-sm md:text-base text-gray-300 max-w-md">
          Frontend developer with a passion for React, GSAP animations, and responsive design.
        </p>

        <a
          href="/said_cv.pdf"
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={myPhoto}
          alt="Syed Ahmad"
          className="w-52 h-52 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
