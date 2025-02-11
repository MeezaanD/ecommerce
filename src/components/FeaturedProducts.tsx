import { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import productsData from '../data/products.json';
import { Product } from '../types/Product';
import '../styling/FeaturedProducts.css';

const FeaturedProducts = () => {
	const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

	useEffect(() => {
		// Display products with product_id 1, 4, and 9
		const selectedProducts = productsData.filter(product => 
			product.product_id === "1" || product.product_id === "4" || product.product_id === "8"
		);
		setFeaturedProducts(selectedProducts);
	}, []);

	return (
		<Container className="featured-products">
			<div className='d-flex align-items-center justify-content-between'>
				<h2>Featured Products</h2>
				<Button variant="primary" href={"/shop"}>View All</Button>
			</div>
			<Row>
				{featuredProducts.map((product) => (
					<Col md={6} lg={4} key={product.product_id}>
						<Card className="product-card mb-4">
							<Card.ImgOverlay className="product-card-overlay">
								<Card.Title className="product-card-title mt-3 text-start">{product.product_name}</Card.Title>
							</Card.ImgOverlay>
							<Card.Img variant="top" src={product.product_image} />
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default FeaturedProducts;