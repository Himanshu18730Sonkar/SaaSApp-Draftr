import React from "react";
import { motion } from "framer-motion";
import HeroLeft from '../../../../assets/heroScreen.avif'
import HeroRight from '../../../../assets/heroScreen2.avif'
import ArrowOr from '../../../../assets/arrow.webp'
import Arrow from '../../../../assets/arrow2.webp'

const Hero = () => {
  return (
    <div>
      <div className="overflow-hidden bg-[#dad4ff] shadow-[inset_0_100px_80px_white,inset_0_-100px_80px_white] w-full flex flex-col items-center gap-30 py-20 pb-40 px-8 pt-40">
        <div className="max-w-4xl text-center flex items-center justify-center flex-col gap-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-1 pr-2 py-1 shadow-sm bg-white flex items-center justify-center gap-2 rounded-full min-w-77.25 shrink-0"
          >
            <span className="text-center bg-black text-white max-sm:text-md sm:font-semibold rounded-full px-3">
              New
            </span>
            <h1 className="sm:font-semibold tracking-tighter shrink-0 text-primary">
              Revolutionize your design workflow
            </h1>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-8xl text-6xl max-sm:text-4xl font-semibold tracking-tighter text-primary "
          >
            Bring ideas to life in just a few clicks.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-semibold sm:text-xl text-md text-secondary "
          >
            Design, prototype, and collaborate in real-time - all in one
            powerful platform. Elevate your creative process with seamless
            teamwork and limitless possibilities.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg font-semibold text-white shadow-[0px_4px_100px_rgb(120,102,225)] border-[#5235ef] bg-linear-to-b from-[#5336ef] to-[#836dfe] pl-8 pr-3 py-3 rounded-full flex items-center gap-2 group"
          >
            <div className="h-7 overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2">
                <span className="h-7 flex items-center">
                  Get Started•It's free
                </span>
                <span className="h-7 flex items-center">
                  Get Started•It's free
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-fit text-lg text-black bg-white rounded-full p-1 px-1 w-10">
              <div className="flex w-[200%] transition-transform duration-500 -translate-x-1/2 group-hover:translate-x-0">
                <span className="w-1/2 text-center">🡢</span>
                <span className="w-1/2 text-center">🡢</span>
              </div>
            </div>
          </motion.button>
        </div>
        <div className="flex gap-10 max-w-7xl md:max-h-120 max-md:flex-col ">
          <div className="overflow-hidden rounded-2xl w-full relative">
            <motion.img 
              animate={{ x: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={Arrow} 
              alt="Arrow"  
              className="absolute top-15 right-20 w-30 max-sm:hidden" />
            <motion.img 
              animate={{ x: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              src={ArrowOr} 
              alt="Arrow"  
              className="absolute left-30 bottom-5 w-15 max-sm:hidden" />
            <img src={HeroLeft} alt="Screen" fetchPriority="high" className="w-full h-full"/>
          </div>
          <div className="overflow-hidden rounded-2xl md:w-xl ">
            <img src={HeroRight} alt="screen" fetchPriority="high" className="w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
