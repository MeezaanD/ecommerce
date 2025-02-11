import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../types/Product';
import { CartItem } from '../types/CartItem';

interface CartContextType {
	cartItems: CartItem[];
	addToCart: (product: Product, quantity: number) => void;
	removeFromCart: (productId: string) => void;
	updateQuantity: (productId: string, newQuantity: number) => void;
	cartItemCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>(() => {
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