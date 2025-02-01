import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo1 from "./images/logo1.jpg";
import logo from "./images/cutted_logo.png";
import LoginForm from "../../LoginPage/LoginPage"; // Import your login form component
import RegisterForm from "../../RegisterPage/RegisterPage"; // Import your register form component
import "./styles.css"; // Import CSS file for custom styles

function OffcanvasExample() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const routes = {
    Home: "/",
    "About Us": "/about",
    Rules: "/rules",
    FAQS: "/faq",
    Objective: "/objective",
    Gallery: "/gallery",
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} bg="light" className="mb-3" sticky="top">
          <Container fluid>
            {/* Logos */}
            <div className="d-flex align-items-center">
              <Navbar.Brand href="#" onClick={() => navigate("/")} className="d-flex align-items-center">
                <img src={logo} alt="BEES Foundation" style={{ height: "30px" }} />
              </Navbar.Brand>
              <Navbar.Brand href="#" onClick={() => navigate("/")} className="d-flex align-items-center">
                <img src={logo1} alt="BEES Foundation" style={{ height: "30px", marginRight: "0.1rem" }} />
              </Navbar.Brand>
            </div>

            {/* Toggle and Offcanvas */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>BEES Foundation</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                {/* Navigation Links */}
                <Nav className="justify-content-center flex-grow-1 pe-3" style={{ gap: "0.5rem" }}>
                  {Object.keys(routes).map((key) => (
                    <Nav.Link key={key} href={routes[key]} style={{ fontWeight: "bold", color: "#333", padding: "0.5rem 1rem", borderRadius: "5px" }}>
                      {key}
                    </Nav.Link>
                  ))}

                  {/* Services Dropdown */}
                  <NavDropdown title={<span style={{ fontWeight: "bold" }}>Services</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item onClick={() => navigate("/services/coding")}>Coding Classes</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/services/english")}>English Classes</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/services/environment")}>Helping Environment</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                {/* Login/Register Buttons */}
                <div className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
                  <Button
                    variant="outline-primary"
                    className="me-2"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                      color: "#f57223",
                      borderColor: "#f57223",
                      borderRadius: "5px",
                      padding: "0.5rem 1.2rem",
                    }}
                    onClick={() => setShowLogin(true)} // Show Login Form
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#f57223",
                      fontSize: "16px",
                      fontWeight: "bold",
                      fontFamily: "Arial, sans-serif",
                      padding: "0.5rem 1.5rem",
                      borderColor: "#f57223",
                      borderRadius: "5px",
                    }}
                    onClick={() => setShowRegister(true)} // Show Register Form
                  >
                    Register
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>   <img src={logo1} alt="BEES Foundation" style={{ height: "30px" }} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OffcanvasExample;
