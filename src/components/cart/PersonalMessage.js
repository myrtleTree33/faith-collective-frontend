import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Card } from 'antd';

const PersonalMessage = ({ cart, onChange }) => {
  return (
    <Card
      style={{
        margin: '2rem 0'
      }}
    >
      <h2>Personalized message</h2>
      <Input.TextArea
        defaultValue={cart.personalMessage}
        onChange={onChange}
        placeholder="Have a message?  Pen it down!"
        rows={4}
        style={{
          maxWidth: 500
        }}
      />
    </Card>
  );
};

export default PersonalMessage;
