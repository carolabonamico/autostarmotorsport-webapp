import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Breadcrumb } from 'react-bootstrap';
import { newsArticles } from '../data/news';
import AOS from 'aos';
import { useEffect } from 'react';
import '../styles/components/NewsArticle.css';

const NewsArticle = () => {
  const { id } = useParams();
  const datePart = id.slice(0, 10);
  const titlePart = decodeURIComponent(id.slice(11));
  const article = newsArticles.find(a => a.date === datePart && a.title === titlePart);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('it-IT', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  if (!article) {
    return (
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="article-not-found" data-aos="fade-up">
                <i className="bi bi-exclamation-triangle-fill mb-4"></i>
                <h1 className="mb-4">Articolo non trovato</h1>
                <p className="text-muted mb-4">L'articolo che stai cercando non esiste o è stato rimosso.</p>
                <Button as={Link} to="/news" variant="red">Torna alle News</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <div className="news-article-page">
      {/* Hero Section with Image */}
      <section className="article-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Breadcrumb data-aos="fade-up" className="article-breadcrumb">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/news" }}>News Motori</Breadcrumb.Item>
                <Breadcrumb.Item active>{article.title}</Breadcrumb.Item>
              </Breadcrumb>

              <div className="article-header" data-aos="fade-up" data-aos-delay="100">
                <Badge bg="red" className="article-badge">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </Badge>
                <h1 className="article-title">{article.title}</h1>
                <div className="article-meta">
                  <span><i className="bi bi-calendar3 me-2"></i>{formatDate(article.date)}</span>
                  {article.readingTime && (
                    <span><i className="bi bi-clock me-2"></i>{article.readingTime} di lettura</span>
                  )}
                </div>
              </div>

              {article.image && article.image !== '/api/placeholder/800/400' && (
                <div className="article-image-wrapper" data-aos="fade-up" data-aos-delay="200">
                  <img src={article.image} alt={article.title} className="article-image" />
                </div>
              )}
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              {article.excerpt && (
                <div className="article-excerpt" data-aos="fade-up">
                  <i className="bi bi-quote quote-icon"></i>
                  <p>{article.excerpt}</p>
                </div>
              )}

            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="article-text" data-aos="fade-up" data-aos-delay="100">
                {article.content.split('\n').map((paragraph, idx) => 
                  paragraph.trim() && <p key={idx}>{paragraph}</p>
                )}
              </div>
            </Col>
          </Row>
          
          {/* Article Actions */}
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="article-actions" data-aos="fade-up" data-aos-delay="200">
                <Button as={Link} to="/news" variant="outline-secondary" className="me-3">
                  <i className="bi bi-arrow-left me-2"></i>Torna alle News
                </Button>
                <Button as={Link} to="/" variant="red">
                  <i className="bi bi-house-door me-2"></i>Home
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default NewsArticle;
