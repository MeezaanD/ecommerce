import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import productsData from '../data/products.json';
import '../styling/Landing.css';
import HeroSection from '../components/HeroSection';
import { Product } from '../types/Product';

const LandingPage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Get the last 4 products from productsData
    const lastFourProducts = productsData.slice(-4);
    setFeaturedProducts(lastFourProducts);
  }, []);

  return (
    <>
      <HeroSection />

      <Container className="featured-products">
        <div className='d-flex align-items-center justify-content-between'>
          <h2>Featured Products</h2>
          <Button variant="primary" href={"/shop"}>View All</Button>
        </div>
        <Row>
          {featuredProducts.map((product) => (
            <Col md={6} lg={3} key={product.product_id}>
              <Card className="product-card mb-4">
                <Card.ImgOverlay className="product-card-overlay">
                  <Card.Title className="product-card-title mt-3 text-start">{product.product_name}</Card.Title>
                </Card.ImgOverlay>
                <Card.Img variant="top" src={product.product_image} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;