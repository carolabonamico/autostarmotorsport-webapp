import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import '../styles/components/Sections.css';
import '../styles/components/Timeline.css';
import '../styles/components/Cards.css';

const Storia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const milestones = [
    {
      year: 'Anni 60',
      title: 'Le Origini',
      description: "Pietro Bonamico inizia la sua attività di preparatore lavorando su Fiat 600, 850, Lancia Fulvia, Alfa Romeo Giulietta e Giulia. L'officina si riempie di pezzi storici, testimonianza di un'epoca eroica dell'automobilismo italiano."
    },
    {
      year: 'Anni 2000',
      title: 'Ritorno alle Competizioni',
      description: "Dall'officina di Pecetto escono Lancia Delta 16v ed HF, Peugeot 106 Rallye, Escort Cosworth, Clio Williams, Alfa 145, Honda Integra e Renault Clio RS, tutte competitive nei rally e nelle gare turismo."
    },
    {
      year: '2004',
      title: 'Sfiorato il Titolo',
      description: "Nel Campionato Italiano Turismo, Autostar sfiora il titolo con Alfa 147, dopo anni di successi con Alfa 155 e 146."
    },
    {
      year: '2006-2012',
      title: 'Clio Cup e Driver’s Trophy',
      description: "Dal 2006 Autostar partecipa alla Clio Cup e dal 2007 al Driver’s Trophy con Lotus Elise. Nel 2012 trionfa nel Super 2000 con Istvan Minach su Renault NewClio RS."
    },
    {
      year: '2017',
      title: 'Successi Europei',
      description: "Emiliano Perucca Orfei vince il Campionato Europeo di Velocità in Salita di Gubbio su Peugeot 308. Raimondo Ricci conquista il campionato TCT su Peugeot 308 Racing Cup."
    },
    {
      year: 'Oggi',
      title: 'Innovazione e Passione',
      description: "L’officina Bonamico continua a evolversi: lavorazioni artigianali, sala prova motori, uso avanzato di telemetria e telematica per risultati sempre più lusinghieri."
    }
  ];

  return (
    <>
      
      {/* Story Content */}
      <section className="section bg-light" id="radici">
        <Container>
          <Row className="d-flex align-items-center" style={{minHeight: '380px'}}>
            <Col lg={7} className="mx-auto order-2 order-lg-1 d-flex flex-column" style={{height: '100%'}}>
              <h2 className="section-title">
                Le Radici di una <span className="text-primary">Passione</span>
              </h2>
              <div className="d-flex flex-column justify-content-center" style={{height: '100%'}} data-aos="fade-up">
                <p className="lead text-center">
                  Pietro Bonamico, padre di Davide e Walter, è una figura storica del motorsport italiano. L’inizio della sua attività di preparatore risale alla prima metà degli anni ’60, con vetture iconiche come Fiat 600, 850, Lancia Fulvia, Alfa Romeo Giulietta e Giulia.
                </p>
                <p className="text-justify">
                  Nella sede Autostar sono ancora presenti numerosi pezzi di preparazione di quell’epoca, memoria viva di una tradizione che si è saputa evolvere nel tempo. La passione per l’innovazione non ha mai oscurato il rispetto per la storia: collezionisti e appassionati trovano qui un vero e proprio museo dell’automobilismo.
                </p>
                <p className="text-justify">
                  Cura, esperienza, meticolosità e passione, unite ad attrezzature di primo ordine, hanno permesso ad Autostar di offrire sempre mezzi al top. La gran parte dei componenti viene lavorata o costruita direttamente dai Bonamico, sia per il motore che per la parte elettronica e la scocca. L’officina dispone di sala prova motori e grill, una struttura mobile che consente di lavorare ogni vettura nella posizione più utile.
                </p>
              </div>
            </Col>
            <Col lg={5} className="mb-4 mb-lg-0 order-1 order-lg-2" data-aos="fade-left">
              <img src="/images/a112.jpg" alt="A112" className="img-fluid rounded shadow" style={{maxHeight: '340px', objectFit: 'cover'}} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section bg-light position-relative overflow-hidden pt-2">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title text-center mb-5" data-aos="fade-up">
                I Nostri <span className="text-primary">Traguardi</span>
              </h2>
            </Col>
          </Row>
          
          {/* Timeline con linea centrale */}
          <div className="timeline-wrapper position-relative">
            <div className="timeline-line position-absolute"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item d-flex align-items-center mb-5 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
              >
                {/* Year Display */}
                <div className={`timeline-year ${index % 2 === 0 ? 'me-4' : 'ms-4'}`}>
                  {milestone.year}
                </div>
                
                {/* Content Card */}
                <div className="timeline-content">
                  <Card className="shadow-lg border-0 h-100">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className={`icon-wrapper bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center`}>
                          <i className="bi bi-trophy-fill text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-0">{milestone.title}</h4>
                      </div>
                      <p className="text-medium-grey lh-lg">{milestone.description}</p>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-light position-relative pt-2">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
                <p className="lead text-center mb-4 fade-up" data-aos="fade-up" data-aos-delay="200">
                  L’impegno di Autostar è quello di coniugare la tradizione artigianale con l’innovazione tecnologica, mantenendo sempre al centro la passione per il motorsport e la cura per ogni dettaglio. La storia continua, guidata dalla stessa energia degli inizi.
                </p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Storia;
