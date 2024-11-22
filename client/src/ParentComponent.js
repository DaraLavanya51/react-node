import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('Hello from Parent!');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <style>
        {`
          .parent-container {
            padding: 20px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 5px;
            max-width: 600px;
            margin: 20px auto;
            text-align: center;
          }
          .message {
            font-size: 18px;
            color: #333;
          }
        `}
      </style>
      <div className="parent-container">
        <h2>Parent Component</h2>
        <p className="message">Message: {message}</p>
        <ChildComponent updateMessage={updateMessage} />
      </div>
    </div>
  );
}

export default ParentComponent;