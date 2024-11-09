"use client"
import React, { useRef } from 'react';
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden mt-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
          background: 'linear-gradient(to bottom, white, #f3f4f6)',
        }}
      />
      
      <div className="relative z-10 w-full min-h-screen">
        <BackgroundBeamsWithCollision containerRef={containerRef}>
          <div className="flex flex-col items-center justify-center h-screen text-center">
            <div className="flex flex-col overflow-hidden">
              <ContainerScroll
                ref={containerRef}
                titleComponent={
                  <>
                    <h1 className="text-6xl font-bold text-gray-800">
                      Take your buisness to new horizons
                    </h1>
                    <h1 className="text-6xl font-bold text-gray-800">
                      With <span className='text-orange-300'>Quite Good</span>
                    </h1>
                    <p className="mt-7 font-semibold text-xl text-gray-600">
                      Get the best beam tracking services in the world with our state-of-the-art, cutting-edge beam detection technology.
                    </p>
                    <div className="mt-4 space-x-4">
                      <button  className="text-white items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2  mb-4">Buy now</button>
                      <button className="px-6 py-2 bg-white text-black border rounded-md border-gray-300">Explore beams</button>
                    </div>
                  </>
                }
              >
                <Image
                  src={`/hero.png`}
                  alt="hero"
                  height={720}
                  width={1400}
                  className="mx-auto rounded-2xl object-cover h-full object-left-top"
                  draggable={false}
                />
              </ContainerScroll>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </section>
  )
}