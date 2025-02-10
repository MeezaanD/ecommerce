import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styling/NotFoundPage.css';

const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/');
	};

	return (
		<Container className="not-found-page text-center min-vh-100">
			<Row className="align-items-center justify-content-center">
				<Col md={6}>
					<h1 className="display-1 text-primary">404</h1>
					<p className="lead">Oops! The page you are looking for does not exist.</p>
					<Button variant="primary" onClick={handleGoHome}>Go to Home</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFoundPage;
