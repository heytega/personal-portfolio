import React from 'react';
import PageTag from './PageTag';
import Style from './Services.module.css';

const Services = () => {
  return (
    <section className={Style.servicesContainer} id='services'>
      <PageTag tag='services' icon='fa-bars-staggered' />
    </section>
  );
};

export default Services;
