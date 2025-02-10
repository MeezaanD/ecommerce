import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styling/Contact.css';

const ContactPage: React.FC = () => {
	return (
		<Container className='min-vh-100 contact-page'>
			<Row className="justify-content-center text-center my-5">
				<Col md={8}>
					<h1 className="text-center mb-5">Contact Us</h1>
					<p className="lead">
						If you have any questions or concerns, feel free to reach out to us:
					</p>
				</Col>
			</Row>
			<Row className="justify-content-center my-5">
				<Col md={6}>
					<Form>
						<Form.Group controlId="formName" className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter your name" />
						</Form.Group>
						<Form.Group controlId="formEmail" className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter your email" />
						</Form.Group>
						<Form.Group controlId="formMessage" className="mb-3">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={5} placeholder="Enter your message" />
						</Form.Group>
						<Button variant="primary" type="submit" className="w-auto">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
			<Row className="text-center my-5">
				<Col>
					<h3>Contact Information</h3>
					<ul className="list-unstyled">
						<li>Email: support@mystore.com</li>
						<li>Phone: +123 456 7890</li>
						<li>Address: 123 Audiobook St, Booktown, BK 56789</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactPage;
