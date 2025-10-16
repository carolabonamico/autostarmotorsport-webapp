import { Card } from 'react-bootstrap';
import '../styles/components/Cards.css';

export function SpecsCard({ tech, index = 0 }) {
  if (!tech) return null;

  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Card.Body>
        <h5>{tech.title}</h5>
        <p>{tech.description}</p>
        <ul className="list-unstyled">
          {tech.details.map((detail, idx) => (
            <li key={idx} className="mb-3">
              <i className="bi bi-check-circle-fill text-red me-2"></i>
              {detail}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default SpecsCard;