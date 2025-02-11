import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../styling/Footer.css'; // Import CSS for styling

const Footer: React.FC = () => {
	return (
		<footer className="footer py-4 bg-dark text-center">
			<Container className='bg-dark text-light'>
				<Row>
					<Col md={4}>
						<h5>About Us</h5>
						<p className='p-2'>Welcome to CarStore, your ultimate destination for luxury cars. 	
						<br/>We specialize exclusively in top brands like BMW, Porsche, and Mercedes-Benz.</p>
					</Col>
						{/* <Col md={4}>
							<h5>Quick Links</h5>
							<Nav className="mx-auto d-block">
								<Nav.Link as={Link} to="/">Home</Nav.Link>
								<Nav.Link as={Link} to="/about">About</Nav.Link>
								<Nav.Link as={Link} to="/shop">Shop</Nav.Link>
								<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
							</Nav>
						</Col> */}
					<Col md={4}>
						<h5>Subscribe to our Newsletter</h5>
						<Form className='text-center'>
							<Form.Group controlId="formBasicEmail">
								<Form.Control type="email" className='mx-auto w-auto text-center' placeholder="Enter your email" />
							</Form.Group>
							<Button variant="danger" type="submit" className='px-3 py-2 m-3'>
								Subscribe
							</Button>
						</Form>
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
