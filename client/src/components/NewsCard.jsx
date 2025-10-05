import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/Cards.css';

const formatDate = (dateString) => new Date(dateString).toLocaleDateString('it-IT');

const NewsCard = ({ article, delay = 0, compact = false }) => {
  if (!article) return null;

  // Capitalizing the category for display
  const categoryLabel = article.category
    ? article.category.charAt(0).toUpperCase() + article.category.slice(1)
    : '';

  return (
    <Card
      className={`team-card h-100 ${compact ? 'news-card-compact' : ''}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Card.Body className="team-card-body">
        <div className="d-flex align-items-center mb-2">
          <Badge bg="primary" className="me-2 badge-category">{categoryLabel}</Badge>
          <span className="news-date">{formatDate(article.date)}</span>
        </div>
        <h5 className="mt-3 mb-3">{article.title}</h5>
        {!compact && <p className="mb-3 team-description">{article.excerpt}</p>}
        {compact && <p className="mb-3 team-description">{article.excerpt}</p>}
        <Button as={Link} to={`/news/${encodeURIComponent(article.date)}-${encodeURIComponent(article.title)}`} variant="outline-primary" size="sm">
          Leggi tutto
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;