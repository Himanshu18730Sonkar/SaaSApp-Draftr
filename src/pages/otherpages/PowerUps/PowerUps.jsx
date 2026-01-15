import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import ScreenImg from "../../../assets/screen4.webp";

const PowerUps = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-[inset_0_100px_80px_white,inset_0_-100px_80px_white] min-h-screen overflow-hidden">
      <Helmet>
        <title>Power-Ups | Draftr - Flexible UI Sections</title>
        <meta name="description" content="A collection of additional and alternative UI sections designed for when your website or message needs more flexibility." />
      </Helmet>
      {/* Section 1: Minimal Hero */}
      <section className="bg-[#dad4ff] pt-40 pb-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-12 h-12  rounded-full flex items-center justify-center text-slate-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22c0-4 3-7 7-7"/><path d="M9 14c0-4 3-7 7-7"/><path d="M12 6c0-2-1-4-3-4s-3 2-3 4c0 3 3 6 3 6s3-3 3-6z"/></svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8">Power-Ups</h1>
          <div className="space-y-4 text-slate-600 font-semibold max-w-2xl mx-auto text-lg">
            <p>This is not another homepage. These are additional and alternative sections designed for when your website or message needs more flexibility.</p>
            <p>
              Copy any section, paste it into your page, and customize it as needed. Add only what supports your goal. Skip the rest. Nothing breaks the original structure. 
              Need more sections?{" "}
              <span 
                onClick={() => navigate("/contact")} 
                className="text-[#5538f0] underline cursor-pointer"
              >
                Request them here
              </span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Framo Hero */}
      <section className="bg-linear-to-br from-white to-[#f3f0ff] py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <span className="text-xl">★★★★★</span>
              <span className="text-slate-900">4.6/5 stars rating</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Build designs without friction
            </h2>
            <p className="text-xl text-slate-600">
              Streamline your creative process with Framo. The all-in-one workspace for modern design teams to ideate, prototype, and ship faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#5538f0] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4429d1] transition-all">
                Get Started
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
                Watch a 2-min demo
              </button>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75V21.9L0 20.551V12.45zM10.712 1.972L24 0v11.551h-13.288V1.972zM10.712 12.45H24v11.55L10.712 22.028V12.45z"/></svg>
                <span className="text-sm font-medium">Windows</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.21 2.32-1.16.6-2.38.89-3.66.89-1.28 0-2.48-.28-3.6-.83-1.12-.55-2.08-1.31-2.88-2.28-.8-.97-1.41-2.12-1.83-3.45-.42-1.33-.63-2.78-.63-4.35 0-1.57.21-3.02.63-4.35.42-1.33 1.03-2.48 1.83-3.45.8-.97 1.76-1.73 2.88-2.28 1.12-.55 2.32-.83 3.6-.83 1.28 0 2.5.29 3.66.89 1.16.6 2.23 1.37 3.21 2.32l-1.42 1.42c-.78-.75-1.63-1.35-2.55-1.8-.92-.45-1.89-.68-2.9-.68-1.01 0-1.96.22-2.85.66-.89.44-1.65 1.05-2.28 1.83-.63.78-1.11 1.7-1.44 2.76-.33 1.06-.5 2.22-.5 3.48 0 1.26.17 2.42.5 3.48.33 1.06.81 1.98 1.44 2.76.63.78 1.39 1.39 2.28 1.83.89.44 1.84.66 2.85.66 1.01 0 1.98-.23 2.9-.68.92-.45 1.77-1.05 2.55-1.8l1.42 1.42z"/></svg>
                <span className="text-sm font-medium">macOS</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={ScreenImg} alt="Framo UI" className="rounded-3xl shadow-2xl border border-slate-200" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-xs sm:max-w-60">
              <p className="text-sm font-bold text-slate-900 mb-1">Where vision meets construction</p>
              <p className="text-xs text-slate-500">Project view active • 12 contributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Table */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-8 text-2xl font-bold text-slate-900">Features</th>
                  <th className="p-8 text-2xl font-bold text-[#5538f0] text-center">Draftr</th>
                  <th className="p-8 text-2xl font-bold text-slate-400 text-center">Others</th>
                </tr>
              </thead>
              <tbody className="text-lg font-medium text-slate-600">
                {[
                  "All-in-one workspace",
                  "Real-time collaboration",
                  "Advanced prototyping",
                  "Infinite canvas",
                  "Custom UI components",
                  "Developer handoff",
                ].map((feature, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0">
                    <td className="p-8">{feature}</td>
                    <td className="p-8 text-center text-[#5538f0]">✓</td>
                    <td className="p-8 text-center text-slate-300">✕</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-[40px] border border-slate-200">
            <div className="w-16 h-16 rounded-full bg-slate-100 shrink-0" />
            <p className="text-xl font-medium text-slate-700 italic">
              "Draftr has completely transformed how our team handles design sprints. We moved from three different tools to just one, and our speed has doubled."
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Feature Announcement Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[40px] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-6">
            <span className="text-[#5538f0] font-bold uppercase tracking-widest text-sm">New Feature</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Auto layout is here, along with improvements to alignment.
            </h2>
            <p className="text-slate-400 text-lg">
              Design faster with smart containers that automatically adjust to your content. Alignment and structure have never been easier.
            </p>
            <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold w-fit hover:bg-white transition-all">
              Explore auto layout
            </button>
          </div>
          <div className="md:w-1/2 bg-slate-800 p-12 flex items-center justify-center">
            <img src={ScreenImg} alt="Auto Layout" className="rounded-2xl shadow-2xl rotate-2" />
          </div>
        </div>
      </section>

      {/* Section 5: Get Started Cards */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Select a way to get started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[40px] border border-slate-200 hover:border-[#5538f0] transition-all group cursor-pointer">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 mb-8 mx-auto group-hover:bg-[#f3f0ff] group-hover:text-[#5538f0] transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Blank Project</h3>
              <p className="text-slate-500 font-medium">Start from Scratch</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] border border-slate-200 hover:border-[#5538f0] transition-all group cursor-pointer overflow-hidden">
              <div className="h-20 mb-8 overflow-hidden rounded-2xl bg-slate-50">
                <img src={ScreenImg} alt="Template" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Use Template</h3>
              <p className="text-slate-500 font-medium">Start with a design that fit your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Process Steps */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-black p-12 rounded-[40px] space-y-6">
            <span className="text-white/40 font-bold text-xl">01</span>
            <h3 className="text-3xl font-bold text-white">Start your project</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Create a new design or import files with just a click. Set up your workspace effortlessly.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-200 space-y-6">
            <span className="text-slate-200 font-bold text-xl">02</span>
            <h3 className="text-3xl font-bold text-slate-900">Design with ease</h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              Use our intuitive drag-and-drop editor, smart tools stunning designs effortlessly.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-200 space-y-6">
            <span className="text-slate-200 font-bold text-xl">03</span>
            <h3 className="text-3xl font-bold text-slate-900">Export & Share</h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              Easily integrate with your favorite tools to launch your project effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32 text-center">
        <div className="bg-slate-900 rounded-[40px] p-12 md:p-20 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            More sections coming soon
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We're constantly building new components to help you create the
            perfect design. Stay tuned for updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PowerUps