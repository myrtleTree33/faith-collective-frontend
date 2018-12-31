import React from 'react';
import PropTypes from 'prop-types';
import { asyncReactor } from 'async-reactor';

import Home from '../components/home/Home';
import { getItems } from '../redux/services/itemService';

function Loader() {
  return <b>Loading ...</b>;
}

const HomeScreen = async ({ history }) => {
  const items = await getItems();

  return <Home items={items} history={history} />;
};

HomeScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default asyncReactor(HomeScreen, Loader);
