import React from 'react';
import { Container } from 'react-bootstrap';
import '../styling/About.css';

const AboutUsPage: React.FC = () => {
	return (
		<Container>
			<h1>About Us</h1>
			<p>
				We are a leading provider of audiobooks across various genres including cooking, sci-fi, and more.
				Our mission is to bring high-quality audiobooks to everyone, making it easy and affordable to
				enjoy your favorite books on the go.
			</p>
			<h3>Why Choose Us?</h3>
			<p>
				With a wide range of audiobooks and an easy purchasing process, we make it simple for you
				to dive into your next favorite story.
			</p>
			<h3>How Our Store Works</h3>
			<p>
				Browse our collection, add audiobooks to your cart, and checkout with a secure payment system.
				Enjoy your new audiobook instantly!
			</p>
		</Container>
	);
};

export default AboutUsPage;
