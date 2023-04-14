import React from 'react';
import PageTag from './PageTag';
import Style from './About.module.css';

const About = () => {
  return (
    <section className={Style.aboutContainer} id='about'>
      <PageTag tag='about' icon='fa-user' />
      <h1 className={Style.header}>
        Every great development begin with an even{' '}
        <span className={Style.green}>better story</span>
      </h1>
      <p className={Style.p}>
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </p>
    </section>
  );
};

export default About;
