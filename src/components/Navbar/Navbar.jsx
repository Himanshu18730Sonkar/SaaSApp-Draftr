import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Only update state if scroll has moved significantly (threshold of 10px)
          if (Math.abs(currentScrollY - lastScrollY) > 10) {
            if (currentScrollY > lastScrollY && currentScrollY > 20) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Skip to content link for Accessibility 100 */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-md z-[60]"
      >
        Skip to content
      </a>
      <nav className="flex justify-evenly items-center px-6 py-3 bg-transparent" aria-label="Main Navigation">
        <div>
          <NavLink to="/">
            <img 
              src={Logo} 
              alt="SaaSApp Home" 
              width="120" 
              height="40" 
              className="shrink-0" 
              fetchpriority="high"
              loading="eager"
            />
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-5 max-md:hidden ">
            <li className="text-lg font-semibold text-secondary">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-lg font-semibold text-secondary">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="text-lg font-semibold text-secondary">
              <NavLink to="/changelog">Changelog</NavLink>
            </li>
            <li className="text-lg font-semibold text-secondary">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="text-lg font-semibold text-secondary">
              <NavLink to="/powerups">Power-Ups</NavLink>
            </li>
          </ul>
        </div>

        <button 
          className="py-2 px-5 shadow-md text-md font-semibold bg-black text-white rounded-full max-md:hidden"
          aria-label={isLoggedIn ? "View Profile" : "Login to your account"}
        >
          {isLoggedIn ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20v-1c0-2.761 3.582-5 8-5s8 2.239 8 5v1H4z"
                fill="currentColor"
              />
            </svg>
          ) : (
            "Login Now"
          )}
        </button>
        <div className="flex gap-4 items-center md:hidden">
          <button 
            className="shadow-md p-1 rounded-full bg-gray-50"
            aria-label={isLoggedIn ? "View Profile" : "Login"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20v-1c0-2.761 3.582-5 8-5s8 2.239 8 5v1H4z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button 
            onClick={handleMenu} 
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="#6B7280"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </button>
        </div>
      </nav>
      {/* mobile device menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full md:hidden z-50 animate-in fade-in duration-200"
        >
        <ul className="flex flex-col items-center justify-center bg-white w-full gap-5 py-5 shadow-lg">
          <li className="text-lg font-semibold text-secondary">
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          </li>
          <li className="text-lg font-semibold text-secondary">
            <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
          </li>
          <li className="text-lg font-semibold text-secondary">
            <NavLink to="/changelog" onClick={() => setIsMenuOpen(false)}>Changelog</NavLink>
          </li>
          <li className="text-lg font-semibold text-secondary">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </li>
          <li className="text-lg font-semibold text-secondary">
            <NavLink to="/powerups" onClick={() => setIsMenuOpen(false)}>Power-Ups</NavLink>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
};

export default Navbar;
