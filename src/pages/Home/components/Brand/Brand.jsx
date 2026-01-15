import React from 'react'
import Kobe from '../../../../assets/brand/kobe.webp'
import Event from '../../../../assets/brand/event.webp'
import Oslo from '../../../../assets/brand/oslo.webp'
import Swiss from '../../../../assets/brand/swiss.webp'
import Berlin from '../../../../assets/brand/Berlin.webp'
import Signature from '../../../../assets/brand/signature.webp'
import Uturn from '../../../../assets/brand/uturn.webp'

const Brand = () => {
  return (
    <div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% - 5rem)); }
          }
          @keyframes scroll-mobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% - 2.5rem)); }
          }
        `}
      </style>
      <div className='hidden md:flex items-center max-w-7xl mx-auto overflow-hidden gap-20 px-10 py-6 h-20 relative group'>
        <div className="flex gap-20 animate-[scroll_40s_linear_infinite] shrink-0 items-center">
          <img src={Kobe} alt="kobe" />
          <img src={Event} alt="kobe" />
          <img src={Oslo} alt="kobe" />
          <img src={Swiss} alt="kobe" />
          <img src={Berlin} alt="kobe" />
          <img src={Signature} alt="kobe" />
          <img src={Uturn} alt="kobe" />
        </div>
        <div className="flex gap-20 animate-[scroll_40s_linear_infinite] shrink-0 items-center" aria-hidden="true">
          <img src={Kobe} alt="kobe" />
          <img src={Event} alt="kobe" />
          <img src={Oslo} alt="kobe" />
          <img src={Swiss} alt="kobe" />
          <img src={Berlin} alt="kobe" />
          <img src={Signature} alt="kobe" />
          <img src={Uturn} alt="kobe" />
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_50px_0_50px_white,inset_-50px_0_50px_white]"></div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex flex-col gap-5 px-4 py-6 relative group'>
        <div className='flex items-center overflow-hidden gap-10 h-16 relative'>
          <div className="flex gap-10 animate-[scroll-mobile_20s_linear_infinite] shrink-0 items-center">
            <img src={Kobe} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Event} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Oslo} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Swiss} alt="kobe" className="h-8 w-auto object-contain"/>
          </div>
          <div className="flex gap-10 animate-[scroll-mobile_20s_linear_infinite] shrink-0 items-center" aria-hidden="true">
            <img src={Kobe} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Event} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Oslo} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Swiss} alt="kobe" className="h-8 w-auto object-contain"/>
          </div>
        </div>
        <div className='flex items-center overflow-hidden gap-10 h-16 relative'>
          <div className="flex gap-10 animate-[scroll-mobile_20s_linear_infinite] shrink-0 items-center" style={{ animationDirection: 'reverse' }}>
            <img src={Berlin} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Signature} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Uturn} alt="kobe" className="h-8 w-auto object-contain"/>
          </div>
          <div className="flex gap-10 animate-[scroll-mobile_20s_linear_infinite] shrink-0 items-center" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
            <img src={Berlin} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Signature} alt="kobe" className="h-8 w-auto object-contain"/>
            <img src={Uturn} alt="kobe" className="h-8 w-auto object-contain"/>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_30px_0_30px_white,inset_-30px_0_30px_white]"></div>
      </div>
    </div>
  )
}

export default Brand
