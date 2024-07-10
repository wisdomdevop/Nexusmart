import React, { useState, useEffect } from 'react';

const images = [
  '/studlearn1.jpeg',
  '/studlearn2.jpg',
  '/class2.jpg',
  '/class.jpg',
  '/extra.jpg',
  '/extra3.jpg',
  '/inter1.jpg'
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mx-auto mt-4 h-[400px]">
      <div className="">
        <img src={images[current]} alt={`slide${current + 1}`} className="w-full h-auto rounded-lg object-cover" />
        
      </div>
    </div>
  );
};

export default ImageSlider;
