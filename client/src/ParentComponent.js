import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from the parent!";
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
