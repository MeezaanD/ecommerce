import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import '../styling/Hero.css';

const HeroSection = () => {
	return (
		<Container className="hero-section bg-tertiary">
			<Carousel controls={false} indicators={false} interval={2500}>
				<Carousel.Item>
					<Row className="align-items-center">
						<Col md={6} className="text-left animate__animated animate__fadeInLeft">
							<h1 className="text-dark">Welcome to CarStore</h1>
							<p className="text-dark">Find the best cars across various brands and models</p>
							<Button variant="primary" href="/shop">Shop Now</Button>
						</Col>
						<Col md={6} className="animate__animated animate__fadeInRight">
							<img
								className="d-block w-100"
								src="https://i.postimg.cc/J470Hbx9/m5.jpg"
								alt="BMW M5"
							/>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row className="align-items-center">
						<Col md={6} className="animate__animated animate__fadeInLeft">
							<img
								className="d-block w-100"
								src="https://i.postimg.cc/m24X4ycb/Cayenne-removebg-preview.png"
								alt="Porsche Cayenne"
							/>
						</Col>
						<Col md={6} className="text-left animate__animated animate__fadeInRight">
							<h1 className="text-dark">Luxury Cars Await</h1>
							<p className="text-dark">Experience the thrill of driving with our premium selection</p>
							<Button variant="primary" href="/shop">Shop Now</Button>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row className="align-items-center">
						<Col md={6} className="text-left animate__animated animate__fadeInLeft">
							<h1 className="text-dark">Drive Your Dream</h1>
							<p className="text-dark">Discover the best deals on luxury cars</p>
							<Button variant="primary" href="/shop">Shop Now</Button>
						</Col>
						<Col md={6} className="animate__animated animate__fadeInRight">
							<img
								className="d-block w-100"
								src="https://i.postimg.cc/QMRpNBJF/mercedes-benz-s-class-wv223-modeloverview-696x392-09-2022.png"
								alt="Mercedes-Benz S-Class"
							/>
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default HeroSection;