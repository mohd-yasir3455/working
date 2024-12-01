import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo1 from './images/logo1.jpg';

function OffcanvasExample() {
  const navigate = useNavigate();
  const routes = {
    Home: '/',
    'About Us': '/about',
    Rules: '/rules',
    FAQS: '/faq',
    Objective: '/objective',
    Gallery: '/gallery',
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="light" className="mb-3" sticky="top">
          <Container fluid>
            {/* Logo */}
            <Navbar.Brand href="#" onClick={() => navigate('/')}>
              <img src={logo1} alt="BEES Foundation" style={{ height: 40, marginRight: '0.5rem' }} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BEES Foundation
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3" style={{ gap: '0.5rem' }}>
                  {Object.keys(routes).map((key) => (
                    <Nav.Link
                      key={key}
                      href={routes[key]}
                      style={{
                        fontWeight: 'bold',
                        color: '#333',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                      }}
                    >
                      {key}
                    </Nav.Link>
                  ))}

                  {/* Services Dropdown */}
                  <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Services</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item onClick={() => navigate('/services/coding')}>Coding Classes</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/services/english')}>English Classes</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/services/environment')}>Helping Environment</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                {/* Login/Register Buttons */}
                <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                  <Button
                    variant="outline-primary"
                    className="me-2"
                    style={{
                      fontSize: '16px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: 'bold',
                      color: '#f57223',
                      borderColor: '#f57223',
                      borderRadius: '5px',
                      padding: '0.5rem 1.2rem',
                    }}
                    onClick={() => navigate('/login')}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#fff')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: '#f57223',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      padding: '0.5rem 1.5rem',
                      borderColor: '#f57223',
                      borderRadius: '5px',
                    }}
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
