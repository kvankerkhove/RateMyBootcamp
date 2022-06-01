import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ setIsLoggedIn, setCurrentUser }) {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <button
        onClick={() => {
          setIsLoggedIn(false);
          setCurrentUser("");
          history.push("/login");
        }}
      >
        logout
      </button>
      <Link to="/about">About</Link>
      <Link to="/bootcamps">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
export default NavBar;
