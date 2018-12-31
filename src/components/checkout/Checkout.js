import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { BrowserView, MobileView } from 'react-device-detect';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import AddressForm from './AddressForm';
import CartSummary from './CartSummary';

const Checkout = ({ cart, onSubmit }) => {
  return (
    <WideReadableDiv>
      <PageHeader text="Checkout" />

      <BrowserView>
        <Row>
          <Col span={16}>
            <AddressForm onSubmit={onSubmit} />
          </Col>
          <Col span={8}>
            <CartSummary cart={cart} />
          </Col>
        </Row>
      </BrowserView>
      <MobileView>
        <AddressForm onSubmit={onSubmit} />
      </MobileView>
    </WideReadableDiv>
  );
};

export default Checkout;
