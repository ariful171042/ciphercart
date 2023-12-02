import React from 'react';
import Hero from './_components/Hero';
import Products from '../products/_components/Products';
import CategoryPage from './_components/Category';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <CategoryPage />
      <Products />
    </main>
  );
};

export default HomePage;
