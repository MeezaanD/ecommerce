import React from 'react';
import '../styling/Landing.css';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CustomerReviews from '../components/CustomerReviews';

const LandingPage: React.FC = () => {

	return (
		<>
			<HeroSection />
			<FeaturedProducts />
			<CustomerReviews/>
		</>
	);
};

export default LandingPage;
