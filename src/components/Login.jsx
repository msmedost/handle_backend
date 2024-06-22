import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({
    emailAddress: '',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', loginData);
      console.log(response.data); // Handle success (e.g., store token, redirect to dashboard)
    } catch (error) {
      console.error('Login Error:', error.response.data.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for login form */}
      <input type="text" name="emailAddress" value={loginData.emailAddress} onChange={handleChange} />
      <input type="password" name="password" value={loginData.password} onChange={handleChange} />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
