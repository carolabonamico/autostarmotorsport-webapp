import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// Stili specifici del componente
import '../styles/components/Navbar.css';
import '../styles/components/Animations.css';

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
    // { path: '/noleggio', label: 'Noleggio & Vendita' },
    // { path: '/hurr', label: 'HURR Prototipo' },
    { path: '/motorsport', label: 'Motorsport' },
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
            <img 
              src="/images/logo.png"
              alt="Autostar Motorsport Logo"
              className="navbar-logo"
              style={{ width: '45px', height: '45px', marginRight: '10px' }}
            />
            <img 
              src="/images/logo-text.png"
              alt="Autostar Motorsport"
              className="navbar-logo-text"
              style={{ height: '40px' }}
            />
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
