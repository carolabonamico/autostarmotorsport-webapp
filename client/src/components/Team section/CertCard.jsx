
const CertCard = () => {
  const certifications = [
    {
      id: 1,
      title: 'Certificazione PEI',
      description: 'Persona Esperta per impianti elettrici - Normativa CEI 11-27',
      filename: 'certificazione-pei.pdf',
      issued: '2024'
    },
    {
      id: 2,
      title: 'Certificazione PES/PAV',
      description: 'Persona Esperta/Avvertita per lavori elettrici - Normativa CEI 11-27',
      filename: 'certificazione-pes-pav.pdf',
      issued: '2024'
    },
  ];

  const handleView = (filename) => {
    window.open(`/downloads/${filename}`, '_blank');
  };

  return (
    <div className="certifications-section">
      <div className="row g-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="col-12">
            <div className="cert-card p-4 border rounded-3 bg-light h-100 shadow-sm">
              <div className="d-flex align-items-start">
                <div className="cert-icon me-3">
                  <i className="bi bi-file-pdf text-danger" style={{fontSize: '2.5rem'}}></i>
                </div>
                <div className="cert-content flex-grow-1">
                  <h6 className="cert-title mb-2 text-dark">{cert.title}</h6>
                  <p className="cert-description text-muted small mb-3">
                    {cert.description}
                  </p>
                  <div className="cert-meta d-flex justify-content-between align-items-center mb-3">
                    <span className="cert-description text-muted small mb-3">{cert.issued}</span>

                  </div>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleView(cert.filename)}
                  >
                    <i className="bi bi-eye me-2"></i>
                    Visualizza PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertCard;