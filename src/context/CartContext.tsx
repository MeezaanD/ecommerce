import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types/Product';

interface CartContextType {
	cartItems: Product[];
	addToCart: (product: Product, quantity: number) => void;
	removeFromCart: (productId: string) => void;
	updateQuantity: (productId: string, newQuantity: number) => void;
	cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Product[]>(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	const addToCart = (product: Product, quantity: number) => {
		const existingProductIndex = cartItems.findIndex(item => item.product_id === product.product_id);
		const updatedCart = [...cartItems];

		if (existingProductIndex > -1) {
			updatedCart[existingProductIndex].quantity += quantity;
		} else {
			updatedCart.push({ ...product, quantity });
		}

		setCartItems(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	const removeFromCart = (productId: string) => {
		const updatedCart = cartItems.filter(item => item.product_id !== productId);
		setCartItems(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	const updateQuantity = (productId: string, newQuantity: number) => {
		const updatedCart = cartItems.map(item =>
			item.product_id === productId ? { ...item, quantity: newQuantity } : item
		);
		setCartItems(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	const cartItemCount = cartItems.length;

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartItemCount }}>
			{children}
		</CartContext.Provider>
	);
};
