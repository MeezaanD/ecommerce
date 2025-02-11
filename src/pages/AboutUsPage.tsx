import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styling/About.css';

const AboutUsPage: React.FC = () => {
	useEffect(() => {
		const handleScroll = () => {
			const revealElements = document.querySelectorAll('.reveal');
			for (let i = 0; i < revealElements.length; i++) {
				const windowHeight = window.innerHeight;
				const elementTop = revealElements[i].getBoundingClientRect().top;
				const elementVisible = 150;

				if (elementTop < windowHeight - elementVisible) {
					revealElements[i].classList.add('active');
				} else {
					revealElements[i].classList.remove('active');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Container className='about-page bg-tertiary text-center min-vh-100'>
			<Row className="justify-content-center text-center">
				<Col className='w-100' md={8}>
					<h1 className="text-center mb-5">About Us</h1>
					<p className="lead">
						Welcome to CarStore, your ultimate destination for luxury cars. We specialize exclusively in top brands like BMW, Porsche, and Mercedes-Benz.
						Our mission is to provide high-quality vehicles that combine performance, comfort, and cutting-edge technology.
					</p>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col md={6} className="reveal">
					<Card className="mb-4 shadow-sm card-hover h-100">
						<Card.Body className="d-flex justify-content-center align-items-center display-card display-card-story">
							{/* Our Story */}
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className="reveal">
					<Card className="mb-4 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center">
							<Card.Title>Our Mission</Card.Title>
							<Card.Text>
								We strive to offer an exclusive collection of luxury cars that cater to all your needs and preferences.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col md={6} className="reveal">
					<Card className="mb-4 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center">
							<Card.Title>Why Choose Us?</Card.Title>
							<Card.Text>
								With a curated selection of BMW, Porsche, and Mercedes-Benz cars, we make it easy for you to find your next dream car.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className="reveal">
					<Card className="mb-4 shadow-sm card-hover h-100">
						<Card.Body className="d-flex justify-content-center align-items-center display-card display-card-team">
							{/* Our Team */}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col md={6} className="reveal">
					<Card className="mb-4 shadow-sm card-hover h-100">
						<Card.Body className="d-flex justify-content-center align-items-center display-card display-card-vision">
							{/* Our Vision */}
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className="reveal">
					<Card className="mb-4 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center">
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