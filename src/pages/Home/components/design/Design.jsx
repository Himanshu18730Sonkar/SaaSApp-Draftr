import React from "react";
import { m } from "framer-motion";
import { useNavigate } from "react-router";
import ScreenImg from '../../../../assets/MobileScreen.webp'

const Design = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 overflow-hidden">
      <div className="flex max-md:flex-col items-center gap-10 md:gap-20 max-w-350 mx-auto px-6 py-20">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#e1e3e7] sm:pl-22 sm:pt-12 p-6 md:w-4xl w-full rounded-4xl overflow-hidden sm:h-120 h-fit "
        >
            <m.img 
              src={ScreenImg} 
              alt="screen" 
              className="md:w-80 sm:w-100 w-full"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-5">
            <h1 className="sm:text-5xl text-3xl font-bold text-slate-900">The perfect design solution for every workflow</h1>
            <p className="sm:text-lg text-md font-semibold leading-relaxed text-slate-600">
              Discover how our design platform meets your needs, whether you're a
              freelancer, startup, or enterprise.
            </p>
          </div>
          <div className="flex max-sm:flex-col gap-2 justify-between">
            <ul className="space-y-2">
                {["UI/UX designers", "Product teams", "Enterprise Organizations"].map((item, i) => (
                  <m.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="before:content-['🡢'] before:text-[#5538f0] before:mr-2 font-semibold text-slate-600"
                  >
                    {item}
                  </m.li>
                ))}
            </ul>
            <ul className="space-y-2">
                {["App & Web developers", "Marketing teams", "Agencies & Enterprises"].map((item, i) => (
                  <m.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="before:content-['🡢'] before:text-[#5538f0] before:mr-2 font-semibold text-slate-600"
                  >
                    {item}
                  </m.li>
                ))}
            </ul>
          </div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => navigate("/contact")}
              className="inline-block bg-[#5538f0] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4429d1] transition-all"
            >
              Get Started Now
            </button>
          </m.div>
        </m.div>
      </div>
    </div>
  );
};

export default Design;
