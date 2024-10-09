// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/Footer.css'; // Import CSS for styling

const Footer: React.FC = () => {
	return (
		<footer className="footer bg-danger">
			<Container>
				<Row>
					<Col md={4}>
						<h5>About Us</h5>
						<p>We offer a wide range of audiobooks across various genres. Our mission is to provide high-quality audio content to our listeners.</p>
					</Col>
					<Col md={4}>
						<h5>Quick Links</h5>
						<ul className="footer-links">
							<li><a href="/">Home</a></li>
							<li><a href="/shop">Shop</a></li>
							<li><a href="/about">About Us</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</Col>
					<Col md={4}>
						<h5>Contact Us</h5>
						<p>Email: support@mystore.com</p>
						<p>Phone: (123) 456-7890</p>
						<p>Address: 123 Store St, Shopping City</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
