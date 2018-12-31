import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartWidget from '../components/cart/CartWidget';

const CartWidgetScreen = ({ cart }) => {
  return <CartWidget cart={cart} />;
};

CartWidgetScreen.propTypes = {
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
)(CartWidgetScreen);
