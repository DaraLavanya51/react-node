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
    <div>
      <style>
        {`
          .form-container {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          .form-container label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .form-container input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .form-container button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .form-container button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="input">Type Something:</label>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;