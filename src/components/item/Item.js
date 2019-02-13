import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import ImageCarousel from './ImageCarousel';
import ItemDescription from './ItemDescription';
import WideReadableDiv from '../util/WideReadableDiv';
import { isMobile } from 'react-device-detect';

const Item = ({ history, item, cartAdd }) => {
  return (
    <WideReadableDiv>
      {isMobile ? (
        <div>
          <ImageCarousel item={item} />
          <ItemDescription item={item} history={history} cartAdd={cartAdd} />
        </div>
      ) : (
        <Row>
          <Col span={12}>
            <ImageCarousel item={item} />
          </Col>
          <Col span={12}>
            <ItemDescription item={item} history={history} cartAdd={cartAdd} />
          </Col>
        </Row>
      )}
    </WideReadableDiv>
  );
};

export default Item;
