import React from 'react';

const PageHeader = ({ text, headerSize = 1, position = 'center', style }) => {
  const CustomTag = `h${headerSize}`;

  console.log(style);

  return (
    <div
      style={{
        textAlign: position,
        margin: '2rem 0',
        ...style
      }}
    >
      <CustomTag>{text}</CustomTag>
    </div>
  );
};

export default PageHeader;
