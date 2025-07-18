import { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';

const Preparazioni = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      id: 'motorsport',
      icon: 'speedometer2',
      title: 'Motorsport',
      description: 'Assistenza tecnica completa in pista per competizioni automobilistiche',
      features: [
        'Assistenza durante le gare',
        'Preparazione veicoli da competizione',
        'Ottimizzazione setup',
        'Analisi telemetria',
        'Supporto tecnico 24/7'
      ],
    },
    {
      id: 'tagliandi-auto',
      icon: 'wrench',
      title: 'Tagliandi Auto',
      description: 'Manutenzione ordinaria e straordinaria con ricambi originali',
      features: [
        'Tagliandi secondo casa madre',
        'Ricambi originali certificati',
        'Controlli preventivi completi',
        'Promemoria scadenze'
      ],
      text: 'Si effettua il tagliando auto per qualsiasi tipo di veicolo, controllando attentamente tutte le componenti del motore.Il tagliando auto è un controllo periodico dei mezzi motorizzati, che ha lo scopo di controllare tutte le parti del motore soggette al normale deterioramento: pastiglie dei freni, sospensioni, pneumatici, luci, marmitta, filtri, cinghia, acqua, oli, fluidi, climatizzatore e altri. Effettuare il tagliando auto non è obbligatorio come per la revisione; tuttavia, un periodico tagliando della vostra automobile vi garantisce una guida in completa sicurezza, oltre che un risparmio sui costi di riparazione futuri. Il tagliando periodico regala lunga vita alla vostra automobile ed elimina i pericoli dovuti all\'eventuale rottura di parti usurate. Si tratta di una pratica consigliata soprattutto per le automobili fuori garanzia. Il tagliando è un\'operazione particolarmente delicata, per la quale è consigliabile affidarsi a un professionista anziché al fai da te. Per questo motivo, per il vostro tagliando auto vi consigliamo di contattare Autostar Motorsport. Essendo un\'officina indipendente, ma regolarmente iscritta all\'albo degli autoriparatori, possiamo garantirvi costi più bassi rispetto alle officine autorizzate, nonché dei tempi molto più brevi. Il tagliando auto non ha una scadenza regolare. Tutte le case automobilistiche consigliano, nei rispettivi libretti di manutenzione, le tempistiche da seguire per il proprio mezzo. Ma questa cadenza varia anche in base all\'intensità di utilizzo della propria automobile, e può essere calcolata in base al numero di chilometri percorsi, al tempo di utilizzo e ad altri parametri specifici. Se necessitate di una consulenza sull\'eventualità o meno di effettuare un tagliando auto, saremo felici di rispondere telefonicamente alle vostre richieste.'
    },
    {
      id: 'cambio-gomme',
      icon: 'circle',
      title: 'Cambio Gomme',
      description: 'Servizio professionale di montaggio e bilanciatura pneumatici',
      features: [
        'Montaggio e smontaggio',
        'Bilanciatura elettronica',
        'Controllo geometrie',
        'Deposito stagionale',
        'Pneumatici racing'
      ],
      text: 'Ogni anno, a ridosso di novembre, scatta l\'obbligo di avere le catene a bordo oppure le gomme invernali, per non incorrere in una sanzione. Autostar Motorsport si può occupare di questa semplice operazione, ma proprio perché tutti tendono a concentrarsi in un breve periodo dell\'anno, ti consigliamo di chiamarci e prendere un appuntamento in modo da evitare di attendere troppi giorni. Naturalmente, possiamo occuparci anche dello smontaggio delle tue gomme invernali per sostituirle con quelle estive. In questo caso, il riferimento temporale è solitamente il passaggio all\'ora legale, che avviene a ridosso della primavera.'
    },
    {
      id: 'elettrauto',
      icon: 'lightning-charge',
      title: 'Elettrauto',
      description: 'Diagnosi e riparazione sistemi elettrici ed elettronici',
      features: [
        'Diagnosi multimarca',
        'Riparazione centraline',
        'Riparazione e/o sostituzione sistema di accensione',
        'Riparazione e/o sostituzione regolatori di tensione',
        'Ispezione e misurazione impianti elettrici'
      ],
      text: 'Autostar Motorsport è anche elettrauto, e può risolvere qualsiasi problema di natura elettronica della vostra auto. Se avete bisogno di un elettrauto, potete recarvi nella nostra officina per contare su un servizio altamente specializzato e professionale: usiamo computer e attrezzature di ultima generazione per monitorare i mezzi dei nostri clienti e risolvere i loro problemi in breve tempo. Individuazione guasti elettronici.'
    },
    {
      id: 'meccatronica',
      icon: 'cpu',
      title: 'Meccatronica',
      description: 'Specialisti in sistemi meccatronici e controllo motore',
      features: [
        'Mappature ECU',
        'Riprogrammazione centraline',
        'Sistemi iniezione',
        'Controllo emissioni',
        'Ottimizzazione prestazioni'
      ],
      text: 'Possiamo risolvere qualsiasi problema meccanico, elettronico ed elettrico del vostro mezzo a quattro ruote. La nostra esperienza pluricinquantennale garantisce un servizio di alta qualità per ogni tipo di automobile, dalle utilitarie ai suv, dalle berline ai fuoristrada. Per le riparazioni meccaniche delle vostre automobili utilizziamo attrezzature di ultima generazione che ci permettono di individuare e risolvere il problema in pochissimo tempo.'
    },
    {
      id: 'auto-elettriche',
      icon: 'battery-charging',
      title: 'Auto Elettriche',
      description: 'Manutenzione e riparazione veicoli elettrici e ibridi',
      features: [
        'Diagnosi batterie HV',
        'Manutenzione motori elettrici',
        'Sistemi di ricarica',
        'Inverter e convertitori',
        'Aggiornamenti software'
      ],
      text: 'Mettiamo a vostra disposizione consulenza affidabile e completa in grado di offrire un intero ventaglio di servizi dedicati alle esigenze dei nuovi veicoli elettrici. Offriamo assistenza e riparazione ai veicoli elettrici con l\'esperienza che ci contraddistingue da sempre, in questo caso maturata anche in ambito motorsport. Garantiamo la massima professionalità e completezza degli interventi elettronici. Eseguiamo lavorazioni di manutenzione ordinaria, straordinaria, servizio pneumatici, vetri e ogni tipo di riparazione. Nulla al caso perché facciamo la diagnosi analitica e computerizzata su ogni veicolo, l\'unica capace di identificare con precisione la tipologia di guasto e che permette l\'intervento mirato. Siamo un\'azienda con attestato PEI e PES/PAV per interventi in sicurezza su auto ibride ed elettriche.',
    },
    {
      id: 'pre-revisione',
      icon: 'clipboard-check',
      title: 'Pre-Revisione',
      description: 'Controlli preventivi per superare la revisione ministeriale',
      features: [
        'Controllo completo veicolo',
        'Verifica emissioni',
        'Test sistemi sicurezza',
        'Controllo luci e segnalazioni',
        'Documentazione completa'
      ],
      text: 'La pre-revisione dell’auto è un controllo preventivo dell’automobile quando si avvicina il momento della revisione. La pre-revisione non è obbligatoria come la revisione; tuttavia è una pratica consigliata per evitare che la revisione diventi una perdita di tempo o, peggio ancora, una brutta sorpresa. Effettuando una pre-revisione, infatti, l’auto gode di un completo check-up che può prevenire eventuali contestazioni all’automobilista. Portandoci la vostra auto, potremo controllare tutte le parti legate alla sicurezza e ai gas di scarico, in modo da garantirvi il buon esito delle operazioni di revisione. Se la revisione è obbligatoria ogni due anni, la pre-revisione è altamente consigliata per il medesimo periodo di tempo.'
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Le nostre"
        highlight="preparazioni"
        subtitle="Servizi automotive di eccellenza per ogni esigenza"
      >
        <div className="mt-5">
          <h3 className="text-white mb-4">
            Hai Bisogno di Assistenza?
          </h3>
          <p className="lead mb-4 text-white-75">
            Contattaci per una consulenza gratuita o per prenotare 
            un appuntamento nel nostro centro specializzato.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button 
              as={Link} 
              to="/contatti" 
              variant="outline-light"
              size="lg"
              className="px-4"
            >
              <i className="bi bi-telephone me-2"></i>
              Prenota Appuntamento
            </Button>
            <Button 
              as={Link} 
              to="/preventivo" 
              variant="outline-light"
              size="lg"
              className="px-4"
            >
              <i className="bi bi-calculator me-2"></i>
              Richiedi Preventivo
            </Button>
          </div>
        </div>
      </HeroSection>

      {/* Services Grid */}
      <section className="section" id="nostri-servizi">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                I Nostri <span className="text-primary">Servizi</span>
              </h2>
              <p className="lead text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                Dalla manutenzione ordinaria all'assistenza motorsport, 
                offriamo soluzioni complete per ogni tipo di veicolo.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  id={service.id}
                  className="service-item py-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="d-flex align-items-start">
                    <div 
                      className={`d-flex align-items-center justify-content-center me-4`}
                      style={{width: '80px', height: '80px', minWidth: '80px'}}
                    >
                      <i className={`bi bi-${service.icon}`} style={{fontSize: '2.2rem'}}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="mb-3 fw-semibold">{service.title}</h3>
                      <p className="fs-5 text-muted mb-4 lh-lg">{service.description}</p>
                      <div className="service-features">
                        <div className="row g-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="col-lg-6">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-arrow-right text-primary me-3" style={{fontSize: '1.2rem'}}></i>
                                <span className="text-dark">{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {service.text && (
                        <div className="mt-4 text-justify">
                          <p>{service.text}</p>
                        </div>
                      )}
                      { service.id === 'auto-elettriche' && (
                        <div className="mt-3">
                            <Button 
                                as={Link} 
                                to="/team#certificazioni-qualifiche"
                                variant="dark"
                                size="sm"
                            >
                                <i className="bi bi-award me-1"></i>
                                Scopri tutte le certificazioni
                            </Button>
                        </div>
                    )}
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <hr className="my-4" style={{opacity: '0.6', border: 'none', height: '1px', backgroundColor: '#666666'}} />
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Preparazioni;
