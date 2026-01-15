import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile1 from "../../../../assets/testimonials/profile1.webp";
import Profile2 from "../../../../assets/testimonials/profile2.webp";
import Profile3 from "../../../../assets/testimonials/profile3.webp";
import Profile4 from "../../../../assets/testimonials/profile4.webp";
import Profile5 from "../../../../assets/testimonials/profile5.webp";

const REVIEWS = [
  {
    id: 1,
    review:
      "This tool has completely transformed how our team collaborates. The real-time editing and seamless integrations make our process so much smoother!",
    user: "Emily Ray, UX Designer",
  },
  {
    id: 2,
    review:
      "Before Draftr, we juggled five different tools to manage clients, tasks, and reports. Now it’s all in one place. We launched 3 campaigns faster this quarter than ever before.",
    user: "Sofia Delgado, Product Manager, NovaTech",
  },
  {
    id: 3,
    review:
      "The flexibility of this platform is unmatched. We've been able to integrate our entire tech stack in days, not weeks. It's a game-changer for our engineering team.",
    user: "Ryan Chen, Creative Director, Pixel & Hue",
  },
  {
    id: 4,
    review:
      "Draftr completely changed how we design as a team. It’s fast, intuitive, and fits right into our workflow—no learning curve, just results.",
    user: "Jessica Moore, Head of Operations, Align Venturesr",
  },
  {
    id: 5,
    review:
      "Draftr has become the backbone of our content production. From planning to publishing, everything flows effortlessly. Our team is more aligned and productive than ever. ",
    user: "Alex Romero, COO, FreshScale Labs",
  },
];

const PROFILES = [Profile1, Profile2, Profile3, Profile4, Profile5];

const Testimonials = React.memo(() => {
  const [activeReview, setActiveReview] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev >= REVIEWS.length ? 1 : prev + 1));
    }, 5000); // 5 seconds is better for reading
    return () => clearInterval(interval);
    // Resetting the interval when activeReview changes ensures a consistent delay after manual interaction
  }, [activeReview]);

  return (
    <div>
      <div className="flex max-md:flex-col gap-18 max-w-7xl mx-auto px-6 py-20">
        <h1 className="sm:text-6xl text-3xl font-bold text-primary tracking-tighter">
          Loved by designers & teams
        </h1>

        <div className="space-y-8 md:w-2xl">
          <div className="flex flex-wrap gap-2">
            {PROFILES.map((profile, index) => (
              <img
                key={profile}
                src={profile}
                alt={`profile${index + 1}`}
                onClick={() => setActiveReview(index + 1)}
                className={`w-12 h-12 rounded-md cursor-pointer transition-all duration-300 ${
                  activeReview === index + 1
                    ? "opacity-100 scale-110 ring-2 ring-primary"
                    : "opacity-60 hover:opacity-100"
                } ${index % 2 === 0 ? "-rotate-8" : "rotate-8"}`}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <p className="sm:text-xl text-md font-semibold text-primary">
                "{REVIEWS[activeReview - 1].review}"
              </p>
              <p className="text-md font-semibold">
                {REVIEWS[activeReview - 1].user}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

export default Testimonials;
