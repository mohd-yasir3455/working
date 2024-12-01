// src/components/HeroSection.jsx
import React from "react";
import img from '../Components/images/crousal1.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 to-transparent"></div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Lets Make World a
            <strong className="block font-extrabold text-orange-500"> better place to live. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl text-gray-700">
            Join BEES Foundation with its various Helping programme to help the world 
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
