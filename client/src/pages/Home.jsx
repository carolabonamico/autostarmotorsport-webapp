import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/components/Sections.css';
import '../styles/components/Cards.css';
import '../styles/components/Buttons.css';
import NewsCard from '../components/NewsCard';
import { newsArticles } from '../data/news';
import { services, carouselItemsHome } from '../data/home';
import SectionHeader from '../components/SectionHeader';

// Takes the two most recent articles by sorting by date desc
const latestArticles = [...newsArticles]
  .sort((a,b) => new Date(b.date) - new Date(a.date))
  .slice(0,2);

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

  const storiaRef = useRef(null);

  return (
  <>

      {/* Carousel hero */}
      <Carousel fade>
        {carouselItemsHome.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="carousel-img"
              src={img.src}
              alt={img.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Last updates */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Ultimi" lastword="Aggiornamenti" subtitle="Rimani aggiornato con le nostre ultime notizie e servizi" />
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            {latestArticles.map((article, idx) => (
              <Col lg={5} md={6} key={article.date + article.title}>
                <NewsCard article={article} delay={idx * 100} />
              </Col>
            ))}
          </Row>
          {showNewsButton && (
            <Row>
              <Col md={12} className="text-center mt-5">
                <Button as={Link} to="/news" variant="red" data-aos="fade-up" data-aos-delay="200">
                  Vai alla pagina News Motori
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Services Section */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="I Nostri" lastword="Servizi" subtitle="Offriamo una gamma completa di servizi automotive. Clicca su un servizio per saperne di più." />
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="pb-4" key={index}>
                <Card 
                  as={Link}
                  to={`/preparazioni#${service.id}`}
                  className="card-service"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <Card.Body>
                    <div className="service-icon">
                      <i className={`bi bi-${service.icon}`}></i>
                    </div>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
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
