import { Card } from 'react-bootstrap';
import '../../styles/components/Cards.css';

const CertCard = ({ cert, delay = 0 }) => {
  return (
    <Card
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Card.Body className="d-flex flex-column">
        <i className="bi bi-file-earmark-pdf text-danger" style={{fontSize: '3rem'}}></i>
        <h5>{cert.title}</h5>
        <p>Data di rilascio: {cert.date}</p>
        <a href={cert.file} className="btn btn-outline-red w-100" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-eye me-1"></i>
          Visualizza PDF
        </a>
      </Card.Body>
    </Card>
  );
}

export default CertCard;