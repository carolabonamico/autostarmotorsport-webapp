const CertCard = () => {
  return (
    <div className="row g-3 mt-4">
        <div className="col-md-6">
        <div className="download-card p-3 border rounded bg-light">
            <div className="d-flex align-items-start">
            <i className="bi bi-file-pdf text-danger me-3" style={{fontSize: '2rem'}}></i>
            <div className="flex-grow-1">
                <h6 className="mb-1">Certificazioni e Attestati</h6>
                <p className="text-muted small mb-2">Documentazione ufficiale delle nostre certificazioni PEI e PES/PAV</p>
                <a 
                href="/downloads/certificazioni-elettriche.pdf" 
                className="btn btn-sm btn-outline-primary"
                download
                >
                <i className="bi bi-download me-1"></i>
                Scarica PDF
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default CertCard;