import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import classes from '../../css/compon.module.css';

class BootstrapNavbar extends React.Component{
  render(){
    
  return(
    <Navbar className={classes.Navbar} bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/" ></Navbar.Brand>
        <Nav activeKey="/home">
          <Nav.Item>
            <Link to="/primary-portfolio.io" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-link">About</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/projects" className="nav-link">Projects</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/contact" className="nav-link">Contact</Link>
          </Nav.Item>
          <Nav.Item >
          <Link to="/contact" className="nav-link">Email: Andymunro87@gmail.com</Link>
          </Nav.Item>
      </Nav>
    </Navbar>

    );
  }
}
export default BootstrapNavbar;