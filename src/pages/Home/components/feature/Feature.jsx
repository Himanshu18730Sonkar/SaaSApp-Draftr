import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import App1 from "../../../../assets/apps/app1.webp";
import App2 from "../../../../assets/apps/app2.webp";
import App3 from "../../../../assets/apps/app3.webp";
import App4 from "../../../../assets/apps/app4.webp";
import App5 from "../../../../assets/apps/app5.webp";
import App6 from "../../../../assets/apps/app6.webp";
import App7 from "../../../../assets/apps/app7.webp";
import App8 from "../../../../assets/apps/app8.webp";
import App9 from "../../../../assets/apps/app9.webp";
import App10 from "../../../../assets/apps/app10.webp";
import Logo from "../../../../assets/apps/craftr.webp";
import Pro from "../../../../assets/designers/profile1.webp";

const APPS = [App1, App2, App3, App4, App5, App6, App7, App8, App9, App10];

const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

const Feature = React.memo(() => {
  return (
    <div>
      <div className="flex items-center max-md:flex-col gap-18 max-w-325 mx-auto py-20  px-8">
        <div className="flex flex-col justify-center bg-[#f0f2f6] items-center max-w-2xl lg:px-30 lg:py-20 sm:px-20 sm:py-15 px-5 py-8 rounded-4xl">
          <div className="flex flex-wrap sm:gap-8 gap-4 items-center justify-center">
            {APPS.map((app, i) => (
              <img 
                key={app} 
                src={app} 
                alt="apps" 
                className="w-15" 
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="flex flex-col items-center md:w-full w-[80%] ">
            <svg
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <defs>
                <linearGradient
                  id="glowGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8e44ad" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>

              <g className="stroke-[#6C5CE7] stroke-2 opacity-20 fill-none">
                <path d="M 0 20 C 0 200, 400 200, 400 380" />
                <path d="M 160 20 C 160 200, 400 200, 400 380" />
                <path d="M 320 20 C 320 200, 400 200, 400 380" />
                <path d="M 480 20 C 480 200, 400 200, 400 380" />
                <path d="M 640 20 C 640 200, 400 200, 400 380" />
                <path d="M 800 20 C 800 200, 400 200, 400 380" />
              </g>

              <motion.g 
                animate={{ 
                  strokeDashoffset: [100, 100, -700, -700, -700],
                  opacity: [0, 1, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.1, 0.75, 0.85, 1] 
                }}
                className="stroke-[url(#glowGradient)] stroke-4 [stroke-linecap:round] fill-none [stroke-dasharray:100_1000] filter-[drop-shadow(0px_0px_5px_#fff)_drop-shadow(0px_0px_10px_#6C5CE7)]"
              >
                <path d="M 0 20 C 0 200, 400 200, 400 380" />
                <path d="M 160 20 C 160 200, 400 200, 400 380" />
                <path d="M 320 20 C 320 200, 400 200, 400 380" />
                <path d="M 480 20 C 480 200, 400 200, 400 380" />
                <path d="M 640 20 C 640 200, 400 200, 400 380" />
                <path d="M 800 20 C 800 200, 400 200, 400 380" />
              </motion.g>
            </svg>
            <img src={Logo} alt="logo" className="w-20" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="space-y-10">
          <AnimatedText
            tag="h1"
            text="One platform, unlimited integrations"
            className="text-5xl font-bold tracking-tighter max-sm:text-3xl"
          />
          <button className="px-8 sm:py-3 py-2 bg-black rounded-full group shadow-[0_2px_80px_grey]">
            <div className="h-7 overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2">
                <span className="h-7 flex items-center sm:text-lg font-semibold text-white">
                  View all integrations
                </span>
                <span className="h-7 flex items-center sm:text-lg font-semibold text-white">
                  View all integrations
                </span>
              </div>
            </div>
          </button>
          <motion.div {...FADE_IN_UP} className="space-y-5">
            <h4 className="sm:text-[20px] text-lg font-semibold leading-6">
              “Our platform empowers teams to collaborate, innovate, and bring
              ideas to life—seamlessly and effortlessly.”
            </h4>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src={Pro} alt="profile" className="h-full w-full" decoding="async" />
              </div>
              <h6 className="text-md font-semibold">Daniel Vaughn, Founder & CEO</h6>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Feature;
