import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styling/About.css';

const AboutUsPage: React.FC = () => {
	return (
		<Container className='about-page bg-tertiary min-vh-100'>
			<Row className="justify-content-center text-center my-5">
				<Col className='w-100' md={8}>
					<h1 className="text-center mb-5">About Us</h1>
					<Row className="my-3">
						<Col md={8}>
							<Card className="mb-4 shadow-sm card-hover h-100">
								<Card.Body className="d-flex justify-content-center align-items-center display-card display-card-story"></Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="mb-4 shadow-sm card-hover">
								<Card.Body className="d-flex justify-content-center align-items-center display-card display-card-team"></Card.Body>
							</Card>
							<Card className="mt-2 shadow-sm card-hover">
								<Card.Body className="d-flex justify-content-center align-items-center display-card display-card-vision"></Card.Body>
							</Card>
						</Col>
					</Row>
					<p className="lead">
						Welcome to CarStore, your ultimate destination for luxury cars. We specialize exclusively in top brands like BMW, Porsche, and Mercedes-Benz.
						Our mission is to provide high-quality vehicles that combine performance, comfort, and cutting-edge technology.
					</p>
				</Col>
			</Row>
			<Row className="text-center">
				<Col md={4}>
					<Card className="mb-4 shadow-sm card-hover">
						<Card.Body>
							<Card.Title>Our Mission</Card.Title>
							<Card.Text>
								We strive to offer an exclusive collection of luxury cars that cater to all your needs and preferences.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="mb-4 shadow-sm card-hover">
						<Card.Body>
							<Card.Title>Why Choose Us?</Card.Title>
							<Card.Text>
								With a curated selection of BMW, Porsche, and Mercedes-Benz cars, we make it easy for you to find your next dream car.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="mb-4 shadow-sm card-hover">
						<Card.Body>
							<Card.Title>How Our Store Works</Card.Title>
							<Card.Text>
								Browse our collection, add your favorite cars to your cart, and checkout with a secure payment system. Drive off with your new car in no time!
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="justify-content-center my-5">
				<Col md={8} className="text-center">
					<Button variant="primary" size="lg" href="/shop">Shop Now</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutUsPage;