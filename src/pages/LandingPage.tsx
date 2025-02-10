import React from 'react';
import '../styling/Landing.css';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';

const LandingPage: React.FC = () => {

  return (
    <>
      <HeroSection />
      <FeaturedProducts />
    </>
  );
};

export default LandingPage;