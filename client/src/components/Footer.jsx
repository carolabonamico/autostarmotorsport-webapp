import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (

    <footer className='footer-custom'>
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col xs={12} md={12} className='footer-col'>
            <ul>
              <li><Link to="/" className="footer-links">Home</Link></li>
              <li><Link to="/storia" className="footer-links">La Storia</Link></li>
              <li><Link to="/team" className="footer-links">Il Team</Link></li>
              <li><Link to="/preparazioni" className="footer-links">Preparazioni</Link></li>
              <li><Link to="/motorsport" className="footer-links">Motorsport</Link></li>
              <li><Link to="/news" className="footer-links">News Motori</Link></li>
              <li><Link to="/contatti" className="footer-links">Contatti</Link></li>
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
          </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
