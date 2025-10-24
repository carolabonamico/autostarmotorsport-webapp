import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  const location = useLocation();

  const handleFooterLink = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className='footer-custom'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} className='footer-col'>
            <ul>
              <li><Link to="/" className="footer-links" onClick={() => handleFooterLink('/')}>Home</Link></li>
              <li><Link to="/storia" className="footer-links" onClick={() => handleFooterLink('/storia')}>La Storia</Link></li>
              <li><Link to="/team" className="footer-links" onClick={() => handleFooterLink('/team')}>Il Team</Link></li>
              <li><Link to="/preparazioni" className="footer-links" onClick={() => handleFooterLink('/preparazioni')}>Preparazioni</Link></li>
              <li><Link to="/motorsport" className="footer-links" onClick={() => handleFooterLink('/motorsport')}>Motorsport</Link></li>
              <li><Link to="/news" className="footer-links" onClick={() => handleFooterLink('/news')}>News Motori</Link></li>
              <li><Link to="/contatti" className="footer-links" onClick={() => handleFooterLink('/contatti')}>Contatti</Link></li>
            </ul>
          </Col>
        </Row>
        <div className='footer-line'></div>
        <Row className="align-items-center">
          <Col xs={12} md={12} className='footer-col'>
            <ul>
              <li>&copy; 2025 Autostar Motorsport</li>
              <li>P.IVA 02231680063</li>
              <li>C.F. BNMDVD69A12L570G</li>
              <li>R.E.A. AL153227</li>
              <li><a href="https://www.iubenda.com/privacy-policy/62251225" className="footer-links" target="_blank" rel="noopener noreferrer" title="Privacy Policy">Privacy Policy</a></li>
              <li><a href="https://www.iubenda.com/privacy-policy/62251225/cookie-policy" className="footer-links" target="_blank" rel="noopener noreferrer" title="Cookie Policy">Cookie Policy</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-center mt-2">
          <Col xs={12} md={12} className='footer-col'>
            <p style={{ fontSize: 'inherit', margin: 0, color: 'var(--medium-gray)' }}>
              Sito realizzato da <a href="https://www.linkedin.com/in/carola-bonamico-341805357/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                Carola Bonamico <i className="bi bi-linkedin" style={{ fontSize: 'inherit', marginLeft: '4px' }}></i>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;