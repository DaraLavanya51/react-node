import React from 'react';

function SimpleComponent() {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    fontSize: '24px',
    color: '#333',
  };

  return <div style={centerStyle}>Hello, I am a simple component</div>;
}

export default SimpleComponent;