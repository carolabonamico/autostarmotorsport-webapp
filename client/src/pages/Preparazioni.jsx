import { useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageWithText from '../components/Preparazioni/ImageWithText';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { services } from '../data/preparazioni';
import SectionHeader from '../components/SectionHeader';
import '../styles/components/Services.css';

const Preparazioni = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  return (
  <>
      {/* Services Section */}
      <section className="section" id="nostri-servizi">
        <Container>
          <Row>
            <Col>
              <SectionHeader 
                title="I Nostri" 
                lastword="Servizi" 
                subtitle="Dalla manutenzione ordinaria all'assistenza motorsport, offriamo soluzioni complete per ogni tipo di veicolo." 
              />
            </Col>
          </Row>

          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="service-block"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Row className="align-items-center g-3">
                {/* Content Column */}
                <Col lg={service.image ? 7 : 12}>
                  <div className="service-header">
                    <h3 className="service-title mb-3">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <ListGroup variant="flush" className="service-features mb-3">
                    {service.features.map((feature, idx) => (
                      <ListGroup.Item 
                        key={idx}
                        className="border-0 px-0"
                        data-aos="fade-in"
                        data-aos-delay={150 + (idx * 30)}
                      >
                        <i className="bi bi-check-circle-fill me-2"></i>
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  
                  {/* Action Buttons */}
                  {service.id === 'motorsport' && (
                    <div className="service-action mt-4" data-aos="fade-up" data-aos-delay={250}>
                      <Button as={Link} to="/motorsport" variant='red'>
                        Vai alla pagina Motorsport
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Button>
                    </div>
                  )}
                  
                  {service.id === 'auto-elettriche' && (
                    <div className="service-action mt-4" data-aos="fade-up" data-aos-delay={250}>
                      <Button as={Link} to="/team#certificazioni-qualifiche" variant='red'>
                        <i className="bi bi-award me-2"></i>
                        Scopri tutte le certificazioni
                      </Button>
                    </div>
                  )}
                </Col>

                {/* Image Column */}
                {service.image && (
                  <Col lg={4}>
                    <div className="service-image-container" data-aos="fade-left" data-aos-delay={200}>
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="service-image"
                      />
                    </div>
                  </Col>
                )}
              </Row>

              {/* Text below taking full width */}
              {service.text && (
                <Row className="mt-4">
                  <Col xs={12}>
                    <div className="service-text" data-aos="fade-up" data-aos-delay={200}>
                      <p>{service.text}</p>
                    </div>
                  </Col>
                </Row>
              )}

              {index < services.length - 1 && <div className="footer-line"></div>}
            </div>
          ))}
        </Container>
      </section>
  </>
  );
};

export default Preparazioni;
