import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';

const NewsMotori = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = [
    { id: 'all', name: 'Tutte le News' },
    { id: 'motorsport', name: 'Motorsport' },
    { id: 'tecnologia', name: 'Tecnologia' },
    { id: 'azienda', name: 'Azienda' },
    { id: 'eventi', name: 'Eventi' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'AutoStar Racing vince il Campionato Italiano Velocità in Salita',
      excerpt: 'Grande successo per il nostro team: prima vittoria assoluta nella categoria CN con il prototipo HURR.',
      category: 'motorsport',
      date: '2025-07-15',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Nuova Certificazione per Veicoli Elettrici',
      excerpt: 'Il nostro team ha completato la formazione avanzata per la manutenzione di veicoli elettrici ad alta tensione.',
      category: 'tecnologia',
      date: '2025-07-10',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Inaugurazione Nuova Area Diagnostica',
      excerpt: 'Abbiamo ampliato la nostra officina con una nuova area dedicata alla diagnostica avanzata multimarca.',
      category: 'azienda',
      date: '2025-07-05',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'HURR Prototipo: Evoluzione Continua',
      excerpt: 'Nuovi aggiornamenti aerodinamici e di powertrain per il nostro prototipo da competizione.',
      category: 'motorsport',
      date: '2025-06-28',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 5,
      title: 'Partecipazione al Motor Show di Bologna',
      excerpt: 'Saremo presenti al Motor Show con il nostro stand dedicato alle preparazioni sportive.',
      category: 'eventi',
      date: '2025-06-20',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Nuove Tecnologie di Mappatura ECU',
      excerpt: 'Investimenti in software di ultima generazione per ottimizzazione prestazioni e consumi.',
      category: 'tecnologia',
      date: '2025-06-15',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 7,
      title: 'Partnership con Università di Modena',
      excerpt: 'Collaborazione per progetti di ricerca su mobilità sostenibile e tecnologie innovative.',
      category: 'azienda',
      date: '2025-06-10',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 8,
      title: 'Corso di Guida Sportiva AutoStar',
      excerpt: 'Al via i corsi di guida sportiva con istruttori professionali nel nostro centro.',
      category: 'eventi',
      date: '2025-06-05',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      motorsport: 'primary',
      tecnologia: 'accent',
      azienda: 'secondary',
      eventi: 'success'
    };
    return colors[category] || 'primary';
  };

  return (
    <div>
      <HeroSection 
        title="News"
        highlight="motori"
        subtitle="Resta aggiornato su tutte le novità del mondo automotive"
      />

      {/* Category Filter */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col>
              <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="section-title">Ultime Notizie</h2>
                <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'primary' : 'outline-primary'}
                      onClick={() => setSelectedCategory(category.id)}
                      className="mb-2"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Featured Article */}
          {selectedCategory === 'all' && (
            <Row className="mb-5">
              <Col>
                {filteredNews
                  .filter(article => article.featured)
                  .slice(0, 1)
                  .map((article) => (
                    <Card 
                      key={article.id} 
                      className="news-card"
                      data-aos="fade-up"
                    >
                      <Row className="g-0">
                        <Col md={6}>
                          <div 
                            className="h-100 bg-primary"
                            style={{
                              backgroundImage: `linear-gradient(45deg, var(--primary-red), var(--dark-red))`,
                              minHeight: '300px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <i className="bi bi-image text-white" style={{fontSize: '4rem'}}></i>
                          </div>
                        </Col>
                        <Col md={6}>
                          <Card.Body className="p-4">
                            <div className="d-flex align-items-center mb-3">
                              <Badge 
                                bg={getCategoryColor(article.category)}
                                className="me-2"
                              >
                                {categories.find(cat => cat.id === article.category)?.name}
                              </Badge>
                              <span className="news-date">{formatDate(article.date)}</span>
                            </div>
                            <h3 className="mb-3">{article.title}</h3>
                            <p className="text-muted mb-4">{article.excerpt}</p>
                            <Button variant="primary">
                              Leggi di più <i className="bi bi-arrow-right ms-2"></i>
                            </Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))}
              </Col>
            </Row>
          )}

          {/* News Grid */}
          <Row>
            {filteredNews
              .filter(article => selectedCategory !== 'all' || !article.featured)
              .map((article, index) => (
                <Col lg={4} md={6} className="mb-4" key={article.id}>
                  <Card 
                    className="team-card h-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div 
                      className="bg-primary"
                      style={{
                        height: '200px',
                        backgroundImage: `linear-gradient(135deg, var(--racing-black), var(--primary-red))`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <i className="bi bi-newspaper text-white" style={{fontSize: '3rem'}}></i>
                    </div>
                    <Card.Body className="team-card-body">
                      <div className="d-flex align-items-center mb-3">
                        <Badge 
                          bg={getCategoryColor(article.category)}
                          className="me-2"
                        >
                          {categories.find(cat => cat.id === article.category)?.name}
                        </Badge>
                        <span className="news-date">{formatDate(article.date)}</span>
                      </div>
                      <h5 className="mb-3">{article.title}</h5>
                      <p className="text-muted mb-4">{article.excerpt}</p>
                      <Button variant="outline-primary" size="sm">
                        Leggi tutto
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-dark-custom text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <h2 className="text-white mb-4">
                  Resta <span className="text-accent">Aggiornato</span>
                </h2>
                <p className="lead mb-4">
                  Iscriviti alla nostra newsletter per ricevere tutte le ultime 
                  notizie dal mondo motorsport e automotive direttamente nella tua email.
                </p>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="input-group input-group-lg">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="La tua email"
                      />
                      <Button variant="primary" type="button">
                        <i className="bi bi-envelope me-2"></i>
                        Iscriviti
                      </Button>
                    </div>
                    <small className="text-muted d-block mt-2">
                      Rispettiamo la tua privacy. Nessuno spam, promesso.
                    </small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Seguici sui <span className="text-primary">Social</span>
              </h2>
              <p className="lead text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                Non perdere i nostri aggiornamenti quotidiani sui social media
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-facebook text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>Facebook</h5>
                <p className="text-muted">Foto e video dalle nostre attività</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-accent rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-instagram text-dark" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>Instagram</h5>
                <p className="text-muted">Stories e contenuti esclusivi</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-youtube text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>YouTube</h5>
                <p className="text-muted">Video tecnici e interviste</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-accent rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-linkedin text-dark" style={{fontSize: '2rem'}}></i>
                </div>
                <h5>LinkedIn</h5>
                <p className="text-muted">Aggiornamenti professionali</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewsMotori;
