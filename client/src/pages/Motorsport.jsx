import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';

const Motorsport = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const tecnologie = [
    {
      icon: 'wind',
      title: 'Telaio',
      description: 'Body in fibra di carbonio con aerodinamica attiva',
      details: ['Monoscocca in carbonio - HP Composites', 'Carrozzeria in carbonio - HP Composites',
        'Lunghezza: 4605 mm - larghezza: 1900 mm - passo: 2860 mm', 'Peso: 950 kg']
    },
    {
      icon: 'gear-wide-connected',
      title: 'Assetto',
      description: 'Assetto a doppio braccio con combinazione pushrod e molla-ammortizzatore',
      details: ['Ammortizzatori Ohlins TTX40 a 4 vie con stelo passante', 'Sistema di barre antirollio regolabili', '3° elemento anteriore e posteriore']
    },
    {
      icon: 'gear-wide-connected',
      title: 'Cambio',
      description: 'Cambio sequenziale a 6 velocità Xtrac 1152 con involucro in alluminio',
      details: ['Sistema di cambio al volante pneumatico semiautomatico - Megaline', 'Raffreddamento del cambio con radiatore dell\'olio']
    },
    {
      icon: 'gear-wide-connected',
      title: 'Sterzo',
      description: 'Sterzo idraulico servoassistito raffreddato da radiatore ad olio',
      details: []
    },
    {
      icon: 'speedometer',
      title: 'Motore ed Elettronica',
      description: 'Nissan VK56, V8, 5,6 litri, 460 CV',
      details: ['Cambio e centraline motore Magneti-Marelli']
    },
    { icon: 'tools',
      title: 'Freni',
      description: 'Pacchetto frenante Brembo',
      details: ['Pinze a 6 pistoncini anteriori e dischi posteriori da 14 pollici']
    },
    {
      icon: 'tools',
      title: 'Cerchi e Pneumatici',
      description: 'Cerchi Ø18\'\' in magnesio OZ Racing',
      details: ['Larghezza anteriore: 12,5\'\'', 'Larghezza posteriore: 13\'\'', 'Pneumatici Michelin - Anteriori: 29/64-18 - Posteriori: 31/71-18']
    },
    { icon: 'tools',
      title: 'Sicurezza',
      description: 'Regole ACO 2020',
      details: ['Pannelli laterali in Zylon', 'imbottitura del conducente', 'nuovo guscio in carbonio del sedile del conducente', 'doppio sedile in carbonio omologato', 'ventilazione dell\'abitacolo', 'Poggiatesta compatibile con Hans']
    }
  ];

  const achievements = [
    { title: 'Campionato Italiano Velocità Montagna', subtitle: 'Categoria CN - 2024', icon: 'trophy' },
    { title: 'Record del Tracciato', subtitle: 'Verzegnis - 1:28.456', icon: 'stopwatch' },
    { title: 'Miglior Tempo Assoluto', subtitle: 'Coppa Carnevale - 2024', icon: 'award' },
    { title: 'Pole Position', subtitle: '12 pole su 14 gare', icon: 'flag' }
  ];

  return (
    <>

      {/* Carousel hero */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ligier/ligier2.jpg"
            alt="Ligier JSP320 LMP3"
            style={{height: '520px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <small className="bg-dark bg-opacity-75 px-2 py-1 rounded">Fonte: ligierautomotive.com</small>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ligier/ligier1.jpg"
            alt="Ligier JSP320 LMP3"
            style={{height: '520px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <small className="bg-dark bg-opacity-75 px-2 py-1 rounded">Fonte: ligierautomotive.com</small>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ligier/ligier3.jpg"
            alt="Ligier JSP320 LMP3"
            style={{height: '520px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <small className="bg-dark bg-opacity-75 px-2 py-1 rounded">Fonte: ligierautomotive.com</small>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ligier/ligier4.jpg"
            alt="Ligier JSP320 LMP3"
            style={{height: '520px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <small className="bg-dark bg-opacity-75 px-2 py-1 rounded">Fonte: ligierautomotive.com</small>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ligier/ligier5.jpg"
            alt="Ligier JSP320 LMP3"
            style={{height: '520px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <small className="bg-dark bg-opacity-75 px-2 py-1 rounded">Fonte: ligierautomotive.com</small>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ligier/ligier6.jpg"
            alt="Ligier JSP320 LMP3"
            style={{height: '520px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <small className="bg-dark bg-opacity-75 px-2 py-1 rounded">Fonte: ligierautomotive.com</small>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Specs Section */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">
                Specifiche Tecniche <span className="text-accent"> JSP320 LMP3 Ligier</span>
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

      {/* Horizontal Gallery Section */}
      <section className="section bg-light" style={{padding: '60px 0'}}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', alignItems: 'center'}}>
                {/* Image 1 */}
                <div 
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <img 
                    src="/images/IMG_6285.jpg" 
                    alt="Autostar Motorsport" 
                    className="img-fluid shadow"
                    style={{
                      width: 'auto', 
                      maxWidth: '280px',
                      height: 'auto'
                    }}
                  />
                </div>
                
                {/* Image 2 */}
                <div 
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img 
                    src="/images/IMG_6292.jpg" 
                    alt="Autostar Motorsport" 
                    className="img-fluid shadow"
                    style={{
                      width: 'auto', 
                      maxWidth: '280px',
                      height: 'auto'
                    }}
                  />
                </div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Achievements */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">
                Risultati <span className="text-accent"> Riconoscimenti</span>
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

    </>
  );
};

export default Motorsport;
