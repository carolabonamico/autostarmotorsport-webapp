import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { newsArticles } from '../data/news';
import NewsCard from '../components/NewsCard';

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

  // Articles imported from data/news.js

  const sortedArticles = [...newsArticles].sort((a,b) => new Date(b.date) - new Date(a.date));

  const filteredNews = selectedCategory === 'all'
    ? sortedArticles
    : sortedArticles.filter(article => article.category === selectedCategory);

  return (
    <>

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
                    <NewsCard key={article.id} article={article} />
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
                  <NewsCard article={article} delay={index * 100} compact />
                </Col>
              ))}
          </Row>
        </Container>
      </section>

    </>
  );
};

export default NewsMotori;
