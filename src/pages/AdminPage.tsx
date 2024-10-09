// src/pages/AdminPage.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styling/Admin.css';

const AdminPage: React.FC = () => {
	return (
		<Container>
			<h1>Admin Dashboard</h1>
			<p>Welcome, Admin! Here you can manage the store's products and view orders.</p>
			{/* Add features like product management, order overview, etc. */}
		</Container>
	);
};

export default AdminPage;
