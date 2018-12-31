import React from 'react';
import PropTypes from 'prop-types';

import ReadingDiv from '../util/ReadingDiv';
import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';

const About = () => {
  return (
    <WideReadableDiv>
      <PageHeader text="About us" />
      <div>This is the about component</div>
    </WideReadableDiv>
  );
};

export default About;
