import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageWithText from '../components/Preparazioni/ImageWithText';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { services } from '../data/preparazioni';
import SectionHeader from '../components/SectionHeader';

const Preparazioni = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  return (
  <>

      {/* Services Grid */}
      <section className="section" id="nostri-servizi">
        <Container>
          
          <Row>
            <Col>
              <SectionHeader title="I Nostri" lastword="Servizi" subtitle="Dalla manutenzione ordinaria all'assistenza motorsport, offriamo soluzioni complete per ogni tipo di veicolo." />
            </Col>
          </Row>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={12} key={index}>
                <div 
                  id={service.id}
                  className="service-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-4">
                    <h5 className="mb-2">{service.title}</h5>
                    <p className="mb-3">{service.description}</p>
                  </div>

                  <ul className="list-unstyled mb-4">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="mb-3"
                        data-aos="fade-right"
                        data-aos-delay={index * 100 + 300 + (idx * 50)}
                      >
                        <i className="bi bi-check-circle-fill text-red me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.image ? (
                    <div data-aos="fade-up" data-aos-delay={index * 100 + 400}>
                      <ImageWithText src={service.image} alt={service.alt} text={service.text} maxWidth={service.imageWidth} />
                    </div>
                  ) : (
                    service.text && (
                      <div className="mt-3" data-aos="fade-up" data-aos-delay={index * 100 + 400}>
                        <p>{service.text}</p>
                      </div>
                    )
                  )}
                  
                  { service.id === 'motorsport' && (
                    <div className="text-center mt-4" data-aos="fade-up" data-aos-delay={index * 100 + 500}>
                      <Button
                        as={Link}
                        to="/motorsport"
                        variant='red'
                        className='mt-3'
                      >
                        Vai alla pagina Motorsport
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Button>
                    </div>
                  )}
                  
                  { service.id === 'auto-elettriche' && (
                    <div className="text-center mt-4" data-aos="fade-up" data-aos-delay={index * 100 + 500}>
                      <Button 
                        as={Link}
                        to="/team#certificazioni-qualifiche"
                        variant='red'
                        className='mt-3'
                      >
                        <i className="bi bi-award me-2"></i>
                        Scopri tutte le certificazioni
                      </Button>
                    </div>
                  )}

                  {index < services.length - 1 && (
                    <div className='footer-line mt-5 mb-4'></div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  </>
  );
};

export default Preparazioni;
