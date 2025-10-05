import { useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import AOS from 'aos';

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
      <section className="section bg-light" id='info-contatti'>
        <Container>
          <Row>
            <Col className="mb-5">
              <h2 className="section-title text-center mb-5" data-aos="fade-up">
                Come <span className="text-primary">Raggiungerci</span>
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                  <i className="bi bi-geo-alt-fill text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h6 className="text-black mb-1">Indirizzo</h6>
                <div className="text-dark">Strada per Valenza 38</div>
                <div className="text-medium-grey small">15040 Pecetto di Valenza (AL) Fr. Pellizzari</div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                  <i className="bi bi-telephone-fill text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h6 className="text-black mb-1">Telefono</h6>
                <a href="tel:+390131940175" className="text-dark">+39 0131 940175</a>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                  <i className="bi bi-envelope-fill text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h6 className="text-black mb-1">Email</h6>
                <a href="mailto:info@autostar-motorsport.it" className="text-dark">info@autostar-motorsport.it</a>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                  <i className="bi bi-envelope-fill text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h6 className="text-black mb-1">PEC</h6>
                <a href="mailto:davidebonamico@pec.it" className="text-dark">davidebonamico@pec.it</a>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                  <i className="bi bi-clock-fill text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h6 className="text-black mb-1">Orari</h6>
                <div className="text-dark">Lun-Ven: 8:00-18:00</div>
                <div className="text-medium-grey small">Sab: 8:00-12:00</div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                  <i className="bi bi-facebook text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h6 className="text-black mb-1">Facebook</h6>
                <a href="https://www.facebook.com/autostar.motorsport" target="_blank" rel="noopener noreferrer" className="text-dark">@autostar.motorsport</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mappa e info */}
      <section className="section bg-light pt-2">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <div className="text-center mb-4" data-aos="fade-up">
                <h3 className="text-black mb-5">
                  Dove <span className="text-primary">Trovarci</span>
                </h3>
                <p className="lead text-center">
                  Vieni a trovarci nella nostra sede oppure contattaci tramite i recapiti qui sopra. Siamo sempre disponibili per informazioni, preventivi e assistenza!
                </p>
              </div>
              <div className="mx-auto mt-5" style={{maxWidth: '700px'}}>
                <div 
                  className="bg-primary"
                  style={{
                    height: '400px',
                    width: '100%',
                    background: 'linear-gradient(135deg, var(--racing-black), var(--primary-red))',
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
                <div className="text-medium-grey small text-center mt-5">
                  P.IVA 02231680063 &nbsp; | &nbsp; C.F. BNMDVD69A12L570G &nbsp; | &nbsp; R.E.A. AL153227
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
