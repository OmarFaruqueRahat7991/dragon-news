import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <div className="mb-4">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Categories</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='d-flex align-items-center'>
              <>
                {user?.uid ? <>
                <span className='me-2'>{user?.displayName}</span>
                <Button onClick={handleLogOut} style={{height: '40px'}} variant="primary">Log Out</Button>
                </>
                :
                <>
                  <Link className='me-2' to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
                }
                </>
              <Link  to="/profile">
                {user?.photoURL ? <Image roundedCircle src={user?.photoURL} style={{width: '40px' , height: '40px'}}></Image> : <FaUserAlt></FaUserAlt>}
              </Link>
            </Nav>
            <div className="d-lg-none">
                <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
