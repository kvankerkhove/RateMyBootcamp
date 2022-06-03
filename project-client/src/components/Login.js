import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
function Login({ users, handleLogin, isLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loginIsCorrect, setLoginIsCorrect] = useState(true);

  if (isLoggedIn) return <Redirect to="/bootcamps" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find((user) => {
      return (
        user.username === formData.username &&
        user.password === formData.password
      );
    });
    if (foundUser) {
      handleLogin(formData);
    } else {
      setLoginIsCorrect(false);
    }
  };
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <small>
          Don't have an account? <a href="/signup">Register</a>
        </small>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <small>Username</small>
              <br></br>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <small>Password</small>
              <br></br>
              <input
                type="password"
                id="pass"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {loginIsCorrect ? null : (
              <small style={{ color: "red" }}>
                username or password is incorrect
              </small>
            )}
            <br></br>
            <div>
              <button id='login-button' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
