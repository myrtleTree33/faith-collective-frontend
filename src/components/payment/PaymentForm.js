import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, AutoComplete } from 'antd';
import { CardElement, injectStripe } from 'react-stripe-elements';

const Payment = ({ stripe, cart, onSubmit }) => {
  const handleTokenReceive = async () => {
    // TODO post info and token to backend
    console.log(stripe);
  };

  return (
    <div>
      <Card style={{ maxWidth: 300, margin: 'auto' }}>
        <p>Please enter card details to complete your purchase.</p>
        <div
          style={{
            margin: '2rem 0'
          }}
        >
          <CardElement />
        </div>
        <Button
          block
          type="primary"
          size="large"
          style={{
            marginTop: '2rem'
          }}
          onClick={handleTokenReceive}
        >
          Pay now
        </Button>
      </Card>
    </div>
  );
};

export default injectStripe(Payment);