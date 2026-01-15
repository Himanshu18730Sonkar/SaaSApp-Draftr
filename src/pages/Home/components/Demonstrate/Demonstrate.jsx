import React from "react";
import { motion } from "framer-motion";
import ScreenImg from '../../../../assets/screen4.webp'
const Demonstrate = () => {
  return (
    <div className="bg-[#dad4ff] shadow-[inset_0_80px_80px_white,0_-100px_80px_white] sm:h-screen h-[75vh] overflow-hidden">
      <div className="flex flex-col sm:gap-20 gap-15 items-center max-w-7xl mx-auto px-6 sm:py-20 pt-30 ">
        <div className="flex flex-col items-center max-w-2xl text-center space-y-6">
          <h1 className="sm:text-5xl text-3xl tracking-tighter font-bold ">Take your creative workflow to the next level</h1>
          <p className="sm:text-xl text-md font-semibold text-secondary">
            Supercharge your workflow with powerful design tols and effortless
            collabration- perfect frelancers and teams
          </p>
          <div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg font-semibold text-white shadow-[0px_4px_100px_rgb(120,102,225)] border-[#5235ef] bg-linear-to-b from-[#5336ef] to-[#836dfe] pl-6 pr-1.5 py-1.5 rounded-full flex items-center gap-2 group"
            >
              <div className="h-7 overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2">
                  <span className="h-7 flex items-center">Get Started</span>
                  <span className="h-7 flex items-center">Get Started</span>
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
        </div>
        <div>
            <img src={ScreenImg} alt="screen" className="sm:rounded-4xl rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Demonstrate;
