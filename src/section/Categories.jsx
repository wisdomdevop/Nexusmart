import React from 'react';

const categories = [
  {
    title: 'Electronics',
    items: [
      'Computers & Tablets',
      'Mobile Phones',
      'TV & Home Entertainment',
      'Cameras & Photography',
      'Audio',
      'Wearable Technology',
    ],
  },
  {
    title: 'Gadgets',
    items: [
      'Smart Home Devices',
      'Personal Gadgets',
      'Gaming',
      'Health & Wellness',
    ],
  },
  {
    title: 'Accessories',
    items: [
      'Computer Accessories',
      'Mobile Accessories',
      'Audio Accessories',
      'Camera Accessories',
      'Wearable Accessories',
      'Gaming Accessories',
      'Smart Home Accessories',
      'Travel Accessories',
    ],
  },
];

const Categories = () => {
  return (
    <div className="py-20 px-4  font-medium">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div key={index} className="bg-zinc-900 p-6 rounded-2xl shadow-3xl shadow-gray-600 text-center text-white">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="text-zinc-100 padAir:font-medium font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
