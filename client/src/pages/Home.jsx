import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const newsArticles = [
  {
    id: 1,
    title: 'Autostar Motorsport vince il Campionato Italiano Velocità in Salita',
    excerpt: 'Grande successo per il nostro team: prima vittoria assoluta nella categoria CN con il prototipo HURR.',
    category: 'motorsport',
    date: '2025-07-15',
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: 'Nuova Certificazione per Veicoli Elettrici',
    excerpt: 'Il nostro team ha completato la formazione avanzata per la manutenzione di veicoli elettrici ad alta tensione.',
    category: 'tecnologia',
    date: '2025-07-10',
    image: '/api/placeholder/400/250',
  },

];

const Home = () => {
  const [showNewsButton, setShowNewsButton] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setTimeout(() => setShowNewsButton(true), 1200);
    return () => clearTimeout(timer);
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
      {/* Carousel hero */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/308tcr.jpg"
            alt="Peugeot 308 TCR"
            style={{height: '520px', objectFit: 'cover'}}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/2017-adria-box-g1.jpg"
            alt="Adria Box G1 - 2017"
            style={{height: '520px', objectFit: 'cover'}}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/2017-misano-03.jpg"
            alt="Peugeot 308"
            style={{height: '520px', objectFit: 'cover'}}
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/Imola_CITE_2014_curva_rivazza.jpg"
            alt="Imola CITE 2014 - Curva Rivazza"
            style={{height: '520px', objectFit: 'cover'}}
          />
        </Carousel.Item>
      </Carousel>

      {/* Ultime Notizie */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">
                Ultime <span className="text-accent">News</span>
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {newsArticles.slice(0,2).map((news, idx) => (
              <Col md={6} className="mb-4" key={news.id}>
                <Card className="team-card h-100" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="bg-primary" style={{height: '180px', backgroundImage: 'linear-gradient(135deg, var(--racing-black), var(--primary-red))', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="bi bi-newspaper text-white" style={{fontSize: '2.5rem'}}></i>
                  </div>
                  <Card.Body className="team-card-body">
                    <div className="d-flex align-items-center mb-2">
                      <Badge bg="primary" className="me-2">{news.category}</Badge>
                      <span className="news-date">{new Date(news.date).toLocaleDateString('it-IT')}</span>
                    </div>
                    <h5 className="mb-2">{news.title}</h5>
                    <p className="text-muted mb-3">{news.excerpt}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {showNewsButton && (
            <Row>
              <Col className="text-center">
                <Button as={Link} to="/news" variant="custom-primary" className="fw-semibold px-4 py-2 mt-2" data-aos="fade-up" data-aos-delay="200">
                  Vai alla pagina News Motori
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Services Section */}
      <section className="section bg-light pt-2">
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
                  className="team-card h-100 text-decoration-none"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{cursor: 'pointer'}}
                >
                  <Card.Body className="team-card-body text-center">
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

    </>
  );
};

export default Home;
