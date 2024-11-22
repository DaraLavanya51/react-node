import React, { useState } from 'react';

function ChildComponent({ updateMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="child-container">
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Update message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChildComponent;