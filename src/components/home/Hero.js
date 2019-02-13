import React from 'react';
import PropTypes from 'prop-types';
import { BrowserView } from 'react-device-detect';
import PageHeader from '../util/PageHeader';

const Hero = () => {
  return (
    <div>
      <BrowserView>
        <PageHeader
          text="Christian prints from Singapore."
          style={{
            marginBottom: '2rem'
          }}
        />
      </BrowserView>
    </div>
  );
};

export default Hero;
