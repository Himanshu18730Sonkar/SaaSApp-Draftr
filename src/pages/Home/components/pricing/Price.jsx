import React, { useState } from "react";
import { m } from "framer-motion";
import { useNavigate } from "react-router";

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50">
      <div className="flex items-center justify-center flex-col gap-12 max-w-330 mx-auto px-6 py-20">
        <div className="text-center sm:max-w-xl space-y-6">
          <h1 className="text-5xl max-sm:text-3xl font-bold text-slate-900">
            Flexible pricing plans
          </h1>
          <p className="text-xl max-sm:text-[18px] font-semibold text-slate-600 ">
            Choose a plan that grows with you. Start for free and upgrade
            anytime for more features and support
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-4">
          <span
            className={`text-sm font-bold transition-colors ${
              !isYearly ? "text-slate-900" : "text-slate-600"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
              isYearly ? "bg-[#5538f0]" : "bg-zinc-200"
            }`}
          >
            <m.div
              className="w-5 h-5 bg-white rounded-full shadow-md"
              animate={{ x: isYearly ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold transition-colors ${
                isYearly ? "text-slate-900" : "text-slate-600"
              }`}
            >
              Yearly
            </span>
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
              Save 20%
            </span>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* starter plan card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-1.5 rounded-2xl bg-slate-100 "
            >
              <div className="sm:p-7 p-4 rounded-2xl bg-white space-y-10">
                <div className="flex items-center gap-4">
                  <div className="space-y-1.5">
                    <h2 className="text-slate-900 text-2xl max-sm:text-[22px] font-semibold tracking-tighter">
                      Starter Plan
                    </h2>
                    <p className="text-slate-600/80 sm:text-lg text-md font-semibold leading-5 ">
                      For individuals & for new creators
                    </p>
                  </div>
                  <div className="flex gap-2 items-end">
                    <h1 className="text-5xl max-sm:text-3xl text-slate-900 font-bold">
                      ${isYearly ? "290" : "29"}
                    </h1>
                    <span className="text-lg font-semibold text-slate-600">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>
                  <m.button
                    initial="initial"
                    whileHover="hover"
                    onClick={() => navigate("/contact")}
                    className="font-semibold text-white text-lg px-4 w-full py-2 bg-black rounded-full overflow-hidden flex items-center justify-center"
                  >
                    <div className="relative overflow-hidden h-7">
                      <m.div
                        className="flex flex-col"
                        variants={{
                          initial: { y: 0 },
                          hover: { y: "-50%" },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <span className="flex items-center justify-center h-7">
                          Get Started
                        </span>
                        <span className="flex items-center justify-center h-7">
                          Get Started
                        </span>
                      </m.div>
                    </div>
                  </m.button>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-md font-semibold text-slate-600">
                  Included features
                </span>
                <ul className="list-disc px-5">
                  <li className="text-md font-semibold text-slate-900">
                    1 active project
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Basic collaboration tools
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Limited protyping options
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    500MB cloud storage
                  </li>
                  <li className="text-md font-semibold line-through text-slate-600/60">
                    Seamless third-party integrations
                  </li>
                  <li className="text-md font-semibold line-through text-slate-600/60">
                    Community support
                  </li>
                </ul>
              </div>
            </m.div>
            {/* Pro plan card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-1.5 rounded-2xl bg-slate-100"
            >
              <div className="sm:p-7 p-4 rounded-2xl bg-white space-y-10">
                <div className="flex items-center gap-4">
                  <div className="space-y-1.5">
                    <h2 className="text-slate-900 text-2xl max-sm:text-[22px] font-semibold tracking-tighter">
                      Pro plan
                    </h2>
                    <p className="text-slate-600/80 sm:text-lg text-md font-semibold leading-5 ">
                      For freelancers & small teams
                    </p>
                  </div>
                  <div className="flex gap-2 items-end">
                    <h1 className="text-5xl max-sm:text-3xl text-slate-900 font-bold">
                      ${isYearly ? "590" : "59"}
                    </h1>
                    <span className="text-lg font-semibold text-slate-600">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>
                  <m.button
                    initial="initial"
                    whileHover="hover"
                    onClick={() => navigate("/contact")}
                    className="font-semibold text-white text-lg px-4 w-full py-2 bg-gradient-to-b from-[#5538f0] to-[#826cfe] rounded-full shadow-lg shadow-[#5538f0]/30 overflow-hidden flex items-center justify-center"
                  >
                    <div className="relative overflow-hidden h-7">
                      <m.div
                        className="flex flex-col"
                        variants={{
                          initial: { y: 0 },
                          hover: { y: "-50%" },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <span className="flex items-center justify-center h-7">
                          Get Started
                        </span>
                        <span className="flex items-center justify-center h-7">
                          Get Started
                        </span>
                      </m.div>
                    </div>
                  </m.button>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-md font-semibold text-slate-600">
                  Included features
                </span>
                <ul className="list-disc px-5">
                  <li className="text-md font-semibold text-slate-900">
                    Unlimited projects
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Real-time collaboration
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Advanced prototyping tools
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Cloud storage & version history
                  </li>
                  <li className="text-md font-semibold ">
                    Seamless third-party integrations
                  </li>
                  <li className="text-md font-semibold line-through text-slate-600/60">
                    Email & chat support
                  </li>
                </ul>
              </div>
            </m.div>
            {/*Business plancard */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-1.5 rounded-2xl bg-slate-100 "
            >
              <div className="sm:p-7 p-4 rounded-2xl bg-white space-y-10">
                <div className="flex items-center gap-4">
                  <div className="space-y-1.5">
                    <h2 className="text-slate-900 text-2xl max-sm:text-[22px] font-semibold tracking-tighter">
                      Business plan
                    </h2>
                    <p className="text-slate-600/80 sm:text-lg text-md font-semibold leading-5 ">
                      For growing teams & agencies
                    </p>
                  </div>
                  <div className="flex gap-2 items-end">
                    <h1 className="text-5xl max-sm:text-3xl text-slate-900 font-bold">
                      ${isYearly ? "990" : "99"}
                    </h1>
                    <span className="text-lg font-semibold text-slate-600">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>
                  <m.button
                    initial="initial"
                    whileHover="hover"
                    onClick={() => navigate("/contact")}
                    className="font-semibold text-white text-lg px-4 w-full py-2 bg-black rounded-full overflow-hidden flex items-center justify-center"
                  >
                    <div className="relative overflow-hidden h-7">
                      <m.div
                        className="flex flex-col"
                        variants={{
                          initial: { y: 0 },
                          hover: { y: "-50%" },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <span className="flex items-center justify-center h-7">
                          Get Started
                        </span>
                        <span className="flex items-center justify-center h-7">
                          Get Started
                        </span>
                      </m.div>
                    </div>
                  </m.button>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-md font-semibold text-slate-600">
                  Included features
                </span>
                <ul className="list-disc px-5">
                  <li className="text-md font-semibold text-slate-900">
                    Everything in Pro +
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Team management & permissions
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Enhanced security controls
                  </li>
                  <li className="text-md font-semibold text-slate-900">
                    Priority integrations & API access
                  </li>
                  <li className="text-md font-semibold ">
                    Advanced cloud storage
                  </li>
                  <li className="text-md font-semibold  ">
                    24/7 priority support
                  </li>
                </ul>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
