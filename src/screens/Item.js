import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncReactor } from 'async-reactor';

import Item from '../components/item/Item';
import { cartAdd } from '../redux/actions/cartActions';
import { getItem } from '../redux/services/itemService';

function Loader() {
  return <b>Loading ...</b>;
}

const ItemScreen = async ({ history, match, cartAdd }) => {
  const { id } = match.params;
  const item = await getItem(parseInt(id, 10));

  return <Item history={history} item={item} cartAdd={cartAdd} />;
};

ItemScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    cartAdd: item => dispatch(cartAdd({ ...item, quantity: 1 }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(asyncReactor(ItemScreen, Loader)));
