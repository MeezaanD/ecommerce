import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styling/About.css';

const AboutUsPage: React.FC = () => {
  return (
    <Container className='about-page min-vh-100'>
      <Row className="justify-content-center text-center my-5">
        <Col md={8}>
          <h1>About Us</h1>
          <p className="lead">
            We are a leading provider of audiobooks across various genres including cooking, sci-fi, and more.
            Our mission is to bring high-quality audiobooks to everyone, making it easy and affordable to
            enjoy your favorite books on the go.
          </p>
        </Col>
      </Row>
      <Row className="text-center my-5 mx-3">
        <Col md={4}>
          <Card className="mb-4 shadow-sm card-hover">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                We strive to provide an extensive collection of audiobooks that cater to all tastes and preferences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm card-hover">
            <Card.Body>
              <Card.Title>Why Choose Us?</Card.Title>
              <Card.Text>
                With a wide range of audiobooks and an easy purchasing process, we make it simple for you to dive into your next favorite story.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm card-hover">
            <Card.Body>
              <Card.Title>How Our Store Works</Card.Title>
              <Card.Text>
                Browse our collection, add audiobooks to your cart, and checkout with a secure payment system. Enjoy your new audiobook instantly!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col md={8} className="text-center">
          <Button variant="primary" size="lg" href="/shop">Shop Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;