import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Form } from 'antd';

import MarginDiv from '../util/MarginDiv';
import ClassicLogin from './ClassicLogin';
import SocialLogin from './SocialLogin';

const Login = props => {
  return (
    <MarginDiv>
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div>
          <Card
            style={{
              maxWidth: 800
            }}
          >
            <div
              style={{
                textAlign: 'center',
                margin: '2rem'
              }}
            >
              <h1>Sign in.</h1>
            </div>
            <SocialLogin {...props} />
            <Divider>Or</Divider>
            <ClassicLogin {...props} />
          </Card>
        </div>
      </div>
    </MarginDiv>
  );
};

export default Form.create()(Login);
