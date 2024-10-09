import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import ProductModal from '../components/ProductModal'; // Import the new ProductModal component
import { Product } from '../types/Product'; // Import the Product type
import '../styling/Shop.css';

const ShopPage: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [selectedGenre, setSelectedGenre] = useState<string>('All');
	const { addToCart } = useCart();

	useEffect(() => {
		setProducts(productsData);
	}, []);

	useEffect(() => {
		const filtered = products.filter(product => {
			const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesGenre = selectedGenre === 'All' || product.genre === selectedGenre;
			return matchesSearch && matchesGenre;
		});
		setFilteredProducts(filtered);
	}, [searchTerm, selectedGenre, products]);

	const handleViewDetails = (product: Product) => {
		setSelectedProduct(product);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedProduct(null);
	};

	const handleAddToCart = (product: Product, quantity: number) => {
		addToCart(product, quantity);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGenre(e.target.value);
	};

	// Fill with placeholders if less than 12 products
	const placeholders = Array.from({ length: 12 - filteredProducts.length }, (_, i) => i);

	return (
		<Container>
			<h1>Shop</h1>
			<Row>
				<Col lg={3} className="filters-section">
					{/* Filters section */}
					<h3>Filters</h3>
					<Form.Group controlId="search">
						<Form.Label>Search</Form.Label>
						<Form.Control
							type="text"
							placeholder="Search products"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</Form.Group>
					<Form.Group controlId="genre" className="mt-3">
						<Form.Label>Genre</Form.Label>
						<Form.Control
							as="select"
							value={selectedGenre}
							onChange={handleGenreChange}
						>
							<option>All</option>
							<option>Sci-Fi</option>
							<option>Cooking</option>
							{/* Add more genres as needed */}
						</Form.Control>
					</Form.Group>
				</Col>
				<Col lg={9}>
					<Row>
						{/* If no products are found, display "No results found" */}
						{filteredProducts.length === 0 ? (
							<Col>
								<h4>No results found</h4>
							</Col>
						) : (
							filteredProducts.map((product) => (
								<Col md={6} lg={4} key={product.product_id}>
									<Card className="mb-4">
										<Card.Img variant="top" src={product.product_image} />
										<Card.Body>
											<Card.Title>{product.product_name}</Card.Title>
											<Card.Text>R{product.product_price}</Card.Text>
											<Button variant="primary" onClick={() => handleViewDetails(product)}>
												View Details
											</Button>
										</Card.Body>
									</Card>
								</Col>
							))
						)}
						{/* Show placeholders if needed */}
						{placeholders.map((_, index) => (
							<Col md={6} lg={4} key={`placeholder-${index}`}>
								<Card className="mb-4 placeholder-card">
									<Card.Img variant="top" src="placeholder-image-url" />
									<Card.Body>
										<Card.Title>Loading...</Card.Title>
										<Card.Text>R00.00</Card.Text>
										<Button variant="secondary" disabled>
											View Details
										</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row>

			{/* Product Modal Component */}
			<ProductModal
				show={showModal}
				product={selectedProduct}
				onClose={handleCloseModal}
				onAddToCart={handleAddToCart}
			/>
		</Container>
	);
};

export default ShopPage;
