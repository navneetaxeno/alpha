import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import App from "../App";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
      <NavLink to="/home" className="navbar-brand">My App</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/cart"><i className="fa fa-shopping-cart"></i> {0}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}

export default Header;
