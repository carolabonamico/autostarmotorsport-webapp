import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <Container>
        <Row className="justify-content-between align-items-start">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h4 className="brand-title mb-3">
                <i className="bi bi-gear-fill me-2"></i>
                Autostar Motorsport
              </h4>
              <p className="brand-description mb-4">
                Passione, precisione e performance.<br />
                La tua officina di fiducia dal 1985.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={3} sm={6} className="mb-4">
            <div className="footer-section">
              <h6 className="section-title">Servizi</h6>
              <ul className="footer-links">
                <li><Link to="/preparazioni">Preparazioni</Link></li>
                <li><Link to="/noleggio">Noleggio & Vendita</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={3} sm={6} className="mb-4">
            <div className="footer-section">
              <h6 className="section-title">Azienda</h6>
              <ul className="footer-links">
                <li><Link to="/storia">La Nostra Storia</Link></li>
                <li><Link to="/team">Il Team</Link></li>
                <li><Link to="/preparazioni">Preparazioni</Link></li>
                <li><Link to="/hurr">HURR Prototipo</Link></li>
                <li><Link to="/news">News Motori</Link></li>
                <li><Link to="/contatti">Contatti</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="section-title">Contatti</h6>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>Strada per Valenza 38<br />15040 Pecetto di Valenza (AL)<br />Fr. Pellizzari, Italia</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone"></i>
                  <span>+39 0131 940175</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <span>info@autostar-motorsport.it</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock"></i>
                  <span>Lun-Ven: 8:00-18:00</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom w-100" style={{background: 'transparent', paddingTop: '18px'}}>
          <Row>
            <Col xs={12}>
              <div style={{width: '100%', textAlign: 'center'}}>
                <p className="copyright mb-1" style={{fontSize: '1rem', color: '#aaa', marginBottom: '4px'}}>
                  &copy; 2025 Autostar Motorsport. Tutti i diritti riservati.
                </p>
                <div className="footer-legal-extra text-muted small" style={{fontSize: '0.98rem', color: '#888'}}>
                  P.IVA 02231680063 &nbsp; | &nbsp; C.F. BNMDVD69A12L570G
                </div>
                <div className="footer-legal mt-2">
                  <Link to="/contatti" className="footer-legal-link">Privacy Policy</Link>
                  <Link to="/contatti" className="footer-legal-link">Cookie Policy</Link>
                  <Link to="/contatti" className="footer-legal-link">Termini e Condizioni</Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
