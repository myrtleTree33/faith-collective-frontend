import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import CartWidget from '../cart/CartWidget';

const CartSummary = ({ cart, shippingFee, total, subtotal }) => {
  return (
    <div>
      <PageHeader text="Summary" headerSize={2} position="left" />
      <CartWidget
        cart={cart}
        shippingFee={shippingFee}
        total={total}
        subtotal={subtotal}
        showCheckoutBtn={false}
      />
    </div>
  );
};

export default CartSummary;
