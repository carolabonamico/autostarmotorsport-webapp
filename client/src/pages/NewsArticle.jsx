import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { newsArticles } from '../data/news';
import AOS from 'aos';
import { useEffect } from 'react';

const NewsArticle = () => {
  const { id } = useParams();
  // id param is now `${date}-${title}`; date is always 10 chars (YYYY-MM-DD)
  const datePart = id.slice(0, 10);
  const titlePart = decodeURIComponent(id.slice(11));
  const article = newsArticles.find(a => a.date === datePart && a.title === titlePart);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('it-IT', { year:'numeric', month:'long', day:'numeric' });

  return (
  <section className="section bg-light article-detail">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {article ? (
            <>
            <div data-aos="fade-up" className="mb-4 d-flex align-items-center gap-3 flex-wrap">
              <Badge bg="primary">
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </Badge>
              <span>{formatDate(article.date)}</span>
            </div>
            <h1 className="mb-4 text-dark" data-aos="fade-up" data-aos-delay="100">{article.title}</h1>
            <div className="mb-4 d-flex align-items-center justify-content-center position-relative" 
                 style={{minHeight:'280px', background:'linear-gradient(135deg,var(--black),var(--dark-red))', borderRadius:'12px'}} 
                 data-aos="fade-up" data-aos-delay="150">
              <i className="bi bi-newspaper text-white" style={{fontSize:'4rem'}}></i>
            </div>
            <p data-aos="fade-up" data-aos-delay="200" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
              {article.content}
            </p>
            </>
            ) : (
              <h1 className="mb-4 text-dark" data-aos="fade-up" data-aos-delay="100">Articolo non trovato</h1>
            )}
            <div className="mt-5 d-flex gap-3" data-aos="fade-up" data-aos-delay="250">
              <Button as={Link} to="/news" variant="outline-primary" className="btn-sm">Torna alle News</Button>
              <Button as={Link} to="/" variant="primary" className="btn-sm">Home</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsArticle;
