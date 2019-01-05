import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Payment from '../components/payment/Payment';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    // redirect if cart empty --------------
    if (!this.props.location.state) {
      history.push('/');
    }

    if (!this.props.location.state.order) {
      history.push('/');
    }
    // -------------------------------------

    const { order } = this.props.location.state;
    const { cart } = order;

    const onSubmit = token => {
      console.log('---------------------');
      // TODO take payment and submit order
      console.log(token);
      console.log(order);
      console.log('---------------------');
    };

    return <Payment cart={cart} onSubmit={onSubmit} />;
  }
}

PaymentScreen.propTypes = {
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
)(PaymentScreen);
