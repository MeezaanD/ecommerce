import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import '../styling/Hero.css';

const HeroSection = () => {
  return (
    <Container className="hero-section bg-tertiary">
      <Carousel>
        <Carousel.Item>
          <Row className="align-items-center">
            <Col md={6} className="text-left animate__animated animate__fadeInLeft">
              <h1 className='text-dark'>Welcome to MyStore</h1>
              <p className='text-dark'>Find the best audiobooks across various genres</p>
              <Button variant="primary" href="/shop">Shop Now</Button>
            </Col>
            <Col md={6} className="animate__animated animate__fadeInRight">
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/J470Hbx9/m5.jpg"
                alt="First slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center">
            <Col md={6} className="animate__animated animate__fadeInLeft">
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/J470Hbx9/m5.jpg"
                alt="Second slide"
              />
            </Col>
            <Col md={6} className="text-left animate__animated animate__fadeInRight">
              <h1 className='text-dark'>Welcome to MyStore 2</h1>
              <p className='text-dark'>Find the best audiobooks across various genres</p>
              <Button variant="primary" href="/shop">Shop Now</Button>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center">
            <Col md={6} className="text-left animate__animated animate__fadeInLeft">
              <h1 className='text-dark'>Welcome to MyStore</h1>
              <p className='text-dark'>Find the best audiobooks across various genres</p>
              <Button variant="primary" href="/shop">Shop Now</Button>
            </Col>
            <Col md={6} className="animate__animated animate__fadeInRight">
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/J470Hbx9/m5.jpg"
                alt="Third slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HeroSection;