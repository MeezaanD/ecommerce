import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styling/Footer.css'; // Import CSS for styling

const Footer: React.FC = () => {
	return (
		<footer className="footer bg-dark">
			<Container className='bg-dark text-light'>
				<Row>
					<Col md={4}>
						<h5>About Us</h5>
						<p>We offer a wide range of audiobooks across various genres. Our mission is to provide high-quality audio content to our listeners.</p>
					</Col>
					<Col md={4}>
						<h5>Quick Links</h5>
						<Nav className="mx-auto">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/about">About</Nav.Link>
						<Nav.Link as={Link} to="/shop">Shop</Nav.Link>
						<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
					</Nav>
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
