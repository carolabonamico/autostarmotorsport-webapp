import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { newsArticles } from '../data/news';
import AOS from 'aos';
import { useEffect } from 'react';

const NewsArticle = () => {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!article) {
    return (
      <Container className="py-5">
        <h2 className="mb-4">Articolo non trovato</h2>
        <Button as={Link} to="/news" variant="primary">Torna alle News</Button>
      </Container>
    );
  }

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('it-IT', { year:'numeric', month:'long', day:'numeric' });

  return (
  <section className="section bg-light article-detail">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div data-aos="fade-up" className="mb-4 d-flex align-items-center gap-3 flex-wrap">
              <Badge bg="primary">
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </Badge>
              <span className="news-date">{formatDate(article.date)}</span>
            </div>
            <h1 className="mb-4" data-aos="fade-up" data-aos-delay="100">{article.title}</h1>
            <div className="mb-4 d-flex align-items-center justify-content-center position-relative" 
                 style={{minHeight:'280px', background:'linear-gradient(135deg,var(--black),var(--dark-red))', borderRadius:'12px'}} 
                 data-aos="fade-up" data-aos-delay="150">
              <i className="bi bi-newspaper text-white" style={{fontSize:'4rem', opacity:.85}}></i>
            </div>
            <div className="content" data-aos="fade-up" data-aos-delay="200" style={{whiteSpace:'pre-line', lineHeight:1.65}}>
              {article.content}
            </div>
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
