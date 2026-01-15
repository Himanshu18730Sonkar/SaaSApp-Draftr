import React from "react";
import { motion } from "framer-motion";
import AppScreen from "../../../../assets/screen3.webp";
import Arrow from "../../../../assets/arrow2.webp";

const Work = () => {
  const steps = [
    {
      id: "01",
      title: "Start your project",
      desc: "Create a new design or import files with just a click. Set up your workspace effortlessly.",
    },
    {
      id: "02",
      title: "Design with ease",
      desc: "Use our intuitive drag-and-drop editor, smart tools stunning designs.",
    },
    {
      id: "03",
      title: "Export & Share",
      desc: "Easily integrate with your favorite tools to launch your project effortlessly.",
    },
  ];
  return (
    <div>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateX(0);,transform: translateY(0px); }
            50% { transform: translateX(-20px);,transform: translateY(20px); }
          }
        `}
      </style>
      <div className="flex max-md:flex-col gap-20 max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-15 md:w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            Simplify your workflow
          </motion.h1>
          <div className="sm:space-y-15 space-y-10">
            {steps.map((step, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  key={index}
                  className="flex gap-4 items-center"
                >
                  <div className="h-10 w-20 text-xl font-bold bg-sky-100 rounded-lg flex items-center justify-center ">
                    {step.id}
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-2xl font-bold text-primary ">
                      {step.title}
                    </h1>
                    <p className="text-lg font-semibold leading-6 text-secondary">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center lg:px-30 py-15 px-15 max-sm:py-6 max-sm:px-6 bg-[#f0f2f6] rounded-4xl relative">
          <img
            src={AppScreen}
            alt="screen"
            className="rounded-2xl shadow-xl w-full h-full"
          />
          <img
            src={Arrow}
            alt="arrow"
            className="absolute top-45 right-50 w-30 animate-[float_4s_ease-in-out_infinite] "
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
