import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';
import productsData from '../data/products.json';
import ProductModal from '../components/ProductModal';
import '../styling/Shop.css';

const ShopPage: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [selectedCategory, setSelectedCategory] = useState<string>('All');
	const [selectedBrand, setSelectedBrand] = useState<string>('All');
	const { addToCart } = useCart();

	useEffect(() => {
		setProducts(productsData);
	}, []);

	useEffect(() => {
		const filtered = products.filter(product => {
			const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
			const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
			return matchesSearch && matchesCategory && matchesBrand;
		});
		setFilteredProducts(filtered);
	}, [searchTerm, selectedCategory, selectedBrand, products]);

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

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(e.target.value);
	};

	const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedBrand(e.target.value);
	};

	return (
		<Container className='shop-page'>
			<h1 className="text-center mb-5">Shop</h1>
			<Row>
				<Col lg={3} className="filters-section mb-5">
					<h3 className="mb-4">Filters</h3>
					<Form.Group controlId="search" className="mb-4">
						<Form.Label>Search</Form.Label>
						<Form.Control
							type="text"
							placeholder="Search products"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</Form.Group>
					<Form.Group controlId="category" className="mb-4">
						<Form.Label>Category</Form.Label>
						<Form.Select
							value={selectedCategory}
							onChange={handleCategoryChange}>
							<option>All</option>
							<option>Sedan</option>
							<option>SUV</option>
							<option>Sports Car</option>
							{/* Add more categories as needed */}
						</Form.Select>
					</Form.Group>
					<Form.Group controlId="brand" className="mb-4">
						<Form.Label>Brand</Form.Label>
						<Form.Select
							value={selectedBrand}
							onChange={handleBrandChange}>
							<option>All</option>
							<option>BMW</option>
							<option>Mercedes-Benz</option>
							<option>Porsche</option>
							{/* Add more brands as needed */}
						</Form.Select>
					</Form.Group>
				</Col>
				<Col lg={9}>
					<Row>
						{filteredProducts.length === 0 ? (
							<Col>
								<h4>No results found</h4>
							</Col>
						) : (
							filteredProducts.map((product) => (
								<Col md={6} lg={4} key={product.product_id} className="mb-4">
									<Card className="shadow-sm product-card">
										<Card.Img variant="top" src={product.product_image} className="product-image" />
										<Card.Body>
											<Card.Title>{product.product_name}</Card.Title>
											<Card.Text>R{product.product_price.toFixed(2)}</Card.Text>
											<Button variant="primary" onClick={() => handleViewDetails(product)}>
												View Details
											</Button>
										</Card.Body>
									</Card>
								</Col>
							))
						)}
					</Row>
				</Col>
			</Row>
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