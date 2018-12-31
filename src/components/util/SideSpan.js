import React from 'react';

const SideSpan = ({ align = 'left', children, style }) => (
  <span
    style={{
      ...style,
      float: align
    }}
  >
    {children}
  </span>
);

export default SideSpan;
