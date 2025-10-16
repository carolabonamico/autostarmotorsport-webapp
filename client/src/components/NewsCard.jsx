import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/Cards.css';

const formatDate = (dateString) => new Date(dateString).toLocaleDateString('it-IT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const NewsCard = ({ article, delay = 0, featured = false }) => {
  if (!article) return null;

  const categoryLabel = article.category
    ? article.category.charAt(0).toUpperCase() + article.category.slice(1)
    : '';

  const linkTo = `/news/${encodeURIComponent(article.date)}-${encodeURIComponent(article.title)}`;

  return (
    <Card
      as={Link}
      to={linkTo}
      className={`news-card-modern ${featured ? 'news-card-featured' : ''}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {article.image && article.image !== '/api/placeholder/800/400' && (
        <div className="news-card-image-wrapper">
          <img src={article.image} alt={article.title} />
          <div className="news-card-overlay">
            <Badge bg="red" className="news-card-badge">{categoryLabel}</Badge>
          </div>
        </div>
      )}
      <Card.Body className="news-card-body">
        <div className="news-card-meta">
          <i className="bi bi-calendar3 me-2"></i>
          <small className="text-muted">{formatDate(article.date)}</small>
        </div>
        <Card.Title className={featured ? 'h4' : 'h5'}>{article.title}</Card.Title>
        {article.excerpt && (
          <Card.Text className="news-card-excerpt">
            {article.excerpt}
          </Card.Text>
        )}
        <div className="news-card-footer">
          <span className="news-card-link">
            Leggi l'articolo <i className="bi bi-arrow-right ms-2"></i>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;