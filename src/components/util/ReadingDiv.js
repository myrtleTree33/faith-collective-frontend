import React from 'react';

const ReadingDiv = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: '#fff'
    }}
  >
    <div
      style={{
        margin: '2rem 2rem',
        width: '100%',
        maxWidth: 1024,
        minHeight: '80vh'
      }}
    >
      {children}
    </div>
  </div>
);

export default ReadingDiv;
