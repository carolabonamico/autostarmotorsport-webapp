import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';

const HurrPrototipo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const specs = [
    { label: 'Motore', value: 'Ducati 749 testa stretta' },
    { label: 'Potenza', value: '123 CV' },
    { label: 'Peso', value: '181 kg' },
    { label: 'Capienza Serbatoio', value: '13 L' },
    { label: 'Categoria', value: 'Prototipo 750' },
    { label: 'Cruscotto', value: 'Digitale alta definizione' },
    { label: 'Corpi Farfallati', value: 'Maggiorati' }
  ];

  const tecnologie = [
    {
      icon: 'wind',
      title: 'Aerodinamica Avanzata',
      description: 'Body in fibra di carbonio con aerodinamica attiva studiata in galleria del vento',
      details: ['Ala anteriore regolabile', 'Diffusore posteriore', 'Flap laterali attivi']
    },
    {
      icon: 'gear-wide-connected',
      title: 'Telaio Monoscocca',
      description: 'Telaio monoscocca in fibra di carbonio con celle di sicurezza FIA',
      details: ['Peso ridotto', 'Rigidità torsionale elevata', 'Sicurezza massima']
    },
    {
      icon: 'speedometer',
      title: 'Elettronica Avanzata',
      description: 'Sistema di controllo trazione e telemetria in tempo reale',
      details: ['ECU programmabile', 'Telemetria GPS', 'Data logging avanzato']
    },
    {
      icon: 'tools',
      title: 'Sospensioni Attive',
      description: 'Sistema di sospensioni con controllo elettronico per ottimizzare il setup',
      details: ['Regolazione in tempo reale', 'Adattamento al tracciato', 'Feedback continuo']
    }
  ];

  const achievements = [
    { title: 'Campionato Italiano Velocità Montagna', subtitle: 'Categoria CN - 2024', icon: 'trophy' },
    { title: 'Record del Tracciato', subtitle: 'Verzegnis - 1:28.456', icon: 'stopwatch' },
    { title: 'Miglior Tempo Assoluto', subtitle: 'Coppa Carnevale - 2024', icon: 'award' },
    { title: 'Pole Position', subtitle: '12 pole su 14 gare', icon: 'flag' }
  ];

  return (
    <div>
      <HeroSection 
        highlight="HURR"
        title="Prototipo"
        subtitle="L'apice dell'innovazione AutoStar Racing - 20 anni di esperienza motorsport condensati in una macchina da corsa all'avanguardia."
      />

      {/* Specs Section */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Specifiche <span className="text-primary">Tecniche</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <div data-aos="fade-up" data-aos-delay="200">
                <Row>
                  {specs.map((spec, index) => (
                    <Col md={6} className="mb-3" key={index}>
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">{spec.label}</span>
                          <span className="text-primary">{spec.value}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Tecnologie <span className="text-primary">Innovative</span>
              </h2>
            </Col>
          </Row>
          <Row>
            {tecnologie.map((tech, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <Card 
                  className="card-custom h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div 
                        className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
                        style={{width: '60px', height: '60px', minWidth: '60px'}}
                      >
                        <i className={`bi bi-${tech.icon} text-white`} style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <div>
                        <h4 className="mb-2">{tech.title}</h4>
                        <p className="text-muted mb-3">{tech.description}</p>
                      </div>
                    </div>
                    <ul className="list-unstyled">
                      {tech.details.map((detail, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-arrow-right text-accent me-2"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Achievements */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Risultati e <span className="text-primary">Riconoscimenti</span>
              </h2>
            </Col>
          </Row>
          <Row>
            {achievements.map((achievement, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card 
                  className="text-center border-0 bg-light h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <i className={`bi bi-${achievement.icon} text-primary mb-3`} style={{fontSize: '3rem'}}></i>
                    <h5 className="mb-2">{achievement.title}</h5>
                    <p className="text-muted mb-0">{achievement.subtitle}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default HurrPrototipo;
