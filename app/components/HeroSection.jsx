"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-7 flex flex-col justify-center">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Hello, I'm
              </span>
            </p>
            <br className="lg:hidden" />
            <TypeAnimation
              sequence={[
                'Hayden',
                1000,
                'a Developer',
                1000,
                'a Designer',
                1000,
                'a Student',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '3xl', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>

          <p
            className="text-[#DAE2D6] text-lg lg:text-xl"
            style={{
              paddingTop: '25px',
              paddingBottom: '30px',
            }}
          >
            I am a computer science student at the University of Central Florida and this is my portfolio website!
          </p>

          <button
            className='transition-transform transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500 focus:outline-none'
            style={{
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
              width: '200px',
              background: 'linear-gradient(to right, red, orange)',
              boxShadow: 'inset 0 0 0 1px white', // Add a border inside the edge
            }}
          >
            Resume
          </button>
        </div>

        <div className='col-span-5 flex justify-center' style={{ maxHeight: '500px', overflow: 'hidden' }}>
          <Image
            src="/images/scubadiver.jpeg"
            alt="profile pic"
            width={500}
            height={500}
            layout="intrinsic" // Set the layout to "intrinsic" to maintain aspect ratio
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
