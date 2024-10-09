import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
