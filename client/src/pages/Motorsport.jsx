import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { carFeatures, galleryImages } from '../data/motorsport';
import '../styles/components/Sections.css';
import '../styles/components/Cards.css';
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

      {/* Carousel hero
      <Carousel fade>
      {carouselItemsMotorsport.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="carousel-img"
            src={img.src}
            alt={img.alt}
          />
          <Carousel.Caption>
            {img.source && <small className="carousel-caption-caption">Fonte: {img.source}</small>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      </Carousel> */}

      {/* Horizontal Gallery Section */}
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className='gallery'>
                {galleryImages.map((img, idx) => (
                  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="gallery-img shadow"
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specs Section */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Specifiche Tecniche" lastword="JSP320 LMP3 Ligier" subtitle="Dall'estate 2025, Autostar Motorsport offre assistenza tecnica dedicata alla Ligier JSP320 LMP3 di un cliente. Preparazione, setup, telemetria e supporto in pista: un servizio completo per le competizioni endurance e prototipi." />
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
