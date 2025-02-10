import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid className="hero-section text-center">
      <Carousel>
        <Carousel.Item>
          <Row className="align-items-center">
            <Col md={6} className="text-left">
              <h1 className='text-dark'>Welcome to MyStore</h1>
              <p className='text-dark'>Find the best audiobooks across various genres</p>
              <Button variant="primary" href="/shop">Shop Now</Button>
            </Col>
            <Col md={6}>
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
            <Col md={6}>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/J470Hbx9/m5.jpg"
                alt="Second slide"
              />
            </Col>
            <Col md={6} className="text-left">
              <h1 className='text-dark'>Welcome to MyStore 2</h1>
              <p className='text-dark'>Find the best audiobooks across various genres</p>
              <Button variant="primary" href="/shop">Shop Now</Button>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center">
            <Col md={6} className="text-left">
              <h1 className='text-dark'>Welcome to MyStore</h1>
              <p className='text-dark'>Find the best audiobooks across various genres</p>
              <Button variant="primary" href="/shop">Shop Now</Button>
            </Col>
            <Col md={6}>
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