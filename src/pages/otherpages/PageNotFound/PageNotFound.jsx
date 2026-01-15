import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <div className="bg-[#dad4ff] shadow-[inset_0_100px_80px_white,inset_0_-100px_80px_white] min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Draftr</title>
        <meta
          name="description"
          content="The page you are looking for doesn't exist. Let's get you back on track."
        />
      </Helmet>

      <div className="max-w-2xl w-full text-center space-y-12 relative">
        {/* Large Background 404 with floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.h1
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-[12rem] md:text-[22rem] font-black text-slate-900 leading-none tracking-tighter opacity-5 select-none"
          >
            404
          </motion.h1>
          
          {/* Foreground Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
            >
              Lost in the draft?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 font-medium max-w-md mx-auto"
            >
              Oops! It looks like you've drifted off course. The page you're
              looking for doesn't exist or has been moved.
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block text-lg font-semibold text-white shadow-[0px_4px_60px_rgba(83,54,239,0.3)] border-[#5235ef] bg-linear-to-b from-[#5336ef] to-[#836dfe] px-12 py-4 rounded-full hover:scale-[1.05] active:scale-[0.95] transition-all"
          >
            Back to Safety
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound
