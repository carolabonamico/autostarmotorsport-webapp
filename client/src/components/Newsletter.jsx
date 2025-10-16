import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/components/Footer.css';

const Newsletter = () => {
  return (
    <section className="section bg-dark-custom text-white">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <div data-aos="fade-up">
              <h2 className="text-white mb-4">
                Resta <span className="text-red">Aggiornato</span>
              </h2>
              <p className="lead mb-4">
                Iscriviti alla nostra newsletter per ricevere tutte le ultime 
                notizie dal mondo motorsport e automotive direttamente nella tua email.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group input-group-lg">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="La tua email"
                    />
                    <Button className='btn-red' type="button">
                      <i className="bi bi-envelope me-2"></i>
                      Iscriviti
                    </Button>
                  </div>
                  <small className="text-medium-grey d-block mt-2">
                    Rispettiamo la tua privacy. Nessuno spam, promesso.
                  </small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
