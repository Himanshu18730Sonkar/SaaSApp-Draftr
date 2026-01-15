import { ReactLenis } from 'lenis/react'
import React from 'react'
import PropTypes from 'prop-types'

const LENIS_OPTIONS = {
  duration: 1.4,
  lerp: 0.1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  smoothTouch: false, // Use native touch scrolling for better mobile performance
};

function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={LENIS_OPTIONS}
    >
      {children}
    </ReactLenis>
  )
}

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll