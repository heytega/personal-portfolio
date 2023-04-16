import React from 'react';
import PageTag from './PageTag';
import Style from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={Style.portfolioContainer} id='portfolio'>
      <PageTag tag='portfolio' icon='fa-rectangle-list' />
      <h1 className={Style.header}>
        Featured <span>Projects</span>
      </h1>
    </section>
  );
};

export default Portfolio;
