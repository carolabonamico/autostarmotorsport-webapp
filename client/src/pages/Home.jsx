import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      id: 'motorsport',
      icon: 'speedometer2',
      title: 'Motorsport',
      description: 'Assistenza tecnica completa in pista per competizioni automobilistiche.'
    },
    {
      id: 'tagliandi-auto',
      icon: 'wrench',
      title: 'Tagliandi Auto',
      description: 'Manutenzione ordinaria e straordinaria con ricambi originali.'
    },
    {
      id: 'cambio-gomme',
      icon: 'circle',
      title: 'Cambio Gomme',
      description: 'Servizio professionale di montaggio e bilanciatura pneumatici.'
    },
    {
      id: 'elettrauto',
      icon: 'lightning-charge',
      title: 'Elettrauto',
      description: 'Diagnosi e riparazione sistemi elettrici ed elettronici.'
    },
    {
      id: 'meccatronica',
      icon: 'cpu',
      title: 'Meccatronica',
      description: 'Specialisti in sistemi meccatronici e controllo motore.'
    },
    {
      id: 'auto-elettriche',
      icon: 'battery-charging',
      title: 'Auto Elettriche',
      description: 'Manutenzione e riparazione veicoli elettrici e ibridi.'
    },
    {
      id: 'pre-revisione',
      icon: 'clipboard-check',
      title: 'Pre-Revisione',
      description: 'Controlli preventivi per superare la revisione ministeriale.'
    }
  ];

  // Ref per la sezione "Le Radici di una Passione"
  const storiaRef = useRef(null);

  return (
    <>
      <HeroSection 
        title="Autostar"
        highlight="Motorsport"
        subtitle="Passione, Precisione e Performance - La tua officina di fiducia per servizi di meccanica d'eccellenza e assistenza tecnica professionale in pista."
      />

      {/* Services Section */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">
                I Nostri Servizi
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">
                Offriamo una gamma completa di servizi automotive.
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card 
                  as={Link}
                  to={`/preparazioni#${service.id}`}
                  className="service-card h-100 text-decoration-none"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{cursor: 'pointer'}}
                >
                  <Card.Body className="text-center">
                    <div className="service-icon">
                      <i className={`bi bi-${service.icon}`}></i>
                    </div>
                    <h5 className="mb-3">{service.title}</h5>
                    <p className="text-muted">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="section bg-light text-black pt-2" ref={storiaRef}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div data-aos="fade-right">
                <h2 className="text-black mb-4">
                  La Nostra <span className="text-accent">Storia</span>
                </h2>
                <p className="lead mb-4">
                  Da oltre 60 anni nel mondo dell'automotive, siamo specializzati 
                  nell'assistenza tecnica per competizioni automobilistiche e 
                  nella manutenzione di veicoli ad alte prestazioni.
                </p>
                <p className="mb-4">
                  La nostra esperienza nel motorsport ci ha permesso di sviluppare 
                  competenze uniche che applichiamo anche alla manutenzione quotidiana 
                  dei veicoli dei nostri clienti.
                </p>
                <Button 
                  as={Link}
                  to="/storia"
                  variant="dark"
                  className="fw-semibold px-4 py-2"
                  style={{fontSize: '1.05rem', letterSpacing: '0.01em'}}
                >
                  Scopri la nostra storia
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div data-aos="fade-left" className="text-center">
                <Row>
                  <Col className="mb-3">
                    <div className="bg-red-gradient p-4 rounded text-center">
                      <h3 className="text-white mb-0">60+</h3>
                      <p className="text-white mb-0">Anni di Esperienza</p>
                    </div>
                  </Col>
                  <Col className="mb-3">
                    <div className="p-4 rounded text-center">
                      <h3 className="text-dark mb-0">1000+</h3>
                      <p className="text-dark mb-0">Clienti Soddisfatti</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3">
                    <div className="p-4 rounded text-center">
                      <h3 className="text-dark mb-0">50+</h3>
                      <p className="text-dark mb-0">Gare Supportate</p>
                    </div>
                  </Col>
                  <Col className="mb-3">
                    <div className="bg-red-gradient p-4 rounded text-center">
                      <h3 className="text-white mb-0">24/7</h3>
                      <p className="text-white mb-0">Assistenza Gare</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Home;
