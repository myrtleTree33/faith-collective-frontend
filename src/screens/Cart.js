import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Cart from '../components/cart/Cart';
import {
  cartSetField,
  cartSetItemQty,
  cartRemove
} from '../redux/actions/cartActions';

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleChange({ field, id, value }) {
    const { cartSetItemQty, cartSetField } = this.props;
    if (field === 'items') {
      const newValue = parseInt(value, 10) || 0;
      cartSetItemQty({ id, quantity: newValue });
      return;
    }
    cartSetField({ field, value });
  }

  handleRemoveItem(id) {
    const { cartRemove } = this.props;
    cartRemove({ id });
  }

  render() {
    const { cart, history } = this.props;
    const { handleChange, handleRemoveItem } = this;
    return (
      <Cart
        cart={cart}
        onChange={handleChange}
        onRemoveItem={handleRemoveItem}
        onDone={() => history.push('/checkout')}
      />
    );
  }
}

CartScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cartSetField: ({ field, value }) =>
      dispatch(cartSetField({ field, value })),
    cartSetItemQty: ({ id, quantity }) =>
      dispatch(cartSetItemQty({ id, quantity })),
    cartRemove: ({ id }) => dispatch(cartRemove({ id }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
