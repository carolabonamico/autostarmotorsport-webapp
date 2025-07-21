import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Ultime notizie (puoi importare da NewsMotori se vuoi centralizzare)
const newsArticles = [
  {
    id: 1,
    title: 'AutoStar Racing vince il Campionato Italiano Velocità in Salita',
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
  // ...altre notizie
];

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

      {/* Ultime Notizie */}
      <section className="section bg-light pt-2">
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
          <Row>
            <Col className="text-center">
              <Button as={Link} to="/news" variant="custom-primary" className="fw-semibold px-4 py-2 mt-2">
                Vai alla pagina News Motori
              </Button>
            </Col>
          </Row>
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

      {/* Storia come sezione semplice */}
      <section className="section bg-light text-black pt-2" ref={storiaRef}>
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">
                La Nostra <span className="text-accent">Storia</span>
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col lg={5} md={6} className="mb-4 d-flex justify-content-center">
              <div className="story-img-wrapper" data-aos="fade-right">
                <img src="/public/downloads/storia.jpg" alt="AutoStar Storia" className="rounded shadow-lg" style={{maxWidth: '100%', height: '260px', objectFit: 'cover', border: '4px solid var(--primary-red)'}} />
              </div>
            </Col>
            <Col lg={7} md={12}>
              <div data-aos="fade-left" className="story-content p-4 rounded shadow-lg bg-white">
                <p className="lead mb-3 text-dark" style={{fontWeight: 500, fontSize: '1.25rem'}}>
                  Oltre 60 anni di <span className="text-accent">passione</span>, <span className="text-accent">innovazione</span> e <span className="text-accent">successi</span> nel mondo automotive.
                </p>
                <p className="mb-4 text-muted text-justify" style={{fontSize: '1.08rem'}}>
                  Dall'assistenza tecnica in pista alla cura quotidiana dei veicoli, la nostra esperienza nel motorsport ci permette di offrire competenze uniche e servizi d'eccellenza.<br />
                  La nostra esperienza nel motorsport ci ha permesso di sviluppare 
                  competenze uniche che applichiamo anche alla manutenzione quotidiana 
                  dei veicoli dei nostri clienti.
                </p>
                <Button 
                  as={Link}
                  to="/storia"
                  variant="custom-primary"
                  className="fw-semibold px-4 py-2 mt-2"
                  style={{fontSize: '1.08rem', letterSpacing: '0.01em'}}
                >
                  Scopri la nostra storia
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Home;
