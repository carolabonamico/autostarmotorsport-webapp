import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { SectionHeader } from '../components/SectionHeader';

const Contatti = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>

      {/* Contact info */}
      <section className="section" id='info-contatti'>
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Come" lastword="Raggiungerci" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <i className="contact-icon bi bi-geo-alt-fill"></i>
                <h6>Indirizzo</h6>
                Strada per Valenza 38<br />
                15040 Pecetto di Valenza (AL) Fr. Pellizzari
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <i className="contact-icon bi bi-telephone-fill"></i>
                <h6>Telefono</h6>
                <a href="tel:+390131940175">+39 0131 940175</a>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <i className="contact-icon bi bi-envelope-fill"></i>
                <h6>Email</h6>
                <a href="mailto:info@autostar-motorsport.it">info@autostar-motorsport.it</a>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill text-white"></i>
                </div>
                <h6>PEC</h6>
                <a href="mailto:davidebonamico@pec.it">davidebonamico@pec.it</a>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                <div className="contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <h6>Orari</h6>
                Lun-Ven: 8:00-18:00<br />
                Sab: 8:00-12:00
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="contact-icon">
                  <i className="bi bi-facebook"></i>
                </div>
                <h6>Facebook</h6>
                <a href="https://www.facebook.com/autostar.motorsport" target="_blank" rel="noopener noreferrer">@autostar.motorsport</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mappa e info */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Dove" lastword="Siamo" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <div className="section-subtitle" data-aos="fade-up">
                  Vieni a trovarci nella nostra sede oppure contattaci tramite i recapiti qui sopra. Siamo sempre disponibili per informazioni, preventivi e assistenza!
              </div>
              <div className="mx-auto mt-5 mb-5" style={{maxWidth: '700px'}}>
                <div 
                  className="bg-red"
                  style={{
                    height: '400px',
                    width: '100%',
                    background: 'linear-gradient(135deg, var(--racing-black), var(--light-red))',
                    borderRadius: '24px',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.10)'
                  }}
                >
                  <iframe
                    title="Mappa Sede Autostar Motorsport"
                    src="https://www.google.com/maps?q=Strada+per+Valenza+38,+15040+Pecetto+di+Valenza+(AL)+Fr.+Pellizzari&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: '2px solid #fff', borderRadius: '24px', width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Contatti;
