import React, { useState } from 'react';

function FormComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type Something:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
