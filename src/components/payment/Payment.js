import React from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import PaymentForm from './PaymentForm';

const Payment = ({ onSubmit }) => {
  const STRIPE_APIKEY = process.env.REACT_APP_STRIPE_APIKEY;

  return (
    <WideReadableDiv>
      <PageHeader text="Payment" />
      <StripeProvider apiKey={STRIPE_APIKEY}>
        <Elements>
          <PaymentForm onSubmit={onSubmit} />
        </Elements>
      </StripeProvider>
    </WideReadableDiv>
  );
};

export default Payment;
