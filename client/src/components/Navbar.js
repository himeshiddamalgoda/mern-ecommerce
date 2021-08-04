import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
import Navbar1 from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const Navbar = () => {

  // create object of the useSelctor hook-2-line-get cart item by de stucturing
  const cartreducer = useSelector(state => state.cartReducer)

  const {cartItems} = cartreducer

  //display if the user is logged in or not
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const dispatch = useDispatch()

 
    
  

  return (
    <div >
      <Navbar1 bg="dark" expand="sm">
      <Container >
        <Navbar1.Brand href="/">Amazon</Navbar1.Brand>
        <Navbar1.Toggle  aria-controls="basic-navbar-nav " />
        <Navbar1.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav >
          {currentUser ? (<div className="d-flex justify-content-center"><i className="fa fa-user mt-3" style={{color:'white'}} aria-hidden="true"></i>
            <NavDropdown  title={currentUser.name} id="basic-nav-dropdown ">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {dispatch(logoutUser())}}>Log out</NavDropdown.Item>
            </NavDropdown></div>) : ( <Nav.Link href="/login">Login</Nav.Link>)}
            <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i>{cartItems.length}</Nav.Link>
          </Nav>
        </Navbar1.Collapse>
      </Container>
    </Navbar1>                                    
      {/* <nav className="navbar navbar-expand-lg " aria-controls="responsive-navbar-nav">
        <a className="navbar-brand" href="/">
          Amazon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className="far fa-bars" style={{color:'white'}}></i></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">

            <div className='navbar-nav ml-auto'>
              {currentUser ? (
                            <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {currentUser.name}
                              </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                              <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                              <Dropdown.Item onClick={() => {dispatch(logoutUser())}}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                                      ) : (
                                        <li className="nav-item">
                                          <a className="nav-link" href='/login'>
                                            Login
                                          </a>
                                        </li>
                                      )}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  {cartItems.length}
                </a>
              </li>
            </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
