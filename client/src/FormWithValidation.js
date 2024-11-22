import React, { useState } from 'react';

function FormWithValidation() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (/\d/.test(formData.name)) {
      errors.name = 'Name should not contain numbers';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
      setFormData({ name: '', email: '' }); // Reset form values
    } else {
      setErrors(validationErrors);
    }
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
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .form-container .error {
            color: red;
            font-size: 12px;
            margin-bottom: 10px;
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWithValidation;