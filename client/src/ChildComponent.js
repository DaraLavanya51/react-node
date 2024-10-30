import React from 'react';

function ChildComponent(props) {
  return <div>Message from parent: {props.message}</div>;
}

export default ChildComponent;
