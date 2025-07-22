import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = ({ 
  title, 
  subtitle,
  images = [],
  highlight,
  backgroundClass = 'hero-professional',
  children
}) => {
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className={backgroundClass}>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={8} className="text-center">
            <div className="hero-content">
              
              {images.length > 0 && (
                <div className="mb-4 d-flex flex-column align-items-center gap-3">
                  {images.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  ))}
                </div>
              )}

              {(title || highlight) && (
                <h1 className="hero-title">
                  {title} {highlight && <span className="text-accent">{highlight}</span>}
                </h1>
              )}

              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              
              {children && (
                <div className="hero-additional-content mt-4">
                  {children}
                </div>
              )}
              
              <div onClick={scrollToNextSection}>
                <div className="scroll-down-text">Scorri</div>
                <div className="arrow-bounce" >
                    <i className="bi bi-chevron-down"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
