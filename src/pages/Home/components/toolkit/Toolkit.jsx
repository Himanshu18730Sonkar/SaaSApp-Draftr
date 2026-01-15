import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tool from "../../../../assets/tool.webp";
import Roadmap from "../../../../assets/roadmap.webp";
import ThemeBg from "../../../../assets/themebg.webp";
import Emoji from "../../../../assets/emoji.webp";
import AnimatedText from "../AnimatedText";
import Profile1 from "../../../../assets/designers/profile1.webp";
import Profile2 from "../../../../assets/designers/profile2.webp";
import Profile3 from "../../../../assets/designers/profile3.webp";
import Profile4 from "../../../../assets/designers/profile4.webp";
import Profile5 from "../../../../assets/designers/profile5.webp";
const Toolkit = React.memo(() => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Maps scroll progress (0 to 1) to a translateX value for a smooth parallax effect
  const translateX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Maps scroll progress (0 to 1) to a rotation value for the collaboration section
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Maps scroll progress (0 to 1) to a counter-rotation value to keep images upright
  const counterRotate = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div ref={containerRef} >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20 px-6 py-30">
        <div className="max-w-2xl text-center sm:space-y-8 space-y-4">
          <AnimatedText
            tag="h2"
            text="The ultimate toolkit for designers & teams"
            className="sm:text-5xl text-3xl font-bold tracking-tighter text-slate-900"
          />
          <p className="sm:text-xl font-semibold text-slate-600">
            Everything you need to create, prototype, and collaborate - all in a
            single, easy-to-use platform.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-1.5 rounded-2xl border-2 border-slate-200 w-full "
          >
            <div className="h-69.75 overflow-hidden rounded-2xl relative ">
              <img
                src={Tool}
                alt="tool"
                className="rounded-2xl h-full w-full"
                decoding="async"
              />
              <motion.img
                style={{ x: translateX, willChange: "transform" }}
                src={ThemeBg}
                alt="theme"
                className="absolute top-30 sm:right-40 sm:rounded-3xl right-32 sm:w-40 w-30 h-15 rounded-2xl"
                decoding="async"
              />
            </div>
            <div className="p-6 space-y-2 ">
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tighter">
                Intuitive drag & drop editor
              </h3>
              <p className="text-lg font-semibold text-slate-600 tracking-tighter leading-6">
                Create stunning designs effortlessly with a user-friendly
                interface.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="p-1.5 border-2 border-slate-200 rounded-2xl shadow-[0px_40px_80px_60px_#f6f6fa] w-full "
          >
            <div className="h-69.75 overflow-hidden rounded-2xl relative ">
              <img src={Roadmap} alt="tool" className="h-full rounded-2xl" decoding="async" />
              <motion.img
                animate={{ scale: [0.9, 1.2, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                src={Emoji}
                alt="emoji"
                className="absolute bottom-10 left-28"
                decoding="async"
              />
            </div>
            <div className="p-6 space-y-2 ">
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tighter">
                Advanced prototyping
              </h3>
              <p className="text-lg font-semibold text-slate-600 tracking-tighter leading-6">
                Turn ideas into interactive prototypes without writing a single
                line of code.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
            className="p-1.5 border-2 border-slate-200 rounded-2xl shadow-[0px_40px_80px_60px_#f6f6fa] w-full "
          >
            <div className="h-69.75 overflow-hidden rounded-2xl relative ">
              <div className="bg-linear-to-b from-[#f7f7ff] to-[#e4e6ff] h-full w-full rounded-2xl relative">
                <motion.div style={{ rotate, willChange: "transform" }} className="h-full w-full">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full "
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#e1e7fe"
                      stroke-width="2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="60"
                      fill="none"
                      stroke="#e1e7fe"
                      stroke-width="2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="40"
                      fill="none"
                      stroke="#e1e7fe"
                      stroke-width="2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="20"
                      fill="none"
                      stroke="#e1e7fe"
                      stroke-width="2"
                    />
                  </svg>
                  <motion.img
                    style={{ rotate: counterRotate, willChange: "transform" }}
                    src={Profile1}
                    alt="profile1"
                    className="absolute top-10 left-20 w-10 h-10 rounded-full"
                    decoding="async"
                  />
                  <motion.img
                    style={{ rotate: counterRotate, willChange: "transform" }}
                    src={Profile2}
                    alt="profile2"
                    className="absolute top-35 left-15 w-10 h-10 rounded-full"
                    decoding="async"
                  />
                  <motion.img
                    style={{ rotate: counterRotate, willChange: "transform" }}
                    src={Profile3}
                    alt="profile3"
                    className="absolute bottom-5 left-40 w-10 h-10 rounded-full"
                    decoding="async"
                  />
                  <motion.img
                    style={{ rotate: counterRotate, willChange: "transform" }}
                    src={Profile4}
                    alt="profile4"
                    className="absolute top-10 right-20 w-10 h-10 rounded-full"
                    decoding="async"
                  />
                  <motion.img
                    style={{ rotate: counterRotate, willChange: "transform" }}
                    src={Profile5}
                    alt="profile5"
                    className="absolute bottom-20 right-18 w-10 h-10 rounded-full"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tighter">
                Real-time collaboration
              </h3>
              <p className="text-lg font-semibold text-slate-600 tracking-tighter leading-6">
                Work seamlessly with your team, get instant feedback.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Toolkit;
