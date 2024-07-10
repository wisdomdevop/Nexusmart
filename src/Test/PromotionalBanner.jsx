import React from 'react';
import { Link } from 'react-router-dom';

const PromotionalBanner = () => {
  return (
    <div className="bg-orange-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Summer Sale</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-700">Up to 30% off on all electronics and accessories</p>
          <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300">
            <Link to='/product'> Shop Now</Link>
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src="prom.jpg" alt="Electronics" className="hover:scale-105 rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
