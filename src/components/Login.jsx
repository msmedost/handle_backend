// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [loginData, setLoginData] = useState({
//     emailAddress: '',
//     phoneNumber: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', loginData);
//       console.log(response.data); // Handle success (e.g., store token, redirect to dashboard)
//     } catch (error) {
//       console.error('Login Error:', error.response.data.message);
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Input fields for login form */}
//       <input type="text" name="emailAddress" value={loginData.emailAddress} onChange={handleChange} />
//       <input type="password" name="password" value={loginData.password} onChange={handleChange} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const initialValues = {
    emailAddress: '',
    phoneNumber: '',
    password: '',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', values);
      alert('Login successful!'); // Replace with appropriate handling
      // Redirect or handle login success as needed
    } catch (error) {
      console.error('Login Error:', error.message);
      alert('Login failed. Please check your credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="emailAddress">Email Address</label>
              <Field type="email" id="emailAddress" name="emailAddress" placeholder="Email Address" />
              <ErrorMessage name="emailAddress" component="div" />
            </div>

            {/* <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
              <ErrorMessage name="phoneNumber" component="div" />
            </div> */}

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
