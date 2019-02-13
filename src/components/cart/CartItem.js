import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Avatar, Input, Row, Col, Button, Card, Icon } from 'antd';
import './CartItem.css';

const { Group: InputGroup } = Input;

const confirm = Modal.confirm;

const CartItem = ({ item, onChange, onRemoveItem }) => {
  const { id, name, quantity, imgSrc, price } = item;
  const { currency, value } = price;
  const handleUpdate = e => {
    onChange(id, e.target.value);
  };
  const handleDecrement = () => {
    onChange(id, quantity - 1);
  };
  const handleIncrement = () => {
    onChange(id, quantity + 1);
  };
  const handleRemoveItem = id => {
    onRemoveItem(id);
  };

  const showConfirm = () => {
    confirm({
      content: `Are you sure you wish to remove ${name}?`,
      onOk() {
        handleRemoveItem(id);
      },
      onCancel() {}
    });
  };

  return (
    <Card
      style={{
        margin: '1.5rem 0'
      }}
    >
      <Row className="vertical-align-container">
        <Col span={3}>
          <Avatar shape="square" size={64} icon="tags" src={imgSrc} />
        </Col>
        <Col span={14}>
          <div>
            {name} (ea. ${value})
          </div>
        </Col>
        <Col
          span={6}
          style={{
            textAlign: 'center'
          }}
        >
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="down"
              onClick={handleDecrement}
            />
            <Input
              className="no-borderRadius"
              min={1}
              max={10}
              value={quantity}
              onChange={handleUpdate}
              style={{
                maxWidth: 50
                // margin: '0 2rem'
              }}
            />
            <Button
              type="primary"
              shape="circle"
              icon="up"
              onClick={handleIncrement}
            />
          </Button.Group>
        </Col>
        <Col span={1}>
          <Button
            shape="circle"
            icon="close"
            type="danger"
            onClick={showConfirm}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
