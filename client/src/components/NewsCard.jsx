import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/Cards.css';

const formatDate = (dateString) => new Date(dateString).toLocaleDateString('it-IT');

const NewsCard = ({ article, delay = 0 }) => {
  if (!article) return null;

  // Capitalizing the category for display
  const categoryLabel = article.category
    ? article.category.charAt(0).toUpperCase() + article.category.slice(1)
    : '';

  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Badge bg="red" className="badge-center">{categoryLabel}</Badge>
          <small className="text-muted ms-2">{formatDate(article.date)}</small>
        </div>
        <h5 className="mb-2 text-center">{article.title}</h5>
        <p className="mb-3 text-center flex-grow-1">{article.excerpt}</p>
        <Button as={Link} to={`/news/${encodeURIComponent(article.date)}-${encodeURIComponent(article.title)}`} variant="red" className="w-100">
          Leggi
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;