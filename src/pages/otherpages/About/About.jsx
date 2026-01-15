import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ScreenImg from "../../../assets/screen4.webp";

const About = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>About Us | Draftr - Redefining Design Tools</title>
        <meta name="description" content="Learn about Draftr's mission to build the next generation of design tools — simple, collaborative, and lightning fast." />
        <meta property="og:title" content="About Us | Draftr" />
        <meta property="og:description" content="Design isn’t just what we do — it’s how we think. Discover the team behind Draftr." />
      </Helmet>
      {/* Hero Section */}

      <section className="bg-[#dad4ff] shadow-[inset_0_100px_80px_white,inset_0_-100px_80px_white] pb-30">
        <div  className="max-w-7xl mx-auto px-6 pt-50 pb-20 text-center  ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-6xl text-4xl font-bold tracking-tighter text-primary mb-8"
          >
            Design isn’t just what we do — <br className="max-sm:hidden" /> it’s
            how we think.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto sm:text-xl text-lg font-medium text-slate-600 mb-16"
          >
            At Draftr, we’re building the next generation of design tools —
            simple, collaborative, and lightning fast. Our mission is to empower
            teams to move from idea to execution without friction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <img
              src={ScreenImg}
              alt="Draftr Interface"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* From Idea to Impact Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-12 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="sm:text-5xl text-3xl font-bold text-slate-900"
        >
          From Idea to Impact
        </motion.h2>
        <div className="space-y-6 sm:text-lg text-md font-semibold text-slate-600 leading-relaxed">
          <p>
            At Draftr, we’re building the next generation of design tools —
            simple, collaborative, and lightning fast. Our mission is to empower
            teams to move from idea to execution without friction.
          </p>
          <p>
            Design is no longer just about aesthetics — it’s about speed,
            clarity, and collaboration. At Draftr, we’re redefining how design
            happens in modern teams. We believe that anyone with an idea should
            be able to bring it to life without getting lost in complexity.
          </p>
          <p>
            Born out of frustration with bloated, rigid design tools, Draftr was
            created to give creators a smarter, simpler way to design. Whether
            you're building an interface, presenting an idea, or refining a
            brand concept, Draftr is the space where clarity meets creativity.
          </p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-4xl overflow-hidden bg-slate-100 p-8"
          >
            <img
              src={ScreenImg}
              alt="Workflow"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
          <div className="space-y-8">
            <h2 className="sm:text-5xl text-3xl font-bold text-slate-900">
              Why we exist
            </h2>
            <ul className="space-y-6">
              {[
                "Design is too complicated. We strip away unnecessary complexity.",
                "Workflow is too fragmented. We combine essential tools into one experience.",
                "Speed matters. We optimize for fast execution without compromising quality.",
                "Collaboration is non-negotiable. We make it seamless.",
                "Creativity thrives on constraints. We provide structure without stifling innovation.",
                "Tools should work for people—not the other way around. We design with empathy and clarity.",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 sm:text-lg text-md font-semibold text-slate-700"
                >
                  <span className="text-[#5538f0]">🡢</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              val: "98%",
              label: "Customer satisfaction score across all users",
            },
            {
              val: "12x",
              label:
                "Faster design-to-launch time compared to traditional tools",
            },
            { val: "60+", label: "Projects launched using Draftr" },
            {
              val: "85%",
              label:
                "Teams that switched to Draftr now use it as their primary design tool",
            },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-5xl font-bold text-[#5538f0]">{stat.val}</h3>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center border-t border-slate-200">
        <h2 className="sm:text-5xl text-3xl font-bold text-slate-900 mb-6">
          Meet the team
        </h2>
        <p className="max-w-2xl mx-auto sm:text-xl text-lg font-medium text-slate-600">
          At Draftr, we’re a small but passionate team of designers and product
          thinkers who believe that great tools create great outcomes.
        </p>
      </section>
    </div>
  );
};

export default About;
