import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import '../styles/components/Sections.css';
import '../styles/components/Cards.css';
import '../styles/components/Timeline.css';
import TeamCard from '../components/Team section/TeamCard';
import CertCard from '../components/Team section/CertCard';
import ValueCard from '../components/Team section/ValueCard';
import { certifications, teamMembers } from '../data/team';
import SectionHeader from '../components/SectionHeader';

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>

      {/* Team members */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Esperienza e" lastword="Competenza" subtitle="Il nostro team è composto da professionisti altamente qualificati." />
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} key={index}>
                <TeamCard member={member} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Values */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="I Nostri" lastword="Valori" subtitle="Passione, competenza e attenzione al cliente sono i pilastri su cui costruiamo ogni giorno il nostro lavoro." />
            </Col>
          </Row>
          
          <Row>
            <Col lg={12}>
              <ValueCard 
                icon="person-badge-fill"
                title="Tradizione e Continuità"
                description="L'azienda è guidata oggi da Davide Bonamico, titolare, che porta avanti la passione e la competenza maturate in decenni di esperienza, sempre affiancato dai preziosi consigli del papà Pietro, fondatore e memoria storica di Autostar Motorsport."
                alignment="left"
                delay={100}
              />
              
              <ValueCard 
                icon="lightbulb-fill"
                title="Innovazione e Passione"
                description="Uniamo la tradizione artigianale e la storia di famiglia con l'innovazione tecnica e la voglia di migliorare ogni giorno, offrendo ai nostri clienti soluzioni su misura e un servizio sempre attento e personale."
                alignment="right"
                delay={200}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section pt-5" id="certificazioni-qualifiche">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Certificazioni e" lastword="Qualifiche" subtitle="Autostar Motorsport vanta certificazioni e qualifiche che attestano competenza e professionalità nel settore." />
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            {[...certifications]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((cert, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <CertCard cert={cert} delay={index * 100} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
