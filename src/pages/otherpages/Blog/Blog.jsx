import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Designing for Speed: How we built the fastest interface",
    excerpt: "Speed isn't just a feature; it's a fundamental requirement for modern design workflows. Here's how we optimized Draftr.",
    category: "Engineering",
    date: "Oct 24, 2023",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Future of Collaborative Design",
    excerpt: "Collaboration is more than just sharing a link. It's about real-time presence and shared mental models.",
    category: "Product",
    date: "Oct 18, 2023",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Why Simplicity is the Ultimate Sophistication",
    excerpt: "Stripping away the noise to focus on what matters most. Our philosophy on minimalist tool design.",
    category: "Design",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Announcing our Series A Funding",
    excerpt: "We're excited to share that we've raised $15M to accelerate our mission of empowering creative teams.",
    category: "Company",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
  },
];

const Blog = () => {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <Helmet>
        <title>Blog | Draftr - Design Insights & Updates</title>
        <meta name="description" content="Insights, updates, and stories from the team building the future of design tools." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6"
          >
            The Draftr Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Insights, updates, and stories from the team building the future of
            design tools.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-125 rounded-4xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <img
              src={BLOG_POSTS[0].image}
              alt="Featured"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-[#5538f0] text-white px-4 py-1 rounded-full text-sm font-bold w-fit mb-4">
                Featured
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mb-6">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/60 font-medium">
                <span>{BLOG_POSTS[0].date}</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="text-[#5538f0] font-bold text-sm uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-[#5538f0] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
                <div className="pt-4 flex items-center justify-between text-slate-400 text-sm font-medium">
                  <span>{post.date}</span>
                  <span>5 min read</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Stay in the loop
          </h2>
          <p className="text-slate-400 text-lg">
            Get the latest design tips and product updates delivered straight to
            your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5538f0] transition-all"
            />
            <button className="bg-[#5538f0] hover:bg-[#4429d1] text-white font-bold px-8 py-3 rounded-full transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog