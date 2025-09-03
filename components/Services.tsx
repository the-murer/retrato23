import React from 'react';
import WeddingCard from './WeddingCard';

const Services: React.FC = () => (
  <section className="services-section">
    <h2>Nossos Serviços</h2>
    <div className="services-list">
      {/* Outros cartões de serviço existentes */}
      <WeddingCard />
    </div>
  </section>
);

export default Services;
