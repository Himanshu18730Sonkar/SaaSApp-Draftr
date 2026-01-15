import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "../Home/components/HeroSection/Hero";
import Demonstrate from "./components/Demonstrate/Demonstrate";
const Price = lazy(() => import("../Home/components/pricing/Price"));
const Testimonials = lazy(() =>
  import("./components/testimonials/Testimonials")
);
const Powerup = lazy(() => import("./components/powerup/Powerup"));
const Brand = lazy(() => import("./components/Brand/Brand"));
const Toolkit = lazy(() => import("./components/toolkit/Toolkit"));
const Work = lazy(() => import("./components/work/Work"));
const Feature = lazy(() => import("./components/feature/Feature"));
const Design = lazy(() => import("./components/design/Design"));
const Skeleton = ({ className }) => (
  <div className={`bg-slate-200 animate-pulse rounded-3xl ${className}`}></div>
);

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Draftr is the ultimate toolkit for designers and teams to create, prototype, and collaborate in a single platform."
        />
        <meta
          property="og:title"
          content="Draftr - Revolutionize your design workflow"
        />
      </Helmet>
      <Hero />
      {/* Progressive loading: Split Suspense to allow top components to render independently */}
      <Suspense
        fallback={<Skeleton className="w-full h-32 mx-auto max-w-7xl" />}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Brand />
        </motion.div>
      </Suspense>

      <Suspense
        fallback={<Skeleton className="w-full h-150 max-w-7xl mx-auto my-20" />}
      >
        <Toolkit />
      </Suspense>

      <Suspense
        fallback={<Skeleton className="w-full h-125 max-w-7xl mx-auto my-20" />}
      >
        <Work />
      </Suspense>

      <Suspense
        fallback={<Skeleton className="w-full h-100 max-w-7xl mx-auto my-20" />}
      >
        <Feature />
      </Suspense>

      <Suspense
        fallback={<Skeleton className="w-full h-200 max-w-7xl mx-auto my-20" />}
      >
        <Powerup />
        <Testimonials />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-200 max-w-7xl mx-auto my-20" />}
      >
        <Price />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-200 max-w-7xl mx-auto my-20" />}
      >
        <Design />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-200 max-w-7xl mx-auto my-20" />}
      >
        <Demonstrate />
      </Suspense>
    </div>
  );
};

export default Home;
