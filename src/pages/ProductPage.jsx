import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { productse } from '../constants';
import Footer from '../section/Footer';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const filteredProducts = productse.filter(product => {
    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
      (product.category === category || category === '')
    );
  });

  return (
    <>
    
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded-2xl"
      />
      <div className="flex mb-4">
        <button
          onClick={() => setCategory('')}
          className={`border p-2 mr-2 ${category === '' ? 'bg-black text-white' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setCategory('electronics')}
          className={`border p-2 mr-2  ${category === 'electronics' ? 'bg-black text-white' : ''}`}
        >
          Electronics
        </button>
        <button
          onClick={() => setCategory('gadgets')}
          className={`border p-2 mr-2 ${category === 'gadgets' ? 'bg-black text-white' : ''}`}
        >
          Gadgets
        </button>
        <button
          onClick={() => setCategory('accessories')}
          className={`border p-2 ${category === 'accessories' ? 'bg-black text-white' : ''}`}
        >
          Accessories
        </button>
      </div>
      <ProductList products={filteredProducts} />
    </div>


    <section>
        <Footer/>
    </section>


    </>
  );
};

export default ProductPage;
