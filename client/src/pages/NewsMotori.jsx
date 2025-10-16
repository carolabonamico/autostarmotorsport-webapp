import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import { newsArticles, categories } from '../data/news';
import NewsCard from '../components/NewsCard';
import SectionHeader from '../components/SectionHeader';

const NewsMotori = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sortedArticles = [...newsArticles].sort((a,b) => new Date(b.date) - new Date(a.date));

  const filteredNews = selectedCategory === 'all'
    ? sortedArticles
    : sortedArticles.filter(article => article.category === selectedCategory);

  return (
    <>

      {/* Category Filter */}
      <section className="section">
        <Container>
          <Row>
            <Col>
              <SectionHeader title="Notizie dal" lastword="Mondo Motori" subtitle="Rimani aggiornato con le ultime novità, eventi e approfondimenti dal mondo dei motori." />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="d-flex justify-content-center flex-wrap gap-2 mt-4" data-aos="fade-up">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'red' : 'outline-secondary'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="mb-2"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Featured Article */}
          {selectedCategory === 'all' && (
            <Row className="mt-5 mb-4">
              <Col lg={4} md={6}>
                {filteredNews
                  .filter(article => article.featured)
                  .slice(0, 1)
                  .map((article) => (
                    <NewsCard key={article.date + article.title} article={article} />
                  ))}
              </Col>
            </Row>
          )}

          {/* News Grid */}
          <Row className={selectedCategory === 'all' ? '' : 'mt-5'}>
            {filteredNews
              .filter(article => selectedCategory !== 'all' || !article.featured)
              .map((article, index) => (
                <Col lg={4} md={6} className="mb-4" key={article.date + article.title}>
                  <NewsCard article={article} delay={index * 100} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>

    </>
  );
};

export default NewsMotori;
