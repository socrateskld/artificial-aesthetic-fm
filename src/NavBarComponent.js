import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import AAAA from "./Assets/Logo4.png";

function NavBarComponent() {
  return (
    <>
      <Navbar
        style={{ height: "250px", background: "#1F4068" }}
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="#home" style={{ paddingTop: "100px" }}>
          <img src={AAAA} width={500} height={500} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ padding: "40px" }} className="ms-auto">
            <Nav.Link href="#home" style={{ fontSize: "30px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ fontSize: "30px" }}>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      ;
    </>
  );
}

export default NavBarComponent;
