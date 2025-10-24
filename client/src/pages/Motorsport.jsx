import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { carFeatures, mediaGallery } from '../data/motorsport';
import '../styles/components/Sections.css';
import '../styles/components/Cards.css';
import '../styles/components/MediaGallery.css';
import SpecsCard from '../components/SpecsCard';
import SectionHeader from '../components/SectionHeader';

const Motorsport = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Media Gallery - Foto e Video */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader 
                title="La Nostra" 
                lastword="Galleria" 
                subtitle="Scopri la Ligier JSP320 LMP3 in azione attraverso foto e video esclusivi" 
              />
            </Col>
          </Row>
          <Row className="media-gallery-grid">
            {mediaGallery.map((item, idx) => {
              let colSize = {};
              
              if (item.size === 'large') {
                colSize = { lg: 8, md: 12, sm: 12, xs: 12 };
              } else if (item.size === 'medium') {
                colSize = { lg: 6, md: 6, sm: 12, xs: 12 };
              } else if (item.size === 'small') {
                colSize = { lg: 4, md: 6, sm: 6, xs: 12 };
              }
              
              return (
                <Col 
                  key={idx}
                  {...colSize}
                  className="mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 50}
                >
                  <div className={`media-item ${item.orientation} ${item.size}`}>
                    {item.type === 'video' ? (
                      <video 
                        className="media-content shadow"
                        controls
                        preload="auto"
                        playsInline
                      >
                        <source src={item.src} type="video/quicktime" />
                        <source src={item.src.replace('.MOV', '.mp4')} type="video/mp4" />
                        Il tuo browser non supporta il tag video.
                      </video>
                    ) : (
                      <img 
                        src={item.src} 
                        alt={item.alt}
                        className="media-content shadow"
                      />
                    )}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Specs Section */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col>
              <SectionHeader 
                title="Specifiche Tecniche" 
                lastword="JSP320 LMP3 Ligier" 
                subtitle="Dall'estate 2025, Autostar Motorsport offre assistenza tecnica dedicata alla Ligier JSP320 LMP3 di un cliente. Preparazione, setup, telemetria e supporto in pista: un servizio completo per le competizioni endurance e prototipi." 
              />
            </Col>
          </Row>
          <Row>
            {carFeatures.map((tech, index) => (
              <Col lg={6} md={6} className="pb-4" key={index}>
                <SpecsCard tech={tech} index={index} />
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
              <SectionHeader title="Risultati e" lastword="Riconoscimenti" subtitle="Sezione in lavorazione..." />
            </Col>
          </Row>

          {/* <Row>
            {achievements.map((achievement, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card 
                  className="text-center border-0 bg-light h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <i className={`bi bi-${achievement.icon} text-red mb-3`} style={{fontSize: '3rem'}}></i>
                    <h5 className="mb-2">{achievement.title}</h5>
                    <p className="text-medium-grey mb-0">{achievement.subtitle}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}

        </Container>
      </section>

    </>
  );
};

export default Motorsport;
