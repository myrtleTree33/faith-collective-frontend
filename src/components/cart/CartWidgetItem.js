import React from 'react';
import PropTypes from 'prop-types';
import { Badge, List } from 'antd';

const CartWidgetItem = ({ item }) => {
  const { price, quantity } = item;
  const totalSum = parseFloat(price.value * quantity || 0).toFixed(2);
  return (
    <List.Item>
      <List.Item.Meta
        // avatar={
        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        // }
        // title={<a href="https://ant.design">{item.name}</a>}
        // title={item.name + ' ($' + totalSum + ')'}
        title={item.name}
        // description={item.name}
      />

      <span
        style={{
          width: '100%',
          textAlign: 'right',
          maxWidth: 100
        }}
      >
        <Badge
          count={item.quantity}
          showZero
          style={{
            backgroundColor: '#fff',
            color: '#999',
            boxShadow: '0 0 0 1px #d9d9d9 inset'
          }}
        >
          <img
            style={{
              width: '100%',
              maxWidth: 50
            }}
            alt="logo"
            src={item.imgSrc}
          />
        </Badge>
      </span>
    </List.Item>
  );
};

export default CartWidgetItem;
