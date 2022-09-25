import React, { Fragment } from 'react'
import {Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navegacion = () => {
  return (
    <Fragment>
<>
  {['xl'].map((expand) => (
    <Navbar  expand={expand} variant="dark" className="mb-3 nav-color">
      <Container fluid>
        <Navbar.Brand href="/">DAD WoodWork</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
             DAD WoodWork
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Jobs">Jobs</Nav.Link>
              <Nav.Link href="/AboutUs">About</Nav.Link>
              <Nav.Link href="/Hwework">How we work</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
    </Fragment>
  )
}
