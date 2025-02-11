import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styling/CustomerReviews.css';

const reviews = [
	{
		id: 1,
		name: 'John Doe',
		review: 'Amazing cars! Highly recommend this dealership. The models are top-notch.',
		rating: 5,
	},
	{
		id: 2,
		name: 'Jane Smith',
		review: 'Great customer service and a fantastic selection of cars.',
		rating: 4,
	},
	{
		id: 3,
		name: 'Sam Wilson',
		review: 'I love the variety of car brands available. The purchase process was smooth and easy.',
		rating: 5,
	},
	{
		id: 4,
		name: 'Emily Johnson',
		review: 'The cars are of great quality and the prices are reasonable. Will buy again!',
		rating: 4,
	},
];

const CustomerReviews: React.FC = () => {
	return (
		<Container className="customer-reviews bg-tertiary my-5">
			<h2 className="text-center mb-5">Customer Reviews</h2>
			<Row>
				{reviews.map((review) => (
					<Col md={6} lg={3} key={review.id} className="mb-4">
						<Card className="shadow-sm review-card">
							<Card.Body>
								<Card.Title>{review.name}</Card.Title>
								<Card.Text className="review-text">"{review.review}"</Card.Text>
								<Card.Text className="rating">Rating: {review.rating}/5</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CustomerReviews;