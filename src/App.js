import React, { useState, useEffect } from 'react';
import './App.css';
import journeyStoryLogo from './journeystorylogo.png'; // Replace with the correct path to your logo image


function App() {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [couponCodes, setCouponCodes] = useState([]);
  const totalCouponCount = 10; // Number of coupons to display

  useEffect(() => {
    // Fetch 50 coupons from the backend (replace this with your API call)
    // Here, I'm simulating the backend response with an array of 50 coupon codes
    const backendCouponCodes = [
      'P2B5-LTW769-KE4RBE : 🎉Amazon Audible 2 months free', 
      'P2B5-LTW769-KE4RBE : 🎉50% OFF on Oven Story Pizza', 
      'GY09EA10JA2T : 🎉50% OFF on EatSure ', 
      '12QWE : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳', 
      '13RTT : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳',
      '14TYU : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳', 
      '12U8K : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳', 
      'V84MN : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳', 
      'YU8KJ : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳', 
      'BIKKJ : 🎉 Congrats! You can make your own website for free at MyVIEW at www.myview.tech🥳',
      'WELCOME50 : 🎉Swiggy 50% OFF & FREE Delivery On Your First Order',
      '2H5Z-2ZVF2Q-6YJFB3 : 🎉Amazon Audible 2 months free',
    ];

    // Randomly select 10 coupons from the 50
    const selectedCouponCodes = [];
    while (selectedCouponCodes.length < totalCouponCount) {
      const randomIndex = Math.floor(Math.random() * backendCouponCodes.length);
      const randomCouponCode = backendCouponCodes[randomIndex];
      if (!selectedCouponCodes.includes(randomCouponCode)) {
        selectedCouponCodes.push(randomCouponCode);
      }
    }

    setCouponCodes(selectedCouponCodes);
  }, []);

  const revealCoupon = (coupon) => {
    setSelectedCoupon(coupon);
  };

  return (
    <div className="App">
    <div className="header-container">
      <img src={journeyStoryLogo} alt="JourneySTORY Logo" className="logo" />
      <h1>JourneySTORY: Get Coupons🎉</h1>
    </div>
      <div className="coupon-container">
        {couponCodes.map((code, index) => (
          <div
            key={index}
            className={`coupon ${selectedCoupon === index ? 'selected' : ''}`}
            onClick={() => revealCoupon(index)}
          >
            Coupon {index + 1}
          </div>
        ))}
      </div>
      {selectedCoupon !== null && (
        <div id="result">
          <p>You selected:</p>
          <div className="selected-coupon">Coupon {selectedCoupon + 1}</div>
          <div className="coupon-code">
            Coupon Code: <span className="code">{couponCodes[selectedCoupon]}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
