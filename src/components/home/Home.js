import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'antd';

import MarginDiv from '../util/MarginDiv';
import Viewer from './viewer/Viewer';
import Search from './search/Search';
import Hero from './Hero';

const Home = ({ items, history }) => {
  return (
    <div>
      <Hero />
      <Viewer items={items} history={history} />
    </div>
  );
};

export default Home;
