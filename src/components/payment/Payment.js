import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
  Elements,
  CardElement,
  StripeProvider,
  injectStripe
} from 'react-stripe-elements';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import PaymentForm from './PaymentForm';

const CURRENCY = 'SGD';

const Payment = ({ cart, onSubmit }) => {
  // TODO populate
  // const { name, amount, description } = cart;
  const [name, amount, description] = ['bla', 5, 'descr'];
  const STRIPE_APIKEY = process.env.REACT_APP_STRIPE_APIKEY;

  return (
    <WideReadableDiv>
      <PageHeader text="Payment" />
      <StripeProvider apiKey={STRIPE_APIKEY}>
        <Elements>
          <PaymentForm />
        </Elements>
      </StripeProvider>
    </WideReadableDiv>
  );
};

export default Payment;
