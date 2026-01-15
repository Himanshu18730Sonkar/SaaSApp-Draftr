import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CHANGELOG_DATA = [
  {
    version: "1.2.0",
    sections: [
      {
        title: "New Pages Added",
        items: [
          "Power-Ups page: A collection of additional and alternative UI sections designed for when your website or message needs more flexibility. Includes 9 ready-to-use sections, with more coming soon.",
        ],
      },
      {
        title: "Improvements",
        items: [
          "Homepage: Improved feature card animations for smoother interaction.",
        ],
      },
    ],
  },
  {
    version: "1.1.1",
    sections: [
      {
        title: "Added",
        items: ["Figma file added"],
      },
    ],
  },
  {
    version: "1.1.0",
    sections: [
      {
        title: "New Pages Added",
        items: [
          "Changelog page",
          "Waitlist page",
          "Privacy Policy (CMS)",
          "Blog (CMS)",
          "Blog Detail (CMS)",
        ],
      },
      {
        title: "Fixes",
        items: [
          "Improved Contact Form button animation for smoother interaction",
        ],
      },
      {
        title: "Updates",
        items: [
          "About Page: Added CTA in the team section",
          "Navbar: Updated links for better navigation",
          "Footer: Updated links and layout consistency",
          "Framer Components: Updated to the latest version for better performance",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    sections: [
      {
        title: "Initial release",
        items: ["Draftr is officially live!"],
      },
    ],
  },
];

const Changelog = () => {
  return (
    <div className="bg-[#dad4ff] shadow-[inset_0_100px_80px_white,inset_0_-100px_80px_white] min-h-screen overflow-hidden">
      <Helmet>
        <title>Changelog | Draftr - Latest Features & Fixes</title>
        <meta name="description" content="Stay up to date with the latest improvements, fixes, and new features in Draftr." />
      </Helmet>
      {/* Hero Section */}
      <section className=" pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6"
          >
            Draftr changelog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium"
          >
            Stay up to date with the latest improvements, fixes, and new features.
          </motion.p>
        </div>
      </section>

      {/* Changelog List */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="space-y-12">
          {CHANGELOG_DATA.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-4xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1 bg-[#5538f0] text-white text-sm font-bold rounded-full">
                  v{release.version}
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="space-y-10">
                {release.sections.map((section, sIndex) => (
                  <div key={sIndex} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {section.title}
                    </h3>
                    {section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item, iIndex) => (
                          <li
                            key={iIndex}
                            className="flex gap-3 text-slate-600 font-medium leading-relaxed"
                          >
                            <span className="text-[#5538f0]">🡢</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Changelog;