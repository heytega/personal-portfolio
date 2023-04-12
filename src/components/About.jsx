import React from 'react';
import PageTag from './PageTag';
import Style from './About.module.css';

const About = () => {
  return (
    <section className={Style.aboutContainer} id='about'>
      <PageTag tag='about' icon='fa-user' />
    </section>
  );
};

export default About;
