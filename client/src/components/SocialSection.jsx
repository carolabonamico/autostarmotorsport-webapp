import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/components/Footer.css';
import '../styles/components/Animations.css';

const SocialSection = () => {
  return (
      
      <section className="section bg-light pt-2">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Seguici sui <span className="text-primary">Social</span>
              </h2>
              <p className="lead text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                Non perdere i nostri aggiornamenti quotidiani sui social media
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-facebook text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>Facebook</h5>
                <p className="text-medium-grey">Foto e video dalle nostre attività</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-accent rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-instagram text-dark" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>Instagram</h5>
                <p className="text-medium-grey">Stories e contenuti esclusivi</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-youtube text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>YouTube</h5>
                <p className="text-medium-grey">Video tecnici e interviste</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-accent rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-linkedin text-dark" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>LinkedIn</h5>
                <p className="text-medium-grey">Aggiornamenti professionali</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default SocialSection;
