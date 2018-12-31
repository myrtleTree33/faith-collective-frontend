import React from 'react';
import PropTypes from 'prop-types';
import { Select, Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import PageHeader from '../util/PageHeader';

const FormItem = Form.Item;

const AddressForm = ({ form, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onSubmit(values);
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <div>
      <PageHeader text="Recipient's Address" headerSize={2} position="left" />

      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 500
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <FormItem>
              {getFieldDecorator('firstName', {
                rules: [
                  {
                    required: true,
                    message: "Please specify recipient's first name."
                  }
                ]
              })(<Input placeholder="Recipient's first name" />)}
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem>
              {getFieldDecorator('lastName', {
                rules: [
                  {
                    required: true,
                    message: "Please specify recipient's last name."
                  }
                ]
              })(<Input placeholder="Recipient's last name" />)}
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          {getFieldDecorator('phoneNumber', {
            rules: [
              { required: true, message: "Please input recipient's email!" }
            ]
          })(<Input placeholder="Recipient's phone number" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('address', {
            rules: [
              { required: true, message: "Please input recipient's address!" }
            ]
          })(<Input placeholder="Address" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('city', {
            rules: [
              { required: true, message: "Please input recipient's city!" }
            ]
          })(<Input placeholder="City" />)}
        </FormItem>

        <Row gutter={24}>
          <Col span={12}>
            <FormItem>
              {getFieldDecorator('select', {
                rules: [
                  {
                    required: true,
                    message: "Please select receipent's country!"
                  }
                ]
              })(
                <Select placeholder="Country">
                  <Select.Option value="sg">Singapore</Select.Option>
                </Select>
              )}
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem>
              {getFieldDecorator('postalCode', {
                rules: [
                  {
                    required: true,
                    message: "Please input recipient's postal code!"
                  }
                ]
              })(<Input placeholder="Postal code" />)}
            </FormItem>
          </Col>
        </Row>

        <FormItem
          style={{
            margin: '.5rem 0',
            maxWidth: 150
          }}
        >
          {getFieldDecorator('promoCode', {
            rules: []
          })(<Input placeholder="Promo code" />)}
        </FormItem>

        <BrowserView>
          <FormItem>
            <span>
              <Link to="/cart">Back to cart</Link>
            </span>
            <span
              style={{
                float: 'right'
              }}
            >
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{
                  marginTop: '1rem'
                }}
              >
                Proceed to payment
              </Button>
            </span>
          </FormItem>
        </BrowserView>

        <MobileView>
          <FormItem>
            <div>
              <Button
                block
                htmlType="submit"
                type="primary"
                size="large"
                style={{
                  marginTop: '1rem'
                }}
              >
                Proceed to payment
              </Button>
            </div>
            <div>
              <Link to="/cart">Back to cart</Link>
            </div>
          </FormItem>
        </MobileView>
      </Form>
    </div>
  );
};

export default Form.create()(AddressForm);
