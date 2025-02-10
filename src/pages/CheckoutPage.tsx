import React, { useState, useEffect } from 'react';
import { Container, Button, Table, Form, Modal } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styling/Checkout.css';

const CheckoutPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce((sum: number, item: any) => sum + item.product_price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPurchase = () => {
    localStorage.removeItem('cart');
    window.location.reload(); // Optionally reload the page to reset the state
    setShowConfirmation(false);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  // Round totalPrice to 2 decimal places
  const roundedTotalPrice = totalPrice.toFixed(2);

  return (
    <Container className='checkout-container min-vh-100'>
      <h1 className="text-center my-5">Checkout</h1>

      {cartItems.length > 0 ? (
        <>
          <Table striped bordered hover className="mb-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: any) => (
                <tr key={item.product_id}>
                  <td>{item.product_name}</td>
                  <td>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.product_id, parseInt(e.target.value))}
                      min={1}
                    />
                  </td>
                  <td>R{item.product_price.toFixed(2)}</td>
                  <td>R{(item.product_price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.product_id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end mb-5">
            <h3 className="total-price">Total: R{roundedTotalPrice}</h3>
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="success" size="lg" onClick={handleCheckout}>Proceed to Payment</Button>
          </div>
        </>
      ) : (
        <h3 className="text-center">Your cart is empty</h3>
      )}

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={handleCloseConfirmation} className="confirmation-modal">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to proceed with the purchase? This action cannot be undone.</p>
          <p>Total Amount: R{roundedTotalPrice}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmPurchase}>
            Confirm Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CheckoutPage;