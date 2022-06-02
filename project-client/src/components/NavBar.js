import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavBar.css";
import logo2 from "../logo2.png"

function NavBar({ setIsLoggedIn, setCurrentUser, currentUser, isLoggedIn }) {
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
      <h1 id="welcome_user">Welcome, {currentUser.username}</h1>
    ) : null}
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

  </div>
 </Navbar>

   
 );
}
export default NavBar;

