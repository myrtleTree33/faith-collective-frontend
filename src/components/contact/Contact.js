import React from 'react';
import PropTypes from 'prop-types';
import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import { Row, Col } from 'antd';

// import ReadingDiv from '../util/ReadingDiv';

const Contact = () => {
  return (
    <div>
      <PageHeader text="Contact us" />
      <WideReadableDiv maxWidth={800}>
        <p>We're here to help! Please reach out to us:</p>
        <div>
          <Row>
            <Col span={3}>
              <b>Telegram</b>
            </Col>
            <Col span={21}>{'@rocketflorist'}</Col>
          </Row>
          <Row>
            <Col span={3}>
              <b>Address</b>
            </Col>
            <Col span={21}>34 Webdings Avenue</Col>
          </Row>
        </div>
      </WideReadableDiv>
    </div>
  );
};

export default Contact;
