import React from "react";
import { motion } from "framer-motion";
import EarthImg from "../../../../assets/powerup/earth.webp";
import ProtectImg from "../../../../assets/powerup/protect.webp";
import CloudImg from "../../../../assets/powerup/cloud.webp";
import SlideIcon from "../../../../assets/powerup/slideic.webp";
import CircleIcon from "../../../../assets/powerup/circleic.webp";
import RocketIcon from "../../../../assets/powerup/rocketic.webp";
import FlashImg from "../../../../assets/powerup/flash.webp";
import Arrow1 from "../../../../assets/powerup/arrow1.webp";
import Arrow2 from "../../../../assets/powerup/arrow2.webp";

const FEATURES = [
  {
    feature: "Effortless design experience",
    desc: "Intuitive interface and smart tools to speed up your creative process.",
    icon: RocketIcon,
  },
  {
    feature: "Hassle-free prototyping",
    desc: "Transform static designs into interactive prototypes in just a few clicks.",
    icon: SlideIcon,
  },
  {
    feature: "One-click export & handoff",
    desc: "Generate code, export assets, and collaborate with developers effortlessly.",
    icon: CircleIcon,
  },
];

const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const Powerup = React.memo(() => {
  return (
    <div>
      <div className="lg:mx-30 md:mx-10 mx-4 my-20 px-6 md:py-30 sm:py-18 py-10 rounded-[50px] bg-black flex flex-col items-center gap-20">
        <motion.h1
          {...FADE_IN_UP}
          transition={{ duration: 0.5 }}
          className="text-6xl max-w-4xl text-white font-bold tracking-tighter text-center max-md:text-4xl"
        >
          Power up your workflow with next-gen features
        </motion.h1>
        <div className="max-w-7xl space-y-18">
          <div className="flex max-md:flex-col gap-10">
            <motion.div
              {...FADE_IN_UP}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-2 rounded-3xl bg-zinc-900 flex-1"
            >
              <div className="flex items-end overflow-hidden rounded-3xl bg-black sm:h-80 h-60 relative w-full">
                <img src={EarthImg} alt="earth" className="opacity-20 w-full" />
                <img
                  src={CloudImg}
                  alt="cloud"
                  className="absolute left-1/2 top-25 -translate-x-1/2 -translate-y-1/2 opacity-80 max-sm:w-35"
                />
                <motion.img
                  animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  src={Arrow1}
                  alt="cursor"
                  className="absolute sm:bottom-20 sm:right-20 bottom-10 right-5 w-20"
                />
                <motion.img
                  animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  src={Arrow2}
                  alt="cursor"
                  className="absolute sm:left-20 sm:bottom-20 bottom-10 left-5 w-20"
                />
              </div>
              <div className="p-8">
                <h6 className="text-2xl font-semibold tracking-tighter text-white ">
                  Cloud-based accessibility
                </h6>
                <p className="text-md font-semibold text-zinc-400">
                  Access your projects anytime, anywhere—no downloads or
                  installations needed.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...FADE_IN_UP}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-2 rounded-3xl bg-zinc-900 flex-1"
            >
              <div className="flex items-center justify-between overflow-hidden rounded-3xl bg-black sm:h-80 h-60 w-full sm:px-20 px-6">
                <img src={FlashImg} alt="earth" className="sm:w-25 w-15" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="90 0 150 100"
                  className="bg-transparent h-28 w-auto"
                >
                  <defs>
                    <path
                      id="chevron-arrow"
                      d="M 30,20 L 70,50 L 30,80"
                      fill="none"
                      stroke-width="16"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <filter
                      id="glow-blur"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="4"
                        result="blur"
                      />
                      <feComponentTransfer in="blur" result="brightBlur">
                        <feFuncA type="linear" slope="1.2" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g transform="translate(110, 50) scale(0.6) translate(-50, -50)">
                    <use href="#chevron-arrow" stroke="#333333" />
                    <motion.use 
                      href="#chevron-arrow" 
                      stroke="#9ca3af"
                      filter="url(#glow-blur)"
                      animate={{ opacity: [0, 1, 0, 0] }}
                      transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.35, 1] }}
                    />
                  </g>

                  <g transform="translate(160, 50) scale(0.8) translate(-50, -50)">
                    <use href="#chevron-arrow" stroke="#333333" />
                    <motion.use 
                      href="#chevron-arrow" 
                      stroke="#9ca3af"
                      filter="url(#glow-blur)"
                      animate={{ opacity: [0, 1, 0, 0] }}
                      transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.35, 1], delay: 1 }}
                    />
                  </g>

                  <g transform="translate(210, 50) scale(1.0) translate(-50, -50)">
                    <use href="#chevron-arrow" stroke="#333333" />
                    <motion.use 
                      href="#chevron-arrow" 
                      stroke="#9ca3af"
                      filter="url(#glow-blur)"
                      animate={{ opacity: [0, 1, 0, 0] }}
                      transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.35, 1], delay: 1.9 }}
                    />
                  </g>
                </svg>
                <img src={ProtectImg} alt="protect" className="sm:w-35 w-25" />
              </div>
              <div className="p-8">
                <h6 className="text-2xl font-semibold tracking-tighter text-white ">
                  Fast & secure performance
                </h6>
                <p className="text-md font-semibold text-zinc-400">
                  Experience lightning-fast speed with enterprise-level security
                  and version control.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-10">
            {
                FEATURES.map((feature, index)=>{
                    return(
                        <div key={feature.feature} className="flex flex-col items-start gap-4">
                            <div className=" bg-zinc-800 h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center">
                                <img src={feature.icon} alt={feature.feature} className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h6 className="text-xl font-semibold text-white tracking-tight">{feature.feature}</h6>
                                <p className="text-zinc-400 text-md font-medium">{feature.desc}</p>
                            </div>
                        </div>
                    )
                })                   
            }
          </div>
        </div>
      </div>
    </div>
  );
});

export default Powerup;
