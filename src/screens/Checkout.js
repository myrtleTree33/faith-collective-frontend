import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Checkout from '../components/checkout/Checkout';

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart, history } = this.props;
    const shippingFee = 2.0; // TODO stub
    const subtotal = 28.0; // TODO stub
    const total = 28.0; // TODO stub

    console.log(cart);

    const onSubmit = deliveryDetails => {
      const order = {
        deliveryDetails,
        cart
      };
      history.push({ pathname: '/payment', state: { order } });
    };

    return (
      <Checkout
        cart={cart}
        shippingFee={shippingFee}
        subtotal={subtotal}
        total={total}
        onSubmit={onSubmit}
      />
    );
  }
}

CheckoutScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutScreen);
