const pdfs = [
  {
    title: 'Certificazione PES/PAV',
    desc: 'Certificato ufficiale PES/PAV - Bonamico Davide',
    file: '/pdf/7908_PESPAV-BONAMICO_DAVIDE.pdf'
  },
  {
    title: 'Certificazione PEI',
    desc: 'Certificato ufficiale PEI - Bonamico Davide',
    file: '/pdf/7909_PEI-BONAMICO_DAVIDE.pdf'
  }
];

import { Card } from 'react-bootstrap';

const CertCard = () => {
  return (
    <div className="row g-3 mt-4">
      {pdfs.map((pdf) => (
        <div className="col-md-6 col-12" key={pdf.file}>
          <Card className="team-card h-100">
            <Card.Body className="team-card-body">
              <div className="d-flex align-items-start">
                <i className="bi bi-file-pdf text-danger me-3" style={{fontSize: '2rem'}}></i>
                <div className="flex-grow-1">
                  <h6 className="mb-1">{pdf.title}</h6>
                  <p className="text-muted small mb-2">{pdf.desc}</p>
                  <a 
                    href={pdf.file}
                    className="btn btn-sm btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-eye me-1"></i>
                    Visualizza PDF
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CertCard;