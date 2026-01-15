import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logoDark.webp";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Feature", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Download", path: "/download" },
  ];

  const allPages = [
    { name: "Power-Ups", path: "/powerups" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Waitlist", path: "/waitlist" },
    { name: "Changelog", path: "/changelog" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-black border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Section: Logo & Socials */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Draftr" />
          </div>

          <div className=" space-y-2 mt-10">
            <p className="text-white/80">Follow us on</p>
            {/* Social Icons */}
            <div className="flex gap-4">
            {[
              {
                name: "Facebook",
                path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                name: "X",
                path: "M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768 M13.232 10.768L20 4",
              },
              {
                name: "LinkedIn",
                path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z",
              },
              {
                name: "YouTube",
                path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z M9.75 15.02V8.98L15.5 12l-5.75 3.02z",
              },
            ].map((social) => (
              
              <a
                key={social.name}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                aria-label={social.name}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8">Quick Links</h3>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-lg font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* All Pages */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8">All Pages</h3>
          <ul className="space-y-4">
            {allPages.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-lg font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
