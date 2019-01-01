import React from 'react';
import PropTypes from 'prop-types';
import SideSpan from '../util/SideSpan';
import SideSpanClear from '../util/SideSpanClear';
import { Divider, Button } from 'antd';
import { isMobile } from 'react-device-detect';

const ItemDescription = ({ history, item, cartAdd }) => {
  const { id, name, price, description } = item;
  const { value } = price;
  const cost = `$${value}`;

  const handleClick = () => {
    history.push('/cart');
    cartAdd(item);
  };

  return (
    <div>
      {isMobile ? (
        <div>
          <h1>{name}</h1>
          <div
            style={{
              fontSize: '1.2em'
            }}
          >
            {cost}
          </div>
          <Divider style={{ margin: 0 }} />
        </div>
      ) : (
        <div>
          <SideSpan
            align="left"
            style={
              {
                // fontSize: '2rem'
              }
            }
          >
            <h1>{name}</h1>
          </SideSpan>
          <SideSpan
            align="right"
            style={{
              fontSize: '1.2em'
            }}
          >
            {cost}
          </SideSpan>
          <SideSpanClear />
          <Divider style={{ margin: 0 }} />
        </div>
      )}

      <div
        style={{
          margin: '1.5rem 0',
          minHeight: isMobile ? undefined : 300
        }}
      >
        {description}
        <div
          style={{
            marginTop: '1.2rem'
          }}
        >
          Item #{id}
        </div>
      </div>
      <Button type="primary" block size="large" onClick={handleClick}>
        Next
      </Button>
    </div>
  );
};

export default ItemDescription;
