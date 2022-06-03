// import React from "react";
// import { Link, useHistory } from "react-router-dom";

// function NavBar({ setIsLoggedIn, setCurrentUser }) {
//   const history = useHistory();
//   return (
//     <div className="nav-bar">
//       <button
//         onClick={() => {
//           setIsLoggedIn(false);
//           setCurrentUser("");
//           history.push("/login");
//         }}
//       >
//         logout
//       </button>
//       <Link to="/about">About</Link>
//       <Link to="/bootcamps">Home</Link>
//       <Link to="/login">Login</Link>
//     </div>
//   );
// }
// export default NavBar;

import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavBar.css";

import logo2 from "../123.png";

function NavBar({ setIsLoggedIn, setCurrentUser, isLoggedIn, currentUser }) {
  const history = useHistory();
  return (
    <Navbar id="navbar_container" expand="lg" bg="dark" variant="dark">
      <div className="left_navbar">
        <Nav>
          <Navbar.Brand>
            <NavLink to="/bootcamps">
              <img src={logo2} style={{ width: 50, height: 50 }}></img>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav.Link>
            <NavLink
              to="/bootcamps"
              style={{ textDecoration: "none" }}
              className="nav_link"
            >
              Bootcamps
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/about"
              style={{ textDecoration: "none" }}
              className="nav_link"
            >
              About
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/login"
              style={{ textDecoration: "none" }}
              className="nav_link"
            >
              Login
            </NavLink>
          </Nav.Link>
        </Nav>
      </div>

      <div id="right_navbar">
        {isLoggedIn ? (
          <>
            <h1 id="welcome_user">Welcome, {currentUser.username}</h1>
            <Button
              onClick={() => {
                setIsLoggedIn(false);
                setCurrentUser("");
                history.push("/login");
              }}
              id="logoutbtn"
            >
              Logout
            </Button>
          </>
        ) : null}
      </div>
    </Navbar>
  );
}
export default NavBar;
