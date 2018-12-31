import React from 'react';

const PageHeader = ({ text, headerSize = 1, position = 'center' }) => {
  const CustomTag = `h${headerSize}`;

  return (
    <div
      style={{
        textAlign: position,
        margin: '2rem 0'
      }}
    >
      <CustomTag>{text}</CustomTag>
    </div>
  );
};

export default PageHeader;
