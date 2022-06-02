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

function NavBar({ setIsLoggedIn, setCurrentUser }) {
 const history = useHistory();
 return (
   <Navbar id="navbar_container" expand="lg" bg="dark" variant="dark">
     <div className="left_navbar">
       <Navbar.Brand>
         <NavLink to="/bootcamps">React-Bootstrap</NavLink>
        </Navbar.Brand>

       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Nav.Link>
         <NavLink to="/bootcamps">Home</NavLink> 
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/about">About</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/login">Login</NavLink>
        </Nav.Link>
     </div>

     <div id="right_navbar">
       <Button
         onClick={() => {
           setIsLoggedIn(false);
           setCurrentUser("");
           history.push("/login");
         }}
       >
         logout
       </Button>

       {/* <Link to="/about">About</Link>
     <Link to="/bootcamps">Home</Link>
     <Link to="/login">Login</Link> */}
     </div>
   </Navbar>
 );
}
export default NavBar;
