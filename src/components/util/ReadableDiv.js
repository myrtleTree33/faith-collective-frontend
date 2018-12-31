import React from 'react';

const ReadableDiv = ({ children }) => (
  <div
    style={{
      margin: '1rem 2rem'
    }}
  >
    <div
      style={{
        margin: 'auto',
        width: '100%',
        maxWidth: 1024
      }}
    >
      {children}
    </div>
  </div>
);

export default ReadableDiv;
