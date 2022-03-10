import React from 'react';

const Button = ({
  color,
  height,
  padding,
  border,
  backgroundColor,
  buttonText,
}) => {
  return (
    <button style={{ color, height, padding, border, backgroundColor }}>
      {buttonText}
    </button>
  );
};

export default Button;
