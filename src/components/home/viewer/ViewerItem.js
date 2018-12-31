import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import SideSpan from '../../util/SideSpan';
import SideSpanClear from '../../util/SideSpanClear';

const ViewerItem = ({ item, history }) => {
  const { id, name, price, landscapeImg, gist } = item;
  const { value } = price || {};
  const cost = `$${value}`;

  return (
    <div
      style={{
        margin: '1.2rem 0'
      }}
    >
      <img
        src={landscapeImg}
        alt={gist}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
        onClick={() => history.push(`/item/${id}`)}
      />

      <div
        style={{
          marginTop: '1.4rem'
        }}
      >
        <SideSpan align="left">
          <div>
            {name} - <b>{cost}</b>
          </div>
          <div>{gist}</div>
        </SideSpan>
        <SideSpan align="right">
          <Button onClick={() => history.push(`/item/${id}`)}>Shop</Button>
        </SideSpan>
        <SideSpanClear />
      </div>
    </div>
  );
};

export default ViewerItem;
