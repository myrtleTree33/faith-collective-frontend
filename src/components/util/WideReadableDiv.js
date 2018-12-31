import React from 'react';

const WideReadableDiv = ({ children, maxWidth = 1072, style }) => (
  <div style={{ ...style }}>
    <div
      style={{
        margin: 'auto',
        width: '100%',
        maxWidth
      }}
    >
      <div
        style={{
          margin: '2rem'
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default WideReadableDiv;
