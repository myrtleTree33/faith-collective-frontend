import React from 'react';
import PropTypes from 'prop-types';
import { Input, Card } from 'antd';

const SpecialRequest = ({ cart, onChange }) => {
  return (
    <Card
      style={{
        margin: '2rem 0'
      }}
    >
      <h2>Special request</h2>
      <Input.TextArea
        defaultValue={cart.specialRequest}
        onChange={onChange}
        placeholder="Have a special request?  Let us know!"
        rows={4}
        style={{
          maxWidth: 500
        }}
      />
    </Card>
  );
};

export default SpecialRequest;
