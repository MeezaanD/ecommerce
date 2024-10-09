import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Product } from '../types/Product';

interface ProductModalProps {
	show: boolean;
	product: Product | null;
	onClose: () => void;
	onAddToCart: (product: Product, quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ show, product, onClose, onAddToCart }) => {
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = () => {
		if (product) {
			onAddToCart(product, quantity);
			onClose();
		}
	};

	return (
		<Modal show={show} onHide={onClose}>
			{product && (
				<>
					<Modal.Header closeButton>
						<Modal.Title>{product.product_name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img
							src={product.product_image}
							alt={product.product_name}
							className="img-fluid mb-3"
						/>
						<p>{product.product_description}</p>
						<h4>Price: R{product.product_price}</h4>
						<Form.Group controlId="quantity" className="mt-3">
							<Form.Label>Quantity</Form.Label>
							<Form.Control
								type="number"
								value={quantity}
								onChange={(e) => setQuantity(parseInt(e.target.value))}
								min={1}
								max={product.quantity}
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={onClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleAddToCart}>
							Add to Cart
						</Button>
					</Modal.Footer>
				</>
			)}
		</Modal>
	);
};

export default ProductModal;
