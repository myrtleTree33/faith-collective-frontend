import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Payment from '../components/payment/Payment';
import { pay } from '../redux/services/cartService';
import uuidv1 from 'uuid/v1';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    // redirect if cart empty --------------
    if (
      !this.props.location ||
      !this.props.location.state ||
      !this.props.location.state.order ||
      !this.props.location.state.order.cart
    ) {
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
      pay({ transactionId: uuidv1(), stripeToken: token.id, order });
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
