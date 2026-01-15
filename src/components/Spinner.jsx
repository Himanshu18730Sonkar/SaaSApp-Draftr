import React from 'react'
import PropTypes from 'prop-types'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full py-20" role="status" aria-live="polite" aria-label="Loading">
      <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-black animate-spin motion-reduce:animate-[spin_3s_linear_infinite]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

Spinner.propTypes = {
  // No props currently, but defined for consistency
};

export default Spinner