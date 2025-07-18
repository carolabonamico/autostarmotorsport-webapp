import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';
import TeamCard from '../components/Team section/TeamCard';
import CertCard from '../components/Team section/CertCard';

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: 'Davide Bonamico',
      role: 'Titolare',
      experience: '25+ anni',
      description: 'Titolare di Autostar Motorsport, esperto in preparazioni da competizione e gestione team durante le gare.',
      icon: 'person-badge'
    },
    {
      name: 'Pietro Bonamico',
      role: 'Fondatore',
      experience: '60+ anni',
      description: 'Fondatore di Autostar Motorsport, ha iniziato la sua carriera negli anni \'60 come preparatore di auto ormai storiche. Ha una vasta esperienza nelle competizioni e nella preparazione di veicoli da corsa.',
      icon: 'person-badge'
    },
  ];

  return (
    <div>
      <HeroSection 
        title="Il nostro"
        highlight="team"
        subtitle="Professionisti appassionati al servizio dell'eccellenza"
      />

      {/* Team Introduction */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <h2 className="section-title">
                  Esperienza e Competenza
                </h2>
                <p className="lead">
                  Il nostro team è composto da professionisti altamente qualificati.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Members */}
      <section className="section bg-light pt-2">
        <Container>
          <Row className="justify-content-center">
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} className="mb-5" key={index}>
                <TeamCard member={member} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Values */}
      <section className="section bg-dark-custom text-white">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center text-white mb-5" data-aos="fade-up">
                Cosa Ci <span className="text-accent">Distingue</span>
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={5} md={8} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-person-badge-fill text-primary" style={{fontSize: '3rem'}}></i>
                <h4 className="text-white mt-3 mb-3">Tradizione e Continuità</h4>
                <p>
                  L'azienda è guidata oggi da Davide Bonamico, titolare, che porta avanti la passione e la competenza maturate in decenni di esperienza, sempre affiancato dai preziosi consigli del papà Pietro, fondatore e memoria storica di Autostar Motorsport.
                </p>
              </div>
            </Col>
            <Col lg={5} md={8} className="mb-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-lightbulb-fill text-accent" style={{fontSize: '3rem'}}></i>
                <h4 className="text-white mt-3 mb-3">Innovazione e Passione</h4>
                <p>
                  Uniamo la tradizione artigianale e la storia di famiglia con l'innovazione tecnica e la voglia di migliorare ogni giorno, offrendo ai nostri clienti soluzioni su misura e un servizio sempre attento e personale.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section" id="certificazioni-qualifiche">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Certificazioni e <span className="text-primary">Qualifiche</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="lead text-center mb-5">
                  Il nostro team mantiene costantemente aggiornate le proprie 
                  competenze attraverso formazione continua e certificazioni ufficiali.
                </p>
                <CertCard />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;
