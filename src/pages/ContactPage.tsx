import React from 'react';
import { Container } from 'react-bootstrap';
import '../styling/Contact.css';

const ContactPage: React.FC = () => {
	return (
		<Container>
			<h1>Contact Us</h1>
			<p>
				If you have any questions or concerns, feel free to reach out to us:
			</p>
			<ul>
				<li>Email: support@mystore.com</li>
				<li>Phone: +123 456 7890</li>
				<li>Address: 123 Audiobook St, Booktown, BK 56789</li>
			</ul>
		</Container>
	);
};

export default ContactPage;
