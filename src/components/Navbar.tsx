import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styling/Navbar.css'

const Navbar: React.FC = () => {
	const { cartItemCount } = useCart();

	return (
		<BootstrapNavbar bg="dark" variant="dark" expand="lg">
			<Container>
				<BootstrapNavbar.Brand as={Link} to="/">MyStore</BootstrapNavbar.Brand>
				<BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BootstrapNavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/about">About</Nav.Link>
						<Nav.Link as={Link} to="/shop">Shop</Nav.Link>
						<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link as={Link} to="/checkout">
							<i className="bi bi-cart"></i> ({cartItemCount})
						</Nav.Link>
					</Nav>
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;
