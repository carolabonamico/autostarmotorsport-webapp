import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import '../styles/components/Sections.css';
import '../styles/components/Timeline.css';
import '../styles/components/Cards.css';
import { milestones } from '../data/storia';
import SectionHeader from '../components/SectionHeader';

const Storia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      
      {/* Story Content */}
      <section className="section" id="radici">
        <Container>

          <Row>
            <Col>
              <SectionHeader title="Le Radici di una" lastword="Passione" subtitle="Fondata da Pietro Bonamico negli anni '60, Autostar Motorsport è cresciuta grazie alla dedizione e alla passione per il motorsport, tramandata di generazione in generazione." />
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="/images/a112.jpg" alt="A112" className="shadow mb-5" style={{maxHeight: '340px', objectFit: 'cover'}} />
            </Col>
            <Col lg={12}>
              <p className='text-justify'>
                Pietro Bonamico, padre di Davide e Walter, è una figura storica del motorsport italiano. L’inizio della sua attività di preparatore risale alla prima metà degli anni ’60, con vetture iconiche come Fiat 600, 850, Lancia Fulvia, Alfa Romeo Giulietta e Giulia.<br />
                Nella sede Autostar sono ancora presenti numerosi pezzi di preparazione di quell’epoca, memoria viva di una tradizione che si è saputa evolvere nel tempo. La passione per l’innovazione non ha mai oscurato il rispetto per la storia: collezionisti e appassionati trovano qui un vero e proprio museo dell’automobilismo.<br />
                Cura, esperienza, meticolosità e passione, unite ad attrezzature di primo ordine, hanno permesso ad Autostar di offrire sempre mezzi al top. La gran parte dei componenti viene lavorata o costruita direttamente dai Bonamico, sia per il motore che per la parte elettronica e la scocca. L’officina dispone di sala prova motori e grill, una struttura mobile che consente di lavorare ogni vettura nella posizione più utile.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section" id="traguardi">
        <Container>
          <Row>
            <SectionHeader title="Traguardi e" lastword="Successi" subtitle="Dagli anni '60 a oggi, Autostar Motorsport ha collezionato numerosi successi in varie competizioni, dimostrando la propria eccellenza tecnica e la passione per il motorsport." />
          </Row>
          
          {/* Timeline with */}
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
                  <Card className="shadow-lg h-100">
                    <Card.Body>
                      <div className="text-center mb-3">
                        <h4 className="mb-0">{milestone.title}</h4>
                      </div>
                      <p className='text-center'>{milestone.description}</p>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
};

export default Storia;
