import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import AOS from 'aos';

const Noleggio = () => {
  const [activeTab, setActiveTab] = useState('noleggio');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const noleggioVeicoli = [
    {
      name: 'Formula 3 Spec',
      category: 'Monoposto',
      power: '270 CV',
      features: ['Telemetria avanzata', 'Setup personalizzabile', 'Assistenza tecnica'],
      pricePerDay: '1.200',
      available: true,
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Prototype CN2',
      category: 'Prototipo',
      power: '350 CV',
      features: ['Aerodinamica avanzata', 'Motore preparato', 'Supporto gara'],
      pricePerDay: '1.800',
      available: true,
      image: '/api/placeholder/400/250'
    },
    {
      name: 'GT3 Cup',
      category: 'Gran Turismo',
      power: '450 CV',
      features: ['ABS/TC Racing', 'Roll-cage FIA', 'Pneumatici slick'],
      pricePerDay: '2.200',
      available: false,
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Rally R5',
      category: 'Rally',
      power: '280 CV',
      features: ['4WD', 'Sospensioni regolabili', 'Note pacenotes'],
      pricePerDay: '1.500',
      available: true,
      image: '/api/placeholder/400/250'
    }
  ];

  const venditeVeicoli = [
    {
      name: 'BMW M3 E46 Preparata',
      category: 'Turismo',
      year: '2005',
      power: '380 CV',
      price: '45.000',
      condition: 'Eccellente',
      features: ['Motore preparato', 'Roll-cage', 'Sospensioni Öhlins'],
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Porsche 911 GT3 Cup',
      category: 'Gran Turismo',
      year: '2018',
      power: '485 CV',
      price: '180.000',
      condition: 'Come nuovo',
      features: ['Omologazione FIA', 'Telemetria', 'Storia gare completa'],
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Formula Renault 2.0',
      category: 'Monoposto',
      year: '2016',
      power: '210 CV',
      price: '28.000',
      condition: 'Buono',
      features: ['Motore revisionato', 'Telaio certificato', 'Ricambi inclusi'],
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Subaru Impreza WRX Rally',
      category: 'Rally',
      year: '2008',
      power: '300 CV',
      price: '35.000',
      condition: 'Ottimo',
      features: ['Preparazione completa', 'Doppia omologazione', 'Kit ricambi'],
      image: '/api/placeholder/400/250'
    }
  ];

  const servizi = [
    {
      icon: 'tools',
      title: 'Preparazione Completa',
      description: 'Prepariamo il tuo veicolo secondo le specifiche di categoria'
    },
    {
      icon: 'shield-check',
      title: 'Certificazioni FIA',
      description: 'Gestiamo tutte le pratiche per omologazioni e certificazioni'
    },
    {
      icon: 'truck',
      title: 'Trasporto Veicoli',
      description: 'Servizio di trasporto specializzato per veicoli da competizione'
    },
    {
      icon: 'person-gear',
      title: 'Assistenza Tecnica',
      description: 'Supporto tecnico completo durante eventi e competizioni'
    }
  ];

  return (
    <>

      {/* Tabs Section */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <div data-aos="fade-up">
                <div className="d-flex justify-content-center mb-5">
                  <div className="nav nav-custom" role="tablist" style={{
                    background: '#fff',
                    borderRadius: '14px 14px 0 0',
                    border: '1.5px solid #e0e0e0',
                    borderBottom: '2.5px solid #e9ecef',
                    display: 'inline-flex',
                    gap: '0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    padding: '0 4px',
                  }}>
                    <button
                      type="button"
                      className="tab-btn"
                      aria-selected={activeTab === 'noleggio'}
                      onClick={() => setActiveTab('noleggio')}
                      style={{
                        border: 'none',
                        outline: 'none',
                        background: 'none',
                        padding: '14px 36px',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        color: activeTab === 'noleggio' ? '#dc3545' : '#495057',
                        borderBottom: activeTab === 'noleggio' ? '3px solid #dc3545' : '3px solid transparent',
                        backgroundColor: 'transparent',
                        transition: 'color 0.2s, border-bottom 0.2s',
                        cursor: 'pointer',
                        marginRight: '2px',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                      }}
                      onMouseOver={e => { if (activeTab !== 'noleggio') e.currentTarget.style.color = '#dc3545'; }}
                      onMouseOut={e => { if (activeTab !== 'noleggio') e.currentTarget.style.color = '#495057'; }}
                    >
                      Noleggio Veicoli
                    </button>
                    <button
                      type="button"
                      className="tab-btn"
                      aria-selected={activeTab === 'vendita'}
                      onClick={() => setActiveTab('vendita')}
                      style={{
                        border: 'none',
                        outline: 'none',
                        background: 'none',
                        padding: '14px 36px',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        color: activeTab === 'vendita' ? '#dc3545' : '#495057',
                        borderBottom: activeTab === 'vendita' ? '3px solid #dc3545' : '3px solid transparent',
                        backgroundColor: 'transparent',
                        transition: 'color 0.2s, border-bottom 0.2s',
                        cursor: 'pointer',
                        marginLeft: '2px',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                      }}
                      onMouseOver={e => { if (activeTab !== 'vendita') e.currentTarget.style.color = '#dc3545'; }}
                      onMouseOut={e => { if (activeTab !== 'vendita') e.currentTarget.style.color = '#495057'; }}
                    >
                      Vendita Veicoli
                    </button>
                  </div>
                </div>
                
                {activeTab === 'noleggio' && (
                  <>
                    <Row>
                      <Col>
                        <h2 className="section-title">
                          Noleggio <span className="text-primary">Veicoli da Competizione</span>
                        </h2>
                        <p className="lead text-center mb-5">
                          Affitta i nostri veicoli da competizione per gare, track day e test
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      {noleggioVeicoli.map((veicolo, index) => (
                        <Col lg={6} className="mb-4" key={index}>
                          <Card 
                            className="h-100 border-0 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                              borderRadius: '16px',
                              overflow: 'hidden',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <div 
                              className="position-relative"
                              style={{
                                height: '180px',
                                background: 'linear-gradient(135deg, #2c3e50, #34495e)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <i className="bi bi-car-front text-white" style={{fontSize: '3rem', opacity: 0.8}}></i>
                              <Badge 
                                bg={veicolo.available ? 'success' : 'danger'}
                                className="position-absolute top-0 end-0 m-3"
                                style={{borderRadius: '8px'}}
                              >
                                {veicolo.available ? 'Disponibile' : 'Non Disponibile'}
                              </Badge>
                            </div>
                            <Card.Body className="p-4">
                              <div className="mb-3">
                                <h5 className="mb-2 fw-bold">{veicolo.name}</h5>
                                <div className="d-flex gap-2 mb-2">
                                  <Badge bg="light" text="dark" style={{fontSize: '0.75rem'}}>{veicolo.category}</Badge>
                                  <Badge bg="light" text="dark" style={{fontSize: '0.75rem'}}>{veicolo.power}</Badge>
                                </div>
                              </div>
                              
                              <ul className="list-unstyled mb-4" style={{fontSize: '0.9rem'}}>
                                {veicolo.features.map((feature, idx) => (
                                  <li key={idx} className="mb-2 d-flex align-items-center">
                                    <div 
                                      className="me-2 rounded-circle d-flex align-items-center justify-content-center"
                                      style={{
                                        width: '6px',
                                        height: '6px',
                                        backgroundColor: 'var(--primary-red)',
                                        minWidth: '6px'
                                      }}
                                    ></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="h4 text-dark mb-0">€{veicolo.pricePerDay}</span>
                                <small className="text-medium-grey ms-1">/giorno</small>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}

                {activeTab === 'vendita' && (
                  <>
                    <Row>
                      <Col>
                        <h2 className="section-title">
                          Vendita <span className="text-primary">Veicoli Preparati</span>
                        </h2>
                        <p className="lead text-center mb-5">
                          Veicoli da competizione selezionati e preparati dai nostri esperti
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      {venditeVeicoli.map((veicolo, index) => (
                        <Col lg={6} className="mb-4" key={index}>
                          <Card 
                            className="h-100 border-0 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                              borderRadius: '16px',
                              overflow: 'hidden',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <div 
                              className="position-relative"
                              style={{
                                height: '180px',
                                background: 'linear-gradient(135deg, #8b4513, #a0522d)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <i className="bi bi-car-front-fill text-white" style={{fontSize: '3rem', opacity: 0.8}}></i>
                            </div>
                            <Card.Body className="p-4">
                              <div className="mb-3">
                                <h5 className="mb-2 fw-bold">{veicolo.name}</h5>
                                <div className="d-flex gap-2 mb-3">
                                  <Badge bg="light" text="dark" style={{fontSize: '0.75rem'}}>{veicolo.category}</Badge>
                                  <Badge bg="light" text="dark" style={{fontSize: '0.75rem'}}>{veicolo.year}</Badge>
                                </div>
                              </div>
                              
                              <div className="row mb-3">
                                <div className="col-6">
                                  <small className="text-medium-grey d-block">Potenza</small>
                                  <span className="fw-semibold">{veicolo.power}</span>
                                </div>
                                <div className="col-6">
                                  <small className="text-medium-grey d-block">Condizioni</small>
                                  <span className="fw-semibold">{veicolo.condition}</span>
                                </div>
                              </div>
                              
                              <ul className="list-unstyled mb-4" style={{fontSize: '0.9rem'}}>
                                {veicolo.features.map((feature, idx) => (
                                  <li key={idx} className="mb-2 d-flex align-items-center">
                                    <div 
                                      className="me-2 rounded-circle d-flex align-items-center justify-content-center"
                                      style={{
                                        width: '6px',
                                        height: '6px',
                                        backgroundColor: 'var(--primary-red)',
                                        minWidth: '6px'
                                      }}
                                    ></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="h4 text-dark mb-0">€{veicolo.price}</span>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Servizi <span className="text-primary">Aggiuntivi</span>
              </h2>
              <p className="lead text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                Offriamo un pacchetto completo di servizi per ogni esigenza motorsport
              </p>
            </Col>
          </Row>
          <Row>
            {servizi.map((servizio, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card 
                  className="team-card h-100 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="team-card-body">
                    <i className={`bi bi-${servizio.icon} text-primary`} style={{fontSize: '3rem'}}></i>
                    <h5 className="mt-3 mb-3">{servizio.title}</h5>
                    <p className="text-medium-grey">{servizio.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Noleggio;
