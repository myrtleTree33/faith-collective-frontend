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

    const onSubmit = deliveryDetails => {
      const order = {
        deliveryDetails,
        cart
      };
      console.log(order);
      history.push({ pathname: '/payment', state: { order } });
    };

    return <Checkout cart={cart} onSubmit={onSubmit} />;
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
