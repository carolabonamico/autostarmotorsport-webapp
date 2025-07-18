import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/storia', label: 'La Storia' },
    { path: '/team', label: 'Il Team' },
    { path: '/preparazioni', label: 'Preparazioni' },
    { path: '/noleggio', label: 'Noleggio & Vendita' },
    { path: '/hurr', label: 'HURR Prototipo' },
    { path: '/news', label: 'News Motori' },
    { path: '/contatti', label: 'Contatti' }
  ];

  return (
    <div className="fade-in-up">
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <i className="bi bi-gear-fill me-2 text-accent"></i>
            <span className="text-primary">Autostar</span>
            <span className="text-white">Motorsport</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <div
                  key={item.path}
                  className="slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Nav.Link 
                    as={Link} 
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.label}
                  </Nav.Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
