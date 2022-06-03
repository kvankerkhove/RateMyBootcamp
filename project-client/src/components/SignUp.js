import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ users, onSignUpClick }) {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUsername = users.find((user) => {
      return user.username === signUpData.username;
    });
    if (foundUsername) {
      alert("that username is already taken");
    } else {
      fetch("http://localhost:9292/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      })
        .then((res) => res.json())
        .then((data) => onSignUpClick(data));
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <small>
          Click <a href="/login">here</a> to go back to Login
        </small>
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <small>Username</small>
              <br></br>
              <input
                type="text"
                id="username"
                name="username"
                value={signUpData.username}
                onChange={handleOnChange}
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
                value={signUpData.password}
                onChange={handleOnChange}
              />
            </div>
            <br></br>
            <div>
              <button id='signup-button' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
