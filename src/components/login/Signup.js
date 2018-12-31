import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  DatePicker,
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';

import MarginDiv from '../util/MarginDiv';
import { signupClassic } from '../../redux/services/userService';

const FormItem = Form.Item;

const Signup = withRouter(props => {
  const { form, history } = props;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        signupClassic(values)
          .then(res => {
            console.log(res);
            history.push('/');
          })
          .catch(e => {
            console.error('Error happened with signup');
            console.error(e);
          });
      }
    });
  };

  const { getFieldDecorator } = form;

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
              <h1>Sign up.</h1>
            </div>

            <Form onSubmit={handleSubmit} className="login-form">
              <Row gutter={24}>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('firstName', {
                      rules: [
                        {
                          required: true,
                          message: 'Please specify your first name.'
                        }
                      ]
                    })(<Input placeholder="First name" />)}
                  </FormItem>
                </Col>

                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('lastName', {
                      rules: [
                        {
                          required: true,
                          message: 'Please specify your last name.'
                        }
                      ]
                    })(<Input placeholder="Last name" />)}
                  </FormItem>
                </Col>
              </Row>

              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Please specify your email!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Email"
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please specify your password!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('password2', {
                  rules: [
                    { required: true, message: 'Please specify your password!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Confirm password"
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('birthDate', {
                  rules: [
                    {
                      type: 'object',
                      required: true,
                      message: 'Please specify birthday!'
                    }
                  ]
                })(<DatePicker placeholder="Birth date" />)}
              </FormItem>

              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  Sign me up!
                </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    </MarginDiv>
  );
});

export default Form.create()(Signup);
