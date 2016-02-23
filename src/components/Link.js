import React from 'react';

export default ({active, children, onClick}) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }

  return (
    <a onClick={onClick} href='#'>
      {children}
    </a>
  );
};
